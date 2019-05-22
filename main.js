// ciao ragazzi, esercizio per oggi (repo: ajax-basket):
// Utilizzare l’API: https://www.boolean.careers/api/array/basket?n=numberPlayers
// Chiedere all’utente quanti giocatori vuole generare. Chiedere all’API i giocatori e stampare a schermo una card per ogni giocatore attraverso handlebars.
// Inizialmente chiamate l'API con un numero fisso stabilito da voi, in modo da interrogare l'API nel modo corretto e stilare le card. Poi aggiungete la richiesta del numero dei giocatori all'utente

$(document).ready(function(){
  $('#bottone').click(function(){
    $.ajax({
      'url':'https://www.boolean.careers/api/array/basket',
      'method': 'GET',
      'data':{
        'n':10
      },
      'success': function(data){
        giocatori_basket(data.response);
      },
      'error': function(){
        alert('qualcosa non ha funzionato');
      }
    });
  });

  // creare un template con Handlebars
  var template_basketer = $('#template-basket').html();

  var lista_function = Handlebars.compile(template_basketer);


  //successivamente stampare nel template tutti gli oggetti giocatore


  function giocatori_basket(giocatori){
    var container_giocatori = giocatori;
    var statistiche_giocatori='';

    for(var i=0; i<container_giocatori.length; i++){

      statistiche_giocatori={
        'codice_giocatore': container_giocatori[i].playerCode,
        'punti_fatti': container_giocatori[i].points,
        'rimbalzi': container_giocatori[i].rebounds,
        'falli': container_giocatori[i].fouls,
        'tiri_2': container_giocatori[i].twoPoints,
        'tiri_3': container_giocatori[i].threePoints
      }

      var html_finale = lista_function(statistiche_giocatori);
      $('.container').append(html_finale);

    }
  }


});
