// console.log('geometry-genius.js here');
let serialCount = 1;
// 1. Triangle area calculate
document.getElementById("triangle-cal").addEventListener("click", function () {
    const triangleArea = getFrisTypeOfArea('triangle-width', 'triangle-height');
    displayTableData(serialCount, 'triangle-name', triangleArea);
});

// 2. Rectangle area calculate
document.getElementById("rectangle-cal").addEventListener("click", function () {
    const triangleArea = getSecondTypeOfArea('rectangle-width', 'rectangle-height');
    displayTableData(serialCount, 'rectangle-name', triangleArea);
});

// 3. Parallelogram area calculate
document.getElementById("parallelogram-cal").addEventListener("click", function () {
    const triangleArea = getSecondTypeOfArea('parallelogram-width', 'parallelogram-height');
    displayTableData(serialCount, 'parallelogram-name', triangleArea);
});

// 4. Rhombous area calculate
document.getElementById("rhombus-cal").addEventListener("click", function () {
    const rhombusArea = getFrisTypeOfArea('rhombus-width', 'rhombus-height');
    displayTableData(serialCount, 'rhombus-name', rhombusArea);
});

// 5. Pentagon area calculate
document.getElementById("pentagon-cal").addEventListener("click", function () {
    const pentagonArea = getFrisTypeOfArea('pentagon-width', 'pentagon-height');
    displayTableData(serialCount, 'pentagon-name', pentagonArea);
});
// 6. Ellipse area calculate
document.getElementById("ellipse-cal").addEventListener("click", function () {
    const pentagonArea = getThirdTypeOfArea('ellipse-width', 'ellipse-height');
    displayTableData(serialCount, 'ellipse-name', pentagonArea);
});

// 1st type area calculate: Triangle, Rhombous, Pentagon
function getFrisTypeOfArea(firstInput, secondInput) {
    const firstInputValue = getData(firstInput);
    const secondInputValue = getData(secondInput);

    if (
        firstInputValue == "" ||
        secondInputValue == "" ||
        firstInputValue <= 0 ||
        secondInputValue <= 0 ||
        isNaN(firstInputValue) ||
        isNaN(secondInputValue)
    ) {
        return alert("Please enter valid width & height input");
    }
    else {
        const areaStringValue = (0.5 * firstInputValue * secondInputValue).toFixed(2);
        const areaNumberValue = parseFloat(areaStringValue);
        return areaNumberValue;
    }
}

// 2nd type area calculate : Rectangle, Paralleogram 
function getSecondTypeOfArea(firstInput, secondInput) {
    const firstInputValue = getData(firstInput);
    const secondInputValue = getData(secondInput);

    if (
        firstInputValue == "" ||
        secondInputValue == "" ||
        firstInputValue <= 0 ||
        secondInputValue <= 0 ||
        isNaN(firstInputValue) ||
        isNaN(secondInputValue)
    ) {
        return alert("Please enter valid width & height input");
    }
    else {
        const areaStringValue = (firstInputValue * secondInputValue).toFixed(2);
        const areaNumberValue = parseFloat(areaStringValue);
        return areaNumberValue;
    }
}

// 3rd type area calculate : Ellipse
function getThirdTypeOfArea(firstInput, secondInput) {
    const firstInputValue = getData(firstInput);
    const secondInputValue = getData(secondInput);

    if (
        firstInputValue == "" ||
        secondInputValue == "" ||
        firstInputValue <= 0 ||
        secondInputValue <= 0 ||
        isNaN(firstInputValue) ||
        isNaN(secondInputValue)
    ) {
        return alert("Please enter valid width & height input");
    }
    else {
        const areaStringValue = (3.14 * firstInputValue * secondInputValue).toFixed(2);
        const areaNumberValue = parseFloat(areaStringValue);
        return areaNumberValue;
    }
}

// get width length data using id 
function getData(id) {
    const getIdValue = document.getElementById(id);
    const getIdStringValue = getIdValue.value;
    const getIdIntValue = parseFloat(getIdStringValue);
    return getIdIntValue;
}

// display data in area calculate table if it get valid data 
function displayTableData(serial, shapeName, areaValue) {
    const containerTable = document.getElementById("container-table");
    const serialNum = serial;
    const geometryShapeName = document.getElementById(shapeName).innerText;
    const geometryArea = areaValue;

    if (
        areaValue == "" ||
        areaValue <= 0 ||
        isNaN(areaValue)
    ) {
        return;
    }
    else {
        serialCount++;
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${serialNum}</td>
        <td>${geometryShapeName}</td>
        <td>${geometryArea}cm<sup>2</sup></td>
        <td>
        <button class="bg-sky-600 font-bold px-6 py-2 text-white rounded">Convert to m<sup>2</sup></button>
        </td>
        `;
        containerTable.appendChild(tr);
    }
}

// cart color changing part 
// const getColors = (colorId) => {
//     const randomNumber = Math.floor(Math.random() * 16777215);
//     const randomCode = "#" + randomNumber.toString(16);
//     colorId.style.backgroundColor = randomCode;
// }
// document.getElementById("colorChangeTriangle").addEventListener("mousemove", getColors(colorChangeTriangle));
// document.getElementById("colorChangeRectangle").addEventListener("mousemove", getColors(colorChangeRectangle));
// document.getElementById("colorChangeParallelogram").addEventListener("mousemove", getColors(colorChangeParallelogram));
// document.getElementById("colorChangeRhombus").addEventListener("mousemove", getColors(colorChangeRhombus));
// document.getElementById("colorChangePentagon").addEventListener("mousemove", getColors(colorChangePentagon));
// document.getElementById("colorChangeEllipse").addEventListener("mousemove", getColors(colorChangeEllipse));

// document.getElementById("colorChangeTriangle").addEventListener("mouseover", getColors)

