    $('pre code').each(function(){
        let serial = $(this).text().split('\n').length - 1;
        let codeNum = $('<ul/>').addClass('pre-codeNum');
        $(this).addClass('code-codeNum').parent().append(codeNum);
        for(codeNumFor=1;codeNumFor<=serial;codeNumFor++){
            codeNum.append($('<li/>').text(codeNumFor));
        }
    });
$('pre').css({'position': 'relative','margin-bottom': '24px','border-radius': '3px','border': '1px solid #C3CCD0','background': '#FFF','overflow': 'hidden'});

$('code.code-codeNum').css({'margin-left': '21px'});

$('.pre-codeNum').css({'position': 'absolute','top': '0','left': '0','padding': '12px 2px 12px 0','background-color': '#EEE','text-align': 'right','color': '#AAA'});

$('.pre-codeNum li').css({'list-style': 'none'});

