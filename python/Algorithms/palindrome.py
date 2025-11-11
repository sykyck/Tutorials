def isPalindrome(text):
    reversed_text = text.lower()[::-1]
    return text.lower() == reversed_text

def isPalindromeByIterating(text):
    char_array = list(text)
    length = len(char_array)
    firstPartLastIndex = ((length // 2) - 1) if length % 2 == 0 else ((length // 2) - 1)
    for i in range(length):
      if (i <= firstPartLastIndex) & (char_array[i] != char_array[length - 1 - i]):
        return False
    return True

print(isPalindrome("racecar"))  # Output: true
print(isPalindromeByIterating("hello"))  # Output: true