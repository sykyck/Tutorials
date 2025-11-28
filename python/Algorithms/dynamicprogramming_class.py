class dynamicProgramming:
    def __init__(self, n):
        self.n = n
        self.memoArray = [0] * (n + 1)

    def fibonacci(self, n):
        if n <= 1:
          return n
        if self.memoArray[n] != 0:
          return self.memoArray[n]
        else:
          self.memoArray[n] = self.fibonacci(n - 1) + self.fibonacci(n - 2)
          return self.memoArray[n]
        
dp = dynamicProgramming(10)
print(dp.fibonacci(10))