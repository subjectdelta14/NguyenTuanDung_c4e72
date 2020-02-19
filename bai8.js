var a=[5,56,78,400,67,87,89]
//const a=prompt('nhap so').split(',')
console.log('hello this is my sheep size\n',...a)

//console.log('the biggest sheep'+' '+Math.max(...a )+' '+'let shape')

var b = a[0]
var t1 = 0
g=Number(prompt('so thang muon nuoi'))


for(let m=1;m<=g;m++){
    b=a[0]
    for(i=0;i<a.length;i++){
        if(b<a[i]){
            b=a[i]
        }
    } 
  console.log('Now my biggest sheep has size '+ b +' let\'s shave it')
    for(let j=0;j<a.length;j++){
        if(b==a[j]){
            a[j]=8
        }
    }
    console.log('after shearing,here is my flock \n ',...a)

    for(let s=0;s<a.length;s++){
        
            a[s]+=50  
    }
    console.log('thang ' + m + ' sau khi nuoi\n',...a)
}
for(let r=0;r<a.length;r++){
t1+=a[r]
tien = t1*25
}
console.log('tong size'+' '+t1+'\n'+'tong tien kiem dc'+' '+tien)

