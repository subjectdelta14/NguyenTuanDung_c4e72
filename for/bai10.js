let mass=Number(prompt('Nhap mass'))
let height=Number(prompt('nhap height'))
height=height/100
bmi=mass/(height**2)
console.log('body mass idex'+' '+bmi)
if (bmi<16){
    console.log('Severely')
}else if(bmi>16 && bmi<=18.5){
    console.log('Underweight')
}else if(bmi>18.5 && bmi<=25){
    console.log('Normal')
}else if(bmi>25 && bmi<=30){
    console.log('Overweight')
}else {
    console.log('Obese')
}
