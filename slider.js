
/* Установка стартого индекса слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    
    showSlides(slideIndex = n);
}



/* Функция перелистывания:слайдов */
function showSlides(n) {
    
    let slides = document.getElementsByClassName("slider_image");
    let dots = document.getElementsByClassName("slider_dot")
    let navi = document.getElementsByClassName("navi")
    let info = document.getElementsByClassName("btn_text2")
    let i ;
      /* Проверяем количество блоков */
      if (n > info.length) {
        slideIndex = 1
      }
      if (n < 1) {
          slideIndex = info.length
      }
  
      /* Проходим по каждому блоку в цикле for: */
      for (let i of info) {
          i.style.display = "none";
      }
      /* Делаем элемент блочным: */
      info[slideIndex - 1].style.display = "";
   
    /* Проверяем количество слайдов: */
     if (n > slides.length) {
      slideIndex = 1
     }
     if (n < 1) {
     slideIndex = slides.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block";
   
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active");
   }
     slides[slideIndex - 1].style.display = "block";
     dots[slideIndex - 1].className += " active";

      if (n > navi.length) {
       slideIndex = 1
      }
         if (n < 1) {
      slideIndex = navi.length
     }

      navi[slideIndex - 1].style.display = "block";
      for (i = 0; i < navi.length; i++) {
      navi[i].className = navi[i].className.replace("next");
   }
     slides[slideIndex - 1].style.display = "block";
     navi[slideIndex - 1].className += " next";

 
}







