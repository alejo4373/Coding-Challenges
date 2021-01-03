const getChange = (money, price) => {
  const coins = [1, 5, 10, 25, 50, 100]
  const changeArr = (new Array(coins.length)).fill(0)

  let moneyCents = money * 100
  let priceCents = price * 100

  let change = moneyCents - priceCents;
  for (let i = coins.length - 1; i >= 0; i--) {
    let coin = coins[i]
    while (change - coin >= 0) {
      change = Math.floor(change - coin)
      changeArr[i]++
    }
  }

  return changeArr
}

module.exports = getChange
