//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.getElementById('buttons');
    let currentAudio = null;

    // Create a container for audio elements (for testing)
    const audioContainer = document.createElement('div');
    audioContainer.id = 'audio-container';
    audioContainer.style.display = 'none';
    document.body.appendChild(audioContainer);

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
            audioContainer.removeChild(currentAudio);
        }
        
        // Create new audio element and add to DOM
        currentAudio = new Audio(`sounds/${soundName}.mp3`);
        currentAudio.id = `audio-${soundName}`;
        audioContainer.appendChild(currentAudio);
        currentAudio.play();
    }

    function stopAllSounds() {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            audioContainer.removeChild(currentAudio);
            currentAudio = null;
        }
    }
});