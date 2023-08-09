function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('BANCO DE DADOS')
      .addItem('Atualizar Banco', 'BaixarFireBase')
      .addToUi();
}

function BaixarFireBase() {
  var ss = SpreadsheetApp.openById("1Zpo3HhDkC04DyNjapHcxNxE1WgqYetRbGzIaiaghHk8");
  var sheet = ss.getSheets()[0];
  sheet.clear(); // Limpar Planilha
  var firebaseUrl = "https://fesf-sus.firebaseio.com/";
  var secret = "SECRET_VALUE";
  var base = FirebaseApp.getDatabaseByUrl(firebaseUrl);
  
  var dados = base.getData();
  var coletas = dados["coletas"];
  var sheetRow = [];
  var atributos;
  var chaves;
  
  chaves = Object.keys(coletas);
  atributos = Object.keys(coletas[chaves[1]]);
  
  sheet.appendRow(atributos); // Adicionando o titulo, nome de cada atributo 
  
  chaves.forEach(function(key) {
    sheetRow = [];    
    for (i in atributos) {
      sheetRow.push(coletas[key][atributos[i]]);
    }
    //Logger.log(sheetRow);
    sheet.appendRow(sheetRow);                            
  });
}
