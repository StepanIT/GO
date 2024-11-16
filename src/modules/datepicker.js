import AirDatepicker from 'air-datepicker';

export const initDatepicker = () => {
  const inputDate = document.getElementById('datepicker');
  const inputTime = document.getElementById('timepicker');

  new AirDatepicker(inputDate, {
    startDate: new Date(),
    dateFormat: 'dd.MM',
    autoClose: true,
    // keyboardNav: true,
    navTitles: {
      days: 'MMMM',
    },
  });


  new AirDatepicker(inputTime, {
    timepicker: true,
    timeFormat: 'HH:mm',
    onlyTimepicker: true,
    minHours: 0,
    maxHours: 24,
    minMinutes: 0,
    hoursStep: 1,
    minutesStep: 30,
  });
};

