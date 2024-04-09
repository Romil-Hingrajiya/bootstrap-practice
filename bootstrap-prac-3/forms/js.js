/*
function setError(id,error){
    element = document.getElementById(id);
    element.getElementsByClassName("formerror")[0].innerHTML = error;
}

function formValidation(){
    var returnval = true;

    var name = document.forms['myForm']["firstName"].value;
    var name = document.getElementById("firstName");
    if(name.length < 3){
        setError("name", "Length of Name is too short");
        returnval = false;
    }


    return returnval;
}
*/
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()