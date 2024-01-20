document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const playlist = document.querySelectorAll('.song');

    playlist.forEach(song => {
        song.addEventListener('click', function () {
            const audioSrc = this.getAttribute('data-src');
            playSong(audioSrc);
        });
    });

    function playSong(src) {
        audioPlayer.src = src;
        audioPlayer.play();
    }
});
