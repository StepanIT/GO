
export const initFlatpickr = () => {
  const inputDate = document.getElementById('flatpickr');


  flatpickr(inputDate, {
    dateFormat: "Y-m-d",       // формат даты
    minDate: "today",          // минимальная дата - сегодня
    maxDate: "2024-12-31",     // максимальная дата
    time_24hr: true,            // формат времени 24 часа
  });
  
}

