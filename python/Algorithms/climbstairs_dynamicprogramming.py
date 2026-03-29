'''
The “climbing stairs” problem is a classic introduction to Dynamic Programming. Let's break it down clearly.

🧠 Problem Statement

You are climbing a staircase with n steps.
Each time, you can climb either:

1 step, or
2 steps

👉 How many distinct ways can you reach the top?

🔍 Key Insight

To reach step n, you must have come from:

step n-1 (by taking 1 step), or
step n-2 (by taking 2 steps)

So the recurrence is:
f(n)=f(n-1)+f(n-2)

This is exactly the same pattern as the Fibonacci sequence.
'''

def climbStairs(n, memo={}):
    if n == 0:
        return 1
    if n == 1:
        return 1
    if n not in memo:
        memo[n] = climbStairs(n-1, memo) + climbStairs(n-2, memo)
    return memo[n]

print(climbStairs(5))  # Output: 8