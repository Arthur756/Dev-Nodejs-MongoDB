const fs = require('fs');

const array = [5,4,3,2,1]

const writeStream = fs.createWriteStream('data.csv');


writeStream.write(`array \n`);

writeStream.write('[ "' + array.join('","') + '" ]\n');