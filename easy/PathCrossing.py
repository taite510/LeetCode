# Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

# Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.

def isPathCrossing(path):
    coords = [[0, 0]]
    curr = [0, 0]
    for direction in path:
        if direction == 'N':
            curr[1] += 1
        elif direction == 'E':
            curr[0] += 1
        elif direction == 'S':
            curr[1] -= 1
        else:
            curr[0] -= 1
        if curr in coords:
            return True
        coords.append(curr.copy())
    return False


print(isPathCrossing('NES') == False)
print(isPathCrossing('NESWW') == True)
