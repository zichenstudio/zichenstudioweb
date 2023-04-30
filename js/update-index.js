$.ajax({
    type: 'GET',
    url: 'https://api.github.com/repos/ZiChenStudio/zichenstudioweb/commits',
    dataType: 'json',
    async: false,
    success(data) {
        dataNum = 0;
        function updateWrite() {
            if (dataNum < 5) {
                sha = data[dataNum].sha;
                url = data[dataNum].html_url;
                $('.updateIndexText').remove();
                $('.updateIndex').append('<a href="' + url + '" target="_blank">' + sha + '</p>');
                delete sha;
                dataNum++;
                updateWrite();
            };
        }
        updateWrite();
    },
});
