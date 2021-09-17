let anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        let anchorId = anchor.getAttribute('href').substr(1)

        document.getElementById(anchorId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

function onClick() {
    var x = document.getElementById("topnav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}