# 1 homework

# def high_and_low(numbers):
    
#     split_arr = numbers.split()
#     inted_arr = [int(num) for num in split_arr]
    
#     min_num = min(inted_arr)
#     max_num = max(inted_arr)

#     return f"{max_num} {min_num}"

# print(high_and_low("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))


# 2 homework

# def validate_pin(pin):
    
#     if len(pin) == 4 or len(pin) == 6:
#         if pin.isdigit():
#             return True
#         else:
#             return False
#     else:
#         return False
    
# print(validate_pin('1234'))    



# 2 homework

# def odd_or_even(arr):
#     if len(arr) == 0:
#         return "even"
    
#     sumed = sum(arr)
#     if sumed % 2 == 0:
#         return "even"
#     elif sumed % 2 != 0:
#         return "odd"

# print(odd_or_even([0, 1, 2]))   


# 3 homework

# def solution(nums):
#     if nums == None:
#         return []

#     return sorted(nums)


# 4 homework
 
# def greet(name): 
#     return f"Hello {name.capitalize()}!" 