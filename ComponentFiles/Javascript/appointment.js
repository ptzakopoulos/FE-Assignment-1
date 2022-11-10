window.onload = () => {
  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  const date = new Date();
  const today = {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDay(),
    days: getDaysInMonth(this.year, this.month),
  };

  const monthArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  let monthsDays = getDaysInMonth(today.year, today.month + 1);

  const container = document.getElementsByClassName('container');
  const yearElement = document.getElementById('year');
  const monthElement = document.getElementById('month');

  yearElement.innerHTML = today.year;
  monthElement.innerHTML = monthArray[today.month];

  for (let i = 0; i < monthsDays; i++) {
    const dayElement = document.createElement('div');
    dayElement.setAttribute('id', `day${i + 1}`);
    container[0].appendChild(dayElement);
    if (i < 9) {
      document.getElementById(`day${i + 1}`).innerHTML = `0${i + 1}`;
    } else {
      document.getElementById(`day${i + 1}`).innerHTML = i + 1;
    }
  }

  document.getElementById(`day${today.day}`).style.backgroundColor = '#855950';
};
