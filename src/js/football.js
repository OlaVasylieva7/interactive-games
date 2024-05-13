document.addEventListener('DOMContentLoaded', function () {
    let field = document.getElementById('field');
    let ball = document.getElementById('ball');

    field.addEventListener('click', function (event) {
        let fieldCoordinates = field.getBoundingClientRect();

        let clickX = event.clientX - fieldCoordinates.left;
        let clickY = event.clientY - fieldCoordinates.top;

        let ballX = clickX - ball.clientWidth / 2;
        let ballY = clickY - ball.clientHeight / 2;

        ballX = Math.max(0, Math.min(ballX, field.clientWidth - ball.clientWidth));
        ballY = Math.max(0, Math.min(ballY, field.clientHeight - ball.clientHeight));

        ball.style.left = ballX + 'px';
        ball.style.top = ballY + 'px';


    ball.classList.add('spin');

    setTimeout(function () {
        ball.classList.remove('spin');
    }, 1000);
    });
});