function blogSearchNo() {
    // 判断li是否全部隐藏(搜索结果是否为空)
    let display = true;
    $('#post-list li').each(function() {
        if ($(this).is(':visible')) { // 使用 :visible 伪类选择器判断该元素是否可见
            display = false;
            return false; // 直接退出 each 循环
        }
    });
    // 所有 li 全部隐藏，向 #post-list 中插入 HTML
    if (display) {
        $('#post-list').prepend('<div class="blogSearchNo"><p>抱歉，什么也没有</p></div>');
    };
};
$('#blogsearch').on('input', function() {
    // 获取搜索框输入的内容，并转换为小写字母
    let query = $(this).val().toLowerCase().trim();
    // 获取当前 li 元素中第一个 a 元素的文本内容，并转换为小写字母
    $('#post-list li').each(function() {
        // 遍历所有 li 元素
        $(".blogSearchNo").remove();
        // 删除搜索结果为空时的提示
        let postTitle = $(this).find('a:first').text().toLowerCase();
        // 判断文章标题是否包含搜索框输入的内容
        if (postTitle.indexOf(query) > -1) {
            // 如果包含，则使用增加透明度的动画显示该li元素
            $(this).fadeIn('slow');
        } else {
            // 如果不包含，则使用自下而上的滑动动画隐藏该li元素
            $(this).slideUp('slow', function() {
                // 隐藏li元素后执行下方代码
                blogSearchNo();
                // 显示搜索结果为空时的提示
            });
        }
    });
    
});
