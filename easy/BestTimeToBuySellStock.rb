# You are given an array prices where prices[i] is the price of a given stock on the ith day.

# You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

# Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

def max_profit(prices)
  max = 0
  min = Float::INFINITY
  prices.each { |price|
      if price < min
          min = price
      else
          max = [max, price - min].max
      end
  }
  return max
end

puts max_profit([7,1,5,3,6,4]) == 5
puts max_profit([7,6,5,4,3,2]) == 0