


// Number Increase 
let count = 0;

const addItems = document.getElementById('input-btn').addEventListener('click', function () {
    

    

    count++;
    const inputValue = document.getElementById("input-value").value.trim();

    if (inputValue == "") {
        alert("Please Provide Item");
    }
    else {
        const mainContainer = document.getElementById("content-container");
        const tableHead = document.createElement('tr');
        tableHead.innerHTML = `
        <th style="font-weight: 400" scope="row">${count}</th>
        <td>${inputValue}</td>
        <td>
            <button class="btn btn-outline-danger delete-btn">Delete</button>
            <button class="btn btn-outline-success done-btn">Done</button>
        </td>
        `;
        mainContainer.appendChild(tableHead);
        document.getElementById("input-value").value = "";

        const deleteButton = document.getElementsByClassName("delete-btn");
        const doneButton = document.getElementsByClassName("done-btn");

        for (const button of deleteButton) {
            button.addEventListener("click", function (event) {
                event.target.parentNode.parentNode.style.display = "none";
            });
        }
        for (const button of doneButton) {
            button.addEventListener("click", function (event) {
                event.target.parentNode.parentNode.style.textDecoration = "line-through";
                button.setAttribute('disabled', true);
                button.style.backgroundColor = 'gray';
                button.style.color = 'black';
            });
        }
    }
    
    
});


function clearBtn() {
    document.getElementById('content-container').style.display = 'none'
}

