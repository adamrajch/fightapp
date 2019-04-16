
$(document).ready(function () {

    console.log("hello fight")
    let player;
    let enemy;
    let playerFirst;
    let eHp;
    let pHp;
    let atks;
    let cpuAtks;

    $.get('/api/fighters', function (data, err) {
        var p1 = data[0];
        player = data[0];
        enemy = data[1];
        console.log(p1);
        console.log(data[1]);
        displayPlayer(p1)
        displayEnemy(data[1])
        eHp = data[1].hp;
        pHp = data[0].hp
        speedCalc()
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
    function speedCalc() {

        pSd = player.speed;
        eSd = enemy.speed;

        var calc = pSd / eSd;

        if (calc < 1) {
            playerFirst = false;
        }
        else if (calc > 1) {
            playerFirst = true;
        }
        else {
            var rnd = Math.floor(Math.random() * 2);
            if (rnd === 0) {
                playerFirst = true;
            }
            else {
                playerFirst = false;
            }
        }

        if (calc < 2 && calc > 0.5) {
            atks = 1;
            cpuAtks = 1;
        }
        else if (calc >= 2) {
            atks = 2;
            cpuAtks = 1;
        }
        else if (calc <= 0.5) {
            atks = 1;
            cpuAtks = 2;
        }

    }
    function damageDealtAtk() {
        // var rndAtk = Math.floor(Math.random() * (player.atk + 2) + (player.atk - 2))
        // var dmg = rndAtk - enemy.armor;
        // eHp -= rndAtk - enemy.armor;

        // var enemyrndAtk = Math.floor(Math.random() * (enemy.atk + 2) + (enemy.atk - 2))
        // var edmg = enemyrndAtk - player.armor;
        // pHp -= edmg;

        // var pLog = `<li class="list-group-item list-group-item-primary">${player.name} attacked for ${dmg} damage! ${enemy.name} has ${eHp} left!</li>`;
        // var eLog = `<li class="list-group-item list-group-item-primary">${enemy.name} attacked for ${edmg} damage! ${player.name} has ${pHp} left!</li>`;

        if (playerFirst) {
            if (atks == 1 && cpuAtks == 1) {
                playerAtk()
                enemyAtk()
            }
            else if (atks == 2) {
                playerAtk()
                enemyAtk()
                playerAtk()
            }
            else if (cpuAtks == 2) {
                playerAtk()
                enemyAtk()
                enemyAtk()
            }

        }
        else {
            if (atks == 1 && cpuAtks == 1) {
                enemyAtk()
                playerAtk()
            }
            else if (atks == 2) {
                enemyAtk()
                playerAtk()
                playerAtk()
            }
            else if (cpuAtks == 2) {
                enemyAtk()
                playerAtk()
                enemyAtk()
            }
        }

    }
    function playerAtk() {

        var rndAtk = Math.floor(Math.random() * (player.atk + 2) + (player.atk - 2))
        var dmg = rndAtk - enemy.armor;
        eHp -= rndAtk - enemy.armor;

        var pLog = `<li class="list-group-item list-group-item-primary">${player.name} attacked for ${dmg} damage! ${enemy.name} has ${eHp} left!</li>`;
        $(".log").prepend(pLog);
    }
    function enemyAtk() {
        var enemyrndAtk = Math.floor(Math.random() * (enemy.atk + 2) + (enemy.atk - 2))
        var edmg = enemyrndAtk - player.armor;
        pHp -= edmg;
        var eLog = `<li class="list-group-item list-group-item-danger">${enemy.name} attacked for ${edmg} damage! ${player.name} has ${pHp} left!</li>`;
        $(".log").prepend(eLog);
    }
    // function damageDealtSpAtk(spattack, hp, res) {

    // }
    $(document).on("click", ".beginFight", function () {
        fight();
    })

    function fight() {
        var butts = ` <button type="button" class="btn btn-primary btn-lg pAttack">Physical</button>
        <button type="button" class="btn btn-secondary btn-lg spAttack">Special</button>`;
        $(".battleLog").prepend(butts);
        $(".beginFight").hide();

    }
    $(document).on("click", ".pAttack", function () {
        // speedCalc();

        damageDealtAtk();

    })
    $(document).on("click", ".spAttack", function () {

    })
})