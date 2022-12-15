const fs = require('fs')
const rawMoves = fs.readFileSync('day2.txt').toString();

const moves = rawMoves.split('\n')

let score = 0

for (let i = 0; i < moves.length; i ++) {
    if (moves[i][0] == 'A') {
        if (moves[i][2] == 'X') {
            score += 4
        }
        else if (moves[i][2] == 'Y') {
            score += 8
        }
        else if (moves[i][2] == 'Z') {
            score += 3
        }
    }
    else if (moves[i][0] == 'B') {
        if (moves[i][2] == 'X') {
            score += 1
        }
        else if (moves[i][2] == 'Y') {
            score += 5
        }
        else if (moves[i][2] == 'Z') {
            score += 9
        }
    }
    else if (moves[i][0] == 'C') {
        if (moves[i][2] == 'X') {
            score += 7
        }
        else if (moves[i][2] == 'Y') {
            score += 2
        }
        else if (moves[i][2] == 'Z') {
            score += 6
        }
    }
}

console.log(`The final score is ${score}`)

//--------------Part 2-----------------------

let newScore = 0

for (let i = 0; i < moves.length; i ++) {
    if (moves[i][2] == 'X') {
        if (moves[i][0] == 'A') {
            newScore += 3
        }
        else if (moves[i][0] == 'B') {
            newScore += 1
        }
        else if (moves[i][0] == 'C') {
            newScore += 2
        }
    }
    else if (moves[i][2] == 'Y') {
        if (moves[i][0] == 'A') {
            newScore += 4
        }
        else if (moves[i][0] == 'B') {
            newScore += 5
        }
        else if (moves[i][0] == 'C') {
            newScore += 6
        }
    }
    else if (moves[i][2] == 'Z') {
        if (moves[i][0] == 'A') {
            newScore += 8
        }
        else if (moves[i][0] == 'B') {
            newScore += 9
        }
        else if (moves[i][0] == 'C') {
            newScore += 7
        }
    }
}

console.log(`The updated score is ${newScore}`)