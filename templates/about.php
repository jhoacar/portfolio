<!--=====================================================
            About Section
=====================================================-->
<section class='section section-about'>


    <div class="section-about-block section-about-block-info">

        <div class='section-header'>
            <h2>
                {{ profile-profession }}
            </h2>
        </div>

        <ul class='info-list'>

            <li>
                <strong>{{ name }} :</strong>
                <span>{{ profile-name }}</span>
            </li>

            <li>
                <strong>{{ job }} :</strong>
                <span>{{ profile-job }}</span>
            </li>

            <li>
                <strong>{{ age }} :</strong>
                <span>{{ profile-age }}</span>
            </li>

            <li>
                <strong>{{ residence }} :</strong>
                <span>{{ profile-residence }}</span>
            </li>

            <li>
                <strong>{{ city }} :</strong>
                <span>{{ profile-city }}</span>
            </li>



        </ul>



        <div class='section-about-container-info'>

            <div class="about-text">

                <p>
                    {{ about-text}}
                </p>

            </div>

            <div class='about-buttons'>

                <a href='{{ cv-path }}' download>
                    {{ button-download }}
                </a>

                <a href='#contact' >
                    {{ button-contact }}
                </a>

            </div>

        </div>


    </div>

    <div class='section-about-block skills-block'>

        <div class='section-header'>
            <h2> {{ habilities-text }} </h2>
        </div>

        <div class='skills'>

            {{ for string in skills }}

            <div class='skill'>
                <h4> {{ string }} </h4>
            </div>

            {{ end for }}

        </div>
    </div>

</section>