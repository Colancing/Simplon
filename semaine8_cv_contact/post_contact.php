<?php
/**
 * Created by PhpStorm.
 * User: Emmanuelle
 * Date: 15/12/2015
 * Time: 22:14
 */
$name    = $_POST['name'];
$message = $_POST['message'];
$mail    = $_POST['mail'];
$headers = "from: " . $mail;

$errors = [ ];

if ( ! isset ( $message ) || $message == "" ) {
	$errors['message'] = "Il n'y a aucun message";
}
if ( ! isset ( $name ) || $name == "" ) {
	$errors['name'] = "Merci d'indiquer votre nom.";
}
if ( ! isset ( $mail ) || $mail == "" ) {
	$errors['mail'] = "Merci d'indiquer votre adresse mail.";
}

if ( ! empty ( $errors ) ) {
	session_start();
	$_SESSION['errors']=$errors;
	header( 'location:http://localhost/Simplon/semaine8/cv_porfolioo.php' );
} else {
	echo "Votre message a bien été envoyé";
	mail( "p@hotmail.fr", "Formulaire de Contact Cv" . $headers, $message, $headers );
}

var_dump( $errors );
die();



