const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const handle = document.getElementById('handle');

let dragging = false;

function setProgress(x) {
    const containerWidth = handle.parentElement.offsetWidth;
    const percentage = Math.round((x / containerWidth) * 100 / 10) * 10;
    if (percentage >= 0 && percentage <= 100) {
        progressBar.style.width = percentage + '%';
        progressText.textContent = percentage + '%';
        handle.style.left = percentage + '%';
    }
}

handle.addEventListener('mousedown', (event) => {
    dragging = true;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

function onMouseMove(event) {
    if (dragging) {
        const rect = handle.parentElement.getBoundingClientRect();
        const x = event.clientX - rect.left;
        setProgress(x);
    }
}

function onMouseUp() {
    dragging = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
}

// Initialize handle position
handle.style.left = '0%';
