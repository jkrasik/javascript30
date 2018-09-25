const checkboxes = document.querySelectorAll('.inbox input[type = "checkbox"]');

var lastChecked;
var multiCheckStatus = false;
function handleCheck(e) {
  if(e.shiftKey && this.checked) {
    for(i = 0; i < checkboxes.length; i++){
      if(checkboxes[i].checked == true){
        multiCheckStatus = !multiCheckStatus;
        i++;
      }
      if(multiCheckStatus == true){
        checkboxes[i].checked = true;
      }
    }
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
