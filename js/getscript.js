/***
 * 此JavaScript文件的作用是让网页使用getScript的方法获取其他的JavaScript文件
 * 放的所有的JavaScript文件都是几乎大多数网页都能用到的
 * 不会放只有一两个网站能用到的JavaScript文件
 * 会在getScript代码前添加注释，表明Get的是什么JavaScript文件
 */

// copyright.js文件
$.getScript("/js/copyright.js");

// blog-code-line.js文件
$.getScript("/js/blog-code-line.js");

// highlight.js文件
// 顺次加载
$.getScript('https://unpkg.com/@highlightjs/cdn-assets@11.6.0/highlight.min.js', function() {
    $('head').append('<link rel="stylesheet" href="https://unpkg.com/@highlightjs/cdn-assets@11.6.0/styles/default.min.css">');
    $.getScript('/js/blog-code-line.js', function() {
        hljs.highlightAll();
    });
});

// ScrollReveal.js文件
// 顺次加载
$.getScript('https://unpkg.com/scrollreveal@4.0.9/dist/scrollreveal.js', function() {
    $.getScript('/js/ScrollReveal-options.js');
})

