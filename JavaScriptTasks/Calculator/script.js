function solve(){
    document.getElementById("a").value;
}

function clr(){
    document.getElementById("a").value =" ";
}

function pick(val){
    let x = document.getElementById("a").value +=val ;
    let y = eval(x);
    document.getElementById("a").value = y;
}