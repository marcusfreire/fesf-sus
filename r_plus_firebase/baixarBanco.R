if (!require("devtools")) install.packages("devtools")
if (!require("fireData")) devtools::install_github("Kohze/fireData")
if (!require("googleVis")) devtools::install_github("googleVis")


#Download do Banco sem a autenticação, teste!
bancoFesf_sus = download(projectURL = "https://fesf-sus.firebaseio.com/", fileName = "/coletas")

cidadesFesf_sus = download(projectURL = "https://fesf-sus.firebaseio.com/", fileName = "/cidades")

#Quantidade de coletas
#tamanho <- length(bancoFesf_sus)

#Leitura
#bancoFesf_sus[[1]]

#Variaveis para adicionar os dados do banco FireBase Como Matriz
coletasINT = matrix(nrow=length(bancoFesf_sus),ncol=(length(bancoFesf_sus[[1]])-2))
coletasCIDADE = c()
coletasDATA = c()

#Adicionando os dados na matriz
for (i in 1:length(bancoFesf_sus)){
  coletasDATA[i] = bancoFesf_sus[[i]][["data"]]
  coletasCIDADE[i] = bancoFesf_sus[[i]][["cidade"]]
  for (j in 1:(length(bancoFesf_sus[[1]])-2)){
    coletasINT[i,j]=as.integer(bancoFesf_sus[[i]][[j]])
  }
}

#Convertendo para o formato Data(date), e factor
data = as.Date(coletasDATA)
coletasCIDADE=as.factor(coletasCIDADE)

#Adicionando os nomes das colunas dos Inteiros
colnames(coletasINT) <- names(bancoFesf_sus[[1]])[1:35]

#Criando para dataFrame
coletasFESF=data.frame(data,coletasCIDADE,coletasINT)
#Verificando o dataFrame

############################# Cidades add
#Cidades contidas no Firebase
cidades = c()
latitude = c()
longitude = c()


#Adicionando os dados na matriz
for (i in 1:length(cidadesFesf_sus)){
  cidades[i] = cidadesFesf_sus[[i]]$nome
  latitude[i] = cidadesFesf_sus[[i]]$latitude
  longitude[i] = cidadesFesf_sus[[i]]$longitude
}

#Convertendo para factor
cidades=as.factor(cidades)

#Frequência das coletas
freq = rep.int(0,length(cidades))
freqCidades=data.frame(cidades,freq)
coletasfreq = table(coletasFESF$coletasCIDADE)
nomes = labels(coletasfreq)
for (i in 1:length(coletasfreq)){
  freqCidades[which(cidades==nomes[[1]][i]),2] = coletasfreq[[i]] 
}

cidadesFESF=data.frame(cidades,latitude,longitude,freq = freqCidades$freq)

#Soma de todos os indicadores

s = colSums(subset(coletasFESF[,3:37],coletasCIDADE==levels(cidades)[1]))
soma = data.frame(names(s))
for (i in 1:length(cidades)){
  s = colSums(subset(coletasFESF[,3:37],coletasCIDADE==levels(cidades)[i]))
  soma = cbind(soma,s)
}
colnames(soma)=c("Indicadores",levels(cidades))
#Anotação
desc = c("Número de gestantes com data provável do parto para o perı́odo atual que são mães solteiras","Número de gestantes com data provável do parto para o perı́odo atual que têm quatro ou mais filhos",
        "Número de gestantes com data provável do parto para o perı́odo atual que perdeu algum filho com idade menor ou igual a um ano", 
        "Número de gestantes com data provável do parto para o perı́odo atual que possuem uma renda familiar menor ou igual a um salário mı́nimo",
        "Número de gestantes com data provável do parto para o perı́odo atual que apresentam quadro de desnutrição ou tem algum filho desnutrido",
        "Número de gestantes analfabetas com data provável do parto para o perı́odo atual")
#Subset para a cidade de Salvador
#subset.data.frame(coletasFESF,coletasFESF$coletasCIDADE=="Salvador")
# teste com o banco fesf-sus.csv
#Preparando os dados para visualização
cidadesFESF$latlon = paste(latitude,":",longitude,sep="")
cidadesFESF$rotulo = paste("Cidade: ",cidades," - ","Coletas: ",cidadesFESF$freq,sep="")

Map <- gvisMap(cidadesFESF,locationvar="latlon",tipvar="rotulo",
      options=list(showTip=TRUE,showLine=TRUE,enableScrollWheel=TRUE,mapType='normal'
      ,useMapTypeControl=TRUE,width="350px",height="450px"))
plot(Map)

# Outro exemplo de tabela, descomente para visualizar
#tbl = c(cidadesFESF$cidades,cidadesFESF$freq)
#tabela <- gvisTable(cidadesFESF, options=list(page='enable',
#          height='automatic', width='automatic'))
#plot(tabela)

tbl = data.frame(cidadesFESF$cidades,cidadesFESF$freq)
colnames(tbl) = c("Cidades","Nº de Coletas")
tabela2 <- gvisTable(tbl)
#Opção de juntas os Gvis
fesfVis <- gvisMerge(Map, tabela2,horizontal=TRUE)
plot(fesfVis)
#TabelaSoma
tabela2 <- gvisTable(soma[1:6,])
plot(tabela2)