//function that display value
function dis(val) 
         { 
             document.getElementById("result").value+=val 
         }
//function that evaluates the digit and return result
function solve() 
         { 
             let x = document.getElementById("result").value 
             let y = eval(x) 
             document.getElementById("result").value = y 
         }

function clr() 
         { 
             document.getElementById("result").value = "" 
         } 

