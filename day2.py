with open('day2.txt', 'r') as movesFile:
    rawMovesList = list(movesFile)
    movesList = [x.strip().split() for x in rawMovesList]

# A = Rock = X = 1
# B = Paper = Y = 2
# C = Scissors = Z = 3
# Win = 6
# Draw = 3
#Loss = 0

score = 0
for move in movesList:
    if move[0] == 'A':
        if move[1] == 'X':
            score += 4
        elif move[1] == 'Y':
            score += 8
        elif move[1] == 'Z':
            score += 3
    elif move[0] == 'B':
        if move[1] == 'X':
            score += 1
        elif move[1] == 'Y':
            score += 5
        elif move[1] == 'Z':
            score += 9
    elif move[0] == 'C':
        if move[1] == 'X':
            score += 7
        elif move[1] == 'Y':
            score += 2
        elif move[1] == 'Z':
            score += 6

print(f'The final score is {score} points')

#################--Part2--########################

# A = Rock = 1
# B = Paper = 2
# C = Scissors = 3

# X = Lose = 0
# Y = Draw = 3
#Z = Win = 6

newScore = 0
for move in movesList:
    if move[1] == 'X':
        if move[0] == 'A':
            newScore += 3
        elif move[0] == 'B':
            newScore += 1
        elif move[0] == 'C':
            newScore += 2
    elif move[1] == 'Y':
        if move[0] == 'A':
            newScore += 4
        elif move[0] == 'B':
            newScore += 5
        elif move[0] == 'C':
            newScore += 6
    elif move[1] == 'Z':
        if move[0] == 'A':
            newScore += 8
        elif move[0] == 'B':
            newScore += 9
        elif move[0] == 'C':
            newScore += 7

print(f'With the proper instructions the score is {newScore}')