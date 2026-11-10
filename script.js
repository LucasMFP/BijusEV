(function () {
  // Miçangas da pulseira (metade direita do monograma)
  var g = document.getElementById("beads");
  if (g) {
    var ns = "http://www.w3.org/2000/svg", n = 26;
    var colors = ["#f4f8fc", "#f4f8fc", "#1c1a8f", "#f4f8fc", "#0d1230", "#86c1ea"];
    // Começa após a divisão central para a miçanga superior não cobrir o olho.
    for (var i = 1; i <= n; i++) {
      var a = -Math.PI / 2 + (Math.PI * i) / n;
      var c = document.createElementNS(ns, "circle");
      c.setAttribute("cx", 100 + 70 * Math.cos(a));
      c.setAttribute("cy", 100 + 70 * Math.sin(a));
      c.setAttribute("r", 4.4);
      c.setAttribute("fill", colors[i % colors.length]);
      g.appendChild(c);
    }
  }

  // Links ainda não configurados (href="#") não saltam; mostram um aviso discreto
  var toast = document.querySelector(".toast"), t;
  document.querySelectorAll('a[href="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      toast.textContent = (a.dataset.name || "Este link") + " ainda não foi configurado.";
      toast.classList.add("on");
      clearTimeout(t);
      t = setTimeout(function () { toast.classList.remove("on"); }, 2200);
    });
  });
})();
