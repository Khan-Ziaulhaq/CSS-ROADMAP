const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
const themeToggleButton = document.getElementById('theme-toggle-btn');
const codeInput = document.getElementById('code');
const outputFrame = document.getElementById('output');

function toggleSubMenu(button) {
    if (!button.nextElementSibling.classList.contains('show')) {
        closeAllSubMenus();
    }

    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle('rotate');

    if (sidebar.classList.contains('close')) {
        sidebar.classList.toggle('close');
        toggleButton.classList.toggle('rotate');
    }
}

function closeAllSubMenus() {
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show');
        ul.previousElementSibling.classList.remove('rotate');
    });
}

function copyCode(button) {
    const codeBox = button.parentElement.querySelector('pre code');
    const textArea = document.createElement('textarea');
    textArea.value = codeBox.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    showNotification('Code copied to clipboard!');
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
        document.body.removeChild(notification);
    }, 2000);
}

codeInput.addEventListener('input', () => {
    const code = codeInput.value;
    outputFrame.srcdoc = code;
});

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const icon = themeToggleButton.querySelector('i');
    if (document.body.classList.contains('light-mode')) {
        icon.classList.replace('bx-sun', 'bx-moon');
    } else {
        icon.classList.replace('bx-moon', 'bx-sun');
    }
}

themeToggleButton.addEventListener('click', toggleTheme);
