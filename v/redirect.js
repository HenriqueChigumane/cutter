endpoint = "https://jsonbox.io/box_e095644c681d08a9e207";

function getUrl(ed) {
    fetch(ed, {
        method: "GET",
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            redirecter(res)
        }
        )
}
function getPahtId() {
    let path = window.location.hash;
    console.log(path);
    if (path == "/") {
        return "";
        console.log("none")
    }
    //return path.pathname.split("/")[3];
    return path.split("#")[1]
}
const pathId = getPahtId();
getUrl(endpoint + "/?q=id:" + pathId);

function redirecter(longURL) {
    if (longURL.length >= 1) {
        window.location.href = longURL[0].url;
    }
    else {
        window.location.href = "https://henriquechigumane.github.io/404"
    }

}
