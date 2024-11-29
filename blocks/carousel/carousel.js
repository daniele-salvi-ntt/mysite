function changeElement(imageList){
  const nextCandidate = $('.carousel-item[active] ~ .carousel-item',imageList)[0];
  const nextImage = nextCandidate != null ? nextCandidate : $('.carousel-item',imageList)[0]
  $('.carousel-item[active]',imageList).attr('active',null); 
  $(nextImage).attr('active','');
}

export default async function decorate(block) {

  const carousel=$('<div id="carouselComp" class="carousel"></div>');
  const images = [...block.children];
  const imageList = $('<div id="carousel-inner"></div>');
  for(var i in images){
    var image = $('<div class="carousel-item"></div>')
    if(i == 0){
      $(image).attr('active','');
    }
    $(image).append(images[i].firstElementChild);
    $(imageList).append($(image));
  }
  $(carousel).append(imageList);
  $(carousel).on('click',()=>{changeElement($(imageList))})
  window.setInterval(()=>{changeElement($(imageList))}, 5000);
  $(block).append(carousel);

}