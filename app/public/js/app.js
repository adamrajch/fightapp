$(document).ready(function() {
  console.log("ready");
  $.get("/api/profile", function(data) {
    console.log("here");
    console.log(data);
    createFighterCard(data);
  });
});

function createFighterCard(b) {
  var fighter = b;
  var upName = b.class;
  upName = upName.toUpperCase();
  var card = `<div class="card classCard" style="width: 18rem;">
  <img src="${
    fighter.photo
  }" class="card-img-top" style="height: 18rem;" alt="your fighter">
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
  </div>
</div>`;
  $(".display").append(card);
}
