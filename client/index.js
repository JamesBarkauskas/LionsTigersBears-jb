async function start() {
    try {
        const response = await fetch("https://picsum.photos/images")
        const data = await response.json()
        createBreedList(data.message)
    } catch (e) {
        console.log("There was an error fetching the list")
    }
}

start()

function createPhotoList(photoList) {
    document.getElementById("photo").innerHTML = `
    <select onchange="loadByPhoto(this.value)">
        <option>Choose a photo</option>


        </select>
    `
}

async function loadByPhoto(photo) {
    if(photo != "Choose a photo") {
        const response = await fetch(`https://picsum.photos/id/${photo}/200/300`)
        const data = await response.json()

    }
}