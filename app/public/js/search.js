$(document).ready(function () {
  var fighterList = [];
  $("#selectBtn").on("click", function (e) {
    console.log($("#selector").val())
    e.preventDefault()
    getFighterByClass($("#selector").val());
  })
  $("#displayAll").on("click", function (e) {
    e.preventDefault()
    getFighters();
  })
  $("#searchFighter").on("click", function (e) {
    e.preventDefault();
    $(".error").empty()
    $(".display").empty();
    var charName = $("#searchGuy").val()
    console.log(charName)
    $.get("/api/fighters/" + charName, function (data, err) {
      console.log(err)
      console.log(data)
      if (data.length == 0) {
        console.log(err)
        $(".error").text("That fighter does not exist! Search a different name")
        throw err;
      }
      else {
        createFighterCard(data[0]);
      }
    })
  })
  $('#searchGuy').keypress(function (e) {

    if (e.which == 13) {//Enter key pressed
      e.preventDefault()
      $('#searchFighter').click();//Trigger search button click event
    }
  });

  function getFighters() {
    $.get("/api/fighters", function (data) {


      fighterList = data;

      for (let i = data.length - 1; data.length > -1; i--) {
        createFighterCard(data[i]);
      }
      // postFighters();
    })
  }

  function getFighterByClass(b) {
    $(".display").empty();
    var fighterClass = b;
    $.get("/api/classes/" + fighterClass, function (data) {
      for (let i = data.length - 1; data.length > -1; i--) {
        createFighterCard(data[i]);
      }
    })
  }

  function createFighterCard(b) {
    var fighter = b;
    var upName = b.class
    upName = upName.toUpperCase()
    var card =
      `<div class="card classCard" style="width: 18rem;">
    <img src="${fighter.photo}" class="card-img-top" style="height: 18rem;" alt="your fighter">
    <div class="card-body">
    <h1 class="username">${fighter.name}</h1>
        <h5 class="card-title">${upName} Class Lvl.1</h5>
        <p class="card-text">Stats</p>
        <ul>
        <li>HP: ${fighter.hp} </li>
        <li>Attack: ${fighter.atk} </li>
        <li>Sp Atttack: ${fighter.spAtk} </li>
        <li>Speed: ${fighter.speed} </li>
        <li>Armor: ${fighter.armor} </li>
        <li>Resistance: ${fighter.resistance} </li>
        <li>Win: ${fighter.win} </li>
        <li>Losses: ${fighter.loss} </li>
        </ul>
        <button class="challenge">Challenge</button>
    </div>
</div>`;
    $(".display").append(card);
  }
})