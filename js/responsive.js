$( document ).ready(function() {
    var menu_button = false;
    $( "#column-one" ).prepend( "<img src='images/menu.png' id='menu' onclick='' />" );     //This adds the menu button
    $('#menu').click(function(){                                                            //This opens and closes the menu
        if (menu_button == false){
            $('#page-navigation').animate({'max-height':'500px'}, 100);
            menu_button = true;
        }else{
            $('#page-navigation').animate({'max-height':'0px'}, 100);
            menu_button = false;
        }
    });
    $("#header-name").click(function(event){                                                //This turns the site name into a clickable link.
        window.location = "/menu/";                                                         //This specific implementation would not work on a celect.org website                                                      
    });

});