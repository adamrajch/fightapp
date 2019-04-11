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
        for (let i = 0; i < fighterList.length; i++) {

            createFighterCard(fighterList[i]);

        }

        // $(".display").append("name: " + fighterList[0].name + " Atk: " + fighterList[0].atk)
        // $(".display").append("<img src='" + fighterList[0].photo + "'>")
    }

    function createFighterCard(b) {
        var fighter = b;
        var card = `<div class="max-w-md w-full lg:flex">
  <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('${fighter.photo}')" title="Woman holding a mug">
  </div>
  <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <p class="text-sm text-grey-dark flex items-center">
        <svg class="fill-current text-grey w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </svg>
        Members only
      </p>
      <div class="text-black font-bold text-xl mb-2">${fighter.name}</div>
      <p class="text-grey-darker text-base">Atk: ${fighter.atk}</p>
      <p class="text-grey-darker text-base">HP: ${fighter.hp}</p>
      <p class="text-grey-darker text-base">Speed: ${fighter.speed}</p>
    </div>
    <div class="flex items-center">
      <img class="w-10 h-10 rounded-full mr-4 fighterCardPhoto" src="${fighter.photo}" alt="">
      <div class="text-sm">
        <p class="text-black leading-none">Jonathan Reinink</p>
        <p class="text-grey-dark">Aug 18</p>
      </div>
    </div>
  </div>
</div>`;
        $(".display").append(card);
    }
})