const time = document.querySelector('.header__date-hours');
const date = document.querySelector('.header__date-day');

let interval;

const formingTime = () => {
  Data = new Date();

  const hours = Data.getHours();
  const minutes = Data.getMinutes();

  const fhours = hours < 10 ? '0' + hours : hours;
  const fminutes = minutes < 10 ? '0' + minutes : minutes;

  time.textContent = `${fhours}:${fminutes}`;

};

const formingDate = () => {
  Data = new Date();
  const day = Data.getDate();
  const month = Data.getMonth();

  switch (month) {
    case 0: fMonth = "January"; break;
    case 1: fMonth = "February"; break;
    case 2: fMonth = "March"; break;
    case 3: fMonth = "April"; break;
    case 4: fMonth = "May"; break;
    case 5: fMonth = "June"; break;
    case 6: fMonth = "July"; break;
    case 7: fMonth = "August"; break;
    case 8: fMonth = "September"; break;
    case 9: fMonth = "October"; break;
    case 10: fMonth = "November"; break;
    case 11: fMonth = "December"; break;
  }

  date.textContent = `${fMonth} ${day}`;
}

formingDate();
formingTime();
interval = setInterval(formingTime, 1000);


