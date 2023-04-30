var ScrollRevealOptions = {
//     属性：（默认）
            delay: 0.1,// 延时时间
            duration: 1000,// 执行时长
            opacity: 0,// 执行方式（透明度）
            scale: 0,// 执行方式（缩放）
            desktop: true,// 是否在电脑上面执行
            mobile: true,// 是否在手机上面执行
            reset: true,// 是否重复执行（）
            useDelay: 'always'// 延时执行方式（always（一直延时执行），once（只延时执行一次），onload（只在加载时延时执行））
}
var ScrollRevealSelector = document.querySelectorAll('body *:not(.up):not(.footer):not(.up *):not(.footer *)');

ScrollReveal().reveal(ScrollRevealSelector,ScrollRevealOptions);