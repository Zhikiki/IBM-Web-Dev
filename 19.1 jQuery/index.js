$("input").keypress(function (e) { 
    $("h1").html(e.key);
});
$("h1").click(function (e) { 
    $("h1").css("color", "purple");
    console.log(e) 
});

$("h1").on("mouseover", function () {
    $('h1').css('color', 'red');
});

$("h1").before("<button>New</button>");

$('h1').prepend('<button>New</button>');
$('h1').append('<button>New</button>');
$("button").remove();