with open('day4.txt', 'r') as idFile:
    rawIDList = list(idFile)
    idList = [id.strip().split(',') for id in rawIDList]

pairsCount = 0
for id in idList:
    if (float(id[1].split('-')[1]) >= float(id[0].split('-')[1])) and (float(id[1].split('-')[0]) <= float(id[0].split('-')[0])):
        pairsCount += 1
    elif (float(id[0].split('-')[1]) >= float(id[1].split('-')[1])) and (float(id[0].split('-')[0]) <= float(id[1].split('-')[0])):
        pairsCount += 1

print(idList[0][1].split('-')[1])

print(f'The number of pairs fully contained in another is {pairsCount}')

###################-Part-2#################################

idSplit = []
for id in idList:
    idSplit += [[id[0].split('-'), id[1].split('-')]]

overlap = 0

for id in idSplit:
    first = int(id[0][0])
    second = int(id[0][1])
    third = int(id[1][0])
    fourth = int(id[1][1])
    if (((first > third) and (first > fourth)) and ((second > third) and (second > fourth))) or (((third > first) and (third > second)) and ((fourth > first) and (fourth > second))):
        continue
    else:
        overlap += 1

print(f'The numver of pairs that overlap are {overlap}')