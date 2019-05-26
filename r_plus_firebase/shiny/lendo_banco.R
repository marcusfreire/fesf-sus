# Carregando os dados do Banco
bancoFesf_sus = download(projectURL = "https://fesf-sus.firebaseio.com/", fileName = "/coletas")

cidadesFesf_sus = download(projectURL = "https://fesf-sus.firebaseio.com/", fileName = "/cidades")

#Quantidade de coletas
#tamanho <- length(bancoFesf_sus)

#Leitura
#bancoFesf_sus[[1]]

#Variaveis para adicionar os dados do banco FireBase Como Matriz
# 5 seria o numero de variaves extra
coletasINT = matrix(nrow=length(bancoFesf_sus),ncol=(length(bancoFesf_sus[[1]])-6))
coletasCIDADE = c()
coletasDATA = c()
coletasValidar = c()
coletasComentario = c()
coletasModificacao = c()

#Adicionando os dados na matriz
for (i in 1:length(bancoFesf_sus)){
  coletasDATA[i] = bancoFesf_sus[[i]][["data"]]
  coletasCIDADE[i] = bancoFesf_sus[[i]][["cidade"]]
  coletasValidar[i] = bancoFesf_sus[[i]][["validar"]]
  coletasComentario[i] = bancoFesf_sus[[i]][["comentario"]]
  coletasModificacao[i] = bancoFesf_sus[[i]][["user"]]
  for (j in 1:(length(bancoFesf_sus[[1]])-6)){
    coletasINT[i,j]=as.integer(bancoFesf_sus[[i]][[j]])
  }
}

#Convertendo para o formato Data(date), e factor
data = as.Date(coletasDATA)
coletasCIDADE=as.factor(coletasCIDADE)
#Adicionando os nomes das colunas dos Inteiros
colnames(coletasINT) <- names(bancoFesf_sus[[1]])[1:32]

#Criando para dataFrame
coletasFESF=data.frame(Data = data, Cidade = coletasCIDADE,coletasINT,Validar = coletasValidar, User = coletasModificacao,Comentario = coletasComentario)
#Verificando o dataFrame

rm(coletasCIDADE,coletasComentario,coletasDATA,coletasModificacao,coletasValidar,coletasINT,data,i,j)
############################# Cidades add
#Cidades contidas no Firebase
#Função para calc freq das cidades
calc_freq_cidade = function(coletasFESF){
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
  coletasfreq = table(coletasFESF$Cidade)
  nomes = labels(coletasfreq)
  for (i in 1:length(coletasfreq)){
    freqCidades[which(cidades==nomes[[1]][i]),2] = coletasfreq[[i]]
  }
  
  cidadesFESF=data.frame(cidades,latitude,longitude,freq = freqCidades$freq)
  cidadesFESF$longitude= as.numeric(as.character(cidadesFESF$longitude))
  cidadesFESF$latitude= as.numeric(as.character(cidadesFESF$latitude))
  
  #Preparando os dados para visualização
  #cidadesFESF$latlon = paste(latitude,":",longitude,sep="")
  cidadesFESF$rotulo = paste("Cidade: ",cidades," - ","Coletas: ",cidadesFESF$freq,sep="")
  cidadesFESF
}
cidadesFESF = calc_freq_cidade(coletasFESF)

#Soma de todos os indicadores
calc_soma_inidcadores = function(coletasFESF){
  s = colSums(subset(coletasFESF[,3:34],coletasFESF$Cidade==levels(cidadesFESF$cidades)[1]))
  soma = data.frame(names(s))
  for (i in 1:length(cidadesFESF$cidades)){
    s = colSums(subset(coletasFESF[,3:34],coletasFESF$Cidade==levels(cidadesFESF$cidades)[i]))
    soma = cbind(soma,s)
  }
  colnames(soma)=c("Indicadores",levels(cidadesFESF$cidades))
  soma
}
soma = calc_soma_inidcadores(coletasFESF) 

