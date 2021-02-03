## Introduction 

In this sample, we are going to calculate the ATR, average true range, relative to data from 3 candles. Since the calculation for a given True Range needs to use the prior candle closing price, then our array will have 3 candle data:    

```
// The following annotation, type, is not needed. 

let candles = [ 
  {
    candle : 1, 
    close  : 35495, 
    high   : 35964, 
    low    : 35495, 
    type   : "down"
  },
  {
    candle : 2, 
    close  : 36433, 
    high   : 36608, 
    low    : 35361, 
    type   : "up"
  },
  {
    candle : 3, 
    close  : 36353, 
    high   : 36878, 
    low    : 36302, 
    type   : "down"
  },
  {
    candle : 4, 
    close  : 35989, 
    high   : 36353, 
    low    : 35588, 
    type   : "down"
  }
];

```

## Calculating TR 

I have found that this video, [How To Calculate Average True Range (ATR)], offered a great explanation on why the last candle data, closing price, needs to be used. 

```

function calculateBestTrs(candles, i) { 

  let currentCandle = candles[i];
  let previousCandle = candles[i-1];
  
  let calc_1 = Math.abs(currentCandle.high - previousCandle.close);
  console.log(`Math.abs(currentCandle.high - previousCandle.close) : ${calc_1}`);
  
  let calc_2 = Math.abs(currentCandle.low - previousCandle.close);
  console.log(`Math.abs(currentCandle.low - previousCandle.close)  : ${calc_2}`);

  let calc_3 = Math.abs(currentCandle.high - currentCandle.low);
  console.log(`Math.abs(currentCandle.high - currentCandle.low)    : ${calc_3}`);

  return Math.max(calc_1, calc_2, calc_3);
  
}

```

## Printing the results 

```
// For 3 days, starting with day 0 + 1 

let tr1 = calculateBestTrs(candles, 1);
console.log(`Best true range for ${1} is: ${tr1}`);

let tr2 = calculateBestTrs(candles, 2);
console.log(`Best true range for ${2} is: ${tr2}`);

let tr3 = calculateBestTrs(candles, 3);
console.log(`Best true range for ${3} is: ${tr3}`);

```

## Calculating the average 

console.log(`Average: ${((tr1+tr2+tr3)/3)}`);