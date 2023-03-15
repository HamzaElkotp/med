$(document).ready(function(){
    //jquery for toggle sub menus
    $('.sub-btn').click(function(){
      $(this).next('.sub-menu').slideToggle();
      $(this).find('.dropdown').toggleClass('rotate');
    });

    //jquery for expand and collapse the sidebar
    $('.menu-btn').click(function(){
      $('.side-bar').addClass('active');
      $('.menu-btn').css("visibility", "hidden");
    });

    $('.close-btn').click(function(){
      $('.side-bar').removeClass('active');
      $('.menu-btn').css("visibility", "visible");
    });
  });

  $(document).ready(function() {
    $('#example').DataTable();
} );

$(document).ready(function() {
  $('#bills').DataTable();
} );


function changeis(clicked_id){
  document.getElementById(clicked_id).nextElementSibling.classList.add('chShow');
}

function datatableLecure(clicked_id){
  document.getElementById(clicked_id).nextElementSibling.classList.add('chShow');
}

function editpop(){
  edit.style.display = 'block';
}



adds.onchange = function adds() {
  var fi = document.getElementById('adds');
  if (fi.files.length > 0) {
      document.querySelector('.file-name1').innerHTML = `اجمالي الملفات: <b> ${fi.files.length} </b>`;
      for (var i = 0; i <= fi.files.length - 1; i++) {
          var fname = fi.files.item(i).name; 
          document.querySelector('.file-name1').innerHTML = 
          `${document.querySelector('.file-name1').innerHTML} <br/> ${fname}`;
      }
  }
}

lecturebg.onchange = function lecturebg() {
  var fi = document.getElementById('lecturebg');
  if (fi.files.length > 0) {
      document.querySelector('.file-name2').innerHTML = `اجمالي الملفات: <b> ${fi.files.length} </b>`;
      for (var i = 0; i <= fi.files.length - 1; i++) {
          var fname = fi.files.item(i).name; 
          document.querySelector('.file-name2').innerHTML = 
          `${document.querySelector('.file-name2').innerHTML} <br/> ${fname}`;
      }
  }
}



function editclick(){
  edit.style.display = 'block';
  shadows.style.display = 'block';
  document.getElementById('yes').onclick = function dddd(){
    document.getElementById('times').disabled = false;
    edit.style.display = 'none';
    shadows.style.display = 'none';
  }
}



function cofirm(){
  cof.style.display = 'block';
}

function noti(){
  notification1.style.display = 'block';
}