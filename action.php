<?php

    // Variables from HTML
    $name = $_POST("name");
    $email = $_POST('email');
    $message = $_POST('messageHTML');

    // Reg replacement
    preg_replace($name, $email, $messageHTML);

    // Build message
    $to = "asif.billal@gmail.com";
    $subject = "Online Enquiry";

    $message = "<h1>A Potential Customer Is Contacting You<h1></br>";
    $message .= 'Name: ' + $name + '</br>';
    $message .= 'Email: ' + $email + '</br>';
    $message .= 'Message: ' + $messageHTML + '</br>';

    $retval = mail($to, $subject, $message);
    // Send message
    if($retval == true) {
        echo "Message was Sent!";
    } else {
        "Message was not sent, please try again.";
    }

?>