var slideIndex = 1;
showSlides(slideIndex);
$(function() {
  $('.login-btn').click(function() {
  $('.login-wrapper').fadeIn(1000);
  });
  
  });

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var images = document.getElementsByClassName("preview-image");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      for (i = 0; i < images.length; i++) {
          images[i].className = images[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      images[slideIndex-1].className += " active";
    };
    
    