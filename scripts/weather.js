//Weather data
//Cozumel, Mexico

// -------------------- Next 5 Days --------------------

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Cozumel&appid=a764e02b1faffc440e57f1d7396de2ea&units=metric`)
    .then(response => response.json())
    .then(data => {
        const forecast = document.querySelector(".forecast");
        const nextFiveDays = data.list.filter(entry => {
            const currentDate = new Date();
            const entryDate = new Date(entry.dt * 1000);
            return entryDate.getDate() > currentDate.getDate();
        });

        for (let i = 0; i < 5; i++) {
            const day = nextFiveDays[i];

            let temperature = day.main.temp.toFixed(0);
            let humidity = day.main.humidity.toFixed(0);
            let description = day.weather[0].description.toUpperCase();
            let forecastIcon = `https://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`;

            let fores = document.createElement("div");
            let icons = document.createElement("img");
            let temp = document.createElement("p");
            let hum = document.createElement("p")
            let descr = document.createElement("p");

            icons.setAttribute('src', forecastIcon);
            icons.setAttribute('alt', description);
            icons.setAttribute('loading', 'lazy');
            temp.textContent = temperature + "°C";
            hum.textContent = humidity + "%";
            descr.textContent = description;

            fores.appendChild(icons);
            fores.appendChild(temp);
            fores.appendChild(hum);
            fores.appendChild(descr);

            forecast.appendChild(fores);
        }
    });


    // -------------- BANNER --------------
    document.addEventListener('DOMContentLoaded', () => {
        const apiKey = 'a764e02b1faffc440e57f1d7396de2ea'; 
        const city = 'Cozumel';
    
        function banner(message) {
            const temMaxMessage = document.getElementById('temp-max-message');
            const closeButton = document.querySelector('.exit'); 
            console.log(closeButton); 
            temMaxMessage.innerHTML = message;
            if (closeButton) {
            closeButton.addEventListener('click', closeBanner);
            }
        }
        function closeBanner() {
            const banner = document.getElementById('banner');
            banner.style.display = 'none';
        }
    
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                const tempMax = data.main.temp_max;
                const tempMes = `Maximum temperature forecast for today will be ${Math.round(tempMax)}°F`;
                banner(tempMes);
                const alerts = data.alerts;
                        if (alerts && alerts.length > 0) {
                            const closeButton = document.getElementById('.exit');
                            closeButton.addEventListener('click', closeBanner);
                        }
                    })
    });