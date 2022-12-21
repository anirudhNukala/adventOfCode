const fs = require('fs');
const rawIDStr = fs.readFileSync('day4.txt').toString();

let rawIDList = rawIDStr.split('\n')

for (i = 0; i < rawIDList.length; i++) {
    rawIDList[i] = rawIDList[i].split(',')
    rawIDList[i][0] = rawIDList[i][0].split('-')
    rawIDList[i][1] = rawIDList[i][1].split('-')
    rawIDList[i][0][0] = parseInt(rawIDList[i][0][0])
    rawIDList[i][0][1] = parseInt(rawIDList[i][0][1])
    rawIDList[i][1][0] = parseInt(rawIDList[i][1][0])
    rawIDList[i][1][1] = parseInt(rawIDList[i][1][1])
}

let fullyContain = 0

for (i = 0; i < rawIDList.length; i++) {
    if ((rawIDList[i][1][1] >= rawIDList[i][0][1]) && (rawIDList[i][1][0] <= rawIDList[i][0][0])) {
        fullyContain += 1
    }
    else if ((rawIDList[i][0][1] >= rawIDList[i][1][1]) && (rawIDList[i][0][0] <= rawIDList[i][1][0])) {
        fullyContain += 1
    }
}

console.log(`The number of pairs fully contained in other is ${fullyContain}`)