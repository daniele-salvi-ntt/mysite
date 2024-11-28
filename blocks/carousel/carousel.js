import { getMetadata } from "../../scripts/aem";
import { loadFragment } from "../fragment/fragment";

function changeElement(carousel,arrow,elementVisible){

}

export default async function decorate(block) {

  const carouselMeta = getMetadata('carousel');
  const carouselPath = carouselMeta ? new URL(carouselMeta,window.location).pathname : '/carousel';
  const fragment = await loadFragment(carouselPath);

  const carousel=document.createElement('div');
  carousel.id='carousel';
  carousel.append(fragment.firstElementChild);
  carousel.firstElementChild.classList.add('active');
  while(fragment.firstElementChild) carousel.append(fragment.firstElementChild);

  const leftArrow = document.createElement('a');
  leftArrow.classList.add('left');
  leftArrow.onclick((e)=>{
    changeElement(carousel,leftArrow,document.querySelector('#carousel .carousel-element.active'));
    e.preventDeafult();
  })
  const rightArrow = document.createElement('a');
  rightArrow.classList.add('right');
  rightArrow.onclick((e)=>{
    changeElement(carousel,leftArrow,document.querySelector('#carousel .carousel-element.active'));
    e.preventDeafult();
  })

}