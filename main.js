let player1, player2;
let c = 0;

$(".gameEnd").hide();

$(".start .btns button").click(function(){
    player1 = $(this).text();
    player2 = $(this).siblings().text();
    $(this).parents(".start").hide();
    $(".player1 h2").text(player1)
    $(".player2 h2").text(player2)
    $(".players").fadeIn(500);
    $(".container").fadeIn(500);
    $(".player1 h2").css("background-color", "#f70101")
    $(".player2 h2").css("background-color", "#ffb485")
})


function check(x, y,  z){
    
    if(x == "X" && y == "X" && z == "X"){
        return 1;
    }
    
    else if(x == "O" && y == "O" && z == "O"){
        return 2;
    }
    
}






$(".item").click(function(){
    
    
    if($(this).attr("id") == "0"){
        if(c % 2 == 0){
            $(this).text(player1);
            
            if(player1 == "X"){
                $(this).css("color", "white")
            }
            else{
                $(this).css("color", "red")
            }
            
            $(".player1 h2").css("background-color", "#ffa2a2")
            $(".player2 h2").css("background-color", "#f76101")
        }
        else{
            $(this).text(player2);
            
            if(player2 == "X"){
                $(this).css("color", "white")
            }
            else{
                $(this).css("color", "red")
            }
            
            $(".player1 h2").css("background-color", "#f70101")
            $(".player2 h2").css("background-color", "#ffb485")
        }
        
        $(this).attr("id", "1")
        c++;
    }
    
    
    let item1 = $($(".item")[0]).text();
    let item2 = $($(".item")[1]).text();
    let item3 = $($(".item")[2]).text();

    let item4 = $($(".item")[3]).text();
    let item5 = $($(".item")[4]).text();
    let item6 = $($(".item")[5]).text();

    let item7 = $($(".item")[6]).text();
    let item8 = $($(".item")[7]).text();
    let item9 = $($(".item")[8]).text();
    
    
    let r1 = check(item1, item2, item3);
    let r2 = check(item4, item5, item6);
    let r3 = check(item7, item8, item9);
    
    let c1 = check(item1, item4, item7);
    let c2 = check(item2, item5, item8);
    let c3 = check(item3, item6, item9);
    
    
    let d1 = check(item1, item5, item9);
    let d2 = check(item3, item5, item7);
    
    
    if(r1){
        $(".rod").show()
        .animate({"height": "10px"})
        .animate({
            "top": "37px",
            "left": "13px",
        })
        .animate({"width": "90%"})
        
        $(this).attr("id", "1");
        $(this).parents(".container").children(".row").children(".item").attr("id", "1");
        
        if(r1 == 1 && player1 == "X"){
            $(".win").text("Player 1 Winned").css("color", "#60ff00")
        }
        else if(r1 == 1 && player2 == "X"){
            $(".win").text("Player 2 Winned").css("color", "#60ff00")
        }
        
        else if(r1 == 2 && player1 == "O"){
            $(".win").text("Player 1 Winned").css("color", "#60ff00")
        }
        
        else if(r1 == 2 && player2 == "O"){
            $(".win").text("Player 2 Winned").css("color", "#60ff00")
        }
        
        $(".gameEnd").fadeIn(500);
    }
    
    else if(r2){
        $(".rod").show()
        .animate({"height": "10px"})
        .animate({
            "top": "125px",
            "left": "13px",
        })
        .animate({"width": "90%"})
        
        $(this).attr("id", "1");
        $(this).parents(".container").children(".row").children(".item").attr("id", "1");
        
        
        if(r2 == 1 && player1 == "X"){
            $(".win").text("Player 1 Winned").css("color", "#60ff00")
        }
        else if(r2 == 1 && player2 == "X"){
            $(".win").text("Player 2 Winned").css("color", "#60ff00")
        }
        
        else if(r2 == 2 && player1 == "O"){
            $(".win").text("Player 1 Winned").css("color", "#60ff00")
        }
        
        else if(r2 == 2 && player2 == "O"){
            $(".win").text("Player 2 Winned").css("color", "#60ff00")
        }
        
        
        $(".gameEnd").fadeIn(500);
    }
    
    else if(r3){
        $(".rod").show()
        .animate({"height": "10px"})
        .animate({
            "top": "213px",
            "left": "13px",
        })
        .animate({"width": "90%"})
        
        $(this).attr("id", "1");
        $(this).parents(".container").children(".row").children(".item").attr("id", "1");
        
        
        if(r3 == 1 && player1 == "X"){
            $(".win").text("Player 1 Winned").css("color", "#60ff00")
        }
        else if(r3 == 1 && player2 == "X"){
            $(".win").text("Player 2 Winned").css("color", "#60ff00")
        }
        
        else if(r3 == 2 && player1 == "O"){
            $(".win").text("Player 1 Winned").css("color", "#60ff00")
        }
        
        else if(r3 == 2 && player2 == "O"){
            $(".win").text("Player 2 Winned").css("color", "#60ff00")
        }
        
        
        
        $(".gameEnd").fadeIn(500);
    }
    
    else if(c1){
        $(".rod").show()
        .animate({"width": "10px"})
        .animate({
            "top": "10px",
            "left": "35px",
        })
        .animate({"height": "90%"})
        
        $(this).attr("id", "1");
        $(this).parents(".container").children(".row").children(".item").attr("id", "1");
        
        
        if(c1 == 1 && player1 == "X"){
            $(".win").text("Player 1 Winned").css("color", "#60ff00")
        }
        else if(c1 == 1 && player2 == "X"){
            $(".win").text("Player 2 Winned").css("color", "#60ff00")
        }
        
        else if(c1 == 2 && player1 == "O"){
            $(".win").text("Player 1 Winned").css("color", "#60ff00")
        }
        
        else if(c1 == 2 && player2 == "O"){
            $(".win").text("Player 2 Winned").css("color", "#60ff00")
        }
        
        
        $(".gameEnd").fadeIn(500);
    }
    
    else if(c2){
        $(".rod").show()
        .animate({"width": "10px"})
        .animate({
            "top": "10px",
            "left": "123px",
        })
        .animate({"height": "90%"})
        
        $(this).attr("id", "1");
        $(this).parents(".container").children(".row").children(".item").attr("id", "1");
        
        
        if(c2 == 1 && player1 == "X"){
            $(".win").text("Player 1 Winned").css("color", "#60ff00")
        }
        else if(c2 == 1 && player2 == "X"){
            $(".win").text("Player 2 Winned").css("color", "#60ff00")
        }
        
        else if(c2 == 2 && player1 == "O"){
            $(".win").text("Player 1 Winned").css("color", "#60ff00")
        }
        
        else if(c2 == 2 && player2 == "O"){
            $(".win").text("Player 2 Winned").css("color", "#60ff00")
        }
        
        
        
        $(".gameEnd").fadeIn(500);
    }
    
    else if(c3){
        $(".rod").show()
        .animate({"width": "10px"})
        .animate({
            "top": "10px",
            "left": "210px",
        })
        .animate({"height": "90%"})
        
        $(this).attr("id", "1");
        $(this).parents(".container").children(".row").children(".item").attr("id", "1");
        
        
        if(c3 == 1 && player1 == "X"){
            $(".win").text("Player 1 Winned").css("color", "#60ff00")
        }
        else if(c3 == 1 && player2 == "X"){
            $(".win").text("Player 2 Winned").css("color", "#60ff00")
        }
        
        else if(c3 == 2 && player1 == "O"){
            $(".win").text("Player 1 Winned").css("color", "#60ff00")
        }
        
        else if(c3 == 2 && player2 == "O"){
            $(".win").text("Player 2 Winned").css("color", "#60ff00")
        }
        
        
        
        $(".gameEnd").fadeIn(500);
    }
    
    else if(d1){
        $(".rod").show()
        .css({
            "width": "10px",
            "top": "1px",
            "left": "120px",
            "height": "95%"
        })
        .animate({
            "rotate": "-45deg"
        })
        
        $(this).attr("id", "1");
        $(this).parents(".container").children(".row").children(".item").attr("id", "1");
        
        
        if(d1 == 1 && player1 == "X"){
            $(".win").text("Player 1 Winned").css("color", "#60ff00")
        }
        else if(d1 == 1 && player2 == "X"){
            $(".win").text("Player 2 Winned").css("color", "#60ff00")
        }
        
        else if(d1 == 2 && player1 == "O"){
            $(".win").text("Player 1 Winned").css("color", "#60ff00")
        }
        
        else if(d1 == 2 && player2 == "O"){
            $(".win").text("Player 2 Winned").css("color", "#60ff00")
        }
        
        
        
        $(".gameEnd").fadeIn(500);
    }
    
    else if(d2){
        $(".rod").show()
        .css({
            "width": "10px",
            "top": "4px",
            "left": "120px",
            "height": "95%"
        })
        .animate({
            "rotate": "45deg"
        })
        
        $(this).attr("id", "1");
        $(this).parents(".container").children(".row").children(".item").attr("id", "1");
        
        
        if(d2 == 1 && player1 == "X"){
            $(".win").text("Player 1 Winned").css("color", "#60ff00")
        }
        else if(d2 == 1 && player2 == "X"){
            $(".win").text("Player 2 Winned").css("color", "#60ff00")
        }
        
        else if(d2 == 2 && player1 == "O"){
            $(".win").text("Player 1 Winned").css("color", "#60ff00")
        }
        
        else if(d2 == 2 && player2 == "O"){
            $(".win").text("Player 2 Winned").css("color", "#60ff00")
        }
        
        
        $(".gameEnd").fadeIn(500);
    }
    
    else{
        
        if(c === 9){
            $(".win").text("Game Over").css("color", "red")
            $(".gameEnd").fadeIn(500);
        }
        
    }
    
    
})





$(".again").click(function(){
    $(this).parent().hide();
    $(".item").text("").attr("id", "0");
    c = 0;
    $(".container").hide();
    $(".players").hide();
    $(".start").show();
    $(".rod").animate({
        "rotate": "0deg"
    }).hide();
})