let tipsTextWriteAutoStop = false, egg = 0, tipsTextWriteStop = false;
let tipsTextEgg = () => {
    if (egg >= 100) $('.tipsTextEgg').html('<span style="color: #f00;">都100条了还不够吗?</span>');
    if (egg >= 1e3) $('.tipsTextEgg').html('<span style="color: #f00;">你真的很闲！</span>');
};
let tipsTextWrite = () => ($('.tipsText').html(tipsJsonText[Math.floor(Math.random() * tipsJsonTextNum)].tips), egg++, tipsTextEgg());
function tipsTextWriteAuto() {
    if (!tipsTextWriteStop && (tipsTextWriteStop = true)) tipsTextWrite();
    setTimeout(() => {tipsTextWrite(),tipsTextWriteAuto()}, 3000);
};
tipsTextWrite();
$(".tipsText").dblclick(() => tipsTextWriteStop === false ? tipsTextWrite() : null);
