let fat = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
let mult = 10

for (let i = 1; i < fat.length; i+=1) {
    mult *= fat[i]
    console.log(mult);    
}
