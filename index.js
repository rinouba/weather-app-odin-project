const info = document.querySelector('#info')
const search = document.querySelector('#search')
const inputSearch = document.querySelector("#inputSearch")

const getWeatherData = async (qry) => {
  let key = "9a4088b3115c4912890160727231711"
  let url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${qry}`
  try{
    const res = await fetch(url,{ mode: "cors" })
    const body = await res.json()
     info.innerHTML = 
    `
    <div class="card">
        <h1>${body.location.name}</h1>
        <h3>${body.current.temp_c} °C</h3>
        <h5>Fells life: ${body.current.feelslike_c}°C</h5>
        <h5>Humidity: ${body.current.humidity} %</h5>
        <h5>${body.current.wind_kph} km/h</h5>
    </div>
    `
  }catch(err){
    alert(`Error: City ${qry} not found`)
  }
}

search.addEventListener('click',(e) => { 
    e.preventDefault()
    if (inputSearch.value === "") {
      alert("Please Put Your Name City!")
    }else{
        getWeatherData(inputSearch.value)
    }
 })