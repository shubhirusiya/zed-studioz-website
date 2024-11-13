document.addEventListener('DOMContentLoaded', function() {
    // Check if intro has been shown before
    if (sessionStorage.getItem('introShown')) {
        document.getElementById('introSequence').style.display = 'none';
        return;
    }

    const introSequence = document.getElementById('introSequence');
    const firstRender = document.querySelector('.typed-text');
    const secondRender = document.querySelector('.pop-text');
    const thirdRender = document.querySelector('.final-text');

    // First render - Welcome typing animation
    function showFirstRender() {
        firstRender.style.display = 'block';
        firstRender.classList.add('typing-animation');
        
        setTimeout(() => {
            firstRender.style.display = 'none';
            showSecondRender();
        }, 3000);
    }

    // Second render - ZED STUDIOZ pop animation
    function showSecondRender() {
        secondRender.style.display = 'flex';
        const zedLetters = 'ZED'.split('');
        const studiozLetters = 'STUDIOZ'.split('');
        
        // Animate ZED
        zedLetters.forEach((letter, index) => {
            setTimeout(() => {
                secondRender.children[0].children[index].classList.add('pop-animation');
            }, index * 200);
        });

        // Animate STUDIOZ after ZED
        setTimeout(() => {
            studiozLetters.forEach((letter, index) => {
                setTimeout(() => {
                    secondRender.children[1].children[index].classList.add('pop-animation');
                }, index * 200);
            });
        }, zedLetters.length * 200);

        setTimeout(() => {
            secondRender.style.display = 'none';
            showThirdRender();
        }, 4000);
    }

    // Third render - Final message
    function showThirdRender() {
        thirdRender.style.display = 'block';
        thirdRender.classList.add('fade-up-animation');

        setTimeout(() => {
            introSequence.classList.add('slide-up-exit');
            setTimeout(() => {
                introSequence.style.display = 'none';
                // Mark intro as shown
                sessionStorage.setItem('introShown', 'true');
            }, 1000);
        }, 3000);
    }

    // Start the sequence
    showFirstRender();
});