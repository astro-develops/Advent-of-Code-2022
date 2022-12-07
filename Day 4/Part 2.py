with open('./Day 4/input.txt','r') as f:
  data = f.read().split("\n")

overlap = 0

for line in data:
  a, b = line.split(",")
  x, y = map(int, a.split("-"))
  z, w = map(int, b.split("-"))
  
  if max(x, z) <= min(y, w):
    overlap += 1

print(overlap)