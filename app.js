//スムーススクロール設定
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault()

    const target = document.querySelector(link.hash),
          adjust = 50,
          offsetTop = window.pageYOffset
          + target.getBoundingClientRect().top - adjust

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    })
  })
});

//navのリンクをクリックしたらメニューが閉じる
document.getElementById('navLink').addEventListener('click', function (e) {
  e.preventDefault()
      document.getElementById('menuButton').classList.remove('active');
      document.getElementById('nav').classList.remove('active');
      document.getElementById('mask').classList.remove('active');
});

//メニューの表示//
document.getElementById('menuButton').addEventListener('click', function(e) {
  e.preventDefault()
  this.classList.toggle('active');
  document.getElementById('nav').classList.toggle('active');
  document.getElementById('mask').classList.toggle('active');
});

//マスクをクリックしたらメニューを消す設定
document.getElementById('mask').addEventListener('click', function () {
  this.classList.remove('active')
  document.getElementById('nav').classList.remove('active');
  document.getElementById('menuButton').classList.remove('active');
})

//スライダーの表示（メイントップ）
const swiper = new Swiper(".mySwiper", {
  effect: "fade",
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 2000
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//スライダーの表示（リスト内のスライダー）
const swiper2 = new Swiper(".mySwiper2", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});