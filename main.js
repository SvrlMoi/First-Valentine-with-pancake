// Animation Timeline Simplificado con Auto-Scroll y reinicio de scroll al principio
const animationTimeline = () => {
  // Separamos los caracteres para animarlos individualmente
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span>`;
  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  const tl = new TimelineMax();

  // Al iniciar, aseguramos que la página está en el tope
  tl.set(window, { scrollTo: 0 });

  tl.to(".container", 0.1, { visibility: "visible" })

    // Sección .one
    .from(".one", 1, { opacity: 0, y: 20 })
    .to(window, 0.5, {
      scrollTo: { y: ".one", offsetY: 20 },
      ease: Linear.easeNone,
    })

    // Sección .two
    .from(".two", 1, { opacity: 0, y: 20 })
    .to(window, 0.5, {
      scrollTo: { y: ".two", offsetY: 20 },
      ease: Linear.easeNone,
    })

    // Sección .three
    .from(".three", 1, { opacity: 0, y: 20 })
    .to(window, 0.5, {
      scrollTo: { y: ".three", offsetY: 20 },
      ease: Linear.easeNone,
    })

    // Sección .four (Caja de texto)
    .from(".four", 1, { scale: 0.5, opacity: 0 })
    .to(window, 0.5, {
      scrollTo: { y: ".four", offsetY: 20 },
      ease: Linear.easeNone,
    })
    // Animación de la caja de texto
    .staggerTo(".hbd-chatbox span", 0.3, { visibility: "visible" }, 0.05)
    .from(".fake-btn", 0.5, { scale: 0.5, opacity: 0 })

    // Sección .five (Ideas)
    .from(".idea-1", 1, { opacity: 0, y: 20 })
    .to(window, 0.5, {
      scrollTo: { y: ".idea-1", offsetY: 20 },
      ease: Linear.easeNone,
    })
    .from(".idea-2", 1, { opacity: 0, y: 20 })
    .to(window, 0.5, {
      scrollTo: { y: ".idea-2", offsetY: 20 },
      ease: Linear.easeNone,
    })
    .from(".idea-3", 1, { opacity: 0, y: 20 })
    .to(window, 0.5, {
      scrollTo: { y: ".idea-3", offsetY: 20 },
      ease: Linear.easeNone,
    })
    .from(".idea-4", 1, { opacity: 0, y: 20 })
    .to(window, 0.5, {
      scrollTo: { y: ".idea-4", offsetY: 20 },
      ease: Linear.easeNone,
    })
    .from(".idea-5", 1, { opacity: 0, y: 20 })
    .to(window, 0.5, {
      scrollTo: { y: ".idea-5", offsetY: 20 },
      ease: Linear.easeNone,
    })
    .from(".idea-6", 1, { opacity: 0, y: 20 })
    .to(window, 0.5, {
      scrollTo: { y: ".idea-6", offsetY: 20 },
      ease: Linear.easeNone,
    })

    // Sección .six (Imagen y felicitación)
    .from(".six", 1, { opacity: 0, y: 20 })
    .to(window, 0.5, {
      scrollTo: { y: ".six", offsetY: 20 },
      ease: Linear.easeNone,
    })

    // Sección .seven (Globos)
    .from(".seven", 1, { opacity: 0, y: 20 })
    .to(window, 0.5, {
      scrollTo: { y: ".seven", offsetY: 20 },
      ease: Linear.easeNone,
    })

    // Sección .nine (Mensaje final)
    .from(".nine", 1, { opacity: 0, y: 20 })
    .to(window, 0.5, {
      scrollTo: { y: ".nine", offsetY: 20 },
      ease: Linear.easeNone,
    });

  // Al presionar "replay", primero se hace scroll hasta arriba y se reinicia el timeline
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    TweenMax.to(window, 0.5, {
      scrollTo: { y: 0 },
      ease: Linear.easeNone,
      onComplete: () => {
        tl.restart();
      }
    });
  });
};

// Función para importar datos desde el JSON y personalizar la página
const fetchData = () => {
  fetch("customize.json")
    .then((response) => response.json())
    .then((data) => {
      Object.keys(data).forEach((customData) => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document.getElementById(customData).setAttribute("src", data[customData]);
          } else {
            document.getElementById(customData).innerText = data[customData];
          }
        }
      });
    });
};

// Ejecutar la secuencia: primero importar datos y luego iniciar las animaciones con auto-scroll
const resolveFetch = () => {
  return new Promise((resolve, reject) => {
    fetchData();
    resolve("Fetch done!");
  });
};

resolveFetch().then(animationTimeline);
