var istatus = document.querySelector("h3")

var addConnection = document.querySelector("#add")
var sendMessage = document.querySelector("#send")

addConnection.addEventListener("click",function(){
  istatus.innerHTML = "Friend👋😄";
  istatus.style.color = "blue";
})

sendMessage.addEventListener("click",function(){
  istatus.innerHTML = "How are you?";
  istatus.style.color = "green";
})

var con = document.querySelector("#card")
var love = document.querySelector("i")

con.addEventListener("dblclick",function(){
  love.style.transform = "scale(1)"
  setTimeout(function(){
    love.style.transform = "scale(0)"
  },2000);
});

