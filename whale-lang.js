const input = "lorem ipsum dolar sit amet"

const vowels = ["a", "e", "i", "o", "u"]

let resultArray = []

for(let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  //console.log('inputIndex', input[inputIndex])
  for (let x = 0; x < vowels.length; x++) {
    //console.log("x = " + x)
    if(input[inputIndex] === vowels[x]) {
      if(input[inputIndex] === 'e') {
        resultArray.push('ee')
      } else if(input[inputIndex] === 'u')  {
        resultArray.push('uu')
      } else {
        resultArray.push(input[inputIndex])
      }
    }
  }
}

console.log(resultArray.join("").toUpperCase())
