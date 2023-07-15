var arr = new Array("John", "Ali", "julli","Minni");
for(var i=0; i<arr.length; i++){
    if(arr[i].startsWith("J",0)|| arr[i].startsWith("j",0)){
        console.log("Goodbye " + arr[i])
    }
    else{
        console.log("Hello "+ arr[i])
    }
}