var array1 = [1,2,3,4,5]
var array2 = [6,7,2,5,9]

function arrayIntersection(array1, array2)
{
  var resultado = [];
  while( array1.length > 0 && array2.length > 0 )
  {  
     if      (array1[0] < array2[0] ){ array1.shift(); }
     else if (array1[0] > array2[0] ){ array2.shift(); }
     else
     {
       result.push(a.shift());
       b.shift();
     }
  }

  return resultado;
}

console.log(arrayIntersection(array1,array2));
// Saída: [2,5]