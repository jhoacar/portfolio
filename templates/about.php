<!--=====================================================
            About Section
=====================================================-->
<section class='section section-about'>


    <div class="section-about-block section-about-block-info">

        <div class='section-header'>
            <h2>
                <?php echo $GLOBALS["data"]["main-profession"] ?>
            </h2>
        </div>

        <ul class='info-list'>

            <li>
                <strong><?php echo $GLOBALS["data"]["name"] ?> :</strong>
                <span><?php echo $GLOBALS["data"]["profile-name"] ?></span>
            </li>

            <li>
                <strong><?php echo $GLOBALS["data"]["job"] ?> :</strong>
                <span><?php echo $GLOBALS["data"]["profile-job"] ?></span>
            </li>

            <li>
                <strong><?php echo $GLOBALS["data"]["age"] ?> :</strong>
                <span><?php echo $GLOBALS["data"]["profile-age"] ?></span>
            </li>

            <li>
                <strong><?php echo $GLOBALS["data"]["residence"] ?> :</strong>
                <span><?php echo $GLOBALS["data"]["profile-residence"] ?></span>
            </li>

            <li>
                <strong><?php echo $GLOBALS["data"]["city"] ?> :</strong>
                <span><?php echo $GLOBALS["data"]["profile-city"] ?></span>
            </li>



        </ul>



        <div class='section-about-container-info'>

            <div class="about-text">

                <p>
                    <?php echo $GLOBALS["data"]["about-text"] ?>
                </p>

            </div>

            <div class='about-buttons'>

                <a href='<?php echo $GLOBALS["data"]["cv-path"] ?>' download>
                    <?php echo $GLOBALS["data"]["button-download"] ?>
                </a>

                <a id='contact' >
                    <?php echo $GLOBALS["data"]["button-contact"] ?>
                </a>

            </div>

        </div>


    </div>

    <div class='section-about-block skills-block'>

        <div class='section-header'>
            <h2> <?php echo $GLOBALS["data"]["skill-text"] ?> </h2>
        </div>

        <div class='skills'>

            <?php 
                $skills = $GLOBALS["data"]["skills"];

                foreach($skills as $skill)
                    echo "
                    <div class='skill'>
                        <h4>$skill</h4>
                     </div>";
            ?>

        </div>
    </div>

</section>