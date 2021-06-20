var x = window.matchMedia("(max-width: 700px)");

function myFunction(x) {
    if (x.matches) { 
      document.body.style.backgroundColor = "yellow";
    } else {
      document.body.style.backgroundColor = "pink";
    }
  }
  
  x.addListener(myFunction);
  myFunction(x);
  