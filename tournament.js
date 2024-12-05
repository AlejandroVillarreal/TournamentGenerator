
// For the theme switcher / unneeded JS

$(document).ready(function () {
  let teamsArray = [
    { id: 18, name: "SKT" },
    { id: 7, name: "RDX" },
    { id: 35, name: "LYN" },
    { id: 2, name: "BLG" },
    { id: 25, name: "FNC" },
    { id: 12, name: "PNG" },
    { id: 41, name: "C9" },
    { id: 8, name: "G2" },
    { id: 29, name: "GEN" },
    { id: 3, name: "DRX" },
    { id: 22, name: "RNG" },
    { id: 39, name: "EDG" },
    { id: 15, name: "TES" },
    { id: 11, name: "JD" },
    { id: 33, name: "DK" },
    { id: 5, name: "MAD" },
    { id: 26, name: "100T" },
    { id: 37, name: "TL" },
    { id: 21, name: "EG" },
    { id: 17, name: "BBL" },
    { id: 42, name: "VIT" },
    { id: 10, name: "KDF" },
    { id: 4, name: "HLE" },
    { id: 23, name: "NS" },
    { id: 44, name: "KT" },
    { id: 1, name: "PSG" },
    { id: 13, name: "FLY" },
    { id: 9, name: "TSM" },
    { id: 38, name: "IMT" },
    { id: 6, name: "BYG" },
    { id: 28, name: "R7" },
    { id: 24, name: "DFM" },
    { id: 14, name: "LOUD" },
    { id: 20, name: "ISG" },
    { id: 32, name: "SBG" },
    { id: 19, name: "V3" },
    { id: 31, name: "CFO" },
    { id: 43, name: "APL" },
    { id: 16, name: "ORG" },
    { id: 34, name: "VCT" },
  ];
  var winnersArray = [];
  var dropdown = $("#teamCount");
  
  let roundNumber = 1;
  dropdown.append(new Option(2));
  dropdown.append(new Option(4));
  dropdown.append(new Option(8));
  dropdown.append(new Option(16));
  dropdown.append(new Option(32));
  

  $("#theme-none").click(function (e) {
    $(".theme").removeClass("theme-light");
    $(".theme").removeClass("theme-dark");
    $(".theme").removeClass("theme-dark-trendy");
  });

  $("#btnGenerateMatch").click(function () {
    
    var numberOfTeams = $("#teamCount").val();
    let teams = shuffleArray(teamsArray);
    try {
      teamsArray = teamsArray.slice(0,numberOfTeams);
      //teams = teams.slice(0, Number(numberOfTeams));
      GenerateMatch(roundNumber, teamsArray);
    } catch (error) {
      alert("Not enough teams to generate the tournament");
    }
    
  });
  $("#btnGenerateMatch2").click(function () {
    SelectAllWinners();
    if(AllWinnersSelected()){

        GenerateMatch(roundNumber,winnersArray);
    } else {
        alert("Winner is needed for every match");
    }
    
  });
  


  //#region Functions
  function AllWinnersSelected(){
    const winnerCount = $('.winner-team').length;
    if(winnerCount == teamsArray.length/2){
        return true;
    } else
    {
        return false;
    }
  }
  function SelectAllWinners(){
    $(".match").each(function(){
        var winnerTeam = $(this).find(".winner-team");
        var winnerTeamId = $(winnerTeam).find(".seed").text().trim();
        var winnerTeamName = $(winnerTeam).find(".name").text().trim();
        var winnerTeamObj = {id: winnerTeamId, name: winnerTeamName};
        if(winnerTeamId !== "" && winnerTeamName !=="" ){
            winnersArray.push(winnerTeamObj);
        }
        
    });

  }
  function GenerateMatch(roundNumber, teams) {
    const tournamentContainer = $("#tournament-structure");
    var roundContainer = $("<div>").addClass("column one");
    if (roundNumber > 1) {
      roundContainer.removeClass("one");
      roundContainer.addClass("two");
    }

    for (let i = 0; i < teams.length; i += 2) {

      const matchWinner = $("<div>").addClass("match ");
        const team1 = teams[i];
        const team2 = teams[i+1];
      matchWinner.html(`
                <div class = "match-top team">
                <span class="image"></span>
                        <span class="seed">${team1.id}</span>
                        <span class="name">${team1.name}</span>
                        <span class="score">2</span>
                </div>
                <div class = "match-bottom team">
                <span class="image"></span>
                        <span class="seed">${team2.id}</span>
                        <span class="name">${team2.name}</span>
                        <span class="score">2</span>
                </div>
                <div class="match-lines">
                        <div class="line one"></div>
                        <div class="line two"></div>
                    </div>
                <div class="match-lines alt">
                <div class= "line one"></div>
                </div>
                `);
     
      roundContainer.append(matchWinner);
    }

    tournamentContainer.append(roundContainer);
    roundNumber++;
  }
  function GenerateMatch2(roundNumber) {
    //This generates the second match reducing the team number by half and takes round
    //number as 2 changing the column class to two
    const tournamentContainer = $("#tournament-structure");
    var roundContainer = $("<div>").addClass("column one");
    if (roundNumber > 1) {
      roundContainer.removeClass("one");
      roundContainer.addClass("two");
    }

    for (let i = 0; i < 16; i += 2) {
      const matchWinner = $("<div>").addClass("match winner-top");
      const altLine = $("<div>").addClass("match-lines alt");
      matchWinner.html(`
                <div class = "match-top team">
                <span class="image"></span>
                        <span class="seed">${i}</span>
                        <span class="name">TeamName Placeholder</span>
                        <span class="score">2</span>
                </div>
                <div class = "match-bottom team">
                <span class="image"></span>
                        <span class="seed">${i + 1}</span>
                        <span class="name">TeamName Placeholder</span>
                        <span class="score">2</span>
                </div>
                <div class="match-lines">
                        <div class="line one"></div>
                        <div class="line two"></div>
                    </div>
                
                `);
      altLine.html(`
                <div class= "line one"></div>
                    `);
      matchWinner.append(altLine);
      roundContainer.append(matchWinner);
    }

    tournamentContainer.append(roundContainer);
  }

  function isOdd(num) {
    return num % 2 !== 0;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }
  //#endregion

  $(document).on('click', '.team', function () {
    //alert("Team Selected: ");
    // //const $matchButtons = $(this).closest('.match').find('.team-btn');
    const matchButtons = $(this).closest('.match').find('.team');
    const selectedButton = $(this);
    const buttonId = selectedButton.find(".seed").text().trim();
    const matchDiv = $(this).closest(".match")
    //alert("Team Selected: " + buttonId);
    
    
    matchButtons.removeClass('winner-team');
    selectedButton.addClass("winner-team");
    
    // $matchButtons.removeClass('selected loser');  
    // //Add to parent that has class match the following class winner-team
    // $selectedButton.addClass('selected');   

    
    // $matchButtons.not($selectedButton).addClass('loser');
});


});