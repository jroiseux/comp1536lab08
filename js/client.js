$(document).ready(function() {

    /**
     * Getting dog pictures and names from the server
     * when the "See Dogs" option is clicked. 
     * Returns an HTML List
     */
    $('#navbar #seeDogs').click(function(e) {

        $.ajax({
            url: "/get-animal-lists", 
            dataType: "html", 
            type: "GET",
            data: { format: "see-dogs"},
            success: function(data) { 
                $("#gallery").html(data); 
                console.log("SUCCESS: placed dogs list inside page!");

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#gallery").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });

    /**
     * Getting cat pictures and names from the server
     * when the "See Cats" option is clicked. 
     * Returns an HTML List
     */
    $('#navbar #seeCats').click(function(e) {

        $.ajax({
            url: "/get-animal-lists",  
            dataType: "html", 
            type: "GET",
            data: { format: "see-cats"},
            success: function(data) { 
                $("#gallery").html(data); 
                console.log("SUCCESS: placed cats list inside page!");

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#gallery").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });

/****************** GETTING DOG TREATS ****************************/
    /**
     * Getting Ivy's (Dog #1) favourite treats
     * when the "Show Favourite Treats" option is clicked. 
     * Returns a JSON List
     */
    $('.infodiv #showTreats1').click(function(e) {

        $.ajax({
            url: "/get-treat-lists", 
            dataType: "json", 
            type: "GET",
            data: { format: "show-treats-1"},
            success: function(data) {
                console.log("SUCCESS: placed dog#1 treats list inside page!");
                var div = $(".treatlist #treats1");
                let htmlStr = "<ul>";

                for(let i = 0; i < data.length; i++) { 
                    htmlStr += "<li>" + data[i] + "</li>";
                }
                htmlStr += "</ul>";
                div.html(htmlStr); 

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $(".treatlist #treats1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });

    /**
     * Getting Arya's (Dog #2) favourite treats
     * when the "Show Favourite Treats" option is clicked. 
     * Returns a JSON List
     */
    $('.infodiv #showTreats2').click(function(e) {

        $.ajax({
            url: "/get-treat-lists", 
            dataType: "json", 
            type: "GET",
            data: { format: "show-treats-2"},
            success: function(data) {
                console.log("SUCCESS: placed dog#2 treats list inside page!");
                var div = $(".treatlist #treats2");
                let htmlStr = "<ul>";

                for(let i = 0; i < data.length; i++) { 
                    htmlStr += "<li>" + data[i] + "</li>";
                }
                htmlStr += "</ul>";
                div.html(htmlStr); 

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $(".treatlist #treats2").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });

    /**
     * Getting Gary's (Dog #3) favourite treats
     * when the "Show Favourite Treats" option is clicked. 
     * Returns a JSON List
     */
    $('.infodiv #showTreats3').click(function(e) {

        $.ajax({
            url: "/get-treat-lists",  
            dataType: "json", 
            type: "GET",
            data: { format: "show-treats-3"},
            success: function(data) {
                console.log("SUCCESS: placed dog#3 treats list inside page!");
                var div = $(".treatlist #treats3");
                let htmlStr = "<ul>";

                for(let i = 0; i < data.length; i++) { 
                    htmlStr += "<li>" + data[i] + "</li>";
                }
                htmlStr += "</ul>";
                div.html(htmlStr); 

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $(".treatlist #treats3").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });

    /**
     * Getting Rufus' (Dog #4) favourite treats
     * when the "Show Favourite Treats" option is clicked. 
     * Returns a JSON List
     */
    $('.infodiv #showTreats4').click(function(e) {

        $.ajax({
            url: "/get-treat-lists", 
            dataType: "json", 
            type: "GET",
            data: { format: "show-treats-4"},
            success: function(data) {
                console.log("SUCCESS: placed dog#4 treats list inside page!");
                var div = $(".treatlist #treats4");
                let htmlStr = "<ul>";

                for(let i = 0; i < data.length; i++) { 
                    htmlStr += "<li>" + data[i] + "</li>";
                }
                htmlStr += "</ul>";
                div.html(htmlStr); 

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $(".treatlist #treats4").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });

/****************** GETTING CAT TREATS ****************************/

    /**
     * Getting Lily's (Cat #1) favourite treats
     * when the "Show Favourite Treats" option is clicked. 
     * Returns an HTML List
     */
    $('.infoDiv #showTreats5').click(function(e) {

        $.ajax({
            url: "/get-treat-lists", 
            dataType: "html", 
            type: "GET",
            data: { format: "show-treats-5"},
            success: function(data) { 
                $(".treatlist #treats5").html(data); 
                console.log("SUCCESS: placed cat#1 treats list inside page!");

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $(".treatlist #treats5").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });

    /**
     * Getting Hugo's (Cat #2) favourite treats
     * when the "Show Favourite Treats" option is clicked. 
     * Returns an HTML List
     */
    $('.infoDiv #showTreats6').click(function(e) {

        $.ajax({
            url: "/get-treat-lists", 
            dataType: "html", 
            type: "GET",
            data: { format: "show-treats-6"},
            success: function(data) { 
                $(".treatlist #treats6").html(data); 
                console.log("SUCCESS: placed cat#2 treats list inside page!");

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $(".treatlist #treats6").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });

    /**
     * Getting Simba's (Cat #3) favourite treats
     * when the "Show Favourite Treats" option is clicked. 
     * Returns an HTML List
     */
    $('.infoDiv #showTreats7').click(function(e) {

        $.ajax({
            url: "/get-treat-lists", 
            dataType: "html", 
            type: "GET",
            data: { format: "show-treats-7"},
            success: function(data) { 
                $(".treatlist #treats7").html(data); 
                console.log("SUCCESS: placed cat#3 treats list inside page!");

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $(".treatlist #treats7").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });

    /**
     * Getting Milo's (Cat #4) favourite treats
     * when the "Show Favourite Treats" option is clicked. 
     * Returns an HTML List
     */
    $('.infoDiv #showTreats8').click(function(e) {

        $.ajax({
            url: "/get-treat-lists", 
            dataType: "html", 
            type: "GET",
            data: { format: "show-treats-8"},
            success: function(data) { 
                $(".treatlist #treats8").html(data); 
                console.log("SUCCESS: placed cat#4 treats list inside page!");

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $(".treatlist #treats8").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });

});