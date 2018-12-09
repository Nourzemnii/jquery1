function bold() {
   $("paragraph").css('fontWeight' ,'bold';
}
function normal(){
    $("paragraph").css('fontStyle','normal');
    $("paragraph").css('fontWeight','normal');
    $("paragraph").css('textDecoration','none'); 

}
function italic() {
   
    $("paragraph").style.fontStyle = 'italic';
}

function police() {
    var police = document.getElementById('pl').value
    $('paragraph').css('fontFamily','police');
}

function taille() {
    var size=document.getElementById('sz').value;
    $("paragraph").css('fontSize' , 'size+"px"');
}
function underline() {

    $("paragraph").css('textDecoration ','underline'); 
}