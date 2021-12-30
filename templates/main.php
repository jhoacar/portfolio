<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="icon" type="image/png" href="/img/pixel_profile.png">

  <title><?php echo $GLOBALS["data"]["title"] ?></title>

  <link rel='stylesheet' type='text/css' href='/css/style.css'>
  <link rel='stylesheet' type='text/css' href='/css/main.css'>
  <link rel='stylesheet' type='text/css' href='/css/contact.css'>

</head>

<body>

  <!--=====================================================
				Page Borders
	=====================================================-->
  <div class="page-border">
    <div class="border-top"></div>
    <div class="border-bottom"></div>
    <div class="border-left"></div>
    <div class="border-right"></div>
  </div>

  <!--=====================================================
          Main Content
    =====================================================-->

  <div class='main-content'>

    <!--=====================================================
          Menu
    =====================================================-->
    <input type="checkbox" id="menu-toggle">
    <label for="menu-toggle" class="menu-icon">
      <div></div>
      <div></div>
      <div></div>
    </label>


    <div class='menu-items' id="menu">

      <ul>

        <li><a id='link-home' onclick="showSection(this)"><?php echo $GLOBALS["data"]["init"] ?></a></li>

        <li><a id='link-about' onclick="showSection(this)"><?php echo $GLOBALS["data"]["about"] ?></a></li>

        <li><a id='link-resume' onclick="showSection(this)"><?php echo $GLOBALS["data"]["resume"] ?></a></li>

        <li><a id='link-contact' onclick="showSection(this)"><?php echo $GLOBALS["data"]["contact"] ?></a></li>

      </ul>

    </div>


    <!--=====================================================
          Sections
    =====================================================-->
    <div class='sections'>

        <?php 
          include 'home.php'; 
          include 'about.php';
          include 'resume.php';
          include 'contact.php';
        ?>

    </div>

  </div>

  <script>
    function hideSections() {
      const $sections = document.querySelector(".section-active");
      if (Array.isArray($sections))
        $sections.forEach(function($section) {
          $section.classList.remove("section-active")
        });
      else if ($sections)
        $sections.classList.remove("section-active");
    }

    function showSection($anchor) {
      const section = $anchor.id.split("-").pop();
      console.log(section);
      hideSections();
      //setTimeout(()=>
      goSection(section === "home" ? "section-home" : "section-" + section);
      //,500);
    }

    function goSection(section) {
      const $section = document.querySelector(`.${section}`);
      if (Array.isArray($section))
        $section.forEach(function($main) {
          $main.classList.add("section-active")
        });
      else if ($section)
        $section.classList.add("section-active");
    }
  </script>
</body>

</html>