<?php

function replaceItems($json, $string)
{
    $pattern = "/{{[^>]+}}/";
    preg_match_all($pattern, $string, $matches);
    foreach ($matches[0] as $match) {
        $pattern_text = "/[a-z\-]+/i";
        preg_match($pattern_text, $match, $result);
        $show = $json[$result[0]];
        $string = str_replace($match, $show, $string);
    }
    return $string;
}

function addSections($html, $main, $contact, $resume, $about)
{
    $pattern = "/{[^>]+}/";
    preg_match_all($pattern, $html, $matches);
    return str_replace($matches[0][0], $main . $contact . $resume . $about , $html);
}

function redirect()
{
    $lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
    $path = $_SERVER['REQUEST_URI'];
    if (!str_contains($path, $lang))
        header('Location: ' . $lang);
}

function main()
{
    
    redirect();
    $lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
    $string = file_get_contents($lang . ".json");
    if (!$string) {
        $string = file_get_contents("es.json");
        if (!$string)
            die("Language don't available");
    }

    $json = json_decode($string, true);
    if ($json === null)
        die("Format JSON is incorrect");

    $html = file_get_contents("index.html");
    $html = replaceItems($json["page"], $html);

    $main = file_get_contents("main.html");
    $main = replaceItems($json["page"], $main);

    $contact = file_get_contents("contact.html");
    $contact = replaceItems($json["page"], $contact);

    $resume = file_get_contents("resume.html");
    $resume = replaceItems($json["page"], $resume);

    $about = file_get_contents("about.html");
    $about = replaceItems($json["page"], $about);

    $html = addSections($html, $main, $contact, $resume, $about);

    echo $html;
}





main();
