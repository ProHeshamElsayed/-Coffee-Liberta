window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("loader-hide");

        setTimeout(() => {
            loader.style.display = "none";
        }, 600);

    }, 1500); // مدة ظهور اللودر
});


/* icon */

let topBtn = document.getElementById("topBtn");

/* إظهار الزر عند النزول */
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

/* الرجوع لأول الصفحة */
topBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};