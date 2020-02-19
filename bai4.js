console.log('chao mung den vs cua hang')
let menu=[
    'quan bo jean',
    'ao dai',
    'ao ngan',
    'ao so mi',
]

thaotac=prompt('thao tac').toUpperCase()//viet hoa

if(thaotac=='U'){
let a=Number(prompt('nap a'))
if(Number.isNaN(a)){
    console.log('nhap lai di')
}else {
    if (a=>menu.length){
        console.log('nap be')
    }else {
        let a=Number(prompt('nap a'))
        let b=prompt('nap b')
        menu[a]=b
    }
}

for(let i=0;i<menu.length;i++){
console.log(menu[i])
}
}else if(thaotac=='R'){
    for(let i=0;i<menu.length;i++){
    console.log(menu[i])
    }
}else if(thaotac=='C'){
    he=prompt(' day vao')
    menu.push(he)
    for(let i=0;i<menu.length;i++){
    console.log(menu[i])
    }
}else if(thaotac=='D'){
    vitri=Number(prompt('nap vi tri'))
    //vitri2=Number(prompt('nap vi tri 2'))// khong nen de xoa nhung cai khong muon xoa
    monAn.splice(vitri, 1)
    for(let i=0;i<menu.length;i++){
    console.log(menu[i])
    }

}//else if(!thaotac=='U' && !thaotac=='R'&& !thaotac=='C' && !thaotac=='D'){
   // console.log('yeu cau nhap lai dung thao tac U R C D')
//}

//for(let i=0;i<menu.length;i++){
  //  console.log(menu[i])
//}