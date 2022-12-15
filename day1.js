const fs = require('fs')
const calFile = fs.readFileSync('day1.txt').toString();

const rawCalData = calFile.split('\n\n');

var strCalData = [];
for (let i = 0; i < rawCalData.length; i++ ) {
    strCalData.push(rawCalData[i].split('\n'))
}

var calData = [];

for (let i = 0; i < strCalData.length; i++) {
    calData.push(strCalData[i].map(Number))
}

function sumList(numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
      result += numbers[i];
    }
    return result;
  }
  
maxList = []
for (let i = 0; i < calData.length; i++) {
    maxList.push(sumList(calData[i]))
}


let maxCals = maxList.reduce((a,b) => {
    return Math.max(a, b);
});

console.log(`The reindeer with the most calories had ${maxCals} calories`)