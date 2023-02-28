let p=new Promise((resolve,reject)=>{
    let a=1 + 1
    if(a==2){
resolve('Success')
    }else{
        reject('Failed')
    }
})


p.then((message)=>{ //then is called when promise resolve successfully
    console.log('this is in the ' + message)
}).catch((message)=>{//catch is called when promise failed
    console.log('This is in the catch  '+  message)
})