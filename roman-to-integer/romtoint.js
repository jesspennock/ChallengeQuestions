const romanNumString = "MCDLXXIV"

const romanHash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  console.log(romanHash.D)

  function romanToInt(str) {
    let intCounter =0
    for (let i = 0; i<str.length; i++) {
        console.log(str[i])
        if (str[i]==="I" && str[i+1]==="V"){
            intCounter += 4;
            i++;
        }
        else if (str[i]==="I" && str[i+1]==="X"){
            intCounter += 9;
            i++;
        }
        else if (str[i]==="X" && str[i+1]==="L"){
            intCounter += 40;
            i++;
        }
        else if (str[i]==="X" && str[i+1]==="C"){
            intCounter += 90;
            i++;
        }
        else if (str[i]==="C" && str[i+1]==="D"){
            intCounter += 400;
            i++;
        }
        else if (str[i]==="C" && str[i+1]==="M"){
            intCounter += 900;
            i++;
        }
        else{
            intCounter += romanHash[str[i]] // romanHash.str[i] dot notation would expect an explicit "str" as a key, bracket notation allows you to access a key on an object when that key is dynamic
        }
    }
    return intCounter
}
console.log(romanToInt(romanNumString))