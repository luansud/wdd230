const favchap = document.querySelector("#favchap");
const buttonSubmit = document.querySelector("#buttonSub");
const list = document.querySelector("#list");

buttonSubmit.addEventListener("click",() =>{
    if(favchap.value == ""){
        window.alert("Please type some chapter");
        favchap.focus();
    } else {
        const li = document.createElement("li");
        const deleteButton = document.createElement("button")

        li.textContent = favchap.value;
        deleteButton.textContent = "❌";
        li.appendChild(deleteButton);

        list.appendChild(li);

        deleteButton.addEventListener("click",() =>{
            list.removeChild(li);
            favchap.focus();
        });

        favchap.focus();
        favchap.value = ""
    }
});