export const initValidationMask = (form) => {
    const inputTel = form.querySelector('#phone');
    const telMask = new Inputmask('+7 (999)-999-99-99');
    
    telMask.mask(inputTel);
    return inputTel;
};

export const initValidation = (form) => {
    const inputTel = initValidationMask(form);

    const justValidate = new JustValidate(form);

    justValidate
      .addField('.form-input-name', [
        {
          rule: 'required',
          errorMessage: 'Укажите ваше имя',
        },
        {
          rule: 'minLength',
          value: 2,
          errorMessage: 'Не короче 2 символов',
        },
        {
          rule: 'maxLength',
          value: 30,
          errorMessage: 'Слишком длинное имя',
        },
      ])
      .addField('.form-input-phone', [
        {
          rule: 'required',
          errorMessage: 'Введите номер телефона',
        },
        {
          validator(value) {
            const phone = inputTel.inputmask.unmaskedvalue();
            return phone.length === 10 && !isNaN(phone);
          },
          errorMessage: 'Номер не корректный',
        }
      ]);
};







