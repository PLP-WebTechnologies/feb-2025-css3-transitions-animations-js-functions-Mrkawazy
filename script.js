document.addEventListener('DOMContentLoaded', function() {
    const animatedBox = document.getElementById('animatedBox');
    const toggleBtn = document.getElementById('toggleAnimation');
    const themeSelect = document.getElementById('theme');
    const savePrefsBtn = document.getElementById('savePrefs');
    let isRotating = false;

    // Load saved preferences
    loadPreferences();

    // Click animation for the box
    animatedBox.addEventListener('click', function() {
        this.classList.toggle('clicked');
    });

    // Toggle rotate animation
    toggleBtn.addEventListener('click', function() {
        isRotating = !isRotating;
        if (isRotating) {
            animatedBox.classList.add('rotate');
            toggleBtn.textContent = 'Stop Rotation';
        } else {
            animatedBox.classList.remove('rotate');
            toggleBtn.textContent = 'Start Rotation';
        }
    });

    // Save preferences
    savePrefsBtn.addEventListener('click', savePreferences);

    // Theme change handler
    themeSelect.addEventListener('change', function() {
        applyTheme(this.value);
    });

    // Function to load preferences from localStorage
    function loadPreferences() {
        const savedTheme = localStorage.getItem('themePreference');
        if (savedTheme) {
            themeSelect.value = savedTheme;
            applyTheme(savedTheme);
        }
        
        const savedAnimationState = localStorage.getItem('animationState');
        if (savedAnimationState === 'on') {
            animatedBox.classList.add('rotate');
            isRotating = true;
            toggleBtn.textContent = 'Stop Rotation';
        }
    }

    // Function to save preferences to localStorage
    function savePreferences() {
        localStorage.setItem('themePreference', themeSelect.value);
        localStorage.setItem('animationState', isRotating ? 'on' : 'off');
        alert('Preferences saved!');
    }

    // Function to apply selected theme
    function applyTheme(theme) {
        // Remove all theme classes first
        document.body.classList.remove('light-theme', 'dark-theme', 'blue-theme');
        
        // Add the selected theme class
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
        } else if (theme === 'blue') {
            document.body.classList.add('blue-theme');
        } else {
            document.body.classList.add('light-theme');
        }
    }
});