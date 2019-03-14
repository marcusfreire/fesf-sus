# ui.R

dashboardPage( skin = "green",
  dashboardHeader(title = "FESF-SUS"),
  dashboardSidebar(
    sidebarMenu(
      menuItem("Dados", tabName = "aba8", icon = icon("book")),
      menuItem("Mapa Geral", tabName = "aba1", icon = icon("globe"), badgeColor = "green"),
      menuItem("Socioeconômicos", tabName = "aba2", icon = icon("home")),
      menuItem("Pré-Parto", tabName = "aba3", icon = icon("info")),
      menuItem("Parto", tabName = "aba4", icon = icon("users")),
      menuItem("Intercorrências", tabName = "aba5", icon = icon("bookmark")),
      menuItem("Boas Práticas", tabName = "aba6", icon = icon("child")),
      menuItem("Puerpério", tabName = "aba7", icon = icon("clipboard"))
    )
  ),
  dashboardBody(
    tabItems(
      tabItem(tabName = "aba1",
        column(4, leafletOutput("mymap")),
        column(6, htmlOutput("tbl"))
              
      ),
      tabItem(tabName = "aba2",
        h2("Indicadores Socioeconômicos"),
        htmlOutput("socio"),
        htmlOutput("socio2"),
        h5("A11: Número de gestantes com data provável do parto para o período atual que são mães solteiras."),
        h5("A12: Número de gestantes com data provável do parto para o perı́odo atual que têm quatro ou mais filhos."),
        h5("A13: Número de gestantes com data provável do parto para o perı́odo atual que perdeu algum filho com idade menor ou igual a um ano."),
        h5("A14: Número de gestantes com data provável do parto para o perı́odo atual que possuem uma renda familiar menor ou igual a um salário mı́nimo."),
        h5("A15: Número de gestantes com data provável do parto para o perı́odo atual que apresentam quadro de desnutrição ou tem algum filho desnutrido."),
        h5("A16: Número de gestantes analfabetas com data provável do parto para o perı́odo atual.")
      ),
      tabItem(tabName = "aba3",
        h2("Indicadores Pré-Parto"),
        htmlOutput("pre"),
        htmlOutput("pre2"),
        h5("A21: Número de gestantes com data provável do parto para o período atual."),
        h5("A22: Número de consultas de pré-natal realizadas a partir da 36º semana pelo(a) enfermeiro(a) obstetra."),
        h5("A23: Número de gestantes que visitaram HPP's no período."),
        h5("A24: Número de gestantes assistidas no pré-natal com previsão de risco no parto."),
        h5("A25: Número de atividades de roda de conversa com mulheres (gestantes, nutrizes com acompanhante)."),
        h5("A26: Número de reuniões realizadas com a Atenção Básica para planejamento das ações no território."),
        h5("A27: Número de oficinas de Educação Permanente realizadas no período.")

      ),
      tabItem(tabName = "aba4",
        h2("Indicadores Parto"),
        htmlOutput("parto"),
        htmlOutput("parto2"),
        h5("A31: Número de partos realizados nos HPP's."),
        h5("A32: Número de partos naturais realizados pelo(a) enfermeiro(a) obstetra no período."),
        h5("A33: Número de partos ocorridos no HPP, no mês, de residentes em outros municípios."),
        h5("A34: Número de partos naturais realizados e registrados em AIH (Autorização de Internação Hospitalar) pelo(a) enfermeiro(a) obstetra no período."),
        h5("A35: Número de gestantes encaminhadas com previsão de risco no parto."),
        h5("A36: Número de natimortos em partos realizados pelo(a) enfermeiro(a) obstetra nos HPP's no período.")
      ),
      tabItem(tabName = "aba5",
        h2("Indicadores Intercorrências"),
        htmlOutput("inter"),
        htmlOutput("inter2"),
        h5("A41: Número de episotomias."),
        h5("A42: Número de lacerações.")
      ),
      tabItem(tabName = "aba6",
        h2("Indicadores Boas Práticas"),
        htmlOutput("praticas"),
        htmlOutput("praticas2"),
        h5("A51: Número de parturientes com acompanhante."),
        h5("A52: Número de parturientes com Doula, acompanhantes de parto profissionais."),
        h5("A53: Número de parturientes na posição de parir não supina."),
        h5("A54: Número de cortes tardios do cordão."),
        h5("A55: Número de cortes do cordão realizados pelo acompanhante ou pela própria parturiente."),
        h5("A56: Registro de Apagar no 1º e 5º minuto."),
        h5("A57: Contato pele a pele na sala de parto."),
        h5("A58: Número de parturientes que amamentaram em sala de parto.")
      ),
      tabItem(tabName = "aba7",
        h2("Indicadores Puerpério"),
        htmlOutput("puerp"),
        htmlOutput("puerp2"),
        h5("A61: Número de RN, de parto assistido por ENFO, que demandou avaliação com pediatra."),
        h5("A62: Número de recém-nascidos que foram vacinados (BCG e Hepatite B) no HPP."),
        h5("A63: Agendamento, pelos HPP's, da consulta puerperal na Unidade de Saúde da Família, no momento da alta.")
      ),
      tabItem(tabName = "aba8",
          titlePanel("Filtro para visualizar os dados"),
          dateRangeInput('dateRange',
              label = 'Nesse filtro poderá escolher a data inicial e final das coletas',
              format = 'dd-mm-yyyy',
              start = "2017-12-01" , end = "2018-12-01",
              language = 'pt-BR',
              separator = 'até'
            ),
          dataTableOutput('my_table')
      )
    )
  )
)
