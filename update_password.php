<?php
// Database connection (Update with your database details)
include 'dbh.inc.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT); // Hash the new password
    $type = $_POST['type'];

    // Update password in the appropriate table
    if ($type == 'student') {
        $stmt = $pdo->prepare("UPDATE student SET password = :password, otp = NULL, otp_expiry = NULL WHERE email = :email");
    } else {
        $stmt = $pdo->prepare("UPDATE admin SET password = :password, otp = NULL, otp_expiry = NULL WHERE email = :email");
    }

    $stmt->execute([
        'password' => $password,
        'email' => $email
    ]);

    if ($stmt->rowCount()) {
        $message = "Password has been updated successfully.";
        header("Location: login.php?message=$message");
    } else {
        echo "An error occurred. Please try again.";
    }
}
?>
