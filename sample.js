
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

/* Calculating TR */ 

function calculateTrs(candles, i) { 

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

let trBest = calculateTrs(candles, 1);

console.log(`Best true range for ${1} is: ${trBest}`);