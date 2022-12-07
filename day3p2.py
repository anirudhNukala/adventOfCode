with open('day3.txt', 'r') as rucksackFile:
    rawRucksackList = list(rucksackFile)
    
rucksackList = [x.strip() for x in rawRucksackList]

splitList = [rucksackList[i:i + 3] for i in range(0, len(rucksackList), 3)]

commonLetters = []
for item in splitList:
    commonLetters.append(''.join(set(item[0]).intersection(item[1], item[2])))

lowerDict = {'a':1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26}
upperDict = {}

for letter in lowerDict:
    upperDict[letter.upper()] = lowerDict[letter] + 26

prioritySum = 0
for letter in commonLetters:
    if letter in lowerDict:
        prioritySum += lowerDict[letter]
    elif letter in upperDict:
        prioritySum += upperDict[letter]

print(f'The sum of the priorities is {prioritySum}')
