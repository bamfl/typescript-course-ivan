var emailInput = document.getElementById('email');
var titleInput = document.getElementById('title');
var textInput = document.getElementById('text');
var checkboxInput = document.getElementById('checkbox');
var submitButtons = document.querySelectorAll('button[type="submit"]');
var formData = {
    email: "",
    title: "",
    text: "",
    checkbox: false
};
// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом
var isValidForm = function (formData) {
    var isValid = false;
    Object.keys(formData).forEach(function (key) {
        if (key === 'checkbox') {
            if (formData[key] === true) {
                isValid = true;
            }
            else {
                isValid = false;
                return isValid;
            }
        }
        else if (formData[key] !== '') {
            console.log('key', key);
            console.log(formData[key] !== '');
            isValid = true;
        }
        else {
            isValid = false;
            return isValid;
        }
    });
    console.log('isValidForm', isValid);
    return isValid;
};
function validateFormData(data) {
    if (isValidForm(data)) {
        return true;
    }
    else {
        console.log("Please, complete all fields");
        return false;
    }
}
function checkFormData(data) {
    var email = data.email;
    var emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];
    if (emails.includes(email)) {
        console.log("This email is already exist");
    }
    else {
        console.log("Posting data...");
    }
}
submitButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        if (emailInput && titleInput && textInput && checkboxInput) {
            formData.email = emailInput.value;
            formData.title = titleInput.value;
            formData.text = textInput.value;
            formData.checkbox = checkboxInput.checked;
        }
        var isValid = validateFormData(formData);
        if (isValid)
            checkFormData(formData);
    });
});
