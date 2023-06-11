var times = document.getElementById("times");
var chance = document.getElementById("chance");
var button = document.getElementById("button");

button.addEventListener("click",function(){
    if(chance.value>100){
        document.getElementById("ans").innerHTML="Input Error";
    }else if(chance<0){
        document.getElementById("ans").innerHTML="Input Error";
    }else{
        var ans = (1-(Math.pow((1-chance.value/100),times.value)))*100;
        ans = Math.round(ans*1000)/1000;
        document.getElementById("ans").innerHTML=ans+"%";
    }
})
