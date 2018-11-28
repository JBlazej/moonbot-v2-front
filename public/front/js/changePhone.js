var status = false;

$('.single-phone').on({
    click: function(){
      var open = document.createElement("audio");
        open.src="https://moonbot-v2-front.herokuapp.com/audio/open";
        open.volume=0.85;
        open.autoPlay=false;
        open.preLoad=true;

      var close = document.createElement("audio");
        close.src="https://moonbot-v2-front.herokuapp.com/audio/close";
        close.volume=0.85;
        close.autoPlay=false;
        close.preLoad=true;


      if (status === 'false'){
        $( '.single-phone' ).attr('src','https://moonbot-v2-front.herokuapp.com/img/singlePhoneAnimation.png');
        status = true;
        open.play();
      } else{
        $( '.single-phone' ).attr('src','https://moonbot-v2-front.herokuapp.com/img/singlePhone2.png');
        status = false;
        close.play();
      }

    }
});
