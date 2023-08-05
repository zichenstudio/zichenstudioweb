$.ajax({
    url: '/js/tipstextjson.json',
    dataType: 'json',
    async: false,
    success: function (data) {
        tipsData = data;
        tipsDataCount = tipsData.length - 1;
        console.log('成功获取到JSON数据：', tipsData); // 在这里输出调试信息
    },
    error: function (xhr, status, error) {
        console.log('ajax请求失败:', status, xhr, error); // 在这里输出错误信息
    }
});

// 初始化变量
let easterEggCount = 0;
let writeStop = false;

// 显示彩蛋信息
let tipsTextEgg = () => {
    if (easterEggCount >= 100) {
        $('.tipsTextEgg').html('<span style="color:#F00;">都100条了还不够吗?</span>');
    }
    if (easterEggCount >= 1000) {
        $('.tipsTextEgg').html('<span style="color:#F00;">你真的很闲！</span>');
    }
};

// 显示提示文本
let tipsTextWrite = () => {
    let randomIndex = Math.floor(Math.random() * tipsDataCount);
    $('.tipsText').html(tipsData[randomIndex].tips);
    console.log('引索:' + randomIndex + '个' + '|' + '文件第:' + (randomIndex + 2) + '行');
    easterEggCount++;
    tipsTextEgg();
};

// 自动显示提示文本
function tipsTextWriteAuto() {
    if (!writeStop && (writeStop = true)) {
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
$('.tipsText').dblclick(function() {
    if (!writeStop) {
        tipsTextWrite();
    }
});
