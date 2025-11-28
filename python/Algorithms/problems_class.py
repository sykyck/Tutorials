import sys

class Probems:
    def bestTimeToBuyAndSell(self, prices: list[int]) -> int:
       maxProfit = 0
       minValue = prices[0]
       for i in range(len(prices)) :
           if prices[i] - minValue > maxProfit:
               maxProfit = prices[i] - minValue
           if prices[i] < minValue:
               minValue = prices[i]
       return maxProfit

problems = Probems()
print(problems.bestTimeToBuyAndSell([7,1,5,3,6,4]))