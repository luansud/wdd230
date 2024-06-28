const favchap = document.querySelector("#favchap");
const buttonSubmit = document.querySelector("#buttonSub");
const list = document.querySelector("#list");
let chaptersArray  = getChapterList() || [];

buttonSubmit.addEventListener("click",() =>{
    if(favchap.value != ""){
        displayList(favchap.value);
        chaptersArray.push(favchap.value);
        setChapterList();
        favchap.value = "";
        favchap.focus();
    }
});

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item){
    let li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.textContent = item;
    deleteButton.textContent = "❌";
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent); 
        favchap.focus();
      });
}

function getChapterList(){ 
    return JSON.parse(localStorage.getItem("favChaptersList"));
 }

function setChapterList(){
    localStorage.setItem("favChaptersList",JSON.stringify(chaptersArray));
}

function deleteChapter(chapter){ 
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
 }

/*

    if(favchap.value == ""){
        window.alert("Please type some chapter");
        favchap.focus();
    } else {
        let li = document.createElement("li");
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



*/