const checkboxes = document.querySelectorAll(`.inbox input[type="checkbox"]`)
// console.log(checkboxes)

let lastChecked;
function handleCheck(e) {
  let inBetween = false;
  
  if(e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      console.log(checkbox)
      if(checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween
        console.log(!inBetween)
      }
      if(inBetween) {
        checkbox.checked = true;
        console.log(inBetween)
      }
    });
  }
  lastChecked = this;
}
checkboxes.forEach( box => box.addEventListener('click', handleCheck));
