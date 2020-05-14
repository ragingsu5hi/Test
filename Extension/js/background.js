var p1_button = null;
var p2_button = null;
var last_update = {player1:"",player2:""}
var logcount = null;
var balance = document.getElementById("balance").innerHTML;
var balance = balance.replace(/,/g,""); //removes the comma
var bal = parseInt(balance, 10); //changes string to int
var postbal = bal; //previous balance since last check. marking all checks with //!!!!!!!!!!!!!!!!!!!!!!!!!!!!

logcount = 0
setTimeout(update,9000)
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
            if(logcount <= 1)
                {
                    console.log("Can not bet yet...");
                    var winstreak = document.getElementById("betStreak").innerHTML;
                    var balance = document.getElementById("balance").innerHTML;
                    var balance = balance.replace(/,/g,""); //removes the comma
                    var bal = parseInt(balance, 10); //changes string to int
                    var postbal = bal; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    console.log("Your current balance is: " +bal+ " Winstreak: " +winstreak);
                    console.log("1postbal = " + postbal);
                    console.log("--------------------------------------------");
                    logcount += 1
                    setTimeout(update,15000)
                }
            else
                {
                    console.log("2postbal = " + postbal);
                    setTimeout(update,15000)
                }
        }
    
    ///Compares current players to last players and adds to logcount so it doesn't post to console too often.
    if(player1 == last_update.player1 && player2 == last_update.player2)
        {
            if(logcount <= 1)
                {
                    console.log("3postbal = " + postbal);
                    logcount += 1
                    setTimeout(update,30000)
                }
            else
                {
                    console.log("4postbal = " + postbal);
                    setTimeout(update,30000)
                }
        }
    
    ///Displays new match and overites last players and adds to logcount so it doesn't post to console too often.
    if(player1 != last_update.player1 || player2 != last_update.player2)
        {
            var winstreak = document.getElementById("betStreak").innerHTML;
            var balance = document.getElementById("balance").innerHTML;
            var balance = balance.replace(/,/g,""); //removes the comma
            var bal = parseInt(balance, 10); //changes string to int
            logcount = 0;
            console.log("New match detected.");
            console.log("Current fighters: " +player1+ " vs " +player2);
            console.log("Your current balance is: " +bal+ " Winstreak: " +winstreak);
            var prebal = bal;
            console.log("5postbal = " + postbal);
            console.log("--------------------------------------------");
            last_update.player1 = player1;
            last_update.player2 = player2;
            postbal = bal; //records the previous balance to check winnings for next match //!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            console.log("6postbal = " + postbal);
            setTimeout(update,60000)
        }
}
