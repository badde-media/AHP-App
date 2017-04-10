
function addInput(varname, divName, typ){
    switch (typ)
    {
        case "Kriterium":
            if (kriterienAnzahl === klimit)  {
                 alert("Max " + klimit + " Kriterien in der Light Version - Zu Pro Upgraden");
                 return(kriterienAnzahl);
            }
            else {
                 kriterienAnzahl++;
            }
            var newdiv = document.createElement('div');
            newdiv.innerHTML = " <input type='text' id='"+varname+kriterienAnzahl+"'  name='myInputs[]' placeholder='"+typ+" eintragen'>";
            document.getElementById(divName).appendChild(newdiv);
            return(kriterienAnzahl);
            
        case "Lösung":
            if (loesungenAnzahl === llimit)  {
                 alert("Max " + llimit + " Lösungen in der Light Version - Zu Pro Upgraden");
                 return(loesungenAnzahl);
            }
            else {
                 loesungenAnzahl++;
            }
            var newdiv = document.createElement('div');
            newdiv.innerHTML = " <input type='text' id='"+varname+loesungenAnzahl+"'  name='myInputs[]' placeholder='"+typ+" eintragen'>";
            document.getElementById(divName).appendChild(newdiv);
            return(loesungenAnzahl);
    }
} 