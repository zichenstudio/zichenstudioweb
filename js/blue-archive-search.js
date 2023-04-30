var searchPNum = 1
$("#searchButton").click(function() {
    var searchText = $("#searchInput").val();
    if ($("body:contains(" + searchText + ")").length) {
        $("#searchP").html("");
        var result = $("#" + searchText);
        if (result.length) {
            $("html, body").animate({
                scrollTop: result.offset().top
            }, "slow");
        }
    } else {
        $("#searchP").html("未找到×" + searchPNum);
        searchPNum++
    }
});
