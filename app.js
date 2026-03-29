let escaneado = false;

// 🔥 AQUÍ PONDRÁS TU API DESPUÉS
const API_URL = "https://script.google.com/macros/s/XXXXX/exec";

window.onload = iniciar;

function iniciar(){

  const qr = new Html5Qrcode("reader");

  Html5Qrcode.getCameras().then(devices => {

    if(devices.length === 0){
      document.getElementById("mensaje").innerHTML = "❌ No hay cámara";
      return;
    }

    // 📷 cámara trasera (IMPORTANTE en celulares)
    let camara = devices.find(d => 
      d.label.toLowerCase().includes("back")
    ) || devices[devices.length - 1];

    qr.start(
      camara.id,
      {
        fps:10,
        qrbox:250
      },
      (texto) => {

        if(escaneado) return;
        escaneado = true;

        document.getElementById("mensaje").innerHTML = "⏳ Procesando...";

        // 👉 AQUÍ LUEGO CONECTAMOS A TU SISTEMA
        console.log("QR:", texto);

        fetch(API_URL + "?codigo=" + texto)
        .then(r=>r.text())
        .then(data=>{
          document.getElementById("mensaje").innerHTML = data;
          setTimeout(()=> escaneado=false, 3000);
        })
        .catch(()=>{
          document.getElementById("mensaje").innerHTML = "❌ Error conexión";
          escaneado=false;
        });

      }
    );

  }).catch(err=>{
    document.getElementById("mensaje").innerHTML = "❌ Permiso denegado";
  });
}