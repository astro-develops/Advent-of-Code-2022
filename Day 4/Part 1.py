with open('./Day 4/input.txt','r') as f:
  data = f.read().split("\n")

contain = 0

for line in data:
  a, b = line.split(",")
  x, y = map(int, a.split("-"))
  z, w = map(int, b.split("-"))
  
  if x >= z and y <= w or z >= x and w <= y:
    contain += 1

print(contain)