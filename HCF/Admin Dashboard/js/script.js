$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var d = new Date();
    var today = d.getDate();
    var monthNumber = d.getMonth();
    var year = d.getFullYear();
    var currentDate = today + " / " + months[monthNumber] + " / " + year;
    document.querySelector("#calendar").innerHTML = currentDate;
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var t = `${ h } : ${ m } : ${ s }`;
    document.querySelector("#time").innerHTML = t;
    
});


