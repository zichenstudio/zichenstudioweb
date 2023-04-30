$.ajax({
     type: 'GET',
     url: 'https://api.github.com/repos/ZiChenStudio/zichenstudioweb/commits',
     dataType: 'json',
     async: false,
     success(data) {
          dataNum = 0;
          function updateWrite() {
               if (dataNum < 26) {
                    sha = data[dataNum].sha;
                    committerDate = 'UTC: ' + data[dataNum].commit.committer.date.substring(0, 10) + ' ' + data[dataNum].commit.committer.date.substring(11, 19);
                    message = data[dataNum].commit.message;
                    url = data[dataNum].html_url;
                    $('.updateText').append('<p>距离最新一次更新的次数: <b>' + dataNum + '</b></p>');
                    $('.updateText').append('<p style="color:#F00;"><b>内容(如有,第二行为描述): ' + message + '</b></p>');
                    $('.updateText').append('<p>时间: <i>' + committerDate + '</i></p>');
                    $('.updateText').append('<p>SHA值: <i>' + sha + '</i></p>');
                    $('.updateText').append('<p>更新详情: ' + '<a href="' + url + '" target="_blank">' + 'Github' + '</p>');
                    $('.updateText').append('<hr>');
                    delete sha;
                    delete committerDate;
                    delete message;
                    delete url;
                    dataNum++;
                    updateWrite();
               };
          }
          updateWrite();
     },
});
