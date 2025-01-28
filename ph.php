<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // استقبال البيانات من النموذج
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    // التحقق من صحة البريد الإلكتروني
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("<h2>البريد الإلكتروني غير صالح.</h2>");
    }

    // إعدادات البريد
    $to = "spec.main.hydr2019@gmail.com"; // بريد المؤسسة
    $subject = "رسالة جديدة من موقعك"; // عنوان البريد
    $body = "الاسم: $name\n";
    $body .= "البريد الإلكتروني: $email\n\n";
    $body .= "الرسالة:\n$message\n";

    // إعدادات إضافية
    $headers = "From: no-reply@yourdomain.com\r\n"; // بريد ثابت
    $headers .= "Reply-To: $email\r\n";

    // إرسال البريد
    if (mail($to, $subject, $body, $headers)) {
        echo "<h2>تم إرسال رسالتك بنجاح! شكرًا لتواصلك معنا.</h2>";
    } else {
        error_log("Failed to send email to $to");
        echo "<h2>عذرًا، حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة لاحقًا.</h2>";
    }
} else {
    echo "<h2>يرجى إرسال الرسالة عبر النموذج فقط.</h2>";
}
?>

