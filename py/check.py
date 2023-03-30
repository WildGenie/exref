# containment
2 in {1, 2, 3}
1 in {1,2}    # True    O(1)
1 in {1, 2}
2 in range(4) # True    O(1) ranges are not created in memory

# emptiness
a = []
if (a): print()  # same as:
if (len(a)): print()

# bool cast (truthy falsy)
# falsy
1 if 0    else 0
1 if ''   else 0
1 if False else 0
1 if False else 0
1 if False else 0
1 if (0)  else 0
1 if ('') else 0
# truthy
1 or 0
1 if '0'   else 0
1 if True else 0
1 if ('0') else 0

# identity (same memory location)
3 is 3             # True
True
[3] is [3]         # False
True

# check identity (not equality) for None, True, False, NoneType
x is None
x == True  # ..
x == False # ..
x is None  # good
x is True  # ..
x is False # ..

# None is different than rest
type(None) is None
None is type(None)           # False
isinstance(None, type(None)) # True
type(True) == bool           # True
type(1) == int               # True
type(1.) == float            # True

# check for inheritance
class Animal():
	def __init__(self): pass
class Dog(Animal):
	def __init__(self): super(Dog, self)
dog = Dog()
type(dog) == Dog        # True
type(dog) == Animal     # False (violates liskov substitution)
isinstance(dog, Dog)    # True
isinstance(dog, Animal) # True (correct)

isinstance([], list)  # True
isinstance((), tuple) # True
isinstance({}, dict)  # True
isinstance({}, set)   # False
isinstance({1}, set)  # True