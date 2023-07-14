const fs = require('fs');
const rucksackStr = fs.readFileSync('day3.txt').toString();

let rucksackList = rucksackStr.split('\n')

let splitList = []
for (i = 0; i < rucksackList.length; i++) {
    let first = rucksackList[i].slice(0, Math.floor(rucksackList[i].length / 2)).split('')
    let second = rucksackList[i].slice(Math.floor(rucksackList[i].length / 2)).split('')
    splitList.push([first, second])
}

let lowerDict = {'a':1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26}

let upperDict = {'A': 27, 'B': 28, 'C': 29, 'D': 30, 'E': 31, 'F': 32, 'G': 33, 'H': 34, 'I': 35, 'J': 36, 'K': 37, 'L': 38, 'M': 39, 'N': 40, 'O': 41, 'P': 42, 'Q': 43, 'R': 44, 'S': 45, 'T': 46, 'U': 47, 'V': 48, 'W': 49, 'X': 50, 'Y': 51, 'Z': 52}

let commonLetters = []

for (i = 0; i < splitList.length; i++) {
    commonLetters.push(splitList[i][0].filter(value => splitList[i][1].includes(value)))
}

let prioritySum = 0

for (i = 0; i < commonLetters.length; i++) {
    if (commonLetters[i][0] in lowerDict) {
        prioritySum += lowerDict[commonLetters[i][0]]
    }
    else if (commonLetters[i][0] in upperDict) {
        prioritySum += upperDict[commonLetters[i][0]]
    }
}

console.log(`The priority sum is ${prioritySum}`)
console.log('')
/* ---------------- Part 2 --------------------- */

let threeList = []
let j = 0
while (j < rucksackList.length) {
    threeList.push([rucksackList[j].split(''), rucksackList[j+1].split(''), rucksackList[j+2].split('')])
    j += 3
}

let commonCharsArr = []
for (i = 0; i < threeList.length; i++) {
    commonCharsArr.push(threeList[i].reduce((a, b) => a.filter(c => b.includes(c))))
}

let newPrioritySum = 0
for (i = 0; i < commonCharsArr.length; i++) {
    if (commonCharsArr[i][0] in lowerDict) {
        newPrioritySum += lowerDict[commonCharsArr[i][0]]
    }
    else if (commonCharsArr[i][0] in upperDict) {
        newPrioritySum += upperDict[commonCharsArr[i][0]]
    }
}

console.log(`The updated priority sum is ${newPrioritySum}`)