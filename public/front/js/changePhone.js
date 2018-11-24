var status = false;

$('.single-phone').on({
    click: function(){
      var open = document.createElement("audio");
        open.src="../assets/sounds/openIP.mp3";
        open.volume=0.85;
        open.autoPlay=false;
        open.preLoad=true;

      var close = document.createElement("audio");
        close.src="../assets/sounds/closeIP.mp3";
        close.volume=0.85;
        close.autoPlay=false;
        close.preLoad=true;


      if (status === 'false'){
        $( '.single-phone' ).attr('src','../assets/images/front/singlePhoneAnimation.png');
        status = true;
        open.play();
      } else{
        $( '.single-phone' ).attr('src','../assets/images/front/singlePhone2.png');
        status = false;
        close.play();
      }

    }
});
