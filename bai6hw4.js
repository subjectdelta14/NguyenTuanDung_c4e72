console.log('hello there')
const job=[
    html={
        name:'html',
        complete: false
    },
    css={
        name:'css',
        complete: false
    },
    basicofjs={
        name:'Basic of js',
        complete: false
    },
    npm={
        name:'none package',
        complete: false
    },
    git={
        name:'git',
        complete: false
    }
]

a=prompt('nhap new delet update complete')
if(a=='new'){
    b=prompt('nhap ten')
    job[b]={
        name: b,
        complete: false
    }
    for(let i in job)(
        console.log(`${job[i]['name']} \n  Complete: ${job[i]['complete']}`)
    )
}else if(a=='update'){
    c=Number(prompt('nhap vi tri can sua'))-1
    c1=prompt('nhap ten')
    job[c]={
        name: c1,
        complete: false
    }
    for(let i in job)(
        console.log(`${job[i]['name']} \n  Complete: ${job[i]['complete']}`)
    )
}else if(a=='delet'){
    d=Number(prompt('nhap vi tri can xoa'))-1
    job.splice(d,1)
    for(let i in job)(
        console.log(`${job[i]['name']} \n  Complete: ${job[i]['complete']}`)
    )
}else if(a=='complete'){
    e=Number(prompt('nhap vi tri can sua'))-1
    job[e].complete= true
    for(let i in job)(
        console.log(`${job[i]['name']} \n  Complete: ${job[i]['complete']}`)
    )

}