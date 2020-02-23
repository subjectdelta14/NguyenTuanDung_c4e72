const ex={
    debug:[
        {
            giaithich:'The process of figuring out why your program has a certain error andhow to fix it'
        }
    ],
    done:[
        {
           giaithich:'When your task is complete, the only thing you have to do is to wait forusers to use it (no additional codes or actions needed)'
        }
    ],
    defect:[
        {
            giaithich:'The formal word for ‘error’'
        }
    ],
    pm:[
        {
            giaithich:'The short version of Project Manager, the person in charge of the final result of a project'
        }
    ],
    uiux:[
        {
            giaithich:'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels'
        }
    ]

}
alert('hello there')
k=prompt('nhap dubug done defect pm uiux')
if(k=='debug'){
    for(let i=0;i<ex.debug.length;i++){
        alert(ex.debug[i].giaithich)
        console.log(ex.debug[i].giaithich)
    }
}else if(k=='done'){
    for(let i=0;i<ex.done.length;i++){
        alert(ex.done[i].giaithich)
        console.log(ex.done[i].giaithich)
    }
}else if(k=='defect'){
    for(let i=0;i<ex.defect.length;i++){
        alert(ex.defect[i].giaithich)
        console.log(ex.defect[i].giaithich)
    }
}else if(k=='pm'){
    for(let i=0;i<ex.pm.length;i++){
        alert(ex.pm[i].giaithich)
        console.log(ex.pm[i].giaithich)
    }
}else {
    d=prompt('khg tim thay tu'+' '+k+'\n hay them dinh tu nhap vao')
    alert('done')
    alert(k+'\n'+d)
}