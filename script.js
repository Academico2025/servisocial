// Lista de estudiantes autorizados con todos los datos
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
  },
  {
    doc: "1122334455",
    nombre: "Carlos Ruiz",
    grado: "11°",
    jornada: "Mañana",
    horas: 80,
    proyecto: "Refuerzo académico en matemáticas"
  }
];

function generarConstancia() {
  const docInput = document.getElementById("docInput").value.trim();
  const constancia = document.getElementById("constancia");
  const error = document.getElementById("error");

  const nombreEstudiante = document.getElementById("nombreEstudiante");
  const numeroDocumento = document.getElementById("numeroDocumento");
  const grado = document.getElementById("grado");
  const jornada = document.getElementById("jornada");
  const horas = document.getElementById("horas");
  const proyecto = document.getElementById("proyecto");
  const fechaActual = document.getElementById("fechaActual");

  const hoy = new Date();
  const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
  const fechaFormateada = hoy.toLocaleDateString('es-ES', opciones);

  const estudiante = estudiantesAutorizados.find(e => e.doc === docInput);

  if (estudiante) {
    nombreEstudiante.textContent = estudiante.nombre;
    numeroDocumento.textContent = estudiante.doc;
    grado.textContent = estudiante.grado;
    jornada.textContent = estudiante.jornada;
    horas.textContent = estudiante.horas;
    proyecto.textContent = estudiante.proyecto;
    fechaActual.textContent = fechaFormateada;

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
    body { font-family: Arial, sans-serif; padding: 50px; width: 21cm; min-height: 29.7cm; }
    header, footer { text-align: center; }
    .firma-footer img { width: 150px; margin-top: 30px; }
    .firma-footer p { margin-top: 5px; }
    main { margin-top: 30px; font-size: 18px; line-height: 1.6; }
    .sello { margin-top: 40px; font-size: 14px; text-align: center; color: #555; }
    img { max-width: 100%; }
  `);
  ventana.document.write('</style></head><body>');
  ventana.document.write('<div class="pagina">');
  ventana.document.write(contenido);
  ventana.document.write('</div></body></html>');

  ventana.document.close();
  ventana.focus();
  ventana.print();
  ventana.close();
}
