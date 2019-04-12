$(document).ready(function () {
    $("#showClasses").on("click", function () {
        var classText = `
        <div class="card warriorCard" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="Warrior">
            <div class="card-body">
                <h5 class="card-title">Warrior</h5>
                <p class="card-text">All around character. Excels in strength</p>
                <a href="#" class="btn btn-primary">Select</a>
            </div>
        </div>
        <div class="card warriorCard" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="Knight">
            <div class="card-body">
                <h5 class="card-title">Knight</h5>
                <p class="card-text">Big and beefy. Specializes in defense</p>
                <a href="#" class="btn btn-primary">Select</a>
            </div>
        </div>
        <div class="card warriorCard" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="Mage">
            <div class="card-body">
                <h5 class="card-title">Mage</h5>
                <p class="card-text"> Student of magic. Specializes in magic and speed</p>
                <a href="#" class="btn btn-primary">Select</a>
            </div>
        </div> 
        <div class="card warriorCard" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="Warlock">
            <div class="card-body">
                <h5 class="card-title">Knight</h5>
                <p class="card-text"> Traded his soul to a demon for power. High magic damage and defenses but slow </p>
                <a href="#" class="btn btn-primary">Select</a>
            </div>
        </div>`;
        $(".classSection").append(classText);

    })


})
