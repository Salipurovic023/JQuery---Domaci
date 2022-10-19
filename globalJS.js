function Dodaj(){
    $("#forma").css("visibility", "visible");
}
function Ubacivanje(){
    var ime = document.getElementById("ime");
    var prezime = document.getElementById("prezime");
    var email = document.getElementById("email");
    $("table").append("<tr><th>" + toString(ime) + "</th><br><th>" + toString(prezime) + "</th><br><th>" + toString(email) + "</th><br><tr>");
}
function Promena(){
    var th = document.getElementsByName("th");
    th.innerHTML = prompt("Izmeni");
}