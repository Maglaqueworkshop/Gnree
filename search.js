var kayle = `
<p>Teemo[Flash, Ignite]</p><hr>
<p>Malphite[Tp, Ignite]</p><hr>
`;


var darius  = `
<p>Malphite[Tp, Ignite]</p><hr>
`;

var teemo  = `
<p>Malphite[Tp, Ignite]</p><hr>
<p>Vladimir[Tp, Flash]</p><hr>
<p>Gang Plank[Tp, Flash]</p><hr>


`;


var malzahar  = `
<p>galio[Tp, flash]</p><hr>
`;



var sion = `
<p>Teemo[Flash, Ignite]</p><hr>
`;

var ahri = `
<p>galio[Tp, flash]</p><hr>

`;


var maokai = `
<p>galio[Tp, flash]</p><hr>
`;

var volibear = `
<p>Naafiri[Tp, flash]</p><hr>
`;



var pages = [
    {title: "Kayle", content: kayle},
    {title: "Teemo", content: teemo},
    {title: "Darius", content: darius},
    {title: "Sion", content: sion},
    {title: "Malzahar", content: malzahar},
    {title: "Ahri", content: ahri},
    {title: "Maokai", content: maokai},
    {title: "Volibear", content: volibear},








]





var tests = [
    {name: 'ws'},
    {name: 's3'},
]


for (var i = 0; i < tests.length; i++) {
    console.log(i+1);
}










//sorting pages
var sortedTitle = pages.sort((a, b) => a.title.localeCompare(b.title));

var searchBar = document.getElementById("mainSearchBar");
var indexHeader = document.getElementById("index-header");
var linksContainer = document.getElementById("links");
var suggestions = document.getElementById("searchSuggestions");
var logo = document.getElementById("logo");
var returnDiv = document.getElementById("return_div");
searchBar.setAttribute("placeholder", "Search Hero to Counter");







var closeButton = document.getElementById("close_btn");
var overlay = document.getElementById("shadow_wrapperOff");
var popupTitle = document.getElementById("pop_upTitle");
var popUpDiv = document.getElementById("pop_up");



searchBar.addEventListener("keyup", (e) => {
    var searchValue = searchBar.value.toLowerCase();
    suggestions.innerHTML = "";
    var pagesTitles = pages.filter((e) => {
        return e.title.toLowerCase().includes(searchValue);
    })
    pagesTitles.forEach((i)=>{
        var a = document.createElement("a");
        a.innerHTML = i.title;
        suggestions.appendChild(a)
        a.addEventListener("click", (links) =>{
            suggestions.innerHTML = "";
            links.preventDefault();
            overlay.setAttribute("id", "shadow_wrapperOn");
            searchBar.value = "";

            document.title = `Lucky | ${i.title}`;
            popupTitle.innerHTML = i.title;
            var newDiv = document.createElement("div");
            newDiv.setAttribute("id", "iContent");
            newDiv.innerHTML = i.content;
            popUpDiv.appendChild(newDiv)
            overlay.addEventListener("click", (event)=> {
                if (event.target === overlay) {
                    overlay.setAttribute("id", "shadow_wrapperOff");
                    popUpDiv.removeChild(document.getElementById("iContent"))
                    console.log("clicked");
                }else{
                    console.log("clicking on child parent");
                }
            });
        })
    })
    if(searchValue == ""){
        suggestions.innerHTML = "";
    } //clear if blanks
})



function addLinks(){
    pages.forEach((i)=>{
        var a = document.createElement("a");
        a.innerHTML = i.title;
        a.setAttribute("href", "#")
        linksContainer.appendChild(a);   
        a.addEventListener("click", (links) =>{
            links.preventDefault();
            //show overlay if link was clicked
            overlay.setAttribute("id", "shadow_wrapperOn");
            searchBar.value = "";

            document.title = `Lucky | ${i.title}`;
            popupTitle.innerHTML = i.title;
            var newDiv = document.createElement("div");
            newDiv.setAttribute("id", "iContent");
            newDiv.innerHTML = `<hr><br>` + i.content;
            popUpDiv.appendChild(newDiv)
            overlay.addEventListener("click", (event)=> {
                if (event.target === overlay) {
                    overlay.setAttribute("id", "shadow_wrapperOff");
                    popUpDiv.removeChild(document.getElementById("iContent"))
                    console.log("clicked");
                }else{
                    console.log("clicking on child parent");
                }
            });
        })
    })
}
addLinks();


closeButton.addEventListener("click", (e) =>{
    overlay.setAttribute("id", "shadow_wrapperOff");
    popUpDiv.removeChild(document.getElementById("iContent"))
    searchBar.value = "";
    document.title = "Lucky";
})


document.addEventListener("keydown", function(event){
    if (event.key === "Escape") {
        overlay.setAttribute("id", "shadow_wrapperOff");
        popUpDiv.removeChild(document.getElementById("iContent"))
        console.log("ESC key was pressed!");
        suggestions.innerHTML = "";
        searchBar.blur();
    }
    if (event.key === "/"){
        searchBar.focus();
    }
})


document.addEventListener("keydown", function(event){
    if (event.key === ";") {
        console.log("fuck you");
    }
})