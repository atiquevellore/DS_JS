// Q1: Truncate  the String 

//case1  
// Input: str = "Subscribe to Atique", maxlength = 9
// Output:"Subscribe..."

//case2
//Input: str ="Subsc" , maxLength = 9
// Output: "Subsc"

function truncate(str,maxLength){

    if(maxLength > str.length) {
        return str;
    } 
    return str.slice(0,maxLength) + "..."
}


function truncatesentence(sentence, k){
    let arr_str = sentence.split(" ")
    if(arr_str.length < k) {
        return sentence;
    }
    return arr_str.slice(0,k).join(" ")
}

console.log("truncated sentence",truncatesentence("Hello how are you Contestant",4))
console.log("truncated string",truncate("Subscribe to Atique", 9))