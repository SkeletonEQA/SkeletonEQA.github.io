// ---------------------------------------------------------------
// Resource links. Leave a value empty ("") to hide its button.
// ---------------------------------------------------------------
const PAPER_URL = "https://dl.acm.org/doi/10.1145/3840471.3842592";
const ARXIV_URL = "";
const CODE_URL = "https://github.com/MonicaVahd/FAIRCoachOOD";
const MODEL_URL = "https://huggingface.co/collections/MonicaVahd/skeletoneqa-ood-benchmark-weights"; 
const DOI_URL = "https://doi.org/10.1145/3840471.3842592";

document.addEventListener("DOMContentLoaded", function () {
  var links = {
    "btn-paper": PAPER_URL,
    "btn-arxiv": ARXIV_URL,
    "btn-code": CODE_URL,
    "btn-model": MODEL_URL,
    "doi-link": DOI_URL,
  };
  Object.keys(links).forEach(function (id) {
    var el = document.getElementById(id);
    if (!el) return;
    if (links[id]) {
      el.setAttribute("href", links[id]);
    } else {
      el.style.display = "none";
    }
  });

  var btn = document.getElementById("copy-bibtex");
  var code = document.getElementById("bibtex-text");
  if (!btn || !code) return;

  btn.addEventListener("click", function () {
    var text = code.textContent;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        flash();
      }, function () {
        fallbackCopy(text);
        flash();
      });
    } else {
      fallbackCopy(text);
      flash();
    }
  });

  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
  }

  function flash() {
    var original = btn.textContent;
    btn.textContent = "Copied";
    setTimeout(function () { btn.textContent = original; }, 1600);
  }
});
