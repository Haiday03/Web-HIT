const obj = {
    name: "Hai",
    age : 19,
    address: "Nam Dinh"
};

const run = (Object) => {
    let arr = [];
    var i = 0;
    for(const key in Object){
        arr[i] = Object[key];
        i++; 
    }
    console.log(arr);
}

run(obj);