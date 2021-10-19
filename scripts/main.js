main()


function main() {
    
}

document.getElementById("submit").onclick = (e) => {
    e.preventDefault()
    console.log("Zpracovávám údaje...")
    setTimeout(() => {
        console.log("Hotovo :)")
        window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    }, 2000);
}