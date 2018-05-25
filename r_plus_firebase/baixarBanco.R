if (!require("devtools")) install.packages("devtools")
if (!require("fireData")) devtools::install_github("Kohze/fireData")
if (!require("googleVis")) devtools::install_github("googleVis")


#Download do Banco sem a autenticação, teste!
bancoFesf_sus = download(projectURL = "https://fesf-sus.firebaseio.com/", fileName = "/coletas")

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
cidade=as.factor(coletasCIDADE)

#Adicionando os nomes das colunas dos Inteiros
colnames(coletasINT) <- names(bancoFesf_sus[[1]])[1:35]

#Criando para dataFrame
coletasFESF=data.frame(data,cidade,coletasINT)
#Verificando o dataFrame

#Subset para a cidade de Salvador
#subset.data.frame(coletasFESF,coletasFESF$coletasCIDADE=="Salvador")
# teste com o banco fesf-sus.csv
fesf = read.csv("fesf-sus.csv",header=T)
fesf$latlon = paste(fesf$Lat,":",fesf$Long,sep="")
fesf$rotulo = paste("Cidade: ",fesf$Cidades," - ","Coletas: ",fesf$Freq,sep="")

Map <- gvisMap(fesf,locationvar="latlon",tipvar="rotulo",
      options=list(showTip=TRUE,showLine=TRUE,enableScrollWheel=TRUE,mapType='normal'
      ,useMapTypeControl=TRUE,width="350px",height="450px"))
plot(Map)

tbl = c(fesf$Cidades,fesf$Freq)
tabela <- gvisTable(fesf, options=list(page='enable',
          height='automatic', width='automatic'))
plot(tabela)

tbl = data.frame(fesf$Cidades,fesf$Freq)
colnames(tbl) = c("Cidades","Coletas")
tabela2 <- gvisTable(tbl)
#Opção de juntas os Gvis
fesfVis <- gvisMerge(Map, tabela2,horizontal=TRUE)
plot(fesfVis)
