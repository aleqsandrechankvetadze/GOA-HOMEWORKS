# code wars


# 1 homework

# def bool_to_word(boolean):
#     if boolean == "Yes":
#         return True
#     else:
#         return False

# 2 homework

# def remove_char(s):
#     return s[1:-1]


# 3 homework

# def string_to_number(s):
#     return int(s)


# 4 homework

# def no_space(x):
#     return x.replace(" ","")


# 5 homework

# def sum_array(a):
#     return sum(a)

# 6 homework

# def simple_multiplication(number):
#     if number % 2 == 0:
#         return number * 8
#     else:
#         return number * 9

# 7 homework

# def invert(lst):
#     return [-i for i in lst]

# 8 homework

# def fake_bin(x):
#     return ''.join(['0' if int(d) < 5 else '1' for d in x])


# 9 homework

# def string_to_array(s):
#     if len(s) == 0:
#         return ['']
#     return s.split()

# 10 homework

# def rps(p1, p2):
#     if p1 == p2:
#         return "Draw!"
    
#     if (p1 == "scissors" and p2 == "paper") or \
#        (p1 == "paper" and p2 == "rock") or \
#        (p1 == "rock" and p2 == "scissors"):
#         return "Player 1 won!"
    
#     return "Player 2 won!"


# 11 homework

# def greet(name, owner):
#     if name == owner:
#         return "Hello boss"
#     else:
#         return "Hello guest"


# 12 homework

# def monkey_count(n):
    
#     arr = []
    
#     for i in range(1,n+1):
#         arr.append(i)
        
#     return arr    



# 13 homework

# def human_years_cat_years_dog_years(human_years):
#     if human_years == 1: return [1,15,15]
#     if human_years == 2: return [2,24,24]
#     return [
#     human_years,
#     24 +(human_years-2)*4,
#     24 +(human_years -2)*5
#   ]



# 14 homework


# def is_isogram(string):
#     string = string.lower()
#     return len(string) == len(set(string))


# 15 homework

# def binary_array_to_number(arr):
#     return int(''.join(map(str, arr)), 2)
