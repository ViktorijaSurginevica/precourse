//
​const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString()  {
    let germaFlag = colors.filter ( function(color) { return color === "черный" || color === "красный" || color === "желтый";});
    return germaFlag.join('-');
}

console.log(createColorString());