'use strict';

console.log('Entered function of exercise 2');
$('.form-group').addClass('d-none');
$(document).ready(function(){
     $('.click-me').on('click',function(){
      console.log('Clicked the element');
      $('.form-group').removeClass('d-none');
      $('.click-me').addClass('d-none');
     });
});