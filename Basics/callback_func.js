let arr = [2,5,7,8,3,4];


function ab(func){
    func(arr,()=>{
        console.log("object")
    });
}

ab((arr,done)=>{
    done()
    for (let i = 0; i < arr.length;i++){
        console.log(arr[i])
    }
})


