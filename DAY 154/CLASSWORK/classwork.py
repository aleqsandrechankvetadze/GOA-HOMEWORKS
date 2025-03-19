# 1 classwork

# def remove_duplicate_words(s):
    
#     splitted = s.split(" ")
#     new_arr = []

#     for i in splitted:
#         if i not in new_arr:
#             new_arr.append(i)

#     return " ".join(new_arr)          

# print(remove_duplicate_words("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"))    


# 2 homework

# def stray(arr):
    
#     for i in arr:
#         if arr.count(i) == 1:
#             return i


# print(stray([17, 17, 3, 17, 17, 17, 17]))  


# 3 homework

# def angle(n):
#     return (n - 2) * 180

# 4 homework

# def solution(nums):
#     if nums == None:
#         return []

#     return sorted(nums) 


# def sort_by_length(arr):
    
#     return sorted(arr, key=len)

# print(sort_by_length(['beg', 'i', 'life', 'to']))    




# def sequence_sum(begin_number, end_number, step):
#     if begin_number > end_number:
#         return 0

#     num = 0
#     for i in range(begin_number, end_number + 1, step):
#         num += i

#     return num

# print(sequence_sum(2, 6, 2))


# def round_to_next5(n):
    
#     if n % 10 == 1:
#         return n + 4
#     elif n % 10 == 2:
#         return n + 3
#     elif n % 10 == 3:
#         return n + 2
#     elif n % 10 == 4:
#         return n + 1
#     elif n % 10 == 5:
#         return n
#     elif n % 10 == 6:
#         return n + 4
#     elif n % 10 == 7:
#         return n + 3
#     elif n % 10 == 8:
#         return n + 2
#     elif n % 10 == 9:
#         return n + 1
    

# print(round_to_next5(12))    



# def series_sum(n):
#     num = 0

#     for i in range(1, n + 1):
#         num += 1/(i+3)
        
#     return str(num)    


# print(series_sum(5))