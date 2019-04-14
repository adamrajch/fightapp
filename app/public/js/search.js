$(document).ready(function () {
  var fighterList = [];

  // function displayFighters() {
  //   var fightTest = {
  //     name: "Dark Sam",
  //     hp: 100,
  //     atk: 20,
  //     speed: 40,
  //     armor: 5,
  //     spAtk: 20,
  //     resistance: 5,

  //   }
  //   $.post("/api/fighters", fightTest)
  // }
  // displayFighters();
  $(".searchChar").on("click", function (event) {
    // event.preventDefault();
    $(".error").empty()
    $(".display").empty();
    var charName = $("#charName").val()
    $.get("/api/fighters/" + charName, function (data, err) {
      console.log(err)
      console.log(data)
      if (err) {
        console.log(err)
        $(".error").text("That character does not exist! Search a different name")
        throw err;
      }
      else {
        createFighterCard(data[0]);
      }



    })


  })
  getFighters()
  function getFighters() {
    $.get("/api/fighters", function (data) {
      fighterList = data;
      postFighters();
    })
  }
  function postFighters() {
    for (let i = 0; i < fighterList.length; i++) {

      createFighterCard(fighterList[i]);

    }
  }

  function createFighterCard(b) {
    var fighter = b;
    var card = `<div class="max-w-md w-full lg:flex charCard">
  <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('${fighter.photo}')" title="Woman holding a mug">
  </div>
  <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <div class="text-black font-bold text-xl mb-2">${fighter.name}</div>
      <p class="text-grey-darker text-base">Level: ${fighter.level}</p>
      <p class="text-grey-darker text-base">HP: ${fighter.hp}</p>
      <p class="text-grey-darker text-base">Attack: ${fighter.atk}</p>
      <p class="text-grey-darker text-base">Sp Attack: ${fighter.spAtk}</p>
      <p class="text-grey-darker text-base">Speed: ${fighter.speed}</p>
      <p class="text-grey-darker text-base">Armor: ${fighter.armor}</p>
      <p class="text-grey-darker text-base">Speed: ${fighter.resistance}</p>
    </div>
    <div class="flex items-center">
      <img class="w-10 h-10 rounded-full mr-4 fighterCardPhoto" src="${fighter.photo}" alt="">
      <div class="text-sm">
        <p class="text-black leading-none">Username Holder</p>
        <p class="text-grey-dark">${fighter.createdAt}</p>
      </div>
    </div>
  </div>
</div>`;
    $(".display").append(card);
  }
})