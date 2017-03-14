    
var counter = 2;
var limit = 4;
function addInput(divName){
     if (counter === limit)  {
          alert("Max 4 Kriterien in der Light Version - Zu Pro Upgraden");
     }
     else {
          var newdiv = document.createElement('div');
          newdiv.innerHTML = " <input type='text' id='skriterium"+counter+"'  name='myInputs[]' placeholder='Kriterium eingeben'>";
          document.getElementById(divName).appendChild(newdiv);
          counter++;
     }
} 