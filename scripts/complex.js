const canvas = document.getElementById("complexCanvas");
const ctx = canvas.getContext("2d");

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const scale = 40; // 1 unit = 40 pixels

function drawAxes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Axes
  ctx.beginPath();
  ctx.moveTo(0, centerY);
  ctx.lineTo(canvas.width, centerY); // real axis
  ctx.moveTo(centerX, 0);
  ctx.lineTo(centerX, canvas.height); // imaginary axis
  ctx.strokeStyle = "#94a3b8";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Labels
  ctx.font = "12px sans-serif";
  ctx.fillStyle = "#475569";
  ctx.fillText("Re", canvas.width - 25, centerY - 8);
  ctx.fillText("Im", centerX + 8, 15);
}

// Convert complex to canvas coordinates
function toCanvasCoords(re, im) {
  return {
    x: centerX + re * scale,
    y: centerY - im * scale
  };
}

// Draw a complex point
function drawPoint(re, im, label = "") {
  const { x, y } = toCanvasCoords(re, im);
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, 2 * Math.PI);
  ctx.fillStyle = "#1d4ed8";
  ctx.fill();

  if (label) {
    ctx.font = "14px sans-serif";
    ctx.fillStyle = "#1e293b";
    ctx.fillText(label, x + 8, y - 8);
  }
}

// Plot user input
function plotInput() {
  const re = parseFloat(document.getElementById("realInput").value);
  const im = parseFloat(document.getElementById("imagInput").value);
  drawAxes();
  drawExamples(); // redraw examples
  drawPoint(re, im, `${re} ${im >= 0 ? "+" : "-"} ${Math.abs(im)}i`);
}

// Some predefined example complex numbers
function drawExamples() {
  drawPoint(2, 3, "2 + 3i");
}

// Initial draw
drawAxes();
drawExamples();
