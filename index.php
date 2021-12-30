<?php

$languages = array(
  "es"=>"spanish",
  "en"=>"english",
);

function getLanguage(){
  $client_lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
  $lang = $GLOBALS["languages"][$client_lang];
  if(!$lang)
    $lang = $GLOBALS["languages"]["en"];
  return $lang;
}

function getLanguagePath(){
  $path = $_SERVER['REQUEST_URI'];
  return explode("/",$path)[1];
}

function main()
{
    $path_lang = redirect();
    $file_lang = "languages/" .  $path_lang . ".json";
    $data = file_get_contents($file_lang);
    if($data){
      $GLOBALS["data"]=json_decode($data,true);
      include 'templates/main.php';
    }
}


function hasAnyLanguage($text){
  return in_array($text, array_values($GLOBALS["languages"]));
}

function redirect()
{
  if(hasAnyLanguage(getLanguagePath()))
    return getLanguagePath();
  
  $lang = getLanguage();
  header('Location: /' . $lang);
  return $lang;
}

main();
