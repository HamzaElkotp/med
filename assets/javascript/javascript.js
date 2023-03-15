// Nav Bar JS Code For Mobile
function navshow(){
    if (document.getElementById('navbarBasicExample').style.display == 'block'){
        document.getElementById('navbarBasicExample').style.display = 'none';
    }

    else{
        document.getElementById('navbarBasicExample').style.display = 'block';
    }
}

// notificate Bar JS Code
function notificate(){
    if (document.getElementById('notificate').style.display == 'block'){
        document.getElementById('notificate').style.display = 'none';
    }

    else{
        document.getElementById('notificate').style.display = 'block';
    }
}

// charge Bar JS Code
function charge(){
    if (document.getElementById('charge').style.display == 'block'){
        document.getElementById('charge').style.display = 'none';
    }

    else{
        document.getElementById('charge').style.display = 'block';
    }
}


// Filter & sort script
function sortShow1(){
    if (document.getElementById('ul1').style.display == 'none'){
        document.getElementById('ul1').style.display = 'block';
        document.getElementById('angleD1').style.display = 'inline';
        document.getElementById('angleL1').style.display = 'none';
    }

    else{
        document.getElementById('ul1').style.display = 'none';
        document.getElementById('angleL1').style.display = 'inline';
        document.getElementById('angleD1').style.display = 'none';
    }
}
function sortShow2(){
    if (document.getElementById('ul2').style.display == 'none'){
        document.getElementById('ul2').style.display = 'block';
        document.getElementById('angleD2').style.display = 'inline';
        document.getElementById('angleL2').style.display = 'none';
    }

    else{
        document.getElementById('ul2').style.display = 'none';
        document.getElementById('angleL2').style.display = 'inline';
        document.getElementById('angleD2').style.display = 'none';
    }
}
function sortShow3(){
    if (document.getElementById('ul3').style.display == 'none'){
        document.getElementById('ul3').style.display = 'block';
        document.getElementById('angleD3').style.display = 'inline';
        document.getElementById('angleL3').style.display = 'none';
    }

    else{
        document.getElementById('ul3').style.display = 'none';
        document.getElementById('angleL3').style.display = 'inline';
        document.getElementById('angleD3').style.display = 'none';
    }
}
function sortShow4(){
    if (document.getElementById('ul4').style.display == 'none'){
        document.getElementById('ul4').style.display = 'block';
        document.getElementById('angleD4').style.display = 'inline';
        document.getElementById('angleL4').style.display = 'none';
    }

    else{
        document.getElementById('ul4').style.display = 'none';
        document.getElementById('angleL4').style.display = 'inline';
        document.getElementById('angleD4').style.display = 'none';
    }
}


// Page Slider
function PageOpen(pageN) {
    var i;
    var x = document.getElementsByClassName("PGC");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(pageN).style.display = "block";
  }


// Slider Pop Up Bar JS Switch And Button Code
var slideIndex = 1;
    showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("disMessage");
    if (n > x.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = x.length
    }

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"
    }

    x[slideIndex-1].style.display = "block"
}

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("disMessage");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"
    }

    slideIndex++;

    if (slideIndex > x.length) {
        slideIndex = 1
    }

    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 4000)
}



// Buy Pop ==========================================================
function buyPop(){
    buypop.style.display = 'block';
    shadows.style.display = 'block';
}



//  Quiz ============================================================



