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
        console.log(week)
        console.log(week.week)

        const li = document.createElement('li')
        li.className = "linkColor"
        li.textContent = week.week + ":"
        listLinks.appendChild(li)

        week.links.forEach(link => {
            const a = document.createElement('a')
            a.href = link.url
            a.textContent = link.title






            console.log(link.title)
            console.log(link.url)
        });
    }
}







// criar li, 
// li com classe linkColor
// li recebe texto week:value
// li recebe  a (links[0])
// href do a do li recebe links[0].url
// a do li recebe links links[0].title
// recebe |







getLinks(linksURL);