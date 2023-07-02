
let cursos = [
  {
    "id": 1,
    "titulo": "Introducción a la programación",
    "precio": 35440,
    "tiempo": 66,
    "descripcion": "Un curso básico para principiantes que cubre los fundamentos de la programación. Aprenderás los conceptos básicos de lógica de programación y escribirás tus primeros programas.",
    "requisitos_previos": "No se requieren conocimientos previos.",
    "imagen": "https://2d3a2f1597.cbaul-cdnwnd.com/64fc6760afc989305f9c75e291138bf6/200000025-8ef4f8ef51/9709b9_introduccion-a-la-programacion_w688.jpg?ph=2d3a2f1597"
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

/************ para los cursos destacados *************/
let destacados = document.querySelector(".destacados");
let producto = document.querySelectorAll(".producto");
let tituloCurso = document.querySelectorAll(".titulo-curso");
let precio = document.querySelectorAll(".precio");
let duracion = document.querySelectorAll(".duracion");
let imagen = document.querySelectorAll(".foto-curso");

for (let i = 0; i < 6; i++) {
  let producto = document.createElement("article");
  producto.classList.add("producto");
  producto.innerHTML = `
    <div class="imagen">
      <div id="imagen"><img src="${cursos[i].imagen}" alt="Foto ilustrativa del curso de ${cursos[i].titulo}"></div>
      <p class="precio">$${cursos[i].precio}</p>
    </div>
    <div class="producto_info">
      <p class="duracion">${cursos[i].tiempo}hs</p>
      <div class="producto_detalle">
          <h4 class="titulo-curso">${cursos[i].titulo}</h4>
          <a href="/detalle.html?id=${cursos[i].id}">Ver detalle</a>
      </div>
    </div>
    <button class="boton comprar">COMPRAR</button>`

  destacados.appendChild(producto);
};

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


/**************para el carrito*********************/

let carrito = document.querySelector(".carrito");
let compras = document.querySelector(".compras");

carrito.addEventListener("click", () => {
  compras.classList.remove("ocultar");
});

compras.addEventListener("mouseout", () => {
  compras.classList.add("ocultar");
});

let cantidad = document.querySelector(".cantidad");
let comprar = document.querySelectorAll(".comprar");
let sinCursos = document.querySelector("#sin-cursos");
let productosAgregados;
let contador;
let productosSessionStorage = sessionStorage.getItem("productosAgregados");

//si el carrito ya tiene productos (cuando vuelvo de otra pagina):
if (productosSessionStorage != null) {
  sinCursos.classList.add("ocultar");
  productosAgregados = productosSessionStorage.split(",");
  contador = productosAgregados.length;
  cantidad.innerHTML = contador;
  productosAgregados.forEach((item) => {
    nombreCurso = document.createElement("li");
    nombreCurso.innerHTML = item;
    compras.appendChild(nombreCurso);
  });
} else {
  productosAgregados = [];
  contador = 0;
}

//agregar un producto que no estaba:
comprar.forEach((item) => {
  item.addEventListener("click", () => {
    sinCursos.classList.add("ocultar");

    let nombreCurso = document.createElement("li");
    let padre = item.parentElement;
    let titulo = padre.querySelector(".titulo-curso").innerHTML;

    if (!productosAgregados.includes(titulo)) { //ver que no haya repetidos
      cantidad.innerHTML = ++contador;
      nombreCurso.innerHTML = titulo;
      productosAgregados.push(titulo);
      compras.appendChild(nombreCurso);

      //para poder mostrar en otras paginas:
      sessionStorage.setItem("contador", contador);
      sessionStorage.setItem("productosAgregados", productosAgregados);
    }
  });
});


