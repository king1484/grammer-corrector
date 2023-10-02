$("#btn").click(function () {
    $(".output").hide();
    if ($(window).width() < 700) {
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
        const proxyUrl = "https://proxy1484.up.railway.app/?url=";
        const baseUrl = "http://44.214.182.154:4000/";
        const url = proxyUrl+baseUrl;

        fetch(url, options).then((res) => {
            $("#loader").hide();
            res.text().then((val) => {
                $(".output p").text(val);
            });
            $(".output").show();
        })
    } else {
        $(this).after("<br/><p style='color:white'>Enter text!</p>");
    }
});
