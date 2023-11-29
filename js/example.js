window.onload=function(){
  document.getElementById("logo").onmouseover=function(){
      alert("Compra en mi tienda a h o r a");
  }

  
  const btn1=document.getElementById("btn1");
  const btn2=document.getElementById("btn2");
  const btn3=document.getElementById("btn3");
  const dark=document.getElementById("dark");
  function mouseOver(btn) {
    btn.style.color = "orange";
  }
  
  function mouseDown(btn) {
    btn.style.color = "blue";
  }
  
  function mouseUp(btn) {
    btn.style.color = "purple";
  }
  
  function mouseOut(btn) {
    btn.style.color = "violet";
  }

    function toggleDarkBg(){
        
        if (dark.style.display=="" || dark.style.display=="none") { 
            dark.style.display="inline-block"; 
            return;
        } 
            dark.style.display="none"; 
        
    }
    function toggleSearchBar() {
      if (document.getElementById("searchBar").style.display == "inline-block") {
        document.getElementById("searchBar").style.display = "none";
        return;
      }
      document.getElementById("searchBar").style.display = "inline-block";
    }
    
  // Get the btn1 element
function toggleSearch(){
    toggleSearchBar(); 
    toggleDarkBg();
}
// dark.onmouseout=toggleSearch;
// dark.onclick=toggleSearch;
// Add event listeners to btn1
btn1.addEventListener("click", toggleSearch);
btn1.addEventListener("mouseover", function() { mouseOver(btn1);});
btn1.addEventListener("mousedown", function() { mouseDown(btn1)});
btn1.addEventListener("mouseup", function() { mouseUp(btn1) });
btn1.addEventListener("mouseout", function() { mouseOut(btn1) });


// Add event listeners to btn2
btn2.addEventListener("mouseover", function() { mouseOver(btn2) });
btn2.addEventListener("mousedown", function() { mouseDown(btn2) });
btn2.addEventListener("mouseup", function() { mouseUp(btn2) });
btn2.addEventListener("mouseout", function() { mouseOut(btn2) });
btn2.addEventListener("click", function() { 
  document.getElementById('loginForm').style.display='inline-block';
 });
btn3.addEventListener("mouseover", function() { mouseOver(btn3) });
btn3.addEventListener("mousedown", function() { mouseDown(btn3) });
btn3.addEventListener("mouseup", function() { mouseUp(btn3) });
btn3.addEventListener("mouseout", function() { mouseOut(btn3) });
btn3.addEventListener("click", function() { 
  document.getElementById('cart').style.display='inline-block';
 });
}