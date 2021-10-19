main()


function main() {
    
}

document.getElementById("submit").onsubmit = (e) => {
    e.preventDefault()
    setTimeout(() => {
        window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    }, 2000);
}