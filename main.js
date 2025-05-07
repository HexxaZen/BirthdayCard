        // Card flip animation
        const card = document.getElementById('card');
        card.addEventListener('click', function() {
            this.classList.toggle('open');
            if (this.classList.contains('open')) {
                createConfetti();
            }
        });
        
        // Create hearts animation
        function createHearts() {
            const hearts = document.getElementById('hearts');
            const maxHearts = 20;
            
            for (let i = 0; i < maxHearts; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.classList.add('heart');
                    heart.style.left = Math.random() * 100 + '%';
                    heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
                    heart.style.animationDelay = (Math.random() * 5) + 's';
                    hearts.appendChild(heart);
                    
                    // Remove hearts after animation
                    setTimeout(() => {
                        heart.remove();
                    }, 10000);
                }, i * 300);
            }
        }
        
        // Create sparkles animation
        function createSparkles() {
            const hearts = document.getElementById('hearts');
            const maxSparkles = 30;
            
            for (let i = 0; i < maxSparkles; i++) {
                setTimeout(() => {
                    const sparkle = document.createElement('div');
                    sparkle.classList.add('sparkle');
                    sparkle.style.left = Math.random() * 100 + '%';
                    sparkle.style.top = Math.random() * 100 + '%';
                    sparkle.style.animationDuration = (Math.random() * 2 + 1) + 's';
                    hearts.appendChild(sparkle);
                    
                    // Remove sparkles after animation
                    setTimeout(() => {
                        sparkle.remove();
                    }, 2000);
                }, i * 200);
            }
        }
        
        // Create flowers animation
        function createFlowers() {
            const hearts = document.getElementById('hearts');
            const maxFlowers = 15;
            
            for (let i = 0; i < maxFlowers; i++) {
                setTimeout(() => {
                    const flower = document.createElement('div');
                    flower.classList.add('flower');
                    flower.style.left = Math.random() * 100 + '%';
                    flower.style.animationDuration = (Math.random() * 3 + 5) + 's';
                    hearts.appendChild(flower);
                    
                    // Remove flowers after animation
                    setTimeout(() => {
                        flower.remove();
                    }, 8000);
                }, i * 500);
            }
        }
        
        // Create confetti when card is opened
        function createConfetti() {
            createHearts();
            createSparkles();
            createFlowers();
        }
        
        // Start animations on page load
        window.onload = function() {
            // Add initial animations
            createHearts();
            setInterval(createSparkles, 5000);
            
            // Create automatic animations every few seconds
            setInterval(() => {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                heart.style.left = Math.random() * 100 + '%';
                heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
                document.getElementById('hearts').appendChild(heart);
                
                // Remove after animation
                setTimeout(() => {
                    heart.remove();
                }, 10000);
            }, 3000);
        };