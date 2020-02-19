const a=prompt('nhap so').split(',')
console.log(a)
b=a[0]
for(var i=0;i<a.length;i++){
    if(b>a[i]){
        b=a[i]
    }
    
}
console.log(b)