def isPrimeNumber(num, dict={}):
    if num not in dict:
        dict[num] = isPrimeNumber(num-1, dict)
    return True

print(isPrimeNumber("hello"))  # Output: true