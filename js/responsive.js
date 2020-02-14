$( document ).ready(function() {
    $( "#column-one" ).prepend( "<img src='images/menu.png' id='menu'/>" );     //This adds the menu button, we can add this as hidden element to all sites, or just responsive templates
    $('#menu').click(function(){
        $('#page-navigation').toggleClass("open")
    });
    $("#header-name").click(function(event){                                                //This turns the site name into a clickable link.
        window.location = "/menu/";                                                         //This specific implementation would not work on a celect.org website
    });

});
