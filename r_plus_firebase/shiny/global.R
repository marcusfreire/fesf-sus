# global.R
if (!require("devtools")) install.packages("devtools")
if (!require("fireData")) devtools::install_github("Kohze/fireData")
if (!require("shiny")) install.packages("shiny")
if (!require("shinydashboard")) install.packages("shinydashboard")
if (!require("googleVis")) install.packages("googleVis")
if (!require("dplyr")) install.packages("dplyr")
if (!require("leaflet")) install.packages("leaflet")

library(shiny)
library(shinydashboard)
library(devtools)
library(fireData)
library(googleVis)
library(dplyr)
library(leaflet)
#require(rgdal)


source('lendo_banco.R')
datamin = min(coletasFESF$Data)
datamax = max(coletasFESF$Data)
datamin
