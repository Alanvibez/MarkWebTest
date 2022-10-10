///////////Price-slider//////////////
var squareslider = document.getElementById('square');
var priceslider = document.getElementById('price');

noUiSlider.create(squareslider, {
  start: [32, 186],
  connect: true,
  range: {
      'min': 0,
      'max': 250
  }
});

noUiSlider.create(priceslider, {
  start: [1.5, 17.5],
  connect: true,
  range: {
      'min': 0,
      'max': 22
  }
});

const squarefrom = document.getElementById('squarefrom');
const squareto = document.getElementById('squareto');
const square = [squarefrom,squareto]

const pricefrom = document.getElementById('pricefrom');
const priceto = document.getElementById('priceto');
const price = [pricefrom,priceto]

squareslider.noUiSlider.on('update', function(values, handle){
  square[handle].value = Math.round(values[handle])
});

priceslider.noUiSlider.on('update', function(values, handle){
  price[handle].value = parseFloat(values[handle]).toFixed(1)
});
/////////////////////////////////

///////////BG-slider//////////////
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const video0 = document.getElementById('dog')
const video1 = document.getElementById('flowers')


next.addEventListener('click', function() {
video1.style.transform = 'translateX(0)'

})

prev.addEventListener('click', function() {
  video1.style.transform = 'translateX(100%)'
})

/////////////////////////////////

///////////Popup/////////////////

const home = [
  {
    img: './image/756195281911499.jpg',
    title: 'Северный парк',
    text: 'Жилой комплекс небывалого масштаба с развитой инфраструктурой'
  },
  {
    img: './image/756195281911499.jpg',
    title: 'Станция Столичная',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    img: './image/756195281911499.jpg',
    title: 'Лето',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.'
  }
]



const links = document.querySelectorAll('.middle__list_item_links')
const popup = document.querySelector('.middle__popup')
const title = document.querySelector('.middle__popup_title')
const text = document.querySelector('.middle__popup_text')
const bg = document.querySelector('.slide')

for (let elem of links) {
  elem.addEventListener('mouseenter', () => {
    bg.style.filter = 'brightness(70%)'
    title.innerText = elem.innerText
    popup.style.opacity = '1'
    popup.style.transform = 'translateY(0)'
  })
  elem.addEventListener('mouseleave', () => {
    popup.style.transform = 'translateY(30px)'
    popup.style.opacity = '0'
    bg.style.filter = 'brightness(100%)'
  })
};

