// Exibe uma mensagem em uma sessão de saída de depuração especial de documento.
// Se o documento não contém esta seção, cria uma.
function debug(msg) {
  // Localiza a seção de depuração do documento, examinando os atributos HTML
  var log = document.getElementById('debuglog');
  // Se não existe elemento algum com a ID 'debuglog', cria um.
  if (!log) {
    log = document.createElement('div'); // Cria uma nova div
    log.id = 'debuglog';                 // Define uma ID
    log.innerHTML = '<h1>Debug Log</h1>';// Define o conteúdo
    document.body.appendChild(log);      // Adiciona-o no final do documento
  }

  // Agora coloca a mensagem em seu própio <pre> e a anexa ao log
  var pre = document.createElement('pre'); // Cria uma marca <pre>
  var text = document.createTextNode(msg); // Coloca a msg em um no de texto
  pre.appendChild(text);                   // Adiciona o texto no <pre>
  log.appendChild(pre);                    // Adiciona <pre> no log
}
