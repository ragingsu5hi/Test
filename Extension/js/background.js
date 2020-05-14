var p1_button = null;
var p2_button = null;
var last_update = {player1:null,player2:null}
var logcount = null;
var diff = null;
var postbal = null;

console.log("BEGIN");
update()
///Checks for a new match and if betting is available
function update()
{
    p1_button = document.getElementById("player1");
    p2_button = document.getElementById("player2");
    var player1 = p1_button.value;
    var player2 = p2_button.value;
    
    ///Inital check for fighters
    if(player1.length == 0 || player2.length == 0)
        {
            if(logcount<1)
                {
                    setTimeout(update,15000)
                }
            else
                {
                    console.log("Can not bet yet...");
                    console.log("Current fighters: " +player1+ " vs " +player2);
                    logcount += 1
                    setTimeout(update,15000);
                }
        }
    
    ///Compares current players to last players and adds to logcount so it doesn't post to console too often.
    if(player1 == last_update.player1 && player2 == last_update.player2)
        {
            if(logcount<1)
                {
                    setTimeout(update,30000)
                }
            else
                {
                    console.log("Can not bet yet. Same fighters still.");
                    console.log("Current fighters: " +player1+ " vs " +player2);
                    logcount += 1
                    setTimeout(update,30000)
                }
        }
    
    ///Displays new match and overites last players and adds to logcount so it doesn't post to console too often.
    if(player1 != last_update.player1 && player2 != last_update.player2)
        {
            logcount = 0
            var balance = document.getElementById("balance").innerHTML;
            var balance = balance.replace(/,/g,"");
            var winstreak = document.getElementById("betStreak").innerHTML;
            var bal = null;
            bal = parseInt(balance, 10);
            console.log("New match detected.");
            console.log("Current fighters: " +player1+ " vs " +player2);
            var prebal = bal;
            console.log("prebal: " +prebal+ " postbal: " +postbal)
            console.log("Your current balance is: " +bal+ " Winstreak: " +winstreak);
            if(prebal < postbal)
                {
                    console.log("Win");
                    postbal -= prebal = diff;
                    console.log("You made: " +diff);
                }
            if(postbal < prebal)
                {
                    console.log("Loss");
                    prebal -= postbal = diff;
                    console.log("You lost: " +diff);
                }
            else
                {
                    postbal = prebal
                    console.log("Post Ifs: "+postbal);
                    last_update.player1 = player1;
                    last_update.player2 = player2;
                    setTimeout(update,60000)
                }
        }
}

//<span id="lastbet" class="dynamic-view" style="display: inline;">
//  <span class="redtext">$4100</span> →  
//  <span class="greentext">+$2624</span> |  
//  <span class="redtext">1.6</span>:
//  <span class="bluetext">1</span>
//</span>