// Keys of data
let keys = ['id', 'bomname', 'bomnumber', 'bomlinks'];


//Get data from the server.
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

//function startGetData() {
getServerData("http://localhost:3000/bomlist").then(
    // data => console.log(data)
    data => fillDataTable(data, "bomlistTable")
);
//}

/* document.querySelector("#getDataBtn").addEventListener("click", startGetData {
}); */

//Fill table with server data.
function fillDataTable(data, tableID) {
    let table = document.querySelector(`#${tableID}`);
    if (!table) {
        log => console.error(`Table "${tableID}" is not found.`);
        return;
    }

    //Add new date row to the table
    let newRow = newDataRow(data);
    table.appendChild(newRow);

    let tBody = table.querySelector("tbody");
    for (let row of data) {
        // console.log(row);
        let tr = createAnyElement("tr");
        for (let k of keys) {
            let td = createAnyElement("td");
            let input = createAnyElement("input", {
                class: "form-control",
                value: row[k],
                name: k
            });
            if (k == "id") {
                input.setAttribute("readonly", true);
            }
            td.appendChild(input);
            tr.appendChild(td);
        }

        let btnGroup = createBtnGroup();
        tr.appendChild(btnGroup);

        tBody.appendChild(tr);
    }

}

function createAnyElement(name, attributes) {
    let element = document.createElement(name);
    for (let k in attributes) {
        element.setAttribute(k, attributes[k]);
    }

    return element;
}

function createBtnGroup() {
    let group = createAnyElement("div", { class: "btn btn-group" });
    let openBtn = createAnyElement ("button", {class: "btn btn-success", onclick: "openBtn(this)" });
    openBtn.innerHTML = '<i class="fas fa-folder-open"></i>';
    let setBtn = createAnyElement("button", { class: "btn btn-info", onclick: "setRow(this)" });
    setBtn.innerHTML = '<i class="fas fa-sync-alt"></i>'
    let delBtn = createAnyElement("button", { class: "btn btn-danger", onclick: "delRow(this)" });
    delBtn.innerHTML = '<i class="fas fa-trash-alt">'

    group.appendChild(openBtn);
    group.appendChild(setBtn);
    group.appendChild(delBtn);

    let td = createAnyElement("td");
    td.appendChild(group);
    return td;
}

function delRow(del) {
    //console.log(del);
    let tr = del.parentElement.parentElement.parentElement;
    //console.log(tr);
    let id = tr.querySelector("input.form-control").value;
    //console.log(id);
    let fetchOptions = {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache"
    };

    fetch(`http://localhost:3000/bomlist/${id}`, fetchOptions).then(
        resp => resp.json(),
        err => console.error(err)
    ).then(
        data => {
            getServerData();
            //startGetData();
        }
    );
}

//Create new data row.
function newDataRow(row) {
    let tr = createAnyElement("tr");
    /* for (let k of keys) {
        let td = createAnyElement("td");
        let input = createAnyElement('input', {
            class: 'form-control',
            name: k
        });
        td.appendChild(input);
        tr.appendChild(td);
    } */

    let newBtn = createAnyElement("button", {
        class: "btn btn-success",
        onclick: "addNewData(this)"
    });
    newBtn.innerHTML = `<i class="fas fa-plus-square"></i>`;
    /* let td = createAnyElement("td");
    td.appendChild(newBtn);
    tr.appendChild(td); */

    return tr;
}

function getRowData(tr) {
    let inputs = tr.querySelectorAll('input.form-control');
    let data = {};
    for (let i = 0; i < inputs.length; i++) {
        data[inputs[i].name] = inputs[i].value;
    };
    /* alert(data);
    console.log(data); */
    return data;
}

function addNewData(btn) {
    let tr = btn.parentElement.parentElement.parentElement;
    let data = getRowData(tr);
    delete data.id;
    let fetchOptions = {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    
    fetch(`http://localhost:3000/bomlist/`, fetchOptions).then(
        resp => resp.json(),
        err => console.error(err)
        ).then(
            data => {
                getServerData();
                //startGetData();
            }
        );
        //console.log(data);
}

// Set data
function setRow(btn) {
    let tr = btn.parentElement.parentElement.parentElement;
    let data = getRowData(tr);
    let fetchOptions = {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };
    fetch(`http://localhost:3000/bomlist/${data.id}`, fetchOptions).then(
                resp => resp.json(),
                err => console.error(err)
                ).then(
                    data => {
                        getServerData();
                        //startGetData();
                    }
                );
    // console.log(data);
} 



        /* function getInfo(info) {
            //console.log(del);
            let tr = info.parentElement.parentElement.parentElement;
            //console.log(tr);
            let id = tr.querySelector("td:first-child").innerHTML;
            //console.log(id);
            let fetchOptions = {
                method: "GET",
                mode: "cors",
                cache: "no-cache"
            };
            
            fetch(`http://localhost:3000/bomdata/${id}`, fetchOptions).then(
                resp => resp.json(),
                err => console.error(err)
                ).then(
                    data => {
                        getServerData();
                        //startGetData();
                    }
                    );
                    console.log(this);
                } */