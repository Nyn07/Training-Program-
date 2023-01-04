/* Loop Program
Sum of first Fibbonaci Series*/
n1 = 0
n2= 1
for (i=1; i<=10; i++) {
     sum = n1+n2
    console.log('Sum of Series' + i + ' = ',sum)
     
     n1=n2
     n2 =sum
    }
console.log('Sum of first 10 Fibbonaci Series are = ',sum);