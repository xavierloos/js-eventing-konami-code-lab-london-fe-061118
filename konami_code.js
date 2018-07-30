const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
 
function init() {
  // your code here
  const body = document.querySelector('body')
  
  body.addEventListener('keydown', 
    function(event){
      if(body == 38){
        alert("I'M 38")
    }
    alert('HEY')
  })
}
init()

