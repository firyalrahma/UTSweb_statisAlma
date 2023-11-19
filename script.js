// toggle class active hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
//  on click menu
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// toggle class active search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
// on click search
document.querySelector("#search-btn").onclick = (e) => {
  searchForm.classList.toggle("active");
  e.preventDefault();
};
// click diluar element

const hamburger = document.querySelector("#hamburger-menu");
const searchBtn = document.querySelector("#search-btn");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// destinasi detail
// const photoDetail = document.querySelector(".photo-detail");
// const clickPhoto = document.querySelectorAll(".detail");

// clickPhoto.forEach((clc) => {
//   clc.onclick = (e) => {
//     photoDetail.style.display = "flex";
//     e.preventDefault();
//   };
// });
const photo = document.querySelectorAll(".thumb");
const photoSrc = document.querySelector(".photo-detail img");
const photoDetail = document.querySelectorAll(".photo-detail");
for (let i = 0; i < photoDetail.length; i++) {
  const element = photoDetail[i];

  photo.forEach((image, i) => {
    image.onclick = (e) => {
      photoDetail[i].style.display = "flex";
      photoSrc.src = image.getAttribute("src");
      e.preventDefault();
    };
  });
}

const lengkap = document.querySelectorAll(".selengkapnya");
lengkap.forEach((kap, i) => {
  kap.onclick = (e) => {
    photoDetail[i].style.display = "flex";
    e.preventDefault();
  };
});
// document.querySelectorAll(".thumb").forEach((image) => {
//   image.onclick = () => {
//     document.querySelector(".photo-detail").style.display = "flex";
//     document.querySelector(".photo-detail img").src = image.getAttribute("src");
//   };
// });
// const imag = document.querySelector(".photo-detail .open");
// const tumb = document.querySelector(".thumb");

// photoDetail.addEventListener("click", function (e) {
//   if (e.target.className == "thumb") {
//     imag.src = e.target.src;
//   }
// });
// const destinasiDetail = document.querySelectorAll("#destinasi-detail");
// for (let i = 0; i < destinasiDetail.length; i++) {
//   const element = destinasiDetail[i];
// }

// const destinasiBtns = document.querySelectorAll(".click-detail");
// destinasiBtns.forEach((btn, i) => {
//   btn.onclick = (e) => {
//     destinasiDetail[i].style.display = "flex";
//     e.preventDefault();
//   };
// });

// click tombol close destinasi detail
const btnClose = document.querySelectorAll(".close-icon");
for (let i = 0; i < photoDetail.length; i++) {
  const element = photoDetail[i];
}
btnClose.forEach((btn, i) => {
  btn.onclick = (e) => {
    photoDetail[i].style.display = "none";
    e.preventDefault();
  };
});
// const btnsClose = document.querySelectorAll(".close-icon");
// btnsClose.forEach((cls, i) => {
//   cls.onclick = (e) => {
//     destinasiDetail[i].style.display = "none";
//     e.preventDefault();
//   };
// });

// click diluar destinasi detail
window.onclick = (e) => {
  photoDetail.forEach((element, i) => {
    if (e.target === element) {
      element[i].style.display = "none";
      e.preventDefault();
    }
  });
};
// window.onclick = (e) => {
//   destinasiDetail.forEach((element, i) => {
//     if (e.target === element) {
//       element.style.display = "none";
//       e.preventDefault();
//     }
//   });
// };

const sumbmitForm = document.querySelector("#btn");
document.addEventListener("submit", function (e) {
  alert(
    "Pesan anda telah terkirim, terima kasih telah berkunjung ke wabsite AFTraveling."
  );
  e.preventDefault();
});
