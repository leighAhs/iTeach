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


$(".button").on("click", function () {
    // Reset all buttons
    $(".button").css("background-color", "rgba(69, 68, 68, 0.3)");

    // Highlight the clicked one
    $(this).css("background-color", "rgba(255, 255, 255, 0.692)");
});

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

//for schedule
$("#schedule-link").on("click", function (e) {
    e.preventDefault();

    removeDynamicCSS();
    loadContent("main/navigation/profile/profile.html .selection-content-container");
    loadCSS("main/navigation/profile/profile.css");
});

// for tutor 
$("#tutor-link").on("click", function (e) {
    e.preventDefault();

    removeDynamicCSS();
    loadContent("index.html .profile-info-container");
});

$("#profile-link").on("click", function (e) {
    e.preventDefault();

    $("#search").prop("disabled", true);

    removeDynamicCSS();
    loadContent("main/navigation/profile/profile.html");
    loadCSS("main/navigation/profile/profile.css");
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
