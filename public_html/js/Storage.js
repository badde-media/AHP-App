$(function() {
    


function getItem(){
if (typeof(Storage) !== "undefined") {
    var nname= localStorage.getItem("nname");
    var nkriterium1= localStorage.getItem("nkriterium1");
    if (nname === null) { nname =""; }
    if (nkriterium1 ===null) {nkriterium1 ="";}
document.getElementbyId("loadData").innerHTML += "Hallo" + nname + " " + nkriterium1;
}

else {
    document.getElementById("loadData").innerHTML ="Ihr Webbrowser unterstützt kein Web Storage!";
}
}




function saveValue(){
    if (typeof(Storage) !== "undefined") {
        window.localStorage.setItem('nname',document.getElementById('val1').value);
        window.localStorage.setItem('nkriterium1',document.getElementById('crit1').value);
    }
    else {
        alert("Ihr Webbrowser unterstützt kein Web Storage!");
    }
        
}

function clearStorage() {
    window.localStorage.clear();
    
}

});