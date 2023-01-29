interface IForm {
  login: string;
  password: string;
  test: number;
}

// Необходимо типизировать объект валидации
// Учтите, что данные в форме могут расширяться и эти поля
// должны появиться и в объекте валидации
type ValidObject = {
  isValid: true;
}

type InvalidObject = {
  isValid: false;
  errorMsg: string;
}

type ValidationData<T> = Record<keyof T, ValidObject | InvalidObject>;

const validationData: ValidationData<IForm> = {
  login: { isValid: false, errorMsg: "At least 3 characters" },
  password: { isValid: true },
  test: { isValid: true }
};
