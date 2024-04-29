document.addEventListener('DOMContentLoaded', function() {
    let field = document.getElementById('field');
    let ball = document.querySelector('.football__ball');

    field.addEventListener('click', function(event) {
        let fieldCoords = field.getBoundingClientRect();

        let ballCoords = {
            top: event.clientY - fieldCoords.top - ball.clientHeight / 2,
            left: event.clientX - fieldCoords.left - ball.clientWidth / 2
        };

        if (ballCoords.top < 0) ballCoords.top = 0;
        if (ballCoords.left < 0) ballCoords.left = 0;
        if (ballCoords.left + ball.clientWidth > field.clientWidth) {
            ballCoords.left = field.clientWidth - ball.clientWidth;
        }
        if (ballCoords.top + ball.clientHeight > field.clientHeight) {
            ballCoords.top = field.clientHeight - ball.clientHeight;
        }

        ball.style.left = ballCoords.left + 'px';
        ball.style.top = ballCoords.top + 'px';
    });
});