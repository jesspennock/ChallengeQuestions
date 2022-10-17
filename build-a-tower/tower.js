
const starTower = (num) => {
    let space = []
    let star = []
    let tower = []
    for(i=0; i<num; i++){
        space = ' '.repeat(num -i -1);
        star = '*'.repeat(2*i +1);
        tower.push(`${space}${star}${space}`)
    }
return tower;
}
console.log(starTower(10))