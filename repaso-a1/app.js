let current = 0;
let exam = [];
let locked = false;

// 🔀 shuffle
function shuffle(array) {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// 🔥 INICIO (desde input, NO prompt)
function startPractice() {
  const input = document.getElementById("numQuestions");

  if (!input) {
    alert("No se encontró el input");
    return;
  }

  let cantidad = parseInt(input.value);

  if (isNaN(cantidad) || cantidad <= 0) {
    cantidad = 10;
  }

  if (cantidad > questions.length) {
    cantidad = questions.length;
  }

  exam = shuffle(questions).slice(0, cantidad);
  current = 0;

  document.getElementById("start-screen").style.display = "none";

  render();
}

// 🔹 render
function render() {
  locked = false;

  const q = exam[current];

  // pregunta
  document.getElementById("question").textContent =
    `(${current + 1}/${exam.length}) ` + q.question;

  // imagen
  const img = document.getElementById("image");
  if (q.image) {
    img.src = q.image;
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }

  // opciones
  const cont = document.getElementById("options");
  cont.innerHTML = "";

  q.options.forEach((op, i) => {
    const btn = document.createElement("button");
    btn.textContent = op;

    btn.onclick = () => {
      if (locked) return;

      // ❌ incorrecta
      if (i !== q.correct) {
        btn.classList.add("wrong");
      }
      // ✅ correcta
      else {
        btn.classList.add("correct");
        locked = true;

        // pasar a la siguiente
        setTimeout(() => {
          current++;

          if (current < exam.length) {
            render();
          } else {
            // fin (sin pantalla de resultados)
            document.getElementById("question").innerHTML = `
  🎉 Práctica terminada <br><br>
  <button onclick="location.reload()">Volver a empezar</button>
`;

            document.getElementById("options").innerHTML = "";
            img.style.display = "none";
          }
        }, 800);
      }
    };

    cont.appendChild(btn);
  });
}
