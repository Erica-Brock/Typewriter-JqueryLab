/*
1. Hide the shift keyboard on load
 -Check if the shift key is pressed
 show if pressed. 
 hide if not pressed
2. hide lowercase keyboard on shift
inlcude in above
3. highlight keys on screen when they are pressed. 
 Check which key is pressed
 highlight corresponding div(change background color)
4. display sentences one at a time
5.highlight the currently expected letter
6. display expected letter in the center "target letter" div
7. indicate correct key has been pressed with a green check mark
8. indicate incorrect key with a red "x"
9.clear feedback div at the end of each sentence
10. calculate the score and display to user
11. ask user if they would like to play again.
12. if yes. reset the game. 
13. go and party because you are done with this crazy lab.
 */
var sentences = ["There must be some kind of way outta here",
    "said the joker to the theif",
    "there's too much confusion",
    "I can't get no relief",
    "Business men, they drink my wine",
    "Plowman dig my earth",
    "None were level on the mind",
    "Nobody up at his word",
    "Hey, hey"];
var sentenceCounter=0;
var letterCounter=0;

$(document).ready(function () {
    function shiftCheck(keydown, keyup) {
        if (keydown, keyCode === 16);
    }
    //hide/show keyboard containers
    $("#keyboard-upper-container").hide();
    $(document).keydown(function (e) {
        if (e.which === 16) {
            $("#keyboard-upper-container").show();
            $("#keyboard-lower-container").hide();
        }
    })
    $(document).keyup(function (e) {
        if (e.which === 16) {
            $("#keyboard-upper-container").hide();
            $("#keyboard-lower-container").show();
        }
        if (e.shiftKey === true && (e.which >= 65 && e.which <= 90 || e.which >= 48 && e.which <= 57)) {
            $("#" + e.which).css({ 'background-color': '#f5f5f5' });
        }
        else if (e.which >= 65 && e.which <= 90) {
            $("#" + (e.which + 32)).css({ 'background-color': '#f5f5f5' });
        }
    })
    //highlight keys when pressed
    $(document).keypress(function (e) {
        $("#" + e.which).css({ 'background-color': '#E6E6FA' });

    }) 
})