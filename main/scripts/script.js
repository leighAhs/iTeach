$(document).ready(function () {
    // FOR PRICE RANGE BUTTON

var button = $(".button-container input");

button.on("click", function () {
    var currentColor = $(this).css("background-color");

    if (currentColor === "rgb(198, 198, 198)") {
        $(this).css("background", "");
    } else {
        button.css("background", "");
        $(this).css("background", "rgb(198, 198, 198)");
    }
});

// $(document).ready(function () {
    
//     function loadContent(page) {
//         $("#main-content").load(page);
        
//     }

//     $("#home-link").on("click", function (e) {
//         e.preventDefault();
        
//         $("#main-content").load("main.html #main-content");

//     });

//     // Event handlers for each navbar link
//     $("#about-link").on("click", function (e) {
//         e.preventDefault(); 
    
//         // Load About page content
//         loadContent("navigation/abt/about.html");
    
//         // Apply new styles to main-content-container
//         $(".main-content-container").css({
//             "background-color": "lightgray",
//             "height": "auto", 
//             "padding": "20px",
//             "flex-direction": "row",
//             "gap": "10px"
//         });
//     });
    

//     // $("#schedule-link").on("click", function (e) {
//     //     e.preventDefault();

//     //     loadContent("schedule.html"); 
//     // });

//     // $("#tutor-link").on("click", function (e) {
//     //     e.preventDefault();
//     //     loadContent("tutor.html");
//     // });

//     // $("#profile-link").on("click", function (e) {
//     //     e.preventDefault();
//     //     loadContent("profile.html");content
//     // });
// });

// Function to load external HTML content into #main-content    
function loadContent(page) {
    $("#main-content").load(page);
}

// Dynamically load a CSS file and mark it with a class
function loadCSS(href) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.className = "dynamic-css";
    document.head.appendChild(link);
}

// Remove any dynamically loaded CSS (like about page's style)
function removeDynamicCSS() {
    $(".dynamic-css").remove();
}

// Load About content + its own CSS
$("#about-link").on("click", function (e) {
    e.preventDefault();

    $("#search").prop("disabled", true);

    removeDynamicCSS();
    loadContent("main/navigation/abt/about.html");
    loadCSS("main/navigation/abt/about.css");
});

$(document).ready(function () {
    $(document).on("click", ".profile-info-content", function (e) {
        e.preventDefault();

        $("#search").prop("disabled", true);

        removeDynamicCSS();
        loadContent("main/profile-content/profileContent.html");
        loadCSS("main/profile-content/content.css");
    });
});


// Load Home content + Home CSS when logo/home is clicked
$("#home-link").on("click", function (e) {
    e.preventDefault();

    $("#search").prop("disabled", false);

    removeDynamicCSS();
    loadCSS("style.css"); 
    loadContent("index.html #main-content"); 
});


//(PROFILE CONTENT FUNCTION) input message and message icon
$(document).ready(function () {
    $(".search").keypress(function (e) {
        if (e.which === 13) {
            $(this).val('');
        }
    });

    $(".message-icon").on('click', function () {
        $(".search").val('');
    });
});
});