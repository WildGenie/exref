a = [1,2]
a.append(3)
a[4]                    # err
len(a)                  # 2
[1,2] == [1,2]          # val equal: True
[1,2] * 2               # list repeat: [1,2,1,2]
[*a]                    # list unpack: [1,2]
[*range(4)]             # ...: [1,2,3,4]
[1,2] + [3,4]           # list concat: [1,2,3,4]
[ *[1,2], *[3,4] ]      # ...
[1,2].append(3)         # NoneType,  a: [1,2,3]
[1,2,3].insert(2, 4)    # NoneType,  a: [1,2,4,3]
[1,2].extend([3,4])     # NoneType,  a: [1,2,3,4]
[7,8,9].remove(8)       # NoneType,  a: [7,8]
[1,2,3].reverse()       # NoneType,  a: [3,2,1]
list(reversed([1,2,3])) # [3,2,1]
[*reversed([1,2,3])]    # ...
[1,2,3][::-1]           # ...
[3,1,2].sort()          # NoneType,  a: [1,2,3]
[1,2,3,3].count(3)      # 2
[1,2].index(2)          # 1
[1,2].index(3)          # err
[1,1,2].index(1,1)      # 1
['a','b'].index('a')    # 0
a = [3]
a.append(4) # [3,4]
a.pop()     # 4,  a: [3]
a.pop()     # 3,  a: [] 
a.clear()   # []
a.copy()
# https://docs.python.org/3/tutorial/datastructures.html#more-on-lists


x = range(1,10,2)
list(x) # [1, 3, 5, 7, 9]

# index access
a = [1,2,3,4]
a[0]  # 5
a[-1] # 8

# range slice
arr[?start=0: ?stop=-1: ?step=0]
a[0:2]   # [1,2]
a[:2]    # [1,2]
a[2:]    # [3,4]
a[-3:-1] # [2,3]
a[:]     # copy of arr
[1,2,3,4,5,6][::2]  # [1,3,5]
[1,2,3,4,5,6][::-1] # [6,5,4,3,2,1]

# list comprehension
nums = [1,2,3,4]
x = [x*x for x in nums]               # [1,4,9,16]
y = [x*x for x in nums if x % 2 == 0] # [4,16]
arr = [ [1,2], [3,4] ]
[[j*2 for j in i] for i in arr]       # [ [2,4], [6,8] ]

# map
def add(n): return n + n
res = map(add, [1,2,3]) 
list(res)                              # [2,4,6]
list(map(lambda i: i*2, [1,2,3]))      # [2,4,6]

# map - mutable
a = map(lambda i: i*2, [2,3])
list(a) # [4,6]  (src obj gone)
list(a) # []

# map - over index & value
list( map(lambda i: i[0], enumerate([4,5,6])) )    # [0,1,2]
list( map(lambda i: i[0], enumerate([4,5,6], 7)) ) # [7,8,9]

# filter
list(filter(lambda i: i>2, [1,2,3,4])) # [3,4]

# reduce
from functools import reduce
reduce(lambda r,i: r+i, [1,2,3,4])    # 10
reduce(lambda r,i: r+i, [1,2,3,4], 5) # 15

# flat
from itertools import chain
a = [ [1,2], [3,4] ]
list(chain(*a))              # [1,2,3,4]
list(chain.from_iterable(a)) # ...
reduce(lambda x, y: x+y, a)  # ...

a = map(lambda i: [i]*4, [1,2])
list(chain(*a))              # [1,1,1,1,2,2,2,2]
a = ...
list(chain.from_iterable(a)) # ...