/* Variables */
const input = document.querySelector('#input-weather');
const btnCheck = document.querySelector('#btn-check');
const weatherBox = document.querySelector('#weather-box');

btnCheck.addEventListener('click', ()=> {
    
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=4c248f8a77eb80b59580ace913fdbfc9`)
.then(response => response.json())
.then(data => {
    console.log(data);
    const urlIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    weatherBox.innerHTML += `<div class="card" style="width: 18rem;">
                                <div class="card-body">
                                    <h5 class="card-title">${data['name']} <img src="${urlIcon}"></h5>
                                    <p class="card-text">${data.weather[0].description}</p>
                                </div>
                            </div>`
})

.catch(err => Swal.fire({
    title: 'No tenemos ese dato 😔',
    toast: true,
    position: 'top-end',
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false
}))

input.value = ""

})
