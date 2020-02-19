const a=prompt('nhap so').split(',')
console.log(a)
var t = 0
for(var i=0;i<a.length;i++) {  
    t +=Number(a[i]) 
   }
   console.log('tong chuoi vua nhap'+' '+t)