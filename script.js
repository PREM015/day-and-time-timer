let countdown;

document.getElementById('start-timer').addEventListener('click', function() {
    const dateInput = document.getElementById('day-input').value;
    const timeInput = document.getElementById('time-input').value;

    if (!dateInput || !timeInput) {
        alert('Please select both a date and time.');
        return;
    }

    const targetTime = new Date(`${dateInput}T${timeInput}:00`);

    if (countdown) {
        clearInterval(countdown);
    }

    countdown = setInterval(function() {
        const now = new Date();
        const diff = targetTime - now;

        if (diff <= 0) {
            clearInterval(countdown);
            document.getElementById('timer-display').textContent = "00:00:00";
            alert("Time's up!");
            return;
        }

        const hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('timer-display').textContent = 
            `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }, 1000);
});

document.getElementById('reset-timer').addEventListener('click', function() {
    clearInterval(countdown);
    document.getElementById('timer-display').textContent = "00:00:00";
    document.getElementById('day-input').value = "";
    document.getElementById('time-input').value = "";
});
