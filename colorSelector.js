let colorId = document.getElementById("colorId");
let bodyBg = document.getElementsByTagName("body");
colorId.onchange = function (event) {
    console.log(event.target.value)
    colorId=event.target.value;
    if(event.target.value== ""){
        alert("write a color");
    }else{
        bodyBg[0].style.backgroundColor=event.target.value;
    }
}