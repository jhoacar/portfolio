<?php 

$lang = $_SERVER['HTTP_ACCEPT_LANGUAGE'];
switch($lang) {
    case "de-DE":
        break;
    case "es-ES":
        require_once("index.spanish.html");
        break;
    case "cn-CN":
        break;
    case "fr-FR":
        break;
    case "en-US":
        require_once("index.english.html");
        break;
    default:
        require_once("index.english.html");
        break;
}
?>
