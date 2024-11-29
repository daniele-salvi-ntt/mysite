var timer = 5;
async function changeElement(imageList){
  const nextCandidate = $('.carousel-item[active] ~ .carousel-item',imageList)[0];
  const nextImage = nextCandidate != null ? nextCandidate : $('.carousel-item',imageList)[0]
  const out = $('.carousel-item[active]',imageList)
  animateInOut(out,nextImage);
  timer=5;
  
}

function animateInOut(out,nextImage) {
  let id = null;
  let pos = 0;
  clearInterval(id);
  $(nextImage).attr('active','');
  $(nextImage).css('z-index',1);
  $(out).css('z-index',2);
  id = setInterval(frame, 10);
    function frame() {
    if (pos == 100) {
      clearInterval(id);
      $(out).attr('active',null);
      $(out).css('transform','translateX(0%)')
    } else {
      pos++;
      $(out).css('transform', 'translateX('+pos+'%)');
      $(nextImage).css('transform', 'translateX('+50-pos+'%)');
    }
  }

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
    $(image).append(images[i].firstElementChild.firstElementChild);
    $(imageList).append($(image));
  }
  $(carousel).append(imageList);
  $(carousel).on('click',()=>{changeElement($(imageList))})
  window.setInterval(()=>{
    timer-=1;
    if(timer==0){
      changeElement($(imageList))
    }
  }, 1000);
  $(block).append(carousel);

}
