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

$("#submit").click(function (event) {
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
