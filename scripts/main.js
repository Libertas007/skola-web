main()


function main() {
    
}

document.getElementById("hodnoceni").oninput = (e) => {
    const value = +document.getElementById("hodnoceni").value
    let stars = ""

    for(let i = 0; i < value; i++) {
        stars += "⭐"
    }
    
    document.getElementById("hvezdy").innerText = stars
}

document.getElementById("submit").onclick = (e) => {
    e.preventDefault()
    console.log("Zpracovávám údaje...")
    document.getElementById("notification").innerText = "Děkujeme za hodnocení!"
    document.getElementById("notification").classList.remove("non-visible")
    setTimeout(() => {
        console.log("Hotovo :)")
        window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    }, 2000);
}