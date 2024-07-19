const baseURL = "https://luansud.github.io/wdd230/";
const linksURL = "https://luansud.github.io/wdd230/data/links.json";

async function getLinks(linksURL){
    const response = await fetch(linksURL)
    if (response.ok) {
        const data = await response.json()
        displayLinks(data);
    }
}

function displayLinks(data){
    const listLinks = document.getElementById('listLinks');
    const weeks = data.weeks
    for (let w = 0; w < weeks.length; w++) {
        const week = weeks[w]
        const li = document.createElement('li')
        li.className = "linkColor"
        li.textContent = week.week + ": "
        listLinks.appendChild(li)

        week.links.forEach(link => {
            const a = document.createElement('a')
            a.href = link.url
            a.textContent = " " + link.title + " | "            
            li.appendChild(a)

        });
    }
}

getLinks(linksURL);