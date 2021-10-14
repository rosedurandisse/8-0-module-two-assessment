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

//add an event listener when some selects something from the form

const displayInfo = document.querySelector("#display-info")
dropDownList.addEventListener("change", (event) => {
    fetch("https://ghibliapi.herokuapp.com/films")
        .then((response) => response.json())
        .then((filmData) =>
            filmData.forEach((eachFilm) => {
                if (eachFilm.title === dropDownList.value) {
                    displayInfo.innerHTML = `<h3> ${eachFilm.title} </h3> <p> ${eachFilm.release_date} </p> <p> ${eachFilm.description}`
                }
            }))
})


const reviewSubmissionForm = document.querySelector(".review form");
const reviewSubmission = document.querySelector(".review form input")
const reviewList = document.querySelector(".review ul")

reviewSubmissionForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const reviewBullet = document.createElement("li");
    reviewBullet.innerHTML = `<strong>${dropDownList.value}.</strong> ${reviewSubmission.value}`;
    reviewList.append(reviewBullet)
    reviewSubmissionForm.reset()
})
