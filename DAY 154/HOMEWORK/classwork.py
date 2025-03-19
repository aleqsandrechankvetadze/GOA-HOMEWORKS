# codewars

# 1st homework

# def multi_table(number):
#     result = ""
#     for i in range(1, 11): 
#         result += f"{i} * {number} = {i * number}\n"
#     return result.strip() 


# 2nd homework

# def print_array(arr):
#     return ",".join(str(x) for x in arr)



# 3rd homework


# def string_clean(s):
#     return ''.join([char for char in s if not char.isdigit()])


# 4th homework

# def remove_consecutive_duplicates(s : str) -> str:

#     arr = []

#     sspl = s.split()

#     for i in sspl:
#         if i not in arr:
#             arr.append(i)

#     return " ".join(arr)  


# def remove_consecutive_duplicates(s: str) -> str:
#     words = s.split()
#     result = [words[0]] if words else [] 

#     for i in range(1, len(words)): 
#         if words[i] != words[i - 1]:  
#             result.append(words[i])

#     return " ".join(result)


# print(remove_consecutive_duplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))


# 5 th homework

# def between_extremes(numbers):
#     return max(numbers) - min(numbers)