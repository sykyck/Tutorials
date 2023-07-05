# -*- coding: utf-8 -*-
"""
Created on Fri Jun 30 20:51:27 2023

@author: Vaibhav Sharma
"""

print("Started Bubblesort Program");

#list containing unsorted numbers
numbers=[3, 7, 6, 1, 4, 2, 8, 5]

# value of i from 0 to 7
for i in range(len(numbers)):
    # i->0, j->[0, 7]
    # i->1, j->[0, 6]
    for j in range(0, len(numbers)-1-i, 1):
       if numbers[j]>numbers[j+1] and j + 1 <= len(numbers)-1-i :
           smallNum = numbers[j+1]
           bigNum = numbers[j]
           numbers[j+1] = bigNum
           numbers[j] = smallNum
           
for k in range(len(numbers)):
    print("Value at index=", k, "is =", numbers[k])
    
print("Ending Bubblesort Program");