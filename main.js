// Ciao ragazzi, esercizio per oggi pomeriggio (repo: ajax-griglia):
//
// Creare una griglia 6x6, ad ogni click su un riquadro parte una richiesta AJAX che prende un numero random da 1 a 9 (utilizzare l'API https://www.boolean.careers/api/random/int).
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.
// mi raccomando, l'obiettivo dell'esercizio è giocare con ajax, non diventare matti a generare la griglia!
// Potete tranquillamente disegnarla direttamente nell'html per cominciare, POI, quando le chiamate ajax funzionano e il codice fa tutto quello che deve fare (cambiare colore al riquadro e inserire il numero), allora potete generare la griglia con jQuery, se vi fa piacere

$(document).ready(function(){

  //genero una griglia di quadratini
  for(var i =0; i <36; i++){
    $('.container').append('<div class="quadratino"><span></span></dvi>')
  }



  $('.quadratino').click(function(data){

    var quadrato = $(this);
    
    $.ajax({
      url : 'https://www.boolean.careers/api/random/int',
      method: 'GET',
      success: function(data){
        number(data);
      }
    });

     function number(numero_success) {
         var numero = numero_success.response;

         if(numero <= 5){
           quadrato.addClass('yellow').removeClass('green').text(numero);
         }else{
          quadrato.addClass('green').removeClass('yellow').text(numero);
         }
     }

  });

});
