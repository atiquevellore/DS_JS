//  validate palindrome number 

/*
case 1
Input: 121(Integer Number)
Output: true(Boolean Value)

case 2
Input: 10(Integer Number)
Output: false(boolean value)
*/

function palindrome_num(x){
    return x.toString() === x.toString().split('').reverse().join('')
}

console.log(palindrome_num(121))
console.log(palindrome_num(10))
