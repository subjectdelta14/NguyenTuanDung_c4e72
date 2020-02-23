 phone={
 xiaomi:{
    number:'1',
    name:'Xiaomi portable charger 20000mah',
    brand:'Xiaomi ',
    price:'428',
    color:'White',
    category:'Charger ',
    provider:'Phukienzero Dientuccc'
},
 vsmart:{
        number:'2',
        name:' VSmart Active 1',
        brand:'VSmart',
        price:'5487',
        color:'Black',
        category:'Phone ',
        provider:'Tgdd Ddghn VhStore'
    },    
iphone:{
            number:'3',
            name:'IPhone X ',
            brand:'Apple',
            price:'21490',
            color:'Gray',
            category:'Phone',
            provider:'Tgdd'
        },    
samsung:{
            number:'4',
            name:'Samsung Galaxy A9 ',
            brand:'Samsung',
            price:'8490',
            color:'Blue',
            category:'Phone',
            provider:'Tgdd'
        }
    }
 //          
for(let i in phone.xiaomi){
    console.log(i+' '+phone.xiaomi[i])
}
console.log('=================')
for(let i in phone.vsmart){
    console.log(i+' '+phone.vsmart[i])
}
console.log('=================')
for(let i in phone.iphone){
    console.log(i+' '+phone.iphone[i])
}
console.log('=================')
for(let i in phone.samsung){
    console.log(i+' '+phone.samsung[i])
}
//
a=Number(prompt('nhap'))
if(a=='1'){
    for(let i in phone.xiaomi){
        console.log(i+' '+phone.xiaomi[i])
    }
}else if(a=='2'){
    for(let i in phone.vsmart){
        console.log(i+' '+phone.vsmart[i])
    }

}else if(a=='3'){
    for(let i in phone.iphone){
        console.log(i+' '+phone.iphone[i])
    }
}else if(a=='4'){
    for(let i in phone.samsung){
        console.log(i+' '+phone.samsung[i])
    }
}else if(a>4){
    b=Number(prompt('khg co san pham'+' '+a+'\n xin hay thu so be hon 5'))
    if(b=='1'){
        for(let i in phone.xiaomi){
            console.log(i+' '+phone.xiaomi[i])
        }

    }else if(b=='2'){
        for(let i in phone.vsmart){
            console.log(i+' '+phone.vsmart[i])
        }
    
    }else if(b=='3'){
        for(let i in phone.iphone){
            console.log(i+' '+phone.iphone[i])
        }
    }else if(b=='4'){
        for(let i in phone.samsung){
            console.log(i+' '+phone.samsung[i])
        }
    }
}else if(Number.isNaN(a)){
    alert('yeu cau nhap chu so')
}
//
k=prompt('nhap category')
if(k=='phone'){
    //for(let i in phone.vsmart){
        console.log('name'+' '+phone.vsmart.name)
        console.log('price'+' '+phone.vsmart.price)
    //}
   // for(let i in phone.iphone){
        console.log('name'+' '+phone.iphone.name)
        console.log('price'+' '+phone.iphone.price)
    //}
    //for(let i in phone.samsung){
        console.log('name'+' '+phone.samsung.name)
        console.log('price'+' '+phone.samsung.price)
    //}
    
}else if(k=='charge'){
    console.log('name'+' '+phone.xiaomi.name)
    console.log('price'+' '+phone.xiaomi.price)
}
//