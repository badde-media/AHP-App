var counter = 3;
var limit = 5;
function addInputgr(divName){
     if (counter === limit)  {
          alert("Max 4 Kriterien in der Light Version - Zu Pro Upgraden");
     }
     else {
          var newdiv = document.createElement('div');
          newdiv.innerHTML = " <input type='text' id='nkriterium"+counter+"'  name='myInputs[]' placeholder='Kriterium eingeben'>";
          document.getElementById(divName).appendChild(newdiv);
          counter++;
     }
} 