var nums = [1,2,2,3,4,5,5,6]

function removeDuplicates(num){
    return num.filter((value, index) => num.indexOf(value) === index);
}
console.log(removeDuplicates(nums));
// Saída: [1,2,3,4,5,6]