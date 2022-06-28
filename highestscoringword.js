// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

function high(x){
    // We concatenate a single space at the end of the given string x. We will use the spaces detected in our for loop to splice the characters using the indices j and i. We convert the string to lowercase letters when we push the element to the array xarr. We then assign the value of alphabet to the all the letters of the alphabet in a single string. We then use three nested for loops to compare each letter of the individual elements of the xarr, then compare the letters to each letter of the alphabet. The score of each letter will be based on the index of from the alphabet plus one. Then we must assign a sum so that in each detection of same letter it will add the indices, then the total sum in each iteration will be pushed to the sum array. Then we create a new array arr1 for comparison purposes using another for loop, we will do this because we will use the sort funtion to arrange the elements of the sum array in descending order. Then we will know for sure that the highest score will be at index zero. 
    x = x.concat(' ')
    let xarr = []
    j = 0
    for(i=0; i<=x.length-1; i++){
        if(x[i] == ' '){
            // console.log(j,i)
            xarr.push(x.slice(j,i).toLowerCase())
            j = i + 1
        }
    }
    // console.log(xarr)

    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let arr = []
    for(i=0; i<=xarr.length-1; i++){
        sum = 0
        for(j=0; j<=xarr[i].length-1; j++){
            for(k=0; k<=alphabet.length-1; k++){
                if(xarr[i][j] == alphabet[k]){
                    sum = sum + alphabet.indexOf(alphabet[k])+1
                }
            }
        }
        // console.log(sum)
        arr.push(sum)
    }
    let arr1 = []
    for(i=0; i<=arr.length-1; i++){
        arr1.push(arr[i])
    }

    arr.sort(function(a, b){return b-a});
    // console.log(arr)
    let highestscore = arr[0]
    // console.log(highestscore)
    // console.log(arr1)
    // console.log(arr1.indexOf(highestscore))
    console.log(`Highest scoring word is: ${xarr[arr1.indexOf(highestscore)]}`)
    console.log(`Score: ${highestscore}`)
}
high('man i need a taxi up to ubud')
console.log('========')
high('take me to semynak')
console.log('========')
high('what time are we climbing up the volcano')
console.log('========')
high('aaz cd ef gh CARL')