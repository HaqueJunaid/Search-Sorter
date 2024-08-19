const items = [
    { name: "Street of Moscow", url: "./Images/moscow.jpg" },

    { name: "Tokyo Night", url: "./Images/tokyoNight.jpg" },

    { name: "Tokyo Cityescape", url: "./Images/tokyoCityEscape.jpg" },

    { name: "New York Night", url: "./Images/newYork.jpg" },

    { name: "New York Cityescape", url: "./Images/newYorkCityEscape.jpg" },

    { name: "California", url: "./Images/california.jpg" },

    { name: "Burj Khalifa", url: "./Images/burjKhalifa.jpg" },

    { name: "Shibuya", url: "./Images/shibuya.jpg" },

    { name: "Mount-Fuji", url: "./Images/mountFuji.jpg" },

    { name: "Mount-Fuji with Cherry Blossom", url: "./Images/mountfujiCheery.jpg" },
]

function AddItems() {
    let clutter = "";

    items.forEach((item) => {
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${item.url}" alt="image">
        <div class="caption">${item.name}</div>
    </div>`
    })

    document.querySelector(".container").innerHTML = clutter;
}

AddItems();

function searchFeatures() {
    let search = document.getElementById("searchinput");
    search.addEventListener("focus", () => {
        document.querySelector(".overlay").style.display = "block";
    })

    search.addEventListener("blur", () => {
        document.querySelector(".overlay").style.display = "none";
    })

    search.addEventListener("input", (e) => {
        let filterArray = items.filter(item => item.name.toLowerCase().startsWith(search.value.toLowerCase()))
        console.log(filterArray);

        let clutter = "";

        filterArray.forEach(item => [
            clutter += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${item.name}</h3>
        </div>`
        ])

        document.querySelector(".searchdata").style.display = "block";
        document.querySelector(".searchdata").innerHTML = clutter;

    })

}
searchFeatures();