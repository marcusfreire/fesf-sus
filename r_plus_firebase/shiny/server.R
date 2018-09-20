function(input, output, session) {
  # Carregando os dados do Banco
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

  #Subset para a cidade de Salvador
  #subset.data.frame(coletasFESF,coletasFESF$coletasCIDADE=="Salvador")
  # teste com o banco fesf-sus.csv
  #Preparando os dados para visualização
  cidadesFESF$latlon = paste(latitude,":",longitude,sep="")
  cidadesFESF$rotulo = paste("Cidade: ",cidades," - ","Coletas: ",cidadesFESF$freq,sep="")
  #Soma de todos os indicadores

  s = colSums(subset(coletasFESF[,3:37],coletasCIDADE==levels(cidades)[1]))
  soma = data.frame(names(s))
  for (i in 1:length(cidades)){
    s = colSums(subset(coletasFESF[,3:37],coletasCIDADE==levels(cidades)[i]))
    soma = cbind(soma,s)
  }
  s = rowSums(soma[,2:length(cidades)+1])
  soma = cbind(soma,s)
  colnames(soma)=c("Indicadores",levels(cidades),"Total")

  output$maps <- renderGvis({
  Map <- gvisMap(cidadesFESF,locationvar="latlon",tipvar="rotulo",
      options=list(showTip=TRUE,showLine=TRUE,enableScrollWheel=TRUE,mapType='normal'
      ,useMapTypeControl=TRUE,width="450px",height="550px"))
      tbl = data.frame(cidadesFESF$cidades,cidadesFESF$freq)
  colnames(tbl) = c("Cidades","Nº de Coletas")
  tabela2 <- gvisTable(tbl)
  #Opção de juntas os Gvis
  gvisMerge(Map, tabela2,horizontal=TRUE)
  })
  num = ceiling(ncol(soma)/2)+2
  output$socio <- renderGvis({
    gvisTable(soma[1:6,1:num])
  })
  output$socio2 <- renderGvis({
    gvisTable(soma[1:6,c(1,(num+1):ncol(soma))])
  })

  output$pre <- renderGvis({
    gvisTable(soma[7:14,1:num])
  })
  output$pre2 <- renderGvis({
    gvisTable(soma[7:14,c(1,(num+1):ncol(soma))])
  })

  output$parto <- renderGvis({
    gvisTable(soma[15:20,1:num])
  })
  output$parto2 <- renderGvis({
    gvisTable(soma[15:20,c(1,(num+1):ncol(soma))])
  })

  output$inter <- renderGvis({
    gvisTable(soma[21:22,1:num])
  })
  output$inter2 <- renderGvis({
    gvisTable(soma[21:22,c(1,(num+1):ncol(soma))])
  })

  output$praticas <- renderGvis({
    gvisTable(soma[23:30,1:num])
  })
  output$praticas2 <- renderGvis({
    gvisTable(soma[23:30,c(1,(num+1):ncol(soma))])
  })

  output$puerp <- renderGvis({
    gvisTable(soma[31:35,1:num])
  })
  output$puerp2 <- renderGvis({
    gvisTable(soma[31:35,c(1,(num+1):ncol(soma))])
  })

}
