# code wars 


# 1 homework

# def count_by(x, n):
#     range1 = x * n
    
#     new_arr = []

#     for i in range(x,range1 + 1,x):
#         new_arr.append(i)

#     return new_arr    

# print(count_by(50,5))


# 2 homework

# def validate_pin(pin):
        
    # if len(pin) == 4 or len(pin) == 6:
    #     for i in pin:
     #         if i.isdigit():
     #             return True
     # else:
     #     return False

    #  return len(pin)

# print(validate_pin("12.0"))    



# 3 homework

# def points(games):
    
#     num = 0

#     for i in games:
#         if i[0] > i[2]:
#             num += 3
#         elif i[0] == i[2]:
#             num += 1    

#     return num        

# print(points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']))    



# def binary_array_to_number(arr):

#     sum = 0
#     rot = arr[::-1]

#     for i in range(len(arr)):
#         sum += rot[i] * (2**i)

#     return sum    

# print(binary_array_to_number([0,0,0,1]))


# def divisors(integer):
    
#     division_list = []

#     if integer % 3 != 0 or integer % 2 == 0:
#         return False
#     elif integer % 3 == 0 or integer % 2 == 0:
#         if integer % 2 == 0:
#             division_list.append(integer // 2)
#         elif integer % 3 == 0:
#             division_list.append(integer // 3) 

#     return division_list        

# print(divisors(15))    