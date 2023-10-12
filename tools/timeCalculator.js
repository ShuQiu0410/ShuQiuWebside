var target_time = document.getElementById("target");
var local = document.getElementById("local");
var l_mon = document.getElementById("l_mon");
var l_day = document.getElementById("l_day");
var l_hou = document.getElementById("l_hou");
var l_min = document.getElementById("l_min");
var l_ces = document.getElementById("l_sec");
var there = document.getElementById("there");
var t_mon = document.getElementById("t_mon");
var t_day = document.getElementById("t_day");
var t_hou = document.getElementById("t_hou");
var t_min = document.getElementById("t_min");
var t_ces = document.getElementById("t_sec");
function getTime(){
    //var time = "日:"+date.getUTCDate()+"時:"+date.getUTCHours()+"分:"+date.getUTCMinutes()+"秒:"+date.getUTCSeconds();
    date = new Date();
    l_mon.innerHTML = (date.getMonth()+1)
    l_day.innerHTML = (date.getDate())
    l_hou.innerHTML = (date.getHours())
    l_min.innerHTML = (date.getMinutes())
    if(date.getSeconds()<10){
        l_ces.innerHTML = "0"+date.getSeconds()
    }else{
        l_ces.innerHTML = (date.getSeconds())
    }
    there_time()
}
setInterval("getTime()",1000);
//
function there_time(){
    if(true){
        date = new Date();
        t_mon.innerHTML = (date.getMonth()+1)
        t_day.innerHTML = (date.getDate());
        if(target_time.value[0]=="0"){
            t_hou.innerHTML = ((parseInt(date.getHours())+parseInt(target_time.value[1])*10+parseInt(target_time.value[2])));
        }else if(target_time.value[0]=="1"){
            t_hou.innerHTML = ((parseInt(date.getHours())-parseInt(target_time.value[1])*10-parseInt(target_time.value[2])));
        }
        if(target_time.value[3]=="5"){
            t_min.innerHTML = (parseInt(date.getMinutes())+30);
        }else if(target_time.value[3]=="7"){
            t_min.innerHTML = (parseInt(date.getMinutes())+45);
        }else{
            t_min.innerHTML = (parseInt(date.getMinutes()));
        }
        t_ces.innerHTML = date.getSeconds()
        if(parseInt(t_ces.innerHTML)<10){
            t_ces.innerHTML = "0"+date.getSeconds();
        }
        if(parseInt(t_min.innerHTML)<10){
            if(target_time.value[3]=="5"){
                t_min.innerHTML = "0"+(parseInt(date.getMinutes())+30);
            }else if(target_time.value[3]=="7"){
                t_min.innerHTML = "0"+(parseInt(date.getMinutes())+45);
            }else{
                t_min.innerHTML = "0"+(parseInt(date.getMinutes()));
            }
        }
        if(parseInt(t_hou.innerHTML)<10){
            t_hou.innerHTML = "0"+(parseInt(date.getHours())+parseInt(target_time.value[1])*10+parseInt(target_time.value[2]))
        }
        if(parseInt(t_day.innerHTML)<10){
            t_day.innerHTML = "0"+date.getDate()
        }
        if(parseInt(t_min.innerHTML)>59){
            t_min.innerHTML=parseInt(t_min.innerHTML)-60;
            t_hou.innerHTML=parseInt(t_hou.innerHTML)+1}
        if(parseInt(t_hou.innerHTML)>23){
            t_hou.innerHTML=parseInt(t_hou.innerHTML)-24;
            t_day.innerHTML=parseInt(t_day.innerHTML)+1}
        if(parseInt(t_hou.innerHTML)<0){
            t_hou.innerHTML=parseInt(t_hou.innerHTML)+24;
            t_day.innerHTML=parseInt(t_day.innerHTML)-1}
        if(parseInt(t_day.innerHTML)>31&&(t_mon==1||t_mon==3||t_mon==5||t_mon==7||t_mon==8||t_mon==10||t_mon==12)){
            t_day.innerHTML=parseInt(t_day.innerHTML)-31;
            t_mon.innerHTML=parseInt(t_mon.innerHTML)+1;
        }else if(parseInt(t_day.innerHTML)>30&&(t_mon==4||t_mon==6||t_mon==9||t_mon==11)){
            t_day.innerHTML=parseInt(t_day.innerHTML)-30;
            t_mon.innerHTML=parseInt(t_mon.innerHTML)+1;
        }else if(t_day>29&&t_mon==2&&((date.getYear()%4==0&&!date.getYear()%100)||date.getYear()%400==0)){
            t_day.innerHTML=parseInt(t_day.innerHTML)-29;
            t_mon.innerHTML=parseInt(t_mon.innerHTML)+1;
        }else if(t_day>28&&t_mon==2){
                t_day.innerHTML=parseInt(t_day.innerHTML)-28;
            t_mon.innerHTML=parseInt(t_mon.innerHTML)+1;
        }
        if(t_mon>12){
            t_mon.innerHTML=parseInt(t_mon.innerHTML)+12;
        }
            
        
    
    }
}

function debug(){
    console.log(parseInt(t_min.innerHTML)>59)
}