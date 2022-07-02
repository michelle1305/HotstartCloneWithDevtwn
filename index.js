let movies = [
  {
    name: "falcon and the winter soldier",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iste a maxime mollitia dolorem veniam inventore accusantium! Deleniti, perferendis animi?",
    image: "images/slider2.png"
  },
  {
    name: "loki",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iste a maxime mollitia dolorem veniam inventore accusantium! Deleniti, perferendis animi?",
    image: "images/slider1.png"
  },
  {
    name: "wanda vision",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iste a maxime mollitia dolorem veniam inventore accusantium! Deleniti, perferendis animi?",
    image: "images/slider3.png"
  },
  {
    name: "raya and the last dragon",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iste a maxime mollitia dolorem veniam inventore accusantium! Deleniti, perferendis animi?",
    image: "images/slider4.png"
  },
  {
    name: "luca",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iste a maxime mollitia dolorem veniam inventore accusantium! Deleniti, perferendis animi?",
    image: "images/slider5.png"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];
let slideIndex = 0; // to track the current slide

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // create our DOM elements
  let slide = document.createElement("div");
  let imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  // attaching all the elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  //setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // setting elements classnames
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  // slide effect
  if (slide.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

// to keep it sliding we want to call this function many times so we create a loop
for (let i = 0; i < 3; i++) {
  createSlide();
}

// to set up the sliding interval we use setInterval() function
setInterval(() => {
  createSlide();
}, 3000);
