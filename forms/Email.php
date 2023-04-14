<?php
        
        
        $email= $_POST['email'];
        $message = $_POST['message'];
        $subject= $_POST['subject'];

        
        
        $headers = 'Content-Type: text/plain; charset="utf-8"'." ";

       
            
            if(mail($email,$subject,$message,$headers) ) {
                
            include( $php_email_form );

            }else{
                
            include( $php_email_form );
                
            }
        
    ?>
