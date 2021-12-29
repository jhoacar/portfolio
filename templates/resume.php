<!--=====================================================
            Resume Section
=====================================================-->
<section class='section section-resume'>

    <div class='section-block timeline-block'>

        <div class='section-header'>
            <h2><?php echo $GLOBALS["data"]["education-text"] ?></h2>
        </div>

        <ul class='timeline'>

            <?php

            $educations = $GLOBALS["data"]["education"];

            foreach ($educations as $education) {

                if (!$education) break;

                $name = $education['name'];
                $career = $education['career'];
                $time = $education['time'];

                echo "<li>

                <div class='timeline-content'>

                    <h4> $name </h4>

                    <em>
                        <span> $career </span>
                        <span> $time </span>
                    </em>

                </div>

            </li>";
            }

            ?>


        </ul>
    </div>

    <div class='section-block timeline-block'>

        <div class='container-fluid'>

            <div class='section-header'>

                <h2> <?php echo $GLOBALS["data"]["experience-text"] ?></h2>

            </div>

            <ul class='timeline'>

                <?php

                $experiences = $GLOBALS["data"]["experience"];

                foreach ($experiences as $experience) {
                    
                    $name = $experience["name"];
                    $position = $experience["position"];
                    $time = $experience["date"];
                    $description = $experience["description"];
                    echo "
                    <li>

                    <div class='timeline-content'>

                        <h4>$name</h4>

                        <em>
                            <span>$position</span>
                            <span>$time</span>
                        </em>

                        <p>
                        $description
                        </p>

                    </div>

                </li>";
                }

                ?>
            </ul>

        </div>

    </div>

</section>