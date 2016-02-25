// IF

if (username == null)                   // Se o usuario for Null ou Undefined
username = 'John Doe';                  // Define username

//----------------------//

if (!username) username = 'John Doe';

//-----------------------//

if (!address) {
  address = '';
  message = 'Please specify a mailing address';
}

//---------------------------//

if (n == 1)
  console.log('You have 1 new message');
  else
    console.log('You have ' + n + ' new messages.');

//--------------------------------//

// ELSE IF

if (n == 1) {
  //executa o bloco de codigo #1
} else {
  if (n == 2) {
    // Executa o bloco 2
  } else {
    if (n == 3) {
      //executa o bloco 3
    } else {
      // Se tudo falhar, executa o bloco 4
    }
  }
}

//-----------------------//

// SWITCH

switch(n) {
  case 1:
  // Executa o bloco 1
    break;
  case 2:
  // Executa o bloco 2
    break;
  case 3:
  // Executa o bloco 3
    break;
  default:
  // Executa o bloco 4
}

//-----------------------//

function convert(x) {
  switch (typeof x) {
    case 'number':
      return x.tostring(16);                            // Converte inteiro para hexa
    case 'string':
      return '"' + x + '"';                             // retorna string entre aspas
      break;
    default:
      return String(x);
  }
}

convert('10');
