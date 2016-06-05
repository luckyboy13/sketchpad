$(document).ready(function(){

  createGrid(16);
  $('.grid').on('mouseenter', function(){
      $(this).css("background-color", "black");
    });
  });


function createGrid (size) {
  var boxSize = (640 )/size;
  var container = $("#container").html("");
  for ( var row = 1; row <= size; row++) {
    for( var col = 1; col <= size; col++) {
      container.append( $("<div class='grid'></div>").height(boxSize).width(boxSize) );
    }
  }
};

function askSize() {
  var size = prompt("What size do we need? Choose from 4 - 64")
    if(( size >= 4) && ( size <= 64)) {
      createGrid(size);
    } else {
      alert("Wrong parameters! Put another value")
    }
}

$('.normal').on('click', function(){
    askSize();
    $('.grid').on('mouseenter', function(){
      $(this).css("background-color", "black");
    });
  });

$('.random').click(function(){
    askSize();
    $('.grid').on('mouseenter', function(){
      var back = ["red","blue","gray", "green", "yellow", "orange"];
      var rand = back[Math.floor(Math.random() * back.length)];
      $(this).css('background',rand);
    });
  });

$('.opacity').click(function(){
    askSize();
    $('.grid').on('mouseenter', function(){
      var opac = $(this).css('opacity');
      var fade = opac - 0.1;
      if (fade > 0) { $(this).css("opacity", fade); }
      else {$(this).css("opacity", 0);}
    });
});
