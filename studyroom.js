function showslots(roomid){
var cnt=document.getElementById(roomid)
if(cnt.innerHTML!=""){
cnt.innerHTML=""
return
}
var timeslot=["9 AM - 10 AM","10 AM - 11 AM","11 AM - 12 PM",
"12 PM - 1 PM","1 PM - 2 PM","2 PM - 3 PM",
"3 PM - 4 PM","4 PM - 5 PM","5 PM - 6 PM","6 PM - 7 PM"]
for(var i=0;i<timeslot.length;i++){
var button=document.createElement("button")
button.innerText=timeslot[i]
button.classList.add("slotbutton")
var key=roomid+"_"+timeslot[i]
if(localStorage.getItem(key)=="booked"){
button.classList.add("booked")
}
else{
button.classList.add("available")
}
button.onclick=function(){
var key=roomid+"_"+this.innerText   
if(this.classList.contains("available")){
var confirmbook=confirm("Book this slot?")
if(confirmbook==true){
this.classList.remove("available")
this.classList.add("booked")
localStorage.setItem(key,"booked")
}}
else{
alert("Already Booked")
}}
cnt.appendChild(button)
}}