const inputTexto = document.querySelector('.input-texto');
const mensagem = document.querySelector('.mensagem');
let btn = document.querySelector('#copy');

btn.addEventListener('click', function(e) {
  let textArea = document.querySelector('#texto2');
  textArea.select();
  document.execCommand
  
});

function CopiarTextoEncriptado() {
 document.getElementById("texto1").value = document.getElementById("texto2").value;

 document.getElementById("texto2").addEventListener('click', ()=> {
  document.getElementById("texto1").select();
  document.execCommand('texto2');
 })
}

function btnEncriptar() {
  const textoEncriptado = encriptar(inputTexto.value);
  mensagem.value = textoEncriptado;
  mensagem.style.backgroundImage='none';
}

function btnDesencriptar() {
  const textoDesencriptado = Desencriptar(inputTexto.value);
  mensagem.value = textoDesencriptado;
  mensagem.style.backgroundImage='none';
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [['a', 'ai'], ['e', 'enter'], ['i', 'imes'], ['o', 'ober'], ['u', 'ufat']];
  stringEncriptada = stringEncriptada.toLowerCase();

  for(let i=0; i < matrizCodigo.length; i++) {  
    if(stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
  }
  return stringEncriptada;
}

function Desencriptar(stringDesencriptada) {
  let matrizCodigo = [['ai', 'a'], ['enter', 'e'], ['imes', 'i'], ['ober', 'o'], ['ufat', 'u']];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for(let i=0; i < matrizCodigo.length; i++) {  
    if(stringDesencriptada.includes(matrizCodigo[i][0])) {
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
  }
  return stringDesencriptada;
}