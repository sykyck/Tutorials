import sys

class Probems:
    def maxProfitOnOneBuyAndSell(self, prices: list[int]) -> int:
       maxProfit = 0
       buyValue = prices[0]
       for i in range(len(prices)) :
           if prices[i] - buyValue > maxProfit:
               maxProfit = prices[i] - buyValue
           if prices[i] < buyValue:
               buyValue = prices[i]
       return maxProfit
    
    def maxProfitOnMultipleBuyAndSell(self, prices: list[int]) -> int:
        maxProfit =0
        buyValue = prices[0]
        hasStock = False
        totalDays = len(prices)
        for i in range(totalDays):
           if (not hasStock) and (buyValue >= prices[i]):
             buyValue=prices[i]
             hasStock=True
           if hasStock and ((i==totalDays-1 and buyValue < prices[i]) or (i!=totalDays-1 and prices[i] >= prices[i+1])) :
              maxProfit = maxProfit + prices[i] - buyValue
              hasStock=False
              if (i+1) < totalDays:
                buyValue = prices[i+1]
        return maxProfit

problems = Probems()
print(problems.maxProfitOnOneBuyAndSell([7,1,5,3,6,4]))