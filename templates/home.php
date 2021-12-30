<!--=====================================================
            Home Section
=====================================================-->

<section class='section section-home section-active'>

    <div class="section-home-container">

        <div class="section-home-text">
            <h1><?php echo $GLOBALS["data"]["main-name"] ?></h1>
            <p>
                <?php echo $GLOBALS["data"]["main-description"] ?>
            </p>
        </div>

        <img src="/img/profile.png" class="animated-shape section-home-text">

    </div>

    <div class='section-home-buttons'>

        <a id='about' onclick="showSection(this)"> <?php echo $GLOBALS["data"]["button-about"] ?> </a>

        <a id='contact' onclick="showSection(this)"> <?php echo $GLOBALS["data"]["button-contact"] ?> </a>

    </div>

</section>