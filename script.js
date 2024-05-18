function audioPlayer() {
    return {
        audios: [
            document.getElementById('audio_left'),
            document.getElementById('audio_right'),
            document.getElementById('audio_both')
        ],
        toggleAudio(index) {
            const audio = this.audios[index];
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        }
    };
}
