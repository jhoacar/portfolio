<!--=====================================================
            Contact Section
=====================================================-->
<section class='section section-contact'>

    <div class='section-contact-header'>
        <h2><?php echo $GLOBALS["data"]["contact"] ?></h2>
    </div>

    <div class='section-contact-form'>

        <form id='contact-form' method='post' action='mail.php'>

            <div class="contact-form-name">
                <input type='text' placeholder='<?php echo $GLOBALS["data"]["form-name"] ?>' name='name' required>
            </div>
            <div class="contact-form-email">
                <input type='email' placeholder='<?php echo $GLOBALS["data"]["form-email"] ?>' name='email' required>
            </div>
            <div class="contact-form-subject">
                <input type='text' placeholder='<?php echo $GLOBALS["data"]["form-subject"] ?>' name='subject' required>
            </div>
            <div class="contact-form-message">
                <textarea placeholder='<?php echo $GLOBALS["data"]["form-message"] ?>' name='message' rows='5' required></textarea>
            </div>
            <div class="contact-form-submit">
                <button type='submit'> <?php echo $GLOBALS["data"]["button-form"] ?> </button>
            </div>
        </form>

    </div>

    <div class='section-contact-info-container'>

        <div class='section-contact-info'>

            <i class='ion-ios-location'></i>

            <p>
                San Telmo,
                Buenos Aires, Argentina
            </p>

        </div>


        <div class='section-contact-info'>

            <i class='ion-social-whatsapp'></i>

            <p>
                (+54) 9 1168521059
            </p>

        </div>


        <div class='section-contact-info'>

            <i class='ion-email'></i>

            <p>
                carrerojhoan@gmail.com
            </p>

        </div>

        <div class='section-contact-info'>

            <a href="https://github.com/jhoacar" target="_blank" class='ion-social-github'>
                <img src="https://img.icons8.com/ios-glyphs/50/000000/github.png"/>
            </a>
            <a href="https://linkedin.com/in/jhoacar" target="_blank" class='ion-social-linkedin'>
                <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"/>
            </a>
            <a href="https://instagram.com/jhoancarrero8" target="_blank" class='ion-social-instagram'>
                <img src="https://img.icons8.com/ios-filled/50/000000/instagram-new--v1.png"/>
            </a>

        </div>

    </div>


</section>