const sentence = "this is my pen";
console.log(sentence)
const words = sentence.split(" ");
console.log(words)
let reversewords = [];
console.log(reversewords)

for(let i = words.length -1; i>=0; i--){
    console.log(words[i])
    reversewords.push(words[i]);
}
console.log(reversewords)
const reversedsentence = reversewords.join(" ")
console.log(reversedsentence)