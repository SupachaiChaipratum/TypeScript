

interface Man {
    label: string;
}

function printLabel(labelledObj: Man) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);