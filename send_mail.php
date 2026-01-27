<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST["phone"]));
    $message = trim($_POST["message"]);

    // Recipient email
    $to = "contacto@refugioalmalodge.cl";
    
    // Email subject
    $subject = "Nuevo mensaje de contacto de $name";

    // Email content
    $email_content = "Nombre: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Celular: $phone\n\n";
    $email_content .= "Mensaje:\n$message\n";

    // Email headers
    $headers = "From: $name <$email>";

    // Send email
    if (mail($to, $subject, $email_content, $headers)) {
        // Redirect or success message
        echo "<script>alert('Gracias! Tu mensaje ha sido enviado.'); window.location.href = 'index.html';</script>";
    } else {
        echo "<script>alert('Lo sentimos, algo salió mal. Por favor intenta nuevamente.'); window.history.back();</script>";
    }
} else {
    // Not a POST request
    header("Location: index.html");
}
?>
