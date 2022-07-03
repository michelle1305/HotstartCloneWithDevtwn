var movies = [
  {
    name: 'loki',
    des:
      'Loki, the God of Mischief, steps out of his brother\'s shadow to embark on an adventure that takes place after the events of "Avengers: Endgame."',
    image: 'images/slider1.png'
  },
  {
    name: 'falcon and the winter soldier',
    des:
      'Falcon and the Winter Soldier are a mismatched duo who team up for a global adventure that will test their survival skills -- as well as their patience.',
    image: 'images/slider2.png'
  },
  {
    name: 'wanda vision',
    des:
      'Living idealized suburban lives, super-powered beings Wanda and Vision begin to suspect that everything is not as it seems.',
    image: 'images/slider3.png'
  },
  {
    name: 'raya and the last dragon',
    des:
      'In a realm known as Kumandra, a re-imagined Earth inhabited by an ancient civilization, a warrior named Raya is determined to find the last dragon.',
    image: 'images/slider4.png'
  },
  {
    name: 'luca',
    des:
      '"LUCA" (Last Universal Common Ancestor) is based on Charles Darwin\'s proposition that all species of life have descended over time from common ancestors',
    image: 'images/slider5.png'
  }
];

// carousel element

const carousel = document.querySelector('.carousel');
let sliders = [];
var slideIndex = 0; // to track the current slide

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // create our DOM elements
  let slide = document.createElement('div');
  let content = document.createElement('div');
  let h1 = document.createElement('h1');
  let p = document.createElement('p');
  var imgElement = document.createElement('img');

  // attaching all the elements
  imgElement.appendChild(document.createTextNode(''));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  //setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // setting elements classnames
  slide.className = 'slider';
  content.className = 'slide-content';
  h1.className = 'movie-title';
  p.className = 'movie-des';

  sliders.push(slide);

  // slide effect
  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px )`;
  }
};

// to set up the sliding interval we use setInterval() function
setInterval(() => {
  createSlide();
}, 3000);

// to keep it sliding we want to call this function many times so we create a loop
for (var i = 0; i < 3; i++) {
  createSlide();
}

// video cards

const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach((item) => {
  item.addEventListener('mouseover', () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener('mouseleave', () => {
    let video = item.children[1];
    video.pause();
  });
});

// card sliders

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];
cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth - 200;
  });
  preBtns[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
