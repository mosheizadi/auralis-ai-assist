# drone_pathfinder.py

import heapq
import math

class Node:
    def __init__(self, position, g, h, parent=None):
        self.position = position
        self.g = g
        self.h = h
        self.f = g + h
        self.parent = parent

    def __lt__(self, other):
        return self.f < other.f

def heuristic(a, b):
    return math.sqrt((a[0]-b[0])**2 + (a[1]-b[1])**2)

def a_star_path(grid, start, end):
    open_set = []
    heapq.heappush(open_set, Node(start, 0, heuristic(start, end)))
    closed_set = set()

    while open_set:
        current = heapq.heappop(open_set)
        if current.position == end:
            path = []
            while current:
                path.append(current.position)
                current = current.parent
            return path[::-1]

        closed_set.add(current.position)
        x, y = current.position

        for dx, dy in [(-1,0), (1,0), (0,-1), (0,1)]:
            next_pos = (x + dx, y + dy)
            if (0 <= next_pos[0] < len(grid) and
                0 <= next_pos[1] < len(grid[0]) and
                grid[next_pos[0]][next_pos[1]] == 0 and
                next_pos not in closed_set):

                heapq.heappush(open_set, Node(
                    next_pos,
                    current.g + 1,
                    heuristic(next_pos, end),
                    current
                ))
    return None