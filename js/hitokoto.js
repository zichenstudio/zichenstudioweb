// 最大兼容性代码
function gethitokoto() {
    $.ajax({
        type: 'GET',
        url: 'https://v1.hitokoto.cn/?c=a&c=b&c=c&c=h&c=i&c=j&c=k&encode=json&charset=utf-8',
        dataType: 'json',
        async: false,
        success(data) {
            $("#hitokoto_text").attr("href", "https://hitokoto.cn/?uuid=" + data.uuid);
            let hitokoto = data.hitokoto;
            let from = "-----" + data.from;
            let fromWho = "[" + data.from_who + "]";
            let hitokotoText = hitokoto
                + (data.from !== null ? from : '')
                + (data.from_who !== null ? fromWho : '');
            $('#hitokoto_text').text(hitokotoText);
        },
    });
};
function getHitokotoText() {
    $('#hitokoto_text').text('获取中……');
    setTimeout("gethitokoto()", 500);
};
setTimeout("getHitokotoText()", 2000);
