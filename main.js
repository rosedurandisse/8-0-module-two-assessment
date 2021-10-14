//add the movie information to the drop when someone access the page
//upload onto the drop down form when someone goes onto the page

const dropDownList = document.querySelector("#movieDropdown");


window.addEventListener('DOMContentLoaded', (event) => {
    fetch("https://ghibliapi.herokuapp.com/films")
        .then((response) => response.json())
        .then((filmData) =>
            //access each object grab the title and add it to the list
            filmData.forEach(({ title }) => {
                const option = document.createElement("option")
                option.value = title;
                option.textContent = title;
                dropDownList.append(option)
            }))
});

