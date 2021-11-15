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
		
		$formcontent="From: $name\nSubject: $subject\nEmail: $email\nMessage: $message";
		
		
		//Place your Email Here
		$recipient = "jhoancarrero123@gmail.com";
		
		$mailheader = "From: $email";
		
		$mail = new PHPMailer();
		//indico a la clase que use SMTP
		$mail->IsSMTP();
		//permite modo debug para ver mensajes de las cosas que van ocurriendo
		$mail->SMTPDebug = 2;
		//Debo de hacer autenticación SMTP
		$mail->SMTPAuth = true;
		$mail->SMTPSecure = "ssl";
		//indico el servidor de Gmail para SMTP
		$mail->Host = "smtp.gmail.com";
		//indico el puerto que usa Gmail
		$mail->Port = 465;
		//indico un usuario / clave de un usuario de gmail
		$mail->Username = "jhoancarrero123@gmail.com";
		$mail->Password = "carreropineda";
		$mail->SetFrom('jhoancarrero123@gmail.com', 'Jhoan Carrero');
		$mail->AddReplyTo("jhoancarrero123@gmail.com","Jhoan Carrero");
		$mail->Subject = $subject;
		$mail->MsgHTML($message);
		//indico destinatario
		$mail->AddAddress($email, $name);
		if(!$mail->Send()) {
			$data['error'] = "Error al enviar: " . $mail->ErrorInfo;
		} else {
			$data['error'] = false;
		} 
		
		//if( mail($recipient, $name, $formcontent, $mailheader) == false ){
		//	
		//}else{
		//	
		}
	
	}
	
	echo json_encode($data);
	
?>
