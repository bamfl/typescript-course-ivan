interface IPhone {
  company: string;
  number: number;
}

// IMobilePhone должен наследоваться от IPhone,
// тип свойства companyPartner зависит от свойства company

interface IMobilePhone extends IPhone {
  size: string;
  companyPartner: IPhone['company'];
  manufactured: Date;
}

// Типизировать объект phones

const phones: IMobilePhone[] = [
  {
    company: "Nokia",
    number: 1285637,
    size: "5.5",
    companyPartner: "MobileNokia",
    manufactured: new Date("2022-09-01"),
  },
  {
    company: "Samsung",
    number: 4356637,
    size: "5.0",
    companyPartner: "SamMobile",
    manufactured: new Date("2021-11-05"),
  },
  {
    company: "Apple",
    number: 4552833,
    size: "5.7",
    companyPartner: "no data",
    manufactured: new Date("2022-05-24T12:00:00"),
  },
];

interface IPhonesManufacturedAfterDate extends IMobilePhone {
  initialDate: string;
}

// Функция должна отфильтровать массив данных и вернуть новый массив
// с телефонами, выпущенными после даты в третьем аргументе

function filterPhonesByDate<T extends IMobilePhone, K extends keyof T>(
  phones: T[],
  key: K,
  initial: string
): IPhonesManufacturedAfterDate[] {
  return phones
    .map(phone => {
      return {
        ...phone,
        initialDate: initial
      }
    })
    .filter(phone => {
      if (phone[key] instanceof Date) {
        return phone[key as 'manufactured'].getTime() > new Date(initial).getTime()
      }
    });
}

// Второй аргумент при вызове функции должен быть связан с первым,
// а значит мы получим подсказки - свойства этого объекта

console.log(filterPhonesByDate(phones, "manufactured", "2022-01-01"));
console.log(filterPhonesByDate(phones, "company", "2022-01-01"));