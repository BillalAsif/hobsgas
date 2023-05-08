<?php

    // Variables from HTML
    $name = $_POST["name"];
    $email = $_POST['email'];
    $messageHTML = $_POST['message'];


    // Build message
    $to = "support@hobsgas.com";
    $subject = "Online Enquiry";

    $message = "A Potential Customer Is Contacting You!"; \n
    $message .= 'Name: ' . $name; \n
    $message .= 'Email: ' . $email; \n
    $message .= 'Message: ' . $messageHTML; \n

    $headers = "From: " . $email;

    $retval = mail($to, $subject, $message, $headers);
    // Send message
    if($retval) {
        echo "Message was Sent!";
    } else {
        echo "Message was not sent, please try again.";
    }

?>