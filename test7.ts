// Создать Generic-интерфейс IPlayerData, который подходил бы для создания таких объектов:
type GameType = string | number;

interface IHours {
  total: number;
  inMenu: number;
}

type HoursType = string | number | IHours;

interface IPlayerData<Game extends GameType, Hours extends HoursType> {
  game: Game,
  hours: Hours,
  server: string,
}

const player1: IPlayerData<string, number> = {
  game: "CS:GO",
  hours: 300,
  server: "basic",
};

const player2: IPlayerData<number, string> = {
  game: 2048,
  hours: "300 h.",
  server: "arcade",
};

const player3: IPlayerData<string, IHours> = {
  game: "Chess",
  hours: {
    total: 500,
    inMenu: 50,
  },
  server: "chess",
};

// Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// Каждый объект может еще содержать дополнительные свойства в случайном виде
// Свойство name может иметь только 4 варианта
// Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными в консоль должно попадать:
// { squares: 3, circles: 2, triangles: 2, others: 1 }

interface AmountOfFigures {
  squares: number;
  circles: number;
  triangles: number;
  others: number;
}

function calculateAmountOfFigures<T extends IFigure>(figures: T[]): AmountOfFigures {
  const amountOfFigures: AmountOfFigures = {
    squares: 0,
    circles: 0,
    triangles: 0,
    others: 0,
  };

  figures.forEach(figure => {
    switch (figure.name) {
      case FigureName.Rect:
        amountOfFigures.squares++;
        break;
      case FigureName.Circle:
        amountOfFigures.circles++;
        break;
      case FigureName.Triangle:
        amountOfFigures.triangles++;
        break;
      default:
        amountOfFigures.others++;
        break;
    }
  });

  return amountOfFigures;
}

enum FigureName {
  Rect = 'rect',
  Circle = 'circle',
  Triangle = 'triangle',
  Line = 'line'
}

interface IFigure {
  name: FigureName
}

const data = [
  {
    name: FigureName.Rect,
    data: { a: 5, b: 10 },
  },
  {
    name: FigureName.Rect,
    data: { a: 6, b: 11 },
  },
  {
    name: FigureName.Triangle,
    data: { a: 5, b: 10, c: 14 },
  },
  {
    name: FigureName.Line,
    data: { l: 15 },
  },
  {
    name: FigureName.Circle,
    data: { r: 10 },
  },
  {
    name: FigureName.Circle,
    data: { r: 5 },
  },
  {
    name: FigureName.Rect,
    data: { a: 15, b: 7 },
  },
  {
    name: FigureName.Triangle,
  },
];

console.log(calculateAmountOfFigures<IFigure>(data));
