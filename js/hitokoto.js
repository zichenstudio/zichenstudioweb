// 最大兼容性代码
function gethitokoto() {
    $.ajax({
        type: 'GET',
        url: 'https://v1.hitokoto.cn/?c=a&c=b&c=c&c=h&c=i&c=j&c=k&encode=json&charset=utf-8',
        dataType: 'json',
        async: false,
        success(data) {
            $("#hitokoto_text").attr("href", "https://hitokoto.cn/?uuid=" + data.uuid);
            // 判断来源空值
            no_from_who = (data.from_who === null || data.from_who === undefined || data.from_who === '') ? 1 : 0;
            no_from = (data.from === null || data.from === undefined || data.from === '') ? 1 : 0;
            from_who = (no_from_who === 1) ? '' : String(data.from_who);
            from = (no_from === 1) ? '' : String('[' + data.from + ']');

            hitokotoText = (no_from_who === 1 && no_from === 1) ? String(data.hitokoto) :
                (no_from_who === 1) ? String(data.hitokoto) + '------' + from :
                    (no_from === 1) ? String(data.hitokoto) + '------' + from_who :
                        String(data.hitokoto) + '------' + from_who + from;
            // 一个漂亮的输出
            $('#hitokoto_text').text(hitokotoText);
            delete hitokotoText;
        },
    });
};
function getHitokotoText() {
    $('#hitokoto_text').text('获取中……');
    setTimeout("gethitokoto()", 500);
};
setTimeout("getHitokotoText()", 2000);
