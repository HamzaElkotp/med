$(document).ready(function() {
    $('#bills').DataTable();
} );

let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');

btn.onclick = function(){
    sidebar.classList.toggle('active');
}


function mobileLinks(){
    if (screen.width <= 768){
        document.getElementById('HideLink1').classList.toggle('toglleHide');
        document.getElementById('rot').classList.toggle('rotate90');
        document.getElementById('rot').classList.remove('rotate180');
        document.getElementById('HideLink2').classList.add('toglleHide');
        document.getElementById('rot2').classList.remove('rotate90');
        document.getElementById('HideLink3').classList.add('toglleHide');
        document.getElementById('rot3').classList.remove('rotate90');
    }
}

function mobileLinks2(){
    if (screen.width <= 768){
        document.getElementById('HideLink2').classList.toggle('toglleHide');
        document.getElementById('rot2').classList.toggle('rotate90');
        document.getElementById('rot2').classList.remove('rotate180');
        document.getElementById('HideLink1').classList.add('toglleHide');
        document.getElementById('rot').classList.remove('rotate90');
        document.getElementById('HideLink3').classList.add('toglleHide');
        document.getElementById('rot3').classList.remove('rotate90');
    }
}

function mobileLinks3(){
    if (screen.width <= 768){
        document.getElementById('HideLink3').classList.toggle('toglleHide');
        document.getElementById('rot3').classList.toggle('rotate90');
        document.getElementById('rot3').classList.remove('rotate180');
        document.getElementById('HideLink1').classList.add('toglleHide');
        document.getElementById('rot').classList.remove('rotate90');
        document.getElementById('HideLink2').classList.add('toglleHide');
        document.getElementById('rot2').classList.remove('rotate90');
    }
}


const fileInput = document.querySelector('#file-upload input[type=file]');
fileInput.onchange = () => {
    if (fileInput.files.length > 0) {
        const fileName = document.querySelector('#file-upload .file-name');
        fileName.textContent = fileInput.files[0].name;
    }
}


