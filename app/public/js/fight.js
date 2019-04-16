$(document).ready(function () {
    console.log("hello fight")
    $.get('/api/fighters', function (data, err) {
        var p1 = data[0];
        console.log(p1);
        console.log(data[1]);
        displayPlayer(p1)
        displayEnemy(data[1])
    })
    function displayPlayer(a) {
        var p1 = a;
        var card = `<div class="card classCard" style="width: 18rem;">
      <img src="${p1.photo}" class="card-img-top" style="height: 18rem;" alt="your p1">
      <div class="card-body">
      <div class="progress">
      <div class="progress-bar progress-bar-striped progress-bar-animated playerHP" role="progressbar"
          aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
  </div>
      <h1 class="username">${p1.name}</h1>
          <h5 class="card-title">${p1.class.toUpperCase()} Class Lvl.1</h5>
          <p class="card-text">Stats</p>
          <ul>
          <li>HP: ${p1.hp} </li>
          <li>Attack: ${p1.atk} </li>
          <li>Sp Atttack: ${p1.spAtk} </li>
          <li>Speed: ${p1.speed} </li>
          <li>Armor: ${p1.armor} </li>
          <li>Resistance: ${p1.resistance} </li>
          <li>Win: ${p1.win} </li>
          <li>Losses: ${p1.loss} </li>
          </ul>
      </div>
  </div>`;
        $(".playerCol").append(card);
    }
    function displayEnemy(a) {
        var card = `<div class="card classCard" style="width: 18rem;">
        <img src="${a.photo}" class="card-img-top" style="height: 18rem;" alt="your a">
        <div class="card-body">
        <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger enemyHP"
            role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"
            style="width: 100%"></div>
    </div>
        <h1 class="username">${a.name}</h1>
            <h5 class="card-title">${a.class.toUpperCase()} Class Lvl.1</h5>
            <p class="card-text">Stats</p>
            <ul>
            <li>HP: ${a.hp} </li>
            <li>Attack: ${a.atk} </li>
            <li>Sp Atttack: ${a.spAtk} </li>
            <li>Speed: ${a.speed} </li>
            <li>Armor: ${a.armor} </li>
            <li>Resistance: ${a.resistance} </li>
            <li>Win: ${a.win} </li>
            <li>Losses: ${a.loss} </li>
            </ul>
        </div>
    </div>`;
        $(".enemyCol").append(card);
    }
    // function speedCalc() {

    // }
    // function damageDealtAtk(attack, hp, armor) {

    // }
    // function damageDealtSpAtk(spattack, hp, res) {

    // }

})