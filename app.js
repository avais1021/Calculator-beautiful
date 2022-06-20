//getnumber
function number(num){
    var result = document.getElementById("input");
    result.value += num;
}

//getresult

function result(){
    var result = document.getElementById("input");
    result.value = eval(result.value);
}

//clear result 

function clearR(){
    var result = document.getElementById("input");
    result.value = "";
}

//delete 
function deletechar(){
var result = document.getElementById("input");
var remove = result.value;
remove = remove.slice(0,-1);
result.value = remove ;
}