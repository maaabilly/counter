// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");
const decrease = document.querySelector('.decrease');
const increase = document.querySelector('.increase');
const reset = document.querySelector('.reset');


btns.forEach(function(btn) {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "rgb(39, 202, 113)";
            // increase.style.backgroundColor = "rgb(39, 202, 113)";
        } else {
            // increase.style.backgroundColor = "#fff";
        }
        if (count < 0) {
            value.style.color = "rgb(219, 66, 91)";
            // decrease.style.backgroundColor = "rgb(219, 66, 91)";
        } else {
            // decrease.style.backgroundColor = "#fff";
        }
        if (count === 0) {
            value.style.color = "#222";
        }

        decrease.addEventListener('mousedown', () => {
            decrease.style.backgroundColor = "rgb(219, 66, 91)";
        })
        decrease.addEventListener('mouseup', () => {
            decrease.style.backgroundColor = "#fff";
        })
        increase.addEventListener('mousedown', () => {
            increase.style.backgroundColor = "rgb(39, 202, 113)";
        })
        increase.addEventListener('mouseup', () => {
            increase.style.backgroundColor = "#fff";
        })
        reset.addEventListener('mousedown', () => {
            reset.style.color = "rgb(219, 66, 91)";
        })
        reset.addEventListener('mouseup', () => {
            reset.style.color = "#333";
        })

        

        value.textContent = count;
    })
});