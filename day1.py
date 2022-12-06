calFile = open('day1.txt', 'r')

calString = calFile.read()

newList = calString.split('\n\n')

calList = []
for item in newList:
    calList += [item.strip().split('\n')]

for list in calList:
    for i in range(len(list)):
        list[i] = int(list[i])

maxList = []
for list in calList:
    maxList.append(sum(list))

maxCalories = max(maxList)

print(f'The reindeer who had the most calories had {maxCalories} calories')


