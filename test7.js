var player1 = {
    game: "CS:GO",
    hours: 300,
    server: "basic"
};
var player2 = {
    game: 2048,
    hours: "300 h.",
    server: "arcade"
};
var player3 = {
    game: "Chess",
    hours: {
        total: 500,
        inMenu: 50
    },
    server: "chess"
};
function calculateAmountOfFigures(figures) {
    var amountOfFigures = {
        squares: 0,
        circles: 0,
        triangles: 0,
        others: 0
    };
    figures.forEach(function (figure) {
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
var FigureName;
(function (FigureName) {
    FigureName["Rect"] = "rect";
    FigureName["Circle"] = "circle";
    FigureName["Triangle"] = "triangle";
    FigureName["Line"] = "line";
})(FigureName || (FigureName = {}));
var data = [
    {
        name: FigureName.Rect,
        data: { a: 5, b: 10 }
    },
    {
        name: FigureName.Rect,
        data: { a: 6, b: 11 }
    },
    {
        name: FigureName.Triangle,
        data: { a: 5, b: 10, c: 14 }
    },
    {
        name: FigureName.Line,
        data: { l: 15 }
    },
    {
        name: FigureName.Circle,
        data: { r: 10 }
    },
    {
        name: FigureName.Circle,
        data: { r: 5 }
    },
    {
        name: FigureName.Rect,
        data: { a: 15, b: 7 }
    },
    {
        name: FigureName.Triangle
    },
];
console.log(calculateAmountOfFigures(data));
