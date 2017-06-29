$(".load").click(function() {
    $.get("http://localhost:8080/", {}, function(data) {
        console.log(data);
    });
});
