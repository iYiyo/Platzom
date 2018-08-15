'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
function platzom(str) {
  var translation = str; //debemos asignar el parametro a una variable ya que si queremo utilizar un metodo sobre este parametro, el metodo no lo puede modificar
  //el metodo toLowerCase() no permite trnasformar el string a minisculas
  //El metodo endsWidth() no permite pasar por parametro las letras con las que deceamos que nuestro string termine
  //El metodo startSwidth() nos permite pasar por parametros las letras con las que deceamos que nuestro string empiece
  //El metodo slice() nos permite cortar un string 

  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  }; //en JS no tenemos un metodo para para organizar al reves un string, pero si para un array, por eso transformamos nuestro strin en un array separado por cada caracter y despues aplicamos el metodo .reverse() para oraganizarlo. Pro ultimo pedimos que nos regrese ese array al reves en un string con el metodo .join() 

  function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;
    for (var i = 0; i < length; i++) {
      var char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }

    return translation;
  }

  if (str == reverse(str)) {
    return minMay(str); // en JS solo podemo tener un return por funcion por lo que al ejecutar esete return las demas reglas no aplican 
  }

  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2);
  }

  if (str.toLowerCase().startsWith('z')) {
    // translation = translation + 'pe';
    translation += 'pe';
  }

  var length = translation.length;
  if (length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length / 2));
    var secondHalf = translation.slice(Math.round(length / 2));
    translation = firstHalf + '-' + secondHalf;
  }

  return translation;
}