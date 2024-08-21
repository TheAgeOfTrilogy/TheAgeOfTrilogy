document.getElementById('acceptButton').onclick = function() {
    // Trigger fade out animations
    document.querySelector('.disclaimer_en').classList.add('fadeOut');
    document.querySelector('.fairuse').classList.add('fadeOut');
    this.classList.add('fadeOut'); // Fade out the button itself

    // Play the audio and start the animation after 3.5 seconds
    setTimeout(function() {
        var audio = new Audio('./sound-effects/AoT-intro.mp3');
        audio.play();

        document.querySelector('.AoT-logo').classList.add('show-logo');
        
        // Ensure the animation duration matches the audio duration
        document.querySelector('.AoT-logo').style.animationDuration = '13s';

        // Stop the audio after 13 seconds
        setTimeout(function() {
            audio.pause();
            audio.currentTime = 0; // Reset audio to the start
        }, 13000); // 13 seconds
    }, 3500); // Wait 3.5 seconds (3s fade out + 0.5s delay)
};
