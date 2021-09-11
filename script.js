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