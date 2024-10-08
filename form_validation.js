$(document).ready(function(){
    $('#login_form').validate({

        rules:{
            
            email:{
                required: true,
                email: true
            },

            password:{
                required: true,
                minlength: 6
            }

        },

        highlight: function(element) {  
            $(element).addClass('is-invalid');
        },
        unhighlight: function(element) {
            $(element).removeClass('is-invalid');
        }

    })
});

$(document).ready(function(){
    $('#new_password_form').validate({

        rules:{
            
            email:{
                required: true,
                email: true
            },

            password:{
                required: true,
                minlength: 6
            }

        },

        highlight: function(element) {  
            $(element).addClass('is-invalid');
        },
        unhighlight: function(element) {
            $(element).removeClass('is-invalid');
        }

    })
});

$("#signin").click(function (event) {
    event.preventDefault();

    if ($("#login_form").valid()) {
        var recaptchaResponse = grecaptcha.getResponse();

        if (recaptchaResponse.length === 0) {
            alert("Please complete the recaptcha");
        } else {
            $("#login_form").submit();
        }
    }
});

//for password reset 
// Get modal element
var modal = document.getElementById("resetPasswordModal");
// Get the button that opens the modal
var btn = document.getElementById("resetPasswordBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

