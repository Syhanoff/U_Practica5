const t = document.getElementById("cursor"),
      e = document.getElementById("cursor2"),
      i = document.getElementById("cursor3");

document.getElementsByTagName("body")[0].addEventListener("mousemove", (n) => {
  t.style.transform = "translate(" + n.clientX + "px, " + n.clientY + "px)",
  e.style.transform = "translate(" + n.clientX + "px, " + n.clientY + "px)",
  i.style.transform = "translate(" + n.clientX + "px, " + n.clientY + "px)"
});

function n(t) {
  e.classList.add("hover"), i.classList.add("hover")
}

function s(t) {
  e.classList.remove("hover"), i.classList.remove("hover")
}

s();

for (var r = document.querySelectorAll(".hover-mouse"), a = r.length - 1; a >= 0; a--) {
  o(r[a])
}

function o(t) {
  t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
}

document.addEventListener('DOMContentLoaded', function () {
  const bodychange = document.querySelector('body'),
        hoverLink3 = document.querySelector('.img-3'),
        hoverLink4 = document.querySelector('.img-4'),
        hoverLink5 = document.querySelector('.img-5'),
        hoverLink6 = document.querySelector('.img-6');

  hoverLink3.addEventListener('mouseenter', function () {
    bodychange.classList.add('img-3-wrap')
  })
  hoverLink3.addEventListener('mouseleave', function () {
    bodychange.classList.remove('img-3-wrap')
  })
  hoverLink4.addEventListener('mouseenter', function () {
    bodychange.classList.add('img-4-wrap')
  })
  hoverLink4.addEventListener('mouseleave', function () {
    bodychange.classList.remove('img-4-wrap')
  })
  hoverLink5.addEventListener('mouseenter', function () {
    bodychange.classList.add('img-5-wrap')
  })
  hoverLink5.addEventListener('mouseleave', function () {
    bodychange.classList.remove('img-5-wrap')
  })
  hoverLink6.addEventListener('mouseenter', function () {
    bodychange.classList.add('img-6-wrap')
  })
  hoverLink6.addEventListener('mouseleave', function () {
    bodychange.classList.remove('img-6-wrap')
  })
})
