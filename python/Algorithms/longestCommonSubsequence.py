def longestCommonSubsequence(s1:str, s2:str, numberOfCommonSubstrings:list[list[int]] = []) -> str:
    s1CharArray = list(s1)
    s2CharArray = list(s2)
    m = len(s1CharArray)
    n = len(s2CharArray)
    max = 0
    numberOfCommonSubstrings = [[0] * (n) for _ in range(m)]
    for i in range(len(s1)) :
        for j in range(len(s2)) :
            if s1CharArray[i] == s2CharArray[j] :
                if (i > 0) & (j > 0) :
                    numberOfCommonSubstrings[i][j] = numberOfCommonSubstrings[i - 1][j - 1] + 1
                    if max < numberOfCommonSubstrings[i][j] :
                        max = numberOfCommonSubstrings[i][j]
                else :
                    numberOfCommonSubstrings[i][j] = 1
                    if max < numberOfCommonSubstrings[i][j] :
                        max = numberOfCommonSubstrings[i][j]
            else :
                numberOfCommonSubstrings[i][j] = getMaxValue(numberOfCommonSubstrings[i - 1][j], numberOfCommonSubstrings[i][j - 1])
    return max

def getMaxValue(a:int, b:int)->int:
    if a > b :
        return a
    else :
        return b

print(longestCommonSubsequence("abcde", "abce"))  # Output: 8