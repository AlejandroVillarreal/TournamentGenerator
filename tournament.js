// For the theme switcher / unneeded JS

$(document).ready(function() {
    console.log("Working!");
	$('#theme-none').click(function(e) {
		$('.theme').removeClass('theme-light');
		$('.theme').removeClass('theme-dark');
		$('.theme').removeClass('theme-dark-trendy');
	});
	

    $("#btnGenerateMatch").click(function(){
        const tournamentContainer = $("#tournament-structure");
        const roundContainer = $("<div>").addClass("column one");
        
        for (let i = 0; i < 32; i += 2){
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
                        <span class="seed">${i+1}</span>
                        <span class="name">TeamName Placeholder</span>
                        <span class="score">2</span>
                </div>
                
                `);
                roundContainer.append(matchWinner);
        }
        
        tournamentContainer.append(roundContainer);
    });
    function isOdd(num){
        return num % 2 !== 0;
    }
});