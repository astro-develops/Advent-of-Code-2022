# After watching videos for this challenge I noticed everyone making a tree
# I don't think thats what the challenge wanted you to do. 

sizes = []
total = 0

# with open('./Day 7/example.txt', 'r') as f:
with open('./Day 7/input.txt', 'r') as f:
  data = f.readlines()

for line in data:
	if '$ cd' in line:
		if '..' in line:
			dir_size = sizes.pop()
      
			total += dir_size if dir_size <= 100_000 else 0
			sizes[-1] += dir_size
		else:
			sizes.append(0)
      
	elif line[0].isdigit():
		sizes[-1] += int(line.split()[0])

print(total)