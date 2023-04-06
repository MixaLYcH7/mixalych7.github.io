function Searching() {
  let searc = document.getElementById("search1").value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searc}&appid=4795667525a7fe9b063ca18370e0c616`
  )
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log(data);
      let searc = document.getElementById("search1").value;
      let icon = ["oblako.png", "sun.png", "sun1.png", "rain.png", "snow.png"];
      let main = data.weather[0].main;
      let description = data.weather[0].description;
      let img = document.getElementById("Pogoda");
      let lat = data.coord.lat;
      let lon = data.coord.lon;
      fetch(
        `http://api.timezonedb.com/v2.1/get-time-zone?key=M6Z4BNG32BH0&format=json&by=position&lat=${lat}&lng=${lon}`
        // { mode: "no-cors" }
      )
        .then(function (resp) {
          return resp.json();
        })
        .then(function (data) {
          console.log(data);
          let formatted = data.formatted;
          const date = new Date(`${formatted}`);
          const hour = date.getHours();
          const minute = date.getMinutes();
          if (minute > 0 && minute <= 9) {
            let minutes = `0${minute}`;
            let Timer = document.getElementById("Timer");
            let time = `${hour}:${minutes}`;
            Timer.innerHTML = time;
          } else {
            let Timer = document.getElementById("Timer");
            let time = `${hour}:${minute}`;
            Timer.innerHTML = time;
          }
          const body = document.querySelector("body");
          const cloud = document.querySelector("cloud");
          const before = document.querySelector(".cloud:before");
          if (hour >= 3 && hour < 9) {
            body.style.backgroundImage = "url('../img/morning.jpg')";
          } else if (hour >= 9 && hour < 15) {
            body.style.backgroundImage = "url('../img/day.jpg')";
          } else if (hour >= 15 && hour < 21) {
            body.style.backgroundImage = "url('../img/evening.jpg')";
          } else {
            body.style.backgroundImage = "url('../img/night.jpg')";
          }
        })
        .catch(function () {});

      if (main == "Snow") {
        img.innerHTML = `<img src=../img/${icon[4]}>`;
        console.log("Картинка");
      } else if (main == "Rain") {
        img.innerHTML = `<img src=../img/${icon[3]}>`;
        console.log("Картинка");
      } else if (main == "Clear") {
        img.innerHTML = `<img src=../img/${icon[2]}>`;
        console.log("sun");
      } else if (main == "Clouds") {
        if (description == "broken clouds") {
          img.innerHTML = `<img src=../img/${icon[1]}>`;
          console.log("Картинка");
        } else {
          img.innerHTML = `<img src=../img/${icon[0]}>`;
          console.log("Картинка");
        }
      }
      let a = data.main.temp;
      let Tower = document.getElementById("Tower");
      let searc1 = document.getElementById("search1").value;
      let TowerLen = searc1.length;
      if (TowerLen > 6) {
        Tower.style.fontSize = `calc(32px - ${TowerLen}px)`;
        Tower.innerHTML = `${searc}`;
      } else {
        Tower.innerHTML = `${searc}`;
      }
      let temp = Math.floor(a) - 273;
      console.log(temp);
      let num = document.getElementById("nu1");
      let znak = "";
      if (temp > 0) {
        znak = "+";
      } else {
        znak = "";
      }
      num.innerHTML = `${znak}${temp}°C`;
      return temp;
    })
    .catch(function () {});
}

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=4795667525a7fe9b063ca18370e0c616`
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    let a = data.main.temp;
    let temp = Math.floor(a) - 273;
    console.log(temp);
    let num = document.getElementById("num1");
    let znak = "";
    if (temp > 0) {
      znak = "+";
    } else if (temp < 0) {
      znak = "-";
    } else if (temp == 0) {
      znak = "";
    }
    num.innerHTML = `${temp}°C`;
    let icon = ["oblako.png", "sun.png", "sun1.png", "rain.png", "snow.png"];
    let main = data.weather[0].main;
    let description = data.weather[0].description;
    let img = document.getElementById("pimg1");
    if (main == "Snow") {
      img.innerHTML = `<img src=../img/${icon[4]}>`;
      console.log("Картинка");
    } else if (main == "Rain") {
      img.innerHTML = `<img src=../img/${icon[3]}>`;
      console.log("Картинка");
    } else if (main == "Clear") {
      img.innerHTML = `<img src=../img/${icon[2]}>`;
      console.log("sun");
    } else if (main == "Clouds") {
      if (description == "broken clouds") {
        img.innerHTML = `<img src=../img/${icon[1]}>`;
        console.log("Картинка");
      } else {
        img.innerHTML = `<img src=../img/${icon[0]}>`;
        console.log("Картинка");
      }
    }

    return temp;
  })
  .catch(function () {});

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=4795667525a7fe9b063ca18370e0c616`
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    let a = data.main.temp;
    let temp = Math.floor(a) - 273;
    console.log(temp);
    let num = document.getElementById("num2");
    let znak = "";
    if (temp > 0) {
      znak = "+";
    } else if (temp < 0) {
      znak = "-";
    } else if (temp == 0) {
      znak = "";
    }
    console.log(`${znak}${temp}°C`);
    num.innerHTML = `${znak}${temp}°C`;
    let icon = ["oblako.png", "sun.png", "sun1.png", "rain.png", "snow.png"];
    let main = data.weather[0].main;
    let description = data.weather[0].description;
    let img = document.getElementById("pimg2");
    if (main == "Snow") {
      img.innerHTML = `<img src=../img/${icon[4]}>`;
      console.log("Картинка");
    } else if (main == "Rain") {
      img.innerHTML = `<img src=../img/${icon[3]}>`;
      console.log("Картинка");
    } else if (main == "Clear") {
      img.innerHTML = `<img src=../img/${icon[2]}>`;
      console.log("sun");
    } else if (main == "Clouds") {
      if (description == "broken clouds") {
        img.innerHTML = `<img src=../img/${icon[1]}>`;
        console.log("Картинка");
      } else {
        img.innerHTML = `<img src=../img/${icon[0]}>`;
        console.log("Картинка");
      }
    }
    return temp;
  })
  .catch(function () {});

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=Дубаи&appid=4795667525a7fe9b063ca18370e0c616`
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    let a = data.main.temp;
    let temp = Math.floor(a) - 273;
    console.log(temp);
    let num = document.getElementById("num3");
    let znak = "";
    if (temp > 0) {
      znak = "+";
    } else if (temp < 0) {
      znak = "-";
    } else {
      znak = "";
    }
    let icon = ["oblako.png", "sun.png", "sun1.png", "rain.png", "snow.png"];
    let main = data.weather[0].main;
    let description = data.weather[0].description;
    let img = document.getElementById("pimg3");
    if (main == "Snow") {
      img.innerHTML = `<img src=../img/${icon[4]}>`;
      console.log("Картинка");
    } else if (main == "Rain") {
      img.innerHTML = `<img src=../img/${icon[3]}>`;
      console.log("Картинка");
    } else if (main == "Clear") {
      img.innerHTML = `<img src=../img/${icon[2]}>`;
      console.log("sun");
    } else if (main == "Clouds") {
      if (description == "broken clouds") {
        img.innerHTML = `<img src=../img/${icon[1]}>`;
        console.log("Картинка");
      } else {
        img.innerHTML = `<img src=../img/${icon[0]}>`;
        console.log("Картинка");
      }
    }
    num.innerHTML = `${znak}${temp}°C`;
    return temp;
  })
  .catch(function () {});

start();
function start() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Самара&appid=4795667525a7fe9b063ca18370e0c616`
  )
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log(data);

      let icon = ["oblako.png", "sun.png", "sun1.png", "rain.png", "snow.png"];
      let main = data.weather[0].main;
      let description = data.weather[0].description;
      let img = document.getElementById("Pogoda");
      let lat = data.coord.lat;
      let lon = data.coord.lon;
      fetch(
        `http://api.timezonedb.com/v2.1/get-time-zone?key=M6Z4BNG32BH0&format=json&by=position&lat=${lat}&lng=${lon}`
        // { mode: "no-cors" }
      )
        .then(function (resp) {
          return resp.json();
        })
        .then(function (data) {
          console.log(data);
          let formatted = data.formatted;
          const date = new Date(`${formatted}`);
          const hour = date.getHours();
          const minute = date.getMinutes();
          if (minute > 0 && minute <= 9) {
            let minutes = `0${minute}`;
            let Timer = document.getElementById("Timer");
            let time = `${hour}:${minutes}`;
            Timer.innerHTML = time;
          } else {
            let Timer = document.getElementById("Timer");
            let time = `${hour}:${minute}`;
            Timer.innerHTML = time;
          }
          const body = document.querySelector("body");
          const cloud = document.querySelector("cloud");
          const before = document.querySelector(".cloud:before");
          if (hour >= 3 && hour < 9) {
            body.style.backgroundImage = "url('../img/morning.jpg')";
          } else if (hour >= 9 && hour < 15) {
            body.style.backgroundImage = "url('../img/day.jpg')";
          } else if (hour >= 15 && hour < 21) {
            body.style.backgroundImage = "url('../img/evening.jpg')";
          } else {
            body.style.backgroundImage = "url('../img/night.jpg')";
          }
        })
        .catch(function () {});

      if (main == "Snow") {
        img.innerHTML = `<img src=../img/${icon[4]}>`;
        console.log("Картинка");
      } else if (main == "Rain") {
        img.innerHTML = `<img src=../img/${icon[3]}>`;
        console.log("Картинка");
      } else if (main == "Clear") {
        img.innerHTML = `<img src=../img/${icon[2]}>`;
        console.log("sun");
      } else if (main == "Clouds") {
        if (description == "broken clouds") {
          img.innerHTML = `<img src=../img/${icon[1]}>`;
          console.log("Картинка");
        } else {
          img.innerHTML = `<img src=../img/${icon[0]}>`;
          console.log("Картинка");
        }
      }
      let a = data.main.temp;
      let Tower = document.getElementById("Tower");
      Tower.innerHTML = "Самара";
      let temp = Math.floor(a) - 273;
      console.log(temp);
      let num = document.getElementById("nu1");
      let znak = "";
      if (temp > 0) {
        znak = "+";
      } else {
        znak = "";
      }
      num.innerHTML = `${znak}${temp}°C`;
      return temp;
    })
    .catch(function () {});
}
