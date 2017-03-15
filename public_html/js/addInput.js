    
var counter = 3;
var limit = 5;
function addInput(divName){
     if (counter === limit)  {
          alert("Max " + counter + " Kriterien - Zur Pro Version");
     }
     else {
          var newdiv = document.createElement('div');
          newdiv.innerHTML = " <input type='text' id='sing_crit"+counter+"'  name='myInputs[]' placeholder='Kriterium eingeben'>";
          document.getElementById(divName).appendChild(newdiv);
          counter++;
     }
} 