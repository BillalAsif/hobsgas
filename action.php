<?php

    // Variables from HTML
    $name = $_POST["name"];
    $email = $_POST['email'];
    $messageHTML = $_POST['message'];


    // Build message
    $to = "support@hobsgas.co.uk";
    $subject = "Online Enquiry";

    $message = "<h1>A Potential Customer Is Contacting You</br>";
    $message .= 'Name: ' . $name . '</br>';
    $message .= 'Email: ' . $email . '</br>';
    $message .= 'Message: ' . $messageHTML . '</br>';

    $headers = "From: " . $email;

    $retval = mail($to, $subject, $message, $headers);
    // Send message
    if($retval) {
        echo "Message was Sent!";
    } else {
        echo "Message was not sent, please try again.";
    }

?>