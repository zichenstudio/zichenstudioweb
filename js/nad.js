$('#divVideo1').html('<iframe id="addVideo1" src="" scrolling="no" border="0" frameborder="no" allowfullscreen="true" width="90%" height="500" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"></iframe>');
$('#divVideo2').html('<iframe id="addVideo2" src="" scrolling="no" border="0" frameborder="no" allowfullscreen="true" width="90%" height="500" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"></iframe>');
function addVideo1() {
    $("#addVideo1").attr('src', '//player.bilibili.com/player.html?bvid=BV1Ns4y1n7U1&page=1&danmaku=0');
};
function addVideo2() {
    $("#addVideo2").attr('src', '//player.bilibili.com/player.html?bvid=BV1aM4y1d7M1&page=1&danmaku=0');
};
