/* //Get data from the server.
function getServerData(url) {
    let fetchOptions = {
        method: "GET",
        mode: "cors",
        cache: "no-cache"
    }

    return fetch(url, fetchOptions).then(
        response => response.json(),
        err => console.error(err)
    );
};



getServerData("http://localhost:3000/bomdata").then(
    data => fillDataTable(data, "bomTable")   
);

//Fill table with server data.
function fillDataTable(data, tableID) {
    let table = document.querySelector(`#${tableID}`);
    if (!table) {
        console.error(`Table "${tableID}" is not found.`);
        return;
    };

    
} */


let bomdata = [
    {id: 1, level: "1", descriptions: "abc ", partnumber: "123 ", revision: "x1 ", quantity: "1", unit: "cm", comment: " - "},
    {id: 1, level: "1.2", descriptions: "def ", partnumber: "456 ", revision: "A99 ", quantity: "1", unit: "dm", comment: " - "},
    {id: 1, level: "1.2.1", descriptions: "ghi ", partnumber: "789 ", revision: "c32 ", quantity: "4", unit: "kg", comment: " xyz "},
    {id: 1, level: "1.2.2", descriptions: "jkl ", partnumber: "987 ", revision: "x1 ", quantity: "1", unit: "pcs", comment: " - "},
    {id: 1, level: "1.3", descriptions: "mno ", partnumber: " 654", revision: "00 ", quantity: "999", unit: "db", comment: " xyz "},
];

//táblázat generálása

let tableBody = document.querySelector("#bomTable tbody");

//táblázat td rész függvénye
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
};

//gombok része

let createButtonGroup = parent => {
    let group = document.createElement("div");
    group.className = "btn-group";

    let btnInfo = document.createElement("button");
    btnInfo.className = "btn-info btn";
    btnInfo.innerHTML = '<i class="fas fa-sync-alt"></i>';

    let btnDanger = document.createElement("button");
    btnDanger.className = "btn-danger btn";
    btnDanger.innerHTML = '<i class="fas fa-trash-alt"></i>';

    group.appendChild(btnInfo);
    group.appendChild(btnDanger);

    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);
};

//ciklus  a táblázat bejárásához


for (let k in bomdata) {
    let tr = document.createElement("tr");
    createTD(parseInt(k)+1, tr);
    for (let value of Object.values(bomdata[k])) {
        createTD(value, tr);
    }; 
    createButtonGroup(tr);
    tableBody.appendChild(tr);
};    