


$(document).ready(function () {
    var username = "";
    var chosen = {};
    var characters = [
        warrior = {
            description: "All around fighter. Basic af",
            hp: 100,
            atk: 20,
            speed: 20,
            armor: 2,
            spAtk: 5,
            resistance: 5,
            photo: "../images/warrior1.jpg",
            class: "warrior",

        },
        knight = {
            description: "Big sturdy boi. Slow but tanky",
            hp: 150,
            atk: 20,
            speed: 10,
            armor: 5,
            spAtk: 2,
            resistance: 5,
            photo: "../images/knight2.jpg",
            class: "knight",

        },
        mage = {
            description: "Student of magic, fairly quick",
            hp: 75,
            atk: 5,
            speed: 25,
            armor: 2,
            spAtk: 25,
            resistance: 10,
            photo: "../images/default.jpg",
            class: "mage",

        },
        warlock = {
            description: "Evil, slow, and powerful mwaha",
            hp: 150,
            atk: 5,
            speed: 10,
            armor: 3,
            spAtk: 30,
            resistance: 15,
            photo: "../images/default.jpg",
            class: "warlock",

        },
        berserker = {
            description: "Always angry. Very strong but fragile",
            hp: 100,
            atk: 30,
            speed: 25,
            armor: 1,
            spAtk: 5,
            resistance: 0,
            photo: "../images/default.jpg",
            class: "berserk",

        },
        swordmaster = {
            description: "Speedy boi. Gotta go fast",
            hp: 75,
            atk: 15,
            speed: 40,
            armor: 2,
            spAtk: 5,
            resistance: 10,
            photo: "../images/default.jpg",
            class: "swordmaster",

        }
    ]


    $(document).on("click", "#showClasses", function () {
        username = $("#charName").val();
        console.log(username)
        $("#formChar").empty();
        $("#showClasses").hide();
        console.log('working')
        for (let i = 0; i < characters.length; i++) {
            var classText = `<div class="card classCard" style="width: 18rem;">
            <img src="${characters[i].photo}" class="card-img-top" style="height: 18rem;" alt="Warrior">
            <div class="card-body">
                <h5 class="card-title">${characters[i].class}</h5>
                <p class="card-text">${characters[i].description}</p>
                <button class="fcBtn" data-type="${characters[i].class}">Select</button>
            </div>
        </div>`
            $(".classSection").append(classText);
        }
    })
    $(document).on("click", ".fcBtn", function () {
        var classType = $(this).attr("data-type");
        chosen.class = classType;
        $(".display-4").text(`${classType} Selected!`)
        $(".lead").text("Smash that fight button")
        $(".classSection").empty();
        createProfileCard(classType)
    })
    function createProfileCard(b) {
        var type = b;
        // chosen.name = username;
        if (type == "warrior") {
            chosen = warrior;
            chosen.name = username;
            var card = `<div class="card classCard" style="width: 18rem;">
            <img src="../images/default.jpg" class="card-img-top" alt="your ">
            <div class="card-body">
            <h1 class="username">${username}</h1>
                <h5 class="card-title">${warrior.class} Class Lvl. 1</h5>
                <p class="card-text">Stats</p>
                <ul>
                <li>HP: ${warrior.hp} </li>
                <li>Attack: ${warrior.atk} </li>
                <li>Sp Atttack: ${warrior.spAtk} </li>
                <li>Speed: ${warrior.speed} </li>
                <li>Armor: ${warrior.armor} </li>
                <li>Resistance: ${warrior.resistance} </li>
                </ul>
                <a href="/"><button class="goHome">Fight</button></a>
            </div>
        </div>`;
            $(".classSection").append(card);
        }
        else if (type == "knight") {
            chosen = knight;
            chosen.name = username;
            var card =
                `<div class="card classCard" style="width: 18rem;">
            <img src="${knight.photo}" class="card-img-top" alt="your ">
            <div class="card-body">
            <h1 class="username">${username}</h1>
                <h5 class="card-title">${knight.class} Class Lvl.1</h5>
                <p class="card-text">Stats</p>
                <ul>
                <li>HP: ${knight.hp} </li>
                <li>Attack: ${knight.atk} </li>
                <li>Sp Atttack: ${knight.spAtk} </li>
                <li>Speed: ${knight.speed} </li>
                <li>Armor: ${knight.armor} </li>
                <li>Resistance: ${knight.resistance} </li>
                </ul>
                <a href="/"><button class="goHome">Fight</button></a>
            </div>
        </div>
        <div class="chosenKnight">CONGRATULATIONS</div>`;

            $(".classSection").append(card);

        }
        else if (type == "mage") {
            chosen = mage;
            chosen.name = username;
            var card = `<div class="card classCard" style="width: 18rem;">
            <img src="${mage.photo}" class="card-img-top" alt="your ">
            <div class="card-body">
            <h1 class="username">${username}</h1>
                <h5 class="card-title">${mage.class} Class Lvl.1</h5>
                <p class="card-text">Stats</p>
                <ul>
                <li>HP: ${mage.hp} </li>
                <li>Attack: ${mage.atk} </li>
                <li>Sp Atttack: ${mage.spAtk} </li>
                <li>Speed: ${mage.speed} </li>
                <li>Armor: ${mage.armor} </li>
                <li>Resistance: ${mage.resistance} </li>
                </ul>
                <a href="/"><button class="goHome">Fight</button></a>
            </div>
        </div>`;
            $(".classSection").append(card);
        }
        else if (type == "warlock") {
            chosen = warlock;
            chosen.name = username;
            var card = `<div class="card classCard" style="width: 18rem;">
            <img src="${warlock.class}" class="card-img-top" alt="your ">
            <div class="card-body">
            <h1 class="username">${username}</h1>
                <h5 class="card-title">${warlock.class} Class Lvl.1</h5>
                <p class="card-text">Stats</p>
                <ul>
                <li>HP: ${warlock.hp} </li>
                <li>Attack: ${warlock.atk} </li>
                <li>Sp Atttack: ${warlock.spAtk} </li>
                <li>Speed: ${warlock.speed} </li>
                <li>Armor: ${warlock.armor} </li>
                <li>Resistance: ${warlock.resistance} </li>
                </ul>
                <a href="/"><button class="goHome">Fight</button></a>
            </div>
        </div>`;
            $(".classSection").append(card);
        }
        else if (type == "berserker") {
            chosen = berserker;
            chosen.name = username;
            var card = `<div class="card classCard" style="width: 18rem;">
            <img src="${berserker.class}" class="card-img-top" alt="your ">
            <div class="card-body">
            <h1 class="username">${username}</h1>
                <h5 class="card-title">${berserker.class} Class Lvl.1</h5>
                <p class="card-text">Stats</p>
                <ul>
                <li>HP: ${berserker.hp} </li>
                <li>Attack: ${berserker.atk} </li>
                <li>Sp Atttack: ${berserker.spAtk} </li>
                <li>Speed: ${berserker.speed} </li>
                <li>Armor: ${berserker.armor} </li>
                <li>Resistance: ${berserker.resistance} </li>
                </ul>
                <a href="/"><button class="goHome">Fight</button></a>
            </div>
        </div>`;
            $(".classSection").append(card);
        }
        else if (type == "swordmaster") {
            chosen = swordmaster;
            chosen.name = username;
            var card = `<div class="card classCard" style="width: 24rem;">
            <img src="${swordmaster.class}" class="card-img-top" alt="your ">
            <div class="card-body">
                <h1 class="username">${username}</h1>
                <h5 class="card-title">${swordmaster.class} Class Lvl.1</h5>
                <p class="card-text">Stats</p>
                <ul>
                <li>HP: ${swordmaster.hp} </li>
                <li>Attack: ${swordmaster.atk} </li>
                <li>Sp Atttack: ${swordmaster.spAtk} </li>
                <li>Speed: ${swordmaster.speed} </li>
                <li>Armor: ${swordmaster.armor} </li>
                <li>Resistance: ${swordmaster.resistance} </li>
                </ul>
                <a href="/"><button class="goHome">Fight</button></a>
            </div>
        </div>`;
            $(".classSection").append(card);
        }

    }

    $(document).on("click", ".goHome", function () {
        console.log(chosen)
        $.post("/api/fighters/" + chosen.class, chosen);

    })



})
