function(input, output, session) {
  
  source('lendo_banco.R')
  
  busca = data.frame(Data = coletasFESF$Data,Cidade = coletasFESF$Cidade,Validar = coletasFESF$Validar, User = coletasFESF$User,Comentario = coletasFESF$Comentario)
  #Tabela para coleta dos dados
  output$my_table  <- renderDataTable({
    # Filter the data
    busca %>% filter(Data >= input$dateRange[1] & Data <= input$dateRange[2])
  })
  

  output$mymap <- renderLeaflet({
    cidadesFESF = calc_freq_cidade(coletasFESF %>% filter(Data >= input$dateRange[1] & Data <= input$dateRange[2]))
    leaflet() %>%
    addTiles() %>%  # Add default OpenStreetMap map tiles
    addMarkers(lng =cidadesFESF$longitude , lat =cidadesFESF$latitude, popup=cidadesFESF$rotulo)
  })
  output$tbl <- renderGvis({
  cidadesFESF = calc_freq_cidade(coletasFESF %>% filter(Data >= input$dateRange[1] & Data <= input$dateRange[2]))
  tbl = data.frame(cidadesFESF$cidades,cidadesFESF$freq)
  colnames(tbl) = c("Cidades","Nº de Coletas")
  tabela2 <- gvisTable(tbl)
  #Opção de juntas os Gvis
  #gvisMerge(Map, tabela2,horizontal=TRUE)
  })
  num = ceiling(ncol(soma)/2)+2
  output$socio <- renderGvis({
    soma = calc_soma_inidcadores(coletasFESF %>% filter(Data >= input$dateRange[1] & Data <= input$dateRange[2]))
    gvisTable(soma[1:6,1:num])
  })
  output$socio2 <- renderGvis({
    soma = calc_soma_inidcadores(coletasFESF %>% filter(Data >= input$dateRange[1] & Data <= input$dateRange[2]))
    gvisTable(soma[1:6,c(1,(num+1):ncol(soma))])
  })

  output$pre <- renderGvis({
    soma = calc_soma_inidcadores(coletasFESF %>% filter(Data >= input$dateRange[1] & Data <= input$dateRange[2]))
    gvisTable(soma[7:13,1:num])
  })
  output$pre2 <- renderGvis({
    soma = calc_soma_inidcadores(coletasFESF %>% filter(Data >= input$dateRange[1] & Data <= input$dateRange[2]))
    gvisTable(soma[7:13,c(1,(num+1):ncol(soma))])
  })

  output$parto <- renderGvis({
    soma = calc_soma_inidcadores(coletasFESF %>% filter(Data >= input$dateRange[1] & Data <= input$dateRange[2]))
    gvisTable(soma[14:19,1:num])
  })
  output$parto2 <- renderGvis({
    soma = calc_soma_inidcadores(coletasFESF %>% filter(Data >= input$dateRange[1] & Data <= input$dateRange[2]))
    gvisTable(soma[14:19,c(1,(num+1):ncol(soma))])
  })

  output$inter <- renderGvis({
    soma = calc_soma_inidcadores(coletasFESF %>% filter(Data >= input$dateRange[1] & Data <= input$dateRange[2]))
    gvisTable(soma[20:21,1:num])
  })
  output$inter2 <- renderGvis({
    soma = calc_soma_inidcadores(coletasFESF %>% filter(Data >= input$dateRange[1] & Data <= input$dateRange[2]))
    gvisTable(soma[20:21,c(1,(num+1):ncol(soma))])
  })

  output$praticas <- renderGvis({
    soma = calc_soma_inidcadores(coletasFESF %>% filter(Data >= input$dateRange[1] & Data <= input$dateRange[2]))
    gvisTable(soma[22:29,1:num])
  })
  output$praticas2 <- renderGvis({
    soma = calc_soma_inidcadores(coletasFESF %>% filter(Data >= input$dateRange[1] & Data <= input$dateRange[2]))
    gvisTable(soma[22:29,c(1,(num+1):ncol(soma))])
  })

  output$puerp <- renderGvis({
    soma = calc_soma_inidcadores(coletasFESF %>% filter(Data >= input$dateRange[1] & Data <= input$dateRange[2]))
    gvisTable(soma[30:32,1:num])
  })
  output$puerp2 <- renderGvis({
    soma = calc_soma_inidcadores(coletasFESF %>% filter(Data >= input$dateRange[1] & Data <= input$dateRange[2]))
    gvisTable(soma[30:32,c(1,(num+1):ncol(soma))])
  })

}
