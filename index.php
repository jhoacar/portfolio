<?php 
$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
switch ($lang){
    case "es":
        require_once("index.spanish.html");
        break;
    case "en":
        require_once("index.english.html");
        break;
    default:
        require_once("index.default.html");
        break;
}
?>
