$(document).ready(function () {
<<<<<<< HEAD
=======
    var fighterList = [];

    function displayFighters() {
        var fightTest = {
            name: "Dark Sam",
            hp: 100,
            atk: 20,
            speed: 40,
            armor: 5,
            spAtk: 15,
            resistance: 5
        }
        $.post("/api/fighters", fightTest)
    }
    displayFighters()
>>>>>>> master

})