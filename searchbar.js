


var linkNames = [
    {name: "xpsimulation"},
    {name: "Socials"},
    {name: "League of Legends Basic Information"},
    {name: "Links"},
    {name: "index"},
    {name: ""},
    {name: ""},
    {name: ""},
    {name: ""},
    {name: ""},
    {name: ""},
    {name: ""},
    {name: ""},
    {name: ""},
    {name: ""},
    {name: ""},
    {name: ""},
    {name: ""},
]



//sort the arrays LinkNames items
var sortedLinkNames =  linkNames.sort((a, b) => {
    return a.name.localeCompare(b.name); // Alphabetical sort
});

console.log(sortedLinkNames);












var suggestions = document.getElementById("suggestions")
var search = document.getElementById("searchbar")
var mainBodyDiv = document.getElementById("main-body")



search.addEventListener('keyup', ()=>{

    var input = search.value.toLowerCase();
    suggestions.innerHTML = ""
    var FilteredNames = linkNames.filter( (names) => {
        return names.name.toLowerCase().startsWith(input)
    })

    console.log(FilteredNames, linkNames.name);

    FilteredNames.forEach((items) => {
        var links = document.createElement("a");
        links.innerHTML = items.name + "<br>"
        links.setAttribute("href", `./${items.name}.html`)
        suggestions.appendChild(links)
    })
    if(input == ""){
        suggestions.innerHTML = "";
    } //clear if blanks
})


function integrateTags() {
    var sortedLinks = sortedLinkNames;


    var tagg = sortedLinks.filter( (items) => {
        return items.name
    })

    tagg.forEach( (items) => {
        var linkTags = document.createElement("a");
        linkTags.innerHTML = items.name + "<br>"
        linkTags.setAttribute("href", `./${items.name}.html`)
        mainBodyDiv.appendChild(linkTags)
    })
}



integrateTags();





