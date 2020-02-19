const arr = [3, 4, 6, -9, 10, -88, 2];
console.log(arr)
a=Number(prompt('nhap so'))
for(var i=0;i<arr.length;i++){
    if(a==arr[i]){
        console.log(a+' '+'duoc tim thay o index'+' '+i)
    } else if(a!=arr[i]){
        console.log('khg tim thay')
       }
    
}
