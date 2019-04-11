$(document).ready(function () {
    var fighterList = [];

    function displayFighters() {
        var fightTest = {
            name: "Dark Sam",
            hp: 100,
            atk: 20,
            speed: 40,
            armor: 5,
            spAtk: 20,
            resistance: 5,

        }
        $.post("/api/fighters", fightTest)
    }
    displayFighters();
    getFighters()
    function getFighters() {
        $.get("/api/fighters", function (data) {
            fighterList = data;
            postFighters();
        })
    }
    function postFighters() {
        $(".display").append("name: " + fighterList[0].name + " Atk: " + fighterList[0].atk)
        $(".display").append("<img src='" + fighterList[0].photo + "'>")
    }

})