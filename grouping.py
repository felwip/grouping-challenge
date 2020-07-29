# PYTHON CODE FROM NORMA / MARTIN CZYGAN

def partition(people, groups, l=1):
    """
    Partition n(people) elements into k(groups) partitions, recursively.
    """
    if groups < 1:
        raise StopIteration
    if groups == 1:
        if people >= l:
            yield (people,)
    else:
        for i in range(l, people + 1):
            for result in partition(people - i, groups - 1, i):
                yield (i,) + result
                


cases = (
    (3, 1),
    (4, 2),
    (5, 3),
    (6, 4),
    (4, 1),
    (5, 2),
    (6, 3),
    (7, 4),
)

for c in cases:
    for v in partition(*c):
        print(v)
    print(len(list(partition(*c))))

# (1, 1, 8)
# (1, 2, 7)
# (1, 3, 6)
# (1, 4, 5)
# (2, 2, 6)
# (2, 3, 5)
# (2, 4, 4)
# (3, 3, 4)
# 8
# (1, 1, 1, 1, 5)
# (1, 1, 1, 2, 4)
# (1, 1, 1, 3, 3)
# (1, 1, 2, 2, 3)
# (1, 2, 2, 2, 2)
# 5