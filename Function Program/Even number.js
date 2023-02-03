//function program of even no.
const a = Number.parseInt(prompt ('Enter a no. upto which you want even no.'))
let s = 0
let e = 0
function even(c,d){
e = s+2
s=e
e=e+1
return s}
while (e<a) {
console.log ('Even no. upto '+ a +' = '+ even (s))}