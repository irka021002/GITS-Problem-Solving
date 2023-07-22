const readline = require("readline")
function sloane(n){
  return ((n*n) + n + 2)/2
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", n => {
  const series = []
  for(let i = 0; i < n; i++){
    series.push(sloane(i))
  }
  console.log(series.join("-"))
})
