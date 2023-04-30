var tipsTextWriteAutoStop = 0;
var egg = 0;

function tipsTextEgg() {
    if (egg >= 100 && tipsTextWriteAutoStop === 0) {
        $('.tipsTextEgg').html('<span style="color: #f00;">都100条了还不够吗?</span>');
    };
    if (egg >= 1000 && tipsTextWriteAutoStop === 0) {
        $('.tipsTextEgg').html('<span style="color: #f00;">你真的很闲！</span>');
    };
};

function tipsTextWrite() {
    var tipsTextNum = Math.floor(Math.random() * tipsJsonTextNum);
    var tipsText = tipsJsonText[tipsTextNum].tips;
    $('.tipsText').html(tipsText);
    egg++;
    tipsTextEgg();
};

var tipsTextWriteStop = 0;

function tipsTextWriteAuto() {
    if (tipsTextWriteAutoStop === 0) {
        if (tipsTextWriteStop === 0) {
            tipsTextWriteStop = 1;
            tipsTextWrite();
        };
        setTimeout("tipsTextWrite()", 3000);
        setTimeout("tipsTextWriteAuto()", 3000);
    };
};

function tipsTextWriteAutoBug() {
    if (tipsTextWriteStop === 0) {
        tipsTextWriteStop = 1;
    };
    tipsTextWriteAutoStop = 1;
    var tipsTextNum = Math.floor(Math.random() * tipsJsonTextNum);
    var tipsText = tipsJsonText[tipsTextNum].tips;
    $('.tipsText').append("<br>" + tipsText);
    setTimeout("tipsTextWriteAutoBug()", 500);
};

tipsTextWrite();
$(".tipsText").dblclick(function() {
    if (tipsTextWriteStop === 0) {
        tipsTextWrite();
    }
});
