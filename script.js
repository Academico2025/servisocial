const estudiantesAutorizados = [
  {
    doc: "1234567890",
    nombre: "Juan Pérez",
    grado: "11°",
    jornada: "Mañana",
    horas: 80,
    proyecto: "Apoyo al aula de primaria"
  },
  {
    doc: "9876543210",
    nombre: "Laura Gómez",
    grado: "11°",
    jornada: "Tarde",
    horas: 80,
    proyecto: "Huerta escolar y bienestar estudiantil"
  }
];

function generarConstancia() {
  const docInput = document.getElementById("docInput").value.trim();
  const estudiante = estudiantesAutorizados.find(e => e.doc === docInput);

  const constancia = document.getElementById("constancia");
  const error = document.getElementById("error");

  if (estudiante) {
    document.getElementById("nombreEstudiante").textContent = estudiante.nombre;
    document.getElementById("numeroDocumento").textContent = estudiante.doc;
    document.getElementById("grado").textContent = estudiante.grado;
    document.getElementById("jornada").textContent = estudiante.jornada;
    document.getElementById("horas").textContent = estudiante.horas;
    document.getElementById("proyecto").textContent = estudiante.proyecto;

    const hoy = new Date();
    const fechaFormateada = hoy.toLocaleDateString('es-ES', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
    document.getElementById("fechaActual").textContent = fechaFormateada;

    constancia.classList.remove("hidden");
    error.classList.add("hidden");
  } else {
    constancia.classList.add("hidden");
    error.classList.remove("hidden");
  }
}

function imprimirConstancia() {
  const contenido = document.querySelector(".pagina").innerHTML;
  const ventana = window.open('', '', 'height=900,width=700');

  ventana.document.write('<html><head><title>Constancia Servicio Social</title>');
  ventana.document.write('<style>');
  ventana.document.write(`
    @page {
      size: A4;
      margin: 0;
    }

    body {
      font-family: Arial, sans-serif;
      padding: 40px 60px;
      width: 21cm;
      min-height: 29.7cm;
      position: relative;
    }

    .marca-agua {
      position: fixed;
      top: 25%;
      left: 15%;
      width: 70%;
      opacity: 0.05;
      z-index: -1;
    }

    header, footer { text-align: center; }
    .firma-footer img { width: 150px; margin-top: 30px; }
    .firma-footer p { margin-top: 5px; }
    main { font-size: 18px; line-height: 1.6; margin-top: 30px; }
    .sello { font-size: 14px; color: #555; margin-top: 20px; }
    img { max-width: 100%; }
  `);
  ventana.document.write('</style></head><body>');

  ventana.document.write(`
    <img src="marca-de-agua.png" class="marca-agua">
    <div class="pagina">
      ${contenido}
    </div>
  `);

  ventana.document.write('</body></html>');

  ventana.document.close();
  ventana.focus();
  ventana.print();
  ventana.close();
}
