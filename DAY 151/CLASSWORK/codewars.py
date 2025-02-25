# def get_count(sentence):
#     vowel = "abcde"
#     count = 0
#     for i in sentence:
#         if i in vowel:
#             count += 1
#     return count
        


# def likes(names):
#     if len(names) == 0:
#         return "No one likes this"
#     for i in names:
#         if len(names) == 1:
#             return f"{names[0]} likes this"
#         elif len(names) == 2:
#             return f"{names[0]} and {names[1]} likes this"
#         elif len(names) == 3:
#             return f"{names[0]}, {names[1]} and {names[2]} likes this"
#         elif len(names) >= 4:
#             return f"{names[0]}, {names[1]} and {len(names) - 2} like this"


# str.split("").filter( (el) => ["a", "e" , "i", "o", "u"].includes(el) ).length




# def likes(names):
#     if len(names) == 0:
#         return "no one likes this"
#     elif len(names) == 1:
#         return f"{names[0]} likes this"
#     elif len(names) == 2:
#         return f"{names[0]} and {names[1]} like this"
#     elif len(names) == 3:
#         return f"{names[0]}, {names[1]} and {names[2]} like this"
#     elif len(names) >= 4:
#         return f"{names[0]}, {names[1]} and {len(names) - 2} others like it"
    

# print(likes(['Alex', 'Jacob', 'Mark', 'Max']))    


# def solution(number):
#     num = 0
#     if number == 0:
#         return 0
#     for i in range(number):
#         if i % 3 == 0 or i % 5 == 0:
#             num+=i
#     return num        


# def array_diff(a, b):
#     arr = []
#     for i in a:
#         if i not in b:
#             arr.append(i)

#     for x in b:
#         if x not in a:
#              arr.append(i)

#     return arr

# print(array_diff([1,2], [1]))

# def digital_root(n):
#     sum = 0
#     splitted = [int(i) for i in str(n)]
#     for i in splitted:
#         sum+=i
#     return sum    

# print(digital_root(16))