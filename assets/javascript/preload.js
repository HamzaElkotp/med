function preload(){
    document.getElementById('Prload').style.display = 'none';
    document.getElementById('HTML').style.overflowY = 'scroll';
    setTimeout(() => {
        document.getElementById("popup-1").classList.toggle("active");
        document.getElementById('HTML').style.overflowY = 'clip';
    }, 1500);
    
    setTimeout(() => {
        document.getElementById('pops-conatainer').style.display = 'block';
    }, 500);
}
function destruction(){
    document.getElementById('popup-1').style.display = 'none';
    document.getElementById('HTML').style.overflowY = 'scroll';
}

setTimeout(() => {
    document.getElementById('pops-conatainer').style.display = 'none';
}, 20000);