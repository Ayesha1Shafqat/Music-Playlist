const playlist = [
    { name: "Song 1", src: "song1.mp3" },
    { name: "Song 2", src: "song2.mp3" },
    { name: "Song 3", src: "song3.mp3" }
];

let currentIndex = 0;
const audio = document.getElementById("audio");
const title = document.getElementById("song-title");

function loadSong(index) {
    title.textContent = playlist[index].name;
    audio.src = playlist[index].src;
}

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function nextSong() {
    currentIndex = (currentIndex + 1) % playlist.length;
    loadSong(currentIndex);
    audio.play();
}

function prevSong() {
    currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    loadSong(currentIndex);
    audio.play();
}

loadSong(currentIndex);
