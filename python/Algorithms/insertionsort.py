# -*- coding: utf-8 -*-
"""
Created on Fri Jun 30 23:19:17 2023

@author: Vaibhav Sharma
"""

print("Started InsertionSort Program");

#list containing unsorted numbers
numbers=[3, 7, 6, 1, 4, 2, 8, 5]

# value of i from 0 to 7
for i in range(len(numbers)):
    # i->0, j->[0, 7]
    # i->1, j->[0, 6]
    for j in range(0, i+1, 1):
        if j < len(numbers)-1 and numbers[j]>numbers[i]:
            smallNum = numbers[i]
            bigNum = numbers[j]
            numbers[i] = bigNum
            numbers[j] = smallNum
            
for k in range(len(numbers)):
    print("Value at index=", k, "is =", numbers[k])
    
print("Ending InsertionSort Program");
            
        