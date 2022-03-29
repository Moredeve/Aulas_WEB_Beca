/*

  O papel da função doGet() é conectar um documento HTML do lado do servidor com o    código back-end do Google Apps Script

 */


function doGet(){
  const arquivoHtml = HtmlService.createHtmlOutputFromFile('index')
  .setTitle("Página Inicial").setFaviconUrl("https://icons-for-free.com/iconfiles/png/512/calculator-131994967672059924.png")

  return arquivoHtml
}



/*

De acordo com os documentos do Google Apps Script, para um aplicativo da Web funcionar, ele requer uma função doGet() ou doPost() e essa função retorna um HTMLoutput ou TextOutput de algum tipo.

Links:
https://developers.google.com/apps-script/guides/web
https://developers.google.com/apps-script/guides/html#code.gs


Há várias maneiras de gerar e exibir arquivos HTML no Google Apps Script. O mais comum é o método createHtmlOutputFromFile() que cria e fornece HTML a partir de um arquivo html que você pode gerar no editor de script.

Essa abordagem usa um argumento, o título do arquivo HTML que você usará. No nosso caso, isso é index.html e seria exibido assim:
...createHtmlOutputFromFile('index')

Observe que o nome do arquivo não tem a extensão do tipo de arquivo.

Se você executasse tudo como está, ele funcionaria bem não incorporado ou se você o incorporasse em um site do Google, mas se você incorporasse isso, digamos, em um documento do WordPress, então você precisa criar mais uma linha.

O serviço HTML do Google Apps Script fornece seus próprios controles contra clickjacking por padrão.

Clickjacking é um ataque que induz o usuário a clicar em um elemento de página da Web que é invisível ou disfarçado como outro elemento.

Isso significa que se você deixou o serviço HTML com as opções padrão do XFrame, ele não será exibido se você o incorporar em um site externo.

Você precisará removê-lo e deixá-lo nas mãos do site no qual deseja incorporar seu Web App. Para fazer isso, devemos chamar o setXFrameOptionsMode e alterar suas configurações padrão chamando o serviço HTML novamente e definindo o XFrameOptionMode como ALLOWALL.

 */
