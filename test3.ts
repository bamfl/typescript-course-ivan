type Quantity = 'empty' | number;

// структура данных склада с одеждой
interface IClothesWarehouse {
  jackets: Quantity;
  hats: Quantity;
  socks: Quantity;
  pants: Quantity;
}

// структура данных склада с канцтоварами
interface IStationeryWarehouse {
  scissors: Quantity;
  paper: "empty" | boolean;
}

// структура данных склада с бытовой техникой
interface IAppliancesWarehouse {
  dishwashers: Quantity;
  cookers: Quantity;
  mixers: Quantity;
}

// общая структура данных, наследует все данные из трех выше
// + добавляет свои
interface ITotalWarehouse extends IClothesWarehouse, IStationeryWarehouse, IAppliancesWarehouse {
  deficit: boolean;
  date: Date;
}

// главный объект со всеми данными, должен подходить под формат TotalWarehouse
const totalData: ITotalWarehouse = {
  jackets: 5,
  hats: 'empty',
  socks: 'empty',
  pants: 15,
  scissors: 15,
  paper: true,
  dishwashers: 3,
  cookers: 'empty',
  mixers: 14,
  deficit: false,
  date: new Date()
};

// Реализуйте функцию, которая принимает в себя главный объект totalData нужного формата
// и возвращает всегда строку
// Функция должна отфильтровать данные из объекта и оставить только те названия товаров, у которых значение "empty"
// и поместить их в эту строку. Если таких товаров нет - возвращается другая строка (см ниже)

// С данным объектом totalData строка будет выглядеть:
// "We need this items: hats, socks, cookers"
// Товары через запятую, в конце её не должно быть. Пробел после двоеточия, в конце строки его нет.

function printReport(data: ITotalWarehouse): string {
  const emptyItemsString =
    Object
      .keys(data)
      .filter((key) => data[key as keyof ITotalWarehouse] === 'empty')
      .join(', ');

  if (emptyItemsString.length > 0) {
    return `We need these items: ${emptyItemsString}`;
  }

  // или
  return "Everything's fine";
}

console.log(printReport(totalData));
