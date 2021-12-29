<!--=====================================================
            Main Section
=====================================================-->

<section class='section section-main section-active'>

    <div class="section-main-container">

        <div class="section-main-text">
            <h1><?php echo $GLOBALS["data"]["main-name"] ?></h1>
            <p>
                <?php echo $GLOBALS["data"]["main-description"] ?>
            </p>
        </div>

        <img src="/img/profile.png" class="animated-shape section-main-text">

    </div>

    <div class='section-main-buttons'>

        <a id='about' onclick="showSection(this)"> <?php echo $GLOBALS["data"]["button-about"] ?> </a>

        <a id='contact' onclick="showSection(this)"> <?php echo $GLOBALS["data"]["button-contact"] ?> </a>

    </div>

</section>