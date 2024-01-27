$(document).ready(function() {
    $('.nav-burger').click(function(event) {
        $('.nav-burger, .nav').toggleClass('active');
        $('.blur-box').toggleClass('blur');
        $('body').toggleClass('overflow')
    })
})
document.addEventListener('DOMContentLoaded', function() {
    let elements = document.querySelectorAll('.goods-item__photo_img');
  
    elements.forEach(function(element) {
      element.addEventListener('click', function() {
        // Удаляем класс "active" у всех элементов
        elements.forEach(function(el) {
          el.classList.remove('activeIMG');
        });
  
        // Добавляем класс "active" к текущему элементу
        element.classList.add('activeIMG');
      });
    });
  });