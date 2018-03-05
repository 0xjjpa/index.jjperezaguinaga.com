$(document).ready(function() {
  // Get Profile
  var elemento = sessionStorage.getItem('elemento') ;
  // Change Header, Footer, Main Images Depending On Profile
  $('.header-bg').css("background-image", "url(../img/projects/" + elemento + "/header.png)") ;
  $('.footer-bg').css("background-image", "url(../img/projects/" + elemento + "/footer.png)") ;
  // Change Text Depending On Profile
  switch(elemento){
    case 'js-day':
      $(".project-title").text("jsDay '17") ;
      $(".project-subtitle").text("I'm good at JavaScript, I swear") ;
      $(".project-description").html("talk about JavaScript fatigue and better approaches to avoid the Fear Of Missing Out other than trying to learn everything that comes from HackerNews.") ;
      $(".project-img").attr("src","/img/projects/" + elemento + "/main.png") ;
      $(".project-multimedia").append('<iframe class="project-img" src="https://player.vimeo.com/video/235767809" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>') ;
      break ;
    case 'cdg-dev':
      $(".project-title").html("CDG DevFest") ;
      $(".project-subtitle").text("Buy my mixtape: the Payment Request API in action") ;
      $(".project-description").html("Today's online experience is far from easy. If you want to buy music, customers need to register, go through multiple checkout pages, and use many different forms to give their information. But what if we could mimic the original quick selling experience for our mobile users? What if they could explore, listen, and buy music directly from just scanning a poster?") ;
      $(".project-img").attr("src","/img/projects/" + elemento + "/main.png") ;
      $(".project-multimedia").append('<iframe class="project-img" src="https://www.youtube.com/embed/uDPRrmjmAD0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>') ;
      break ;
    case 'code-europe':
      $(".project-title").text("Code Europe '17") ;
      $(".project-subtitle").text("Storing data in the Bitcoin Blockchain with JavaScript") ;
      $(".project-description").html("What is a Blockchain? Why has this new term become such an important topic across multiple industries in the world? During this workshop we will provide an insiders understanding of Blockchain technologies, as well as how to interact with them using JavaScript.") ;
      $(".project-img").attr("src","/img/projects/" + elemento + "/main.png") ;
      $(".project-multimedia").append('<embed class="project-img" src="pdf/blockchain.pdf" alt="pdf" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">') ;
      break ;
    case 'workshop':
      $(".project-title").text("Workshop") ;
      $(".project-subtitle").text("At the institute of code, Bali, Indonesia") ;
      $(".project-description").html("Taught the basics of web programming during a two-weeks immersion school program, as well as introducing steps on building a career as a programmer and web developer.") ;
      $(".project-img").attr("src","/img/projects/" + elemento + "/main.png") ;
      $(".project-multimedia").append('<iframe class="project-img" src="https://giphy.com/embed/wZPrFFdPSkxLWL690P" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>') ;
      break ;
  }
});

$(".back").click(function(){
  // Clear Session Variable
  sessionStorage.clear() ;
  window.location.href = "index.html#projects" ;
}) ;
