def climbStairs(n, memo={}):
    if n == 0:
        return 1
    if n == 1:
        return 1
    if n not in memo:
        memo[n] = climbStairs(n-1, memo) + climbStairs(n-2, memo)
    return memo[n]

print(climbStairs(5))  # Output: 8