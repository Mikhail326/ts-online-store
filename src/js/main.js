$(document).ready(function () {
  $('.header-slider').slick({
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
  })

  $('.catalog-slider').slick({
    slidesToShow: 4,
    arrows: false,
    infinite: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  })
})

const headerBarItems = document.querySelectorAll('.bar_item')
const headerBarItemsMobile = document.querySelectorAll('.mobile-socials_item')
const footerBtns = document.querySelectorAll('.footer-left_list-title')


const showList = (e) => {
  e.currentTarget.classList.toggle('list-active')
  const item = e.currentTarget.nextElementSibling
  if (e.currentTarget.classList.contains('list-active')) {
    item.style.maxHeight = item.scrollHeight + 'px'
  } else {
    item.style.maxHeight = 0
  }
}

const activeHeaderBar = (e) => {
  e.currentTarget.classList.toggle('active-bar')
}

footerBtns.forEach(btn => {
  btn.addEventListener('click', showList)
})
headerBarItems.forEach(el => {
  el.addEventListener('click', activeHeaderBar)
})
headerBarItemsMobile.forEach(el => {
  el.addEventListener('click', activeHeaderBar)
})