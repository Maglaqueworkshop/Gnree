

//html files must be lowercase
var FileNamess = [
    {name: "xpsimulation"},
    {name: "socials"},
    {name: "links"},
    {name: "index"},
    {name: "about"},
    {name: "smolstory"},
    {name: "icedmilkshake"},
    {name: "french"},
    {name: "leagueoflegends"},
    {name: ""},
    {name: ""},
    {name: ""},
    {name: ""},
    {name: ""},
    {name: ""},
    {name: ""},
    {name: ""},
]



//sort the arrays FileNamess items
var sortedFileNamess =  FileNamess.sort((a, b) => {
    return a.name.localeCompare(b.name); // Alphabetical sort
});

console.log(sortedFileNamess);




var suggestions = document.getElementById("suggestions")
var search = document.getElementById("searchbar")
var mainBodyDiv = document.getElementById("search-function")

search.setAttribute("placeholder", "Recherche")

search.addEventListener('keyup', ()=>{

    var input = search.value.toLowerCase();
    suggestions.innerHTML = ""
    var FilteredNames = FileNamess.filter( (names) => {
        return names.name.toLowerCase().match(input)
    })

    console.log(FilteredNames, FileNamess.name);

    FilteredNames.forEach((items) => {
        var links = document.createElement("a");
        links.innerHTML = items.name + "<br>"
        links.setAttribute("href", `${items.name}.html`)
        suggestions.appendChild(links)
    })
    if(input == ""){
        suggestions.innerHTML = "";
    } //clear if blanks
})


function integrateTags() {
    var sortedLinks = sortedFileNamess;


    var tagg = sortedLinks.filter( (items) => {
        return items.name
    })

    tagg.forEach( (items) => {
        var linkTags = document.createElement("a");
        linkTags.innerHTML = items.name + "<br>"
        linkTags.setAttribute("href", `${items.name}.html`)
        mainBodyDiv.appendChild(linkTags)
    })
}



integrateTags();