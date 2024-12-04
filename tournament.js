// For the theme switcher / unneeded JS

$(document).ready(function () {
  console.log("Working!");
  $("#theme-none").click(function (e) {
    $(".theme").removeClass("theme-light");
    $(".theme").removeClass("theme-dark");
    $(".theme").removeClass("theme-dark-trendy");
  });

  $("#btnGenerateMatch").click(function () {
    GenerateMatch(1);
  });
  $("#btnGenerateMatch2").click(function () {
    GenerateMatch2(2);
  });
  function GenerateMatch(roundNumber) {
    const tournamentContainer = $("#tournament-structure");
    var roundContainer = $("<div>").addClass("column one");
    if (roundNumber > 1) {
      roundContainer.removeClass("one");
      roundContainer.addClass("two");
    }

    for (let i = 0; i < 32; i += 2) {
      const matchWinner = $("<div>").addClass("match winner-top");

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
      roundContainer.append(matchWinner);
    }

    tournamentContainer.append(roundContainer);
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
});
