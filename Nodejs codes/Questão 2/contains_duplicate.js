var array = [1,2,2,3,4,5]

function containsDuplicates(array){
    let valoresDuplicados = []

    for (let i = 0; i < array.length; i++){
        let value = array[i]
        if (valoresDuplicados.indexOf(value) !== -1){
            return true
        }
        valoresDuplicados.push(value)
    }
    return false
}
console.log(containsDuplicates(array));
// Saída: [1,2,3,4,5,6]