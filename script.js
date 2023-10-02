$("#btn").click(function () {
    $(".output").hide();
    if ($(window).width() < 600) {
        $(".box").css({ "padding-top": "5vh", "padding-bottom": "5vh" });
    }
    var text = $("textarea").val();
    if (text != "") {
        $("#loader").show();

        const data = {
            "text": text
        };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        };
        const url = "http://44.214.182.154:4000/";

        fetch(url, options).then((res) => {
            $("#loader").hide();
            res.text().then((val) => {
                $(".output p").text(val);
            });
            $(".output").show();
            if ($(window).width() > 600) {
                $(".input").css("margin-right", "10vh");
            }
        })
    } else {
        $(this).after("<br/><p style='color:white'>Enter text!</p>");
    }
});
