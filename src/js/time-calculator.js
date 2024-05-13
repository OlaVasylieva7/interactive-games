const btnTCResult = document.getElementById('convert');
const inputTC = document.getElementById('minutes');
const resultFieldTC = document.getElementById('time-calculator-result');

btnTCResult.addEventListener('click', function () {
  const minutes = parseInt(inputTC.value || 0);
  const result = convert(minutes);
  const resultConvert = `${result.days} дн. ${result.hours}:${result.minutes}`;
  
  resultFieldTC.innerText = resultConvert;
})

function convert(minutes) {
  const days = Math.floor(minutes / (60 * 24));
  const remainingMinutes = minutes % 60;
  const remainingHours = Math.floor(minutes % (60 * 24) / 60);

  return {
    days,
    hours: remainingHours,
    minutes: remainingMinutes,
  };
}
