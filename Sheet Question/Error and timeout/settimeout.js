//setTimeout program
const m = parseInt(prompt('Enter Number from where you have to start counting'))
const n = parseInt(prompt('Enter Number upto which you have to  do counting'))

for (let j = m; j <= n; j++) {
  setTimeout(() => {
    console.log(j)
  }, 200 * j)
}