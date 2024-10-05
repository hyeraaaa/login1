<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $recaptchaSecret = '6LeIXVcqAAAAAObJv0ENwvKNqw2m3VJjeOn1R_EX';
    $recaptchaResponse = $_POST['g-recaptcha-response'];

    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$recaptchaSecret&response=$recaptchaResponse");
    $responseKeys = json_decode($response, true);

    if (intval($responseKeys["success"]) !== 1) {
        echo 'Please complete the reCAPTCHA.';
    } else {
        echo 'Thank you for your submission!';
    }
}
