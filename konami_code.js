const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
 
function init() {
  // your code here
  const body = document.querySelector('body')
  
  body.addEventListener('keydown', 
    function pressKey (e){
      const key = parseInt(e.detail || e.which)
      if(key === code.length){
        alert("I'M 38")
    }
  })
}
init()

