let slideIndex = 0;
showslides(slideIndex);
   

/*function goNext(n){
  showslides(slideIndex += n);
}*/ 



function showslides(n){
  let i ;
  let slides = document.getElementsByClassName("image-top");
  //if (n > slides.length){slideIndex = 1}
  //if (n < 1 ) {slideIndex = slides.length}
  for (i= 0 ; i < slides.length; i++){
    slides[i].style.display= "none"
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 

  slides[slideIndex-1].style.display= "block";
  setTimeout(showslides,10000)

}

/**let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++ ;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000);
} */

//let slideIndex = 0;
