var word;
var word_list = [];
word_list[0] = ["bird","house","beach","table","book","lunch"];
word_list[1] = ["human","computer","calculator","swimming","strategy","blanket"];
word_list[2] = ["cellphone","hipoppotamus","roundabout","scaffold","government","kindergarten"];
var letter;
var word_show = [];
var word_text = "";
var hangman_img = document.getElementById("hangman_img");
var display_word = document.getElementById("word-display");
var alphabet = document.getElementById("alphabet-div");
var card_title = document.getElementById("card-title");
var reset_btn = document.getElementById("reset");
var hit = 0;
var hit_now = 0;
var miss = 0;
var begin;
var dif;
var hit_letters = [];
var miss_letters = [];

function add_l(letter){
    var aux;
    aux = document.getElementById("l_" + letter);
    aux.style.display = "none";

    for(var i = 0; i < word.length; i++){
        if(word[i] == letter){
            word_show[i] = letter;
            hit_letters[hit] = letter;
            hit++;
            hit_now = 1;
        }
    }
    if (hit_now == 0 && miss < 9){
        miss_letters[miss] = letter;
        miss++;
        hangman_img.src = "img/hangman_" + miss + ".png";
    }
    hit_now = 0;
    create_disp(1,10);
}

function create_disp(begin,dif){

    if (miss == 9){
        alphabet.style.display = "none";
        display_word.innerHTML = word;
        display_word.style.color = "red";
        card_title.style.display = "block";
        card_title.innerHTML = "Game Over";
        reset_btn.innerHTML = "Try again";
    }else{
        if (begin == 0){
            alphabet.style.display = "block";
            document.getElementById("easy").style.display = "none";
            document.getElementById("medium").style.display = "none";
            document.getElementById("hard").style.display = "none";
            reset_btn.style.display = "block";
            hangman_img.src = "img/hangman_0.png";
            card_title.style.display = "none";
            generate_word(dif);
            for(var i = 0; i < word.length; i++){
                word_text = word_text + " _ ";
                word_show[i] = "_"; 
            }
        }
        display_word.innerHTML = word_show;
        var extra = display_word.innerHTML.replace(/,/g , " ");
        display_word.innerHTML = extra;
        display_word.style.textTransform = "uppercase";
    
        if (hit == word.length){
            alphabet.style.display = "none";
            display_word.style.color = "blue";
            card_title.style.display = "block";
            card_title.innerHTML = "You Won";
            reset_btn.innerHTML = "Play again";
            hangman_img.src = "img/hangman_hello.png";
        }
    }
}



function generate_word(dif){
    var a = Math.floor(Math.random() * word_list[dif].length);
    word = word_list[dif][a];
}

function reset(){
    display_word.style.color = "black";
    document.getElementById("easy").style.display = "block";
    document.getElementById("medium").style.display = "block";
    document.getElementById("hard").style.display = "block";
    reset_btn.innerHTML = "Reset";
    document.getElementById("reset").style.display = "none";
    hangman_img.src = "img/hangman_hello.png";
    card_title.style.display = "block";

    for (var i = 0; i < hit_letters.length; i++){
        document.getElementById("l_" + hit_letters[i]).style.display = "inline";
    }
    for (var i = 0; i < miss_letters.length; i++){
        document.getElementById("l_" + miss_letters[i]).style.display = "inline";
    }

    alphabet.style.display = "none";
    hit = 0;
    hit_now = 0;
    miss = 0;
    word = "";
    display_word.innerHTML = "";
    hit_letters = [];
    word_show = [];
    word_text = "";

}
