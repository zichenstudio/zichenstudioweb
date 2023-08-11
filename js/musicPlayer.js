let audio = null;
let isPlaying = false;
let previousCall = null;
function musicPlayer(musicId) {
    /* API接口: 韩小韩API接口站
     * URL: https://api.vvhan.com/
     * API请求例示: https://api.vvhan.com/api/music?id=26124540&type=song&media=netease
     */
    let musicURL = `https://api.vvhan.com/api/music?id=${musicId}&type=song&media=netease`;
    if (previousCall !== null) {
        $(document).off('keydown');
    }
    if (audio !== null) {
        audio.pause();
        audio = null;
        isPlaying = false;
    }
    $.ajax({
        type: 'GET',
        url: musicURL,
        dataType: 'json',
        async: false,
        success(musicJsonData) {
            let mp3Url = musicJsonData.mp3url;
            console.log(`name: ${musicJsonData.name} | author: ${musicJsonData.author} | mp3url: ${mp3Url}`);
            audio = new Audio(mp3Url);
            $(document).on('keydown', function (e) {
                if (previousCall !== musicId) {
                    return;
                }
                if (e.key === " ") {
                    if (!isPlaying) {
                        audio.play();
                        isPlaying = true;
                        console.log('play');
                    }
                    else {
                        audio.pause();
                        isPlaying = false;
                        console.log('noplay');
                    }
                    e.preventDefault();
                }
            });
            previousCall = musicId;
        },
    });
};

