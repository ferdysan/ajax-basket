// ciao ragazzi, esercizio per oggi (repo: ajax-basket):
// Utilizzare l’API: https://www.boolean.careers/api/array/basket?n=numberPlayers
// Chiedere all’utente quanti giocatori vuole generare. Chiedere all’API i giocatori e stampare a schermo una card per ogni giocatore attraverso handlebars.
// Inizialmente chiamate l'API con un numero fisso stabilito da voi, in modo da interrogare l'API nel modo corretto e stilare le card. Poi aggiungete la richiesta del numero dei giocatori all'utente





$(document).ready(function(){

  $('#bottone').click(function(){

    // vado a leggere il valore inserito dall'utente
    var numero_giocatori = $('#numero_giocatori').val();

    $.ajax({
      'url':'https://www.boolean.careers/api/array/basket',
      'method': 'GET',
      // passo questo valore tramite la variabile all'api ajax
      'data':{
        'n':numero_giocatori
      },
      'success': function(data){
        //mi dichiaro una funzione per portare il response del mio ajax fuori
        giocatori_basket(data.response);
      },
      'error': function(){
        alert('qualcosa non ha funzionato');
      }
    });

    //reset dell'input
    $('#numero_giocatori').val('');
  });

  // creo un template con Handlebars
  var template_basketer = $('#template-basket').html();

  var lista_function = Handlebars.compile(template_basketer);


  //successivamente stampare nel template tutti gli oggetti giocatore


  function giocatori_basket(giocatori){
    //mi salvo il valore dell'array di oggetto all'interno di una variabile per comodità
    
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
