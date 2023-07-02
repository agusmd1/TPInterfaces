document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendario");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: ["dayGrid"],
    locale: "es",
    events: [
      {
        title: "Curso Phython",
        start: "2023-06-14",
        end: "2023-06-21",
      },
      {
        title: "Curso HTML",
        start: "2023-06-03",
        end: "2023-06-10",
      },
      {
        title: "Curso Javascript",
        start: "2023-06-22",
        end: "2023-06-29",
      },
      {
        title: "Curso SQL",
        start: "2023-07-04",
        end: "2023-07-14",
      },
      {
        title: "Curso CSS3",
        start: "2023-07-19",
        end: "2023-08-09",
      },
      {
        title: "Curso Javascript",
        start: "2023-08-10",
        end: "2023-08-39",
      },
      {
        title: "Curso Phython",
        start: "2023-07-07",
        end: "2023-07-22",
      }
    ],
  });

  calendar.render();
});

let cursos = [
  {
      "id": 1,
      "titulo": "Introducción a la programación",
      "precio": 35440,
      "tiempo": 66,
      "descripcion": "Un curso básico para principiantes que cubre los fundamentos de la programación. Aprenderás los conceptos básicos de lógica de programación y escribirás tus primeros programas.",
      "requisitos_previos": "No se requieren conocimientos previos.",
      "imagen": "data:image/jpeg;base64,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"
  },
  {
      "id": 2,
      "titulo": "Desarrollo web con HTML",
      "precio": 16000,
      "tiempo": 56,
      "descripcion": "Aprende a crear sitios web utilizando HTML. Este curso te enseñará los fundamentos del desarrollo web y cómo estructurar contenido en la web.",
      "requisitos_previos": "Conocimientos básicos de navegación web y edición de texto.",
      "imagen": "https://i.ytimg.com/vi/rbuYtrNUxg4/maxresdefault.jpg"
  },
  {
      "id": 3,
      "titulo": "Desarrollo web con CSS",
      "precio": 16999,
      "tiempo": 56,
      "descripcion": "Aprende a dar estilo a tus sitios web utilizando CSS. Este curso te enseñará cómo diseñar y personalizar la apariencia de tus páginas web.",
      "requisitos_previos": "Conocimientos básicos de HTML.",
      "imagen": "https://i.ytimg.com/vi/W6GTDfrWjXs/maxresdefault.jpg"
  },
  {
      "id": 4,
      "titulo": "Programación en Python",
      "precio": 69999,
      "tiempo": 66,
      "descripcion": "Descubre el lenguaje de programación Python y su versatilidad. Aprenderás a escribir programas, crear scripts y automatizar tareas utilizando Python.",
      "requisitos_previos": "Conocimientos básicos de programación recomendados.",
      "imagen": "https://i.blogs.es/aee3ee/1366_2000/450_1000.webp"
  },
  {
      "id": 5,
      "titulo": "Desarrollo de aplicaciones móviles para iOS y Android",
      "precio": 74999,
      "tiempo": 96,
      "descripcion": "Aprende a crear aplicaciones móviles para iOS y Android utilizando frameworks como React Native. Desarrolla habilidades en el diseño de interfaces y la programación de funcionalidades móviles.",
      "requisitos_previos": "Conocimientos básicos de programación y familiaridad con HTML, CSS y JavaScript.",
      "imagen": "https://www.qualitydevs.com/wp-content/uploads/2021/03/Desarrollo-apps-moviles-1288x724.jpg"
  },
  {
      "id": 6,
      "titulo": "Desarrollo web con JavaScript",
      "precio": 85999,
      "tiempo": 86,
      "descripcion": "Aprende a construir aplicaciones web interactivas utilizando JavaScript. Este curso te enseñará cómo agregar funcionalidades dinámicas y mejorar la experiencia del usuario en tus sitios web.",
      "requisitos_previos": "Conocimientos básicos de HTML y CSS.",
      "imagen": "https://www.somoslibres.org/images/2021/04/30/javascript.jpg"
  },
  {
      "id": 7,
      "titulo": "Programación en Java",
      "precio": 92999,
      "tiempo": 106,
      "descripcion": "Descubre el poder de Java y aprende a desarrollar aplicaciones robustas y escalables. Este curso te proporcionará los fundamentos necesarios para convertirte en un programador de Java competente.",
      "requisitos_previos": "Conocimientos básicos de programación.",
      "imagen": "https://www.softzone.es/app/uploads-softzone.es/2020/09/Programar-Java.jpg?x=480&y=375&quality=40"
  },
  {
      "id": 8,
      "titulo": "Fundamentos de MySQL",
      "precio": 56999,
      "tiempo": 80,
      "descripcion": "Aprende a utilizar el sistema de gestión de bases de datos MySQL. Este curso te enseñará cómo diseñar y administrar bases de datos relacionales eficientes.",
      "requisitos_previos": "Conocimientos básicos de programación.",
      "imagen": "https://www.becasinternacionales.net/webapp/img/courses/ae8aa1_banner-mysql_w730.jpg"
  },
  {
      "id": 9,
      "titulo": "Desarrollo de aplicaciones web con React",
      "precio": 90999,
      "tiempo": 56,
      "descripcion": "Aprende a construir aplicaciones web modernas y dinámicas utilizando el framework React. Este curso te enseñará los conceptos fundamentales de React y cómo crear componentes reutilizables.",
      "requisitos_previos": "Conocimientos avanzados de HTML, CSS y JavaScript.",
      "imagen": "https://www.pragma.com.co/hubfs/h_react.jpg"
  }
];

/*****************para el buscador********************/

let buscador = document.querySelector(".buscador");
let resultado = document.querySelector(".resultados");

buscador.addEventListener("keyup", () => {
  let valor = document.querySelector(".buscador").value;
  resultado.innerHTML = "";

  for (let i = 0; i < cursos.length; i++) {
      if (cursos[i].titulo.toLowerCase().includes(valor.toLowerCase())) {
          resultado.classList.remove("ocultar");
          let curso = document.createElement("li");
          curso.innerHTML = cursos[i].titulo;
          resultado.appendChild(curso);
      }
  };
});

buscador.addEventListener("focusout", () => {
  resultado.classList.add("ocultar");
});


/*****************para el carrito**************************/

let carrito = document.querySelector(".carrito");
let compras = document.querySelector(".compras");

let cantidad = document.querySelector(".cantidad");
cantidad.innerHTML = sessionStorage.getItem("contador");

let sinCursos = document.querySelector("#sin-cursos");
let productosAgregados = sessionStorage.getItem("productosAgregados");

if(sessionStorage.getItem("contador") != null){
    sinCursos.classList.add("ocultar");
    cantidad.innerHTML = sessionStorage.getItem("contador");

    productosAgregados.split(",").forEach((item)=>{
        nombreCurso = document.createElement("li");
        nombreCurso.innerHTML = item;
        compras.appendChild(nombreCurso);
    });
} else {
    cantidad.innerHTML = 0;
};

carrito.addEventListener("click",()=>{
    compras.classList.remove("ocultar");

});

compras.addEventListener("mouseout", () => {
    compras.classList.add("ocultar");
});
