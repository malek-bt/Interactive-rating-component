
function showcard() {
 
    document.getElementById('card2').style.display = ' block' ;
    document.getElementById('card1').style.display = ' none' ;
}

function changeText(value) {

    

    if(value == 'b1') {
        document.getElementById('text').innerHTML = "1" ;
    }
    else if(value == 'b2') {
        document.getElementById('text').innerHTML = "2" ;
    }
    else if(value == 'b3') {
        document.getElementById('text').innerHTML = "3" ;
    }
    else if(value == 'b4') {
        document.getElementById('text').innerHTML = "4" ;
    }
    else if(value == 'b5') {
        document.getElementById('text').innerHTML = "5" ;
    }

}