$(document).ready(function() {
    // 获取提示文本数据

    $.ajax({
        url: '/js/tipstextjson.json',
        dataType: 'json',
        async: false,
        success: function(data) {
            tipsJsonText = data;
            tipsJsonTextNum = tipsJsonText.length - 1;
            console.log('成功获取到JSON数据：', tipsJsonText); // 在这里输出调试信息
        },
        error: function(xhr, status, error) {
            console.log('ajax请求失败:', status, xhr, error); // 在这里输出错误信息
        }
    });


    // 初始化变量
    let tipsTextWriteAutoStop = false;
    let egg = 0;
    let tipsTextWriteStop = false;

    // 显示彩蛋信息
    let tipsTextEgg = () => {
        if (egg >= 100) {
            $('.tipsTextEgg').html('<span style="color: #f00;">都100条了还不够吗?</span>');
        }
        if (egg >= 1000) {
            $('.tipsTextEgg').html('<span style="color: #f00;">你真的很闲！</span>');
        }
    };

    // 显示提示文本
    let tipsTextWrite = () => {
        let randomIndex = Math.floor(Math.random() * tipsJsonTextNum);
        $('.tipsText').html(tipsJsonText[randomIndex].tips);
        egg++;
        tipsTextEgg();
    };

    // 自动显示提示文本
    function tipsTextWriteAuto() {
        if (!tipsTextWriteStop && (tipsTextWriteStop = true)) {
            tipsTextWrite();
        }
        setTimeout(() => {
            tipsTextWrite();
            tipsTextWriteAuto();
        }, 3000);
    };

    // 初始化
    tipsTextWrite();

    // 双击事件
    $('.tipsText').dblclick(_ => {
        if (!tipsTextWriteStop) {
            tipsTextWrite();
        }
    });

});

