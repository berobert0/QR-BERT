let escaneado = false;

window.onload = iniciar;

function iniciar(){

  const qr = new Html5Qrcode("reader");

  Html5Qrcode.getCameras().then(devices => {

    if(devices.length === 0){
      document.getElementById("mensaje").innerHTML = "❌ No hay cámara";
      return;
    }

    let camara = devices[devices.length - 1];

    qr.start(
      camara.id,
      { fps:10, qrbox:250 },
      (texto) => {

        if(escaneado) return;
        escaneado = true;

        document.getElementById("mensaje").innerHTML = "QR detectado: " + texto;

        setTimeout(()=> escaneado=false, 3000);
      }
    );

  }).catch(()=>{
    document.getElementById("mensaje").innerHTML = "❌ Permiso denegado";
  });
}
