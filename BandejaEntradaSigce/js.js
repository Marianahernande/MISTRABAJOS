// Mostrar mensaje
$('show-msg').click(function() {
    $('.mensaje-cuerpo').css("display", "grid");
  });
  // Ocultar/cerrar mensaje
  $("#close-msg").click(function(){
    $(".mensaje-cuerpo").css("display", "none");
  });

  // Modal Nuevo Mensaje
  var modal = document.getElementById('modal-msg');
  var btn = document.getElementById('new-msg');
  var closeM = document.getElementById('cierraModal');
  var cancelM = document.getElementById('cancel-msg');

  btn.onclick = function() {
    modal.style.display = "block";
  }
  closeM.onclick = function () {
    modal.style.display = "none";
  }
  cancelM.onclick = function(){
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // Tipo de destinatario
  $(function() {
    $('#tipomensaje').change(function(){
      $('.tipo-dest').hide();
      $('#'+$(this).val()).show();
    })
  });

  //Muestra tabla empleados
  $("#destemp").click(function (){
    $("#tblemp").css("display", "block");
    $("#tblusu").css("display","none");
  });

  //Muestra tabla usuarios
  $("#destusu").click(function (){
    $("#tblusu").css("display","block");
    $("#tblemp").css("display", "none");
  });

  //Mostrar más mensajes
  $("#mostrarmsg").click(function() {
    $("div").removeClass("msg-oculto");
  });

