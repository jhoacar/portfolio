<?php
	
	/*
		The Send Mail php Script for Contact Form
		Server-side data validation is also added for good data validation.
	*/
    $lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
    
    $errorname    = $lang=='es'? 'Porfavor ingrese su nombre':'Please enter your name.';
    $erroremail   = $lang=='es'? 'Porfavor ingrese un correo valido':'Please enter a valid email address.';
    $errorsubject = $lang=='es'? 'Porfavor ingrese un asunto':'Please enter yout subject.';
    $errormessage = $lang=='es'? 'El mensaje es un campo requerido':'The message field is required!';
	
	$data['error'] = false;

    
	$name = $_POST['name'];
	$email = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];

	if( empty($name) ){
		$data['error'] = $errorname;
	}else if(filter_var($email, FILTER_VALIDATE_EMAIL) == false){
		$data['error'] = $erroremail;
	}else if( empty($subject) ){
		$data['error'] = $errorsubject;
	}else if( empty($message) ){
		$data['error'] = $errormessage;
	}else{
		
		$formcontent="From: $name<br>Subject: $subject<br>Email: $email<br>Message: $message";
		
		//Place your Email Here
		$recipient = "jhoancarrero123@gmail.com";
		
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => $_ENV['TRUSTIFI_URL'] . "/api/i/v1/email",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS =>"{\"recipients\":[{\"email\":\"$recipient\"}],\"title\":\"$subject\",\"html\":\"$formcontent\"}",
            CURLOPT_HTTPHEADER => array(
                "x-trustifi-key: " . $_ENV['TRUSTIFI_KEY'],
                "x-trustifi-secret: " . $_ENV['TRUSTIFI_SECRET'],
                "content-type: application/json"
            )
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);
        curl_close($curl);
        if ($err) {
            $data['error'] = "cURL Error #:" . $err;
        } else {
            $data['error'] = false;
        }
        	
	}
	
	echo json_encode($data);
	
?>
