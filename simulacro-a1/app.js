let current = 0;
let selected = [];

// 🔀 Shuffle REAL (Fisher-Yates)
function shuffle(array) {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Simulación
let exam = shuffle(questions).slice(0, 5);

// ⏱️ TIMER
let time = 40 * 60;
let timerInterval;

function startTimer() {
  const timerEl = document.getElementById("timer");

  timerInterval = setInterval(() => {
    let min = Math.floor(time / 60);
    let sec = time % 60;

    timerEl.textContent =
      `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;

    if (time <= 300) {
      timerEl.style.color = "#ef4444";
    }

    if (time <= 0) {
      clearInterval(timerInterval);
      showResult();
      return;
    }

    time--;
  }, 1000);
}

// 🔹 render
function render() {
  const q = exam[current];

  document.getElementById("question").textContent = q.question;

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

    if (selected[current] === i) {
      btn.classList.add("selected");
    }

    btn.onclick = () => {
      selected[current] = i;
      render();
    };

    cont.appendChild(btn);
  });

  // progreso
  document.getElementById("progress-text").textContent =
    `Pregunta ${current + 1}/${exam.length}`;

  let progress = ((current + 1) / exam.length) * 100;
  document.getElementById("progress-fill").style.width = progress + "%";

  // botones
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  // siguiente
  nextBtn.disabled = selected[current] === undefined;
  nextBtn.classList.toggle("disabled", nextBtn.disabled);

  // anterior 🔥
  prevBtn.disabled = current === 0;
  prevBtn.classList.toggle("disabled", prevBtn.disabled);
}

// 🔹 siguiente
function next() {
  if (selected[current] === undefined) return;

  if (current < exam.length - 1) {
    current++;
    render();
  } else {
    showResult();
  }
}

// 🔹 anterior 🔥
function prev() {
  if (current > 0) {
    current--;
    render();
  }
}

// 🔹 resultado
function showResult() {
  clearInterval(timerInterval);

  document.getElementById("quiz").style.display = "none";

  const cont = document.getElementById("result");
  cont.style.display = "block";
  cont.innerHTML = "";

  let score = 0;

  exam.forEach((q, i) => {
    if (selected[i] === q.correct) score++;
  });

  const percentage = Math.round((score / exam.length) * 100);
  const aprobado = percentage >= 88;

  const overlay = document.getElementById("resultOverlay");
  const overlayText = document.getElementById("overlayText");

  overlayText.textContent = aprobado ? "✅ APROBADO" : "❌ DESAPROBADO";
  overlayText.className = aprobado ? "overlay-pass" : "overlay-fail";

  overlay.classList.remove("hidden");

  overlay.onclick = () => {
    overlay.classList.add("hidden");
  };

  const summary = document.createElement("div");
  summary.classList.add("summary-box");

  summary.innerHTML = `
  <div class="correct-text">✔ Correctas: ${score}</div>
  <div class="wrong-text">✖ Incorrectas: ${exam.length - score}</div>
  <div class="time-text">⏱ Tiempo usado: ${formatTime(40 * 60 - time)}</div>
`;

  cont.appendChild(summary);

  exam.forEach((q, i) => {
    const user = selected[i];
    const correct = q.correct;

    const div = document.createElement("div");
    div.classList.add("result-card");

    const title = document.createElement("h3");
    title.textContent = `${i + 1}. ${q.question}`;
    div.appendChild(title);

    if (q.image) {
      const img = document.createElement("img");
      img.src = q.image;
      img.classList.add("result-img");
      div.appendChild(img);
    }

    q.options.forEach((op, index) => {
      const p = document.createElement("p");
      p.textContent = op;

      if (index === user) {
        p.classList.add(user === correct ? "correct" : "wrong");
      }

      if (index === correct) {
        p.classList.add("correct-answer");
      }

      div.appendChild(p);
    });

    cont.appendChild(div);
  });

  const actions = document.createElement("div");
  actions.classList.add("result-actions");

  actions.innerHTML = `
    <button onclick="location.reload()">Reintentar</button>
  `;

  cont.appendChild(actions);
}

// 🔹 tiempo
function formatTime(sec) {
  let min = Math.floor(sec / 60);
  let s = sec % 60;
  return `${String(min).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

// 🚀 iniciar
startTimer();
render();