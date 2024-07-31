// declare a string

const string1 = "hello"

const string2 = 'hello'

// to declare string in multiple lines

const string3 =   `
hello 
string 
in
multiple 
lines
`

// template literal
const string4 = `${string3} text`

//length of the string
const my_name = "Atique Vellore"
//console.log (`length of my name is ${my_name.length}`)

//accessing char of a str
//console.log(my_name[3], my_name.charAt(3))

// looping through the string
for(let i=0 ;i <my_name.length ;i++) {
    //console.log(my_name[i])
}

// Modifying the strings using replace method which returns a new string
// str[index] = "3" cannot be done as str as immutable
my_name.replace("Vellore", "Bokhari")
// replaceAll replaces all the occurences 
my_name.replaceAll('e','b')

// join the two strings
const newStr = my_name.concat(" Bokhari ")
//console.log("concatenated string", newStr)

// the trim method removes the leading whitespaces from the string it can remove space between the string
//console.log("       Hello         ".trim())

//searching using indexOf method
// console.log(" index".indexOf('i'))
// console.log("indexxx".lastIndexOf('x'))

// //
// console.log("index".startsWith("i"))
// console.log("index".endsWith("i"))

//extracting substrings
console.log("hello world".slice(0,-1))

//String conversion
// obj to string

const obj= {name : "atique"}
console.log("converted string ", typeof(JSON.stringify(obj)))
// case conversion
console.log("MD ATIQUE BOKHARI VELLORE".toLowerCase().toUpperCase().includes("VELLORE"))


// splitting and Joining Strings
console.log("md atique bokhari vellore".split(' ').join("hello"))
