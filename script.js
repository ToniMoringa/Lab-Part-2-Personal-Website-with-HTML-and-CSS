 // Wait for DOM to load
        document.addEventListener('DOMContentLoaded', () => {
            console.log("Portfolio Loaded Successfully");

            // Dark/Light mode toggle
            const modeToggle = document.getElementById('modeToggle');
            const icon = modeToggle.querySelector('i');
            
            // Check for saved preference
            if (localStorage.getItem('theme') === 'dark') {
                document.body.classList.add('dark-mode');
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }

            modeToggle.addEventListener('click', () => {
                document.body.classList.toggle('dark-mode');
                
                if (document.body.classList.contains('dark-mode')) {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                    localStorage.setItem('theme', 'dark');
                } else {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                    localStorage.setItem('theme', 'light');
                }
            });
        });