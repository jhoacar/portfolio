<?php
	
	/*
		The Send Mail php Script for Contact Form
		Server-side data validation is also added for good data validation.
	*/
	
	$data['error'] = false;
	
	$name = $_POST['name'];
	$email = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];
	
	if( empty($name) ){
		$data['error'] = 'Please enter your name.';
	}else if(filter_var($email, FILTER_VALIDATE_EMAIL) == false){
		$data['error'] = 'Please enter a valid email address.';
	}else if( empty($subject) ){
		$data['error'] = 'Please enter your subject.';
	}else if( empty($message) ){
		$data['error'] = 'The message field is required!';
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
