function generateRandomNumber() {
    let max = 100;
    let min = 0;
    // 把日期的随机数变成"日月年"以获得更加随机的序列
    let dateString = new Date().getDate().toString().padStart(2, '0') + (new Date().getMonth() + 1).toString().padStart(2, '0') + new Date().getFullYear();
    let hash = 1;
    for (let i = 0; i < dateString.length; i++) {
        hash = ((hash << 5) - hash) + dateString.charCodeAt(i);
        hash |= 0; // 转为 32 位有符号整数
    }
    let x = Math.sin(hash) * 10000;
    let todayNum = Math.floor((x - Math.floor(x)) * (max - min + 1) + min) + '\n\n';
    if (todayNum <= 5) return todayNum + '是百分制……';
    if (todayNum >= 95) return todayNum + '你真的是个好人';
    if (todayNum >= 80) return todayNum + '不错不错';
    return todayNum + '平平无奇';
}
function showRandomNumber() {
    alert(generateRandomNumber());
}

