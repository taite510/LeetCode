# A bus has n stops numbered from 0 to n - 1 that form a circle. We know the distance between all pairs of neighboring stops where distance[i] is the distance between the stops number i and (i + 1) % n.

# The bus goes along both directions i.e. clockwise and counterclockwise.

# Return the shortest distance between the given start and destination stops.

def distanceBetweenBusStops(distance, start, destination):
    if start > destination:
        start, destination = destination, start
    fowards = sum(distance[start:destination])
    return min(fowards, sum(distance) - fowards)


print(distanceBetweenBusStops([1, 2, 3, 4], 0, 2) == 3)
