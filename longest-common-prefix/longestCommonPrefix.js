// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.


const wordsArr1 = ["flower","flow","flight"]
const wordsArr2 =["dog", "cat", "catfish", "dogfood"]
const wordsArr3 = ["abcdefg", "abcdef", "abcde", "abcd"]
const commonPrefix = (words) => {
    let i = 0;
    const firstWord = words[0]
    while(firstWord[i] && words.every(word => word[i] === firstWord[i])) {
        i++;
    }
    if(i === 0){
        return "No common prefixes"
    } 
    return firstWord.substring(0, i);
   
}
console.log(commonPrefix(wordsArr3))