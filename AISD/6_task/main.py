t, result = [[int(y) for y in list(bin(ord(x))[2:])] for x in input()], [0] * 21
t = ([0] * (8 - len(t[0])) ) + t[0] + ([0] * (8 - len(t[1]))) + t[1]
result = [
	sum([t[i] for i in [0, 1, 3, 4, 6, 8, 10, 11, 13, 15]]) % 2, 
	sum([t[i] for i in [0, 2, 3, 5, 6, 9, 10, 12, 13]]) % 2, 
	t[0], 
	sum([t[i] for i in [1,2,3,7,8,9,10,14,15]]) % 2, 
	t[1], 
	t[2], 
	t[3], 
	sum([t[i] for i in [4,5,6,7,8,9,10]]) % 2, 
	t[4], 
	t[5], 
	t[6], 
	t[7], 
	t[8], 
	t[9], 
	t[10], 
	sum([t[i] for i in [11,12,13,14,15]]) % 2, 
	t[11], 
	t[12], 
	t[13], 
	t[14], 
	t[15]
]
print(*t)
[print(f'!{i + 1}\t{x}' if i in [0,1,3,7,15] else f' {i + 1}\t{x}') for i, x in enumerate(result)]
