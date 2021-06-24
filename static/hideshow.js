if (typeof window !== `undefined`) { // or typeof document !== 'undefined'
  let myID = document.getElementById("bar");
    let height = document.documentElement.scrollHeight;
    let myScrollFunc = function() {
      let y = window.scrollY;
      if (y >= (200) && y <= (height-574*2)) {
        myID.className = "block"
      } else {
        myID.className = "hidden"
      }
    };
    
    window.addEventListener("scroll", myScrollFunc);
}
   
   
 