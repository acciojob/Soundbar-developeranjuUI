//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.getElementById('buttons');
    let currentAudio = null;

    buttons.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn')) {
            const soundName = e.target.getAttribute('data-sound');
            playSound(soundName);
        } else if (e.target.classList.contains('stop')) {
            stopAllSounds();
        }
    });

    function playSound(soundName) {
        // Stop any currently playing audio
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        
        // Create new audio element
        currentAudio = new Audio(`sounds/${soundName}.mp3`);
        currentAudio.play();
    }

    function stopAllSounds() {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            currentAudio = null;
        }
    }
});