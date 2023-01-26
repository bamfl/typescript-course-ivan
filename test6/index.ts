const emailInput = document.getElementById('email') as HTMLInputElement | null;
const titleInput = document.getElementById('title') as HTMLInputElement | null;
const textInput = document.getElementById('text') as HTMLInputElement | null;
const checkboxInput = document.getElementById('checkbox') as HTMLInputElement | null;
const submitButtons = document.querySelectorAll('button[type="submit"]');

interface IFormData {
  email: string;
  title: string;
  text: string;
  checkbox: boolean;
}

const formData: IFormData = {
  email: "",
  title: "",
  text: "",
  checkbox: false,
};

// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом

function validateFormData(data: IFormData): boolean {
  if (isValidForm(data)) {
    return true;
  } else {
    console.log("Please, complete all fields");
    return false;
  }
}

function checkFormData(data: IFormData): void {
  const { email } = data;
  const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];

  if (emails.includes(email)) {
    console.log("This email is already exist");
  } else {
    console.log("Posting data...");
  }
}

function isValidForm(formData: IFormData): boolean {
  let isValid = false;

  Object.keys(formData).forEach(key => {
    if (key === 'checkbox') {
      if (formData[key] === true) {
        isValid = true;
      } else {
        isValid = false;
        return isValid;
      }
    } else if (formData[key] !== '') {
      console.log('key', key);
      console.log(formData[key] !== '');

      isValid = true;
    } else {
      isValid = false;
      return isValid;
    }
  });

  console.log('isValidForm', isValid);

  return isValid;
}

submitButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    if (emailInput && titleInput && textInput && checkboxInput) {
      formData.email = emailInput.value;
      formData.title = titleInput.value;
      formData.text = textInput.value;
      formData.checkbox = checkboxInput.checked;
    }

    const isValid = validateFormData(formData);

    if (isValid) checkFormData(formData);
  })
});
