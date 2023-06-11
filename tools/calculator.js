var screen_box = document.getElementById("screen_box");
var is_float = false;
var num_1 = 0;
var math = 0;
function clearbox(){
    screen_box.innerHTML ="";
    math=0;
    is_float=false;
}
function input_1(){
    if(screen_box.innerHTML == "0"||screen_box.innerHTML == ""){
        screen_box.innerHTML=1;
    }else{
        screen_box.innerHTML+="1";
    }
}
function input_2(){
    if(screen_box.innerHTML == "0"||screen_box.innerHTML == ""){
        screen_box.innerHTML=2;
    }else{
        screen_box.innerHTML+="2";
    }
}
function input_3(){
    if(screen_box.innerHTML == "0"||screen_box.innerHTML == ""){
        screen_box.innerHTML=3;
    }else{
        screen_box.innerHTML+="3";
    }
}
function input_4(){
    if(screen_box.innerHTML == "0"||screen_box.innerHTML == ""){
        screen_box.innerHTML=4;
    }else{
        screen_box.innerHTML+="4";
    }
}
function input_5(){
    if(screen_box.innerHTML == "0"||screen_box.innerHTML == ""){
        screen_box.innerHTML=5;
    }else{
        screen_box.innerHTML+="5";
    }
}
function input_6(){
    if(screen_box.innerHTML == "0"||screen_box.innerHTML == ""){
        screen_box.innerHTML=6;
    }else{
        screen_box.innerHTML+="6";
    }
}
function input_7(){
    if(screen_box.innerHTML == "0"||screen_box.innerHTML == ""){
        screen_box.innerHTML=7;
    }else{
        screen_box.innerHTML+="7";
    }
}
function input_8(){
    if(screen_box.innerHTML == "0"||screen_box.innerHTML == ""){
        screen_box.innerHTML=8;
    }else{
        screen_box.innerHTML+="8";
    }
}
function input_9(){
    if(screen_box.innerHTML == "0"||screen_box.innerHTML == ""){
        screen_box.innerHTML=9;
    }else{
        screen_box.innerHTML+="9";
    }
}
function input_00(){
    if(screen_box.innerHTML == "0"||screen_box.innerHTML == ""){
        screen_box.innerHTML=0;
    }else{
        screen_box.innerHTML+="00";
    }
}
function input_0(){
    if(screen_box.innerHTML == "0"||screen_box.innerHTML == ""){
        screen_box.innerHTML=0;
    }else{
        screen_box.innerHTML+=0;
    }
}
function input_dot(){
    if(!is_float){
        screen_box.innerHTML+=".";
        is_float=true;
    }
}
function additions(){
    num_1 = parseFloat(screen_box.innerHTML);
    screen_box.innerHTML = "";
    math = 1;
    is_float = false;
}
function subtraction(){
    num_1 = parseFloat(screen_box.innerHTML);
    screen_box.innerHTML = "";
    math = 2;
    is_float = false;
}
function multiplication(){
    num_1 = parseFloat(screen_box.innerHTML);
    screen_box.innerHTML = "";
    math = 3;
    is_float = false;
}
function division(){
    num_1 = parseFloat(screen_box.innerHTML);
    screen_box.innerHTML = "";
    math = 4;
    is_float = false;
}
function revertion(){
    if(!screen_box.innerHTML == "0"||!screen_box.innerHTML == ""){
        screen_box.innerHTML = parseFloat(screen_box.innerHTML)*-1;
    }
}
function ans(){
    if(math==1){
        var ans_num = num_1 + parseFloat(screen_box.innerHTML) ;
        screen_box.innerHTML = ans_num ;
        
    }else if(math==2){
        var ans_num = num_1 - parseFloat(screen_box.innerHTML);
        screen_box.innerHTML = ans_num ;
    }else if(math==3){
        var ans_num = num_1 * parseFloat(screen_box.innerHTML);
        screen_box.innerHTML = ans_num ;
    }else if(math==4){
        var ans_num = num_1 / parseFloat(screen_box.innerHTML);
        screen_box.innerHTML = ans_num ;
    }
    math = 0;
    is_float = false;
}
