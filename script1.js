let but1 = document.getElementById("but1");
let but2 = document.getElementById("but2");
let but3 = document.getElementById("but3");
let but4 = document.getElementById("but4");
let but5 = document.getElementById("but5");
let but6 = document.getElementById("but6");
let but7 = document.getElementById("but7");
let but8 = document.getElementById("but8");
let but9 = document.getElementById("but9");
let imageIndex = 0;
let images = ["монетка.jpg", "смерть.jpg"];
let a = Math.floor(Math.random() * 2);
let play = document.getElementById("play");
let fs = 0;
let loss = 0;
console.log(fs);

const switchman = () => {
  play.innerHTML = a;
};

const Reloading = () => {
  location.reload();
};

let MasIndex = [
  "index",
  "index1",
  "index2",
  "index3",
  "index4",
  "index5",
  "index6",
  "index7",
  "index8",
];
let randomIndex = Math.floor(Math.random() * 8);
let randomIndex1 = Math.floor(Math.random() * 8);
if (randomIndex == randomIndex1) {
  randomIndex1 = Math.floor(Math.random() * 8);
}
let IIndex = MasIndex[randomIndex];
let IIndex1 = MasIndex[randomIndex1];
console.log(IIndex);
console.log(IIndex1);

const switchImage = () => {
  if (IIndex === "index") {
    but1.innerHTML = `<img src= ${images[1]}>`;
    fs -= 1;
    console.log(fs);
    setTimeout(() => {
      let Game = document.getElementById("Game");
      Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
      Game.style.backgroundColor = "red";
      Game.style.color = "white";
    }, 1000);
  } else if (IIndex1 === "index") {
    but1.innerHTML = `<img src= ${images[1]}>`;
    fs -= 1;
    console.log(fs);
    setTimeout(() => {
      let Game = document.getElementById("Game");
      Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
      Game.style.backgroundColor = "red";
      Game.style.color = "white";
    }, 1000);
  } else {
    but1.innerHTML = `<img src= ${images[0]}>`;
    fs += 1;
    console.log(fs);
    if (fs === 7) {
      func111();
    }
  }
};
const switchImage1 = () => {
  if (IIndex === "index1") {
    but2.innerHTML = `<img src= ${images[1]}>`;
    fs -= 1;
    console.log(fs);
    setTimeout(() => {
      let Game = document.getElementById("Game");
      Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
      Game.style.backgroundColor = "red";
      Game.style.color = "white";
    }, 1000);
  } else if (IIndex1 === "index1") {
    but2.innerHTML = `<img src= ${images[1]}>`;
    fs -= 1;
    console.log(fs);
    setTimeout(() => {
      let Game = document.getElementById("Game");
      Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
      Game.style.backgroundColor = "red";
      Game.style.color = "white";
    }, 1000);
  } else {
    but2.innerHTML = `<img src= ${images[0]}>`;
    fs += 1;
    console.log(fs);
    if (fs === 7) {
      func111();
    }
  }
};
const switchImage2 = () => {
  if (IIndex === "index2") {
    but3.innerHTML = `<img src= ${images[1]}>`;
    fs -= 1;
    console.log(fs);
    setTimeout(() => {
      let Game = document.getElementById("Game");
      Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
      Game.style.backgroundColor = "red";
      Game.style.color = "white";
    }, 1000);
  } else if (IIndex1 === "index2") {
    but3.innerHTML = `<img src= ${images[1]}>`;
    fs -= 1;
    console.log(fs);
    setTimeout(() => {
      let Game = document.getElementById("Game");
      Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
      Game.style.backgroundColor = "red";
      Game.style.color = "white";
    }, 1000);
  } else {
    but3.innerHTML = `<img src= ${images[0]}>`;
    fs += 1;
    console.log(fs);
    if (fs === 7) {
      func111();
    }
  }
};
const switchImage3 = () => {
  if (IIndex === "index3") {
    but4.innerHTML = `<img src= ${images[1]}>`;
    fs -= 1;
    console.log(fs);
    setTimeout(() => {
      let Game = document.getElementById("Game");
      Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
      Game.style.backgroundColor = "red";
      Game.style.color = "white";
    }, 1000);
  } else if (IIndex1 === "index3") {
    but4.innerHTML = `<img src= ${images[1]}>`;
    fs -= 1;
    console.log(fs);
    setTimeout(() => {
      let Game = document.getElementById("Game");
      Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
      Game.style.backgroundColor = "red";
      Game.style.color = "white";
    }, 1000);
  } else {
    but4.innerHTML = `<img src= ${images[0]}>`;
    fs += 1;
    console.log(fs);
    if (fs === 7) {
      func111();
    }
  }
};
const switchImage4 = () => {
  if (IIndex === "index4") {
    but5.innerHTML = `<img src= ${images[1]}>`;
    fs -= 1;
    console.log(fs);
    setTimeout(() => {
      let Game = document.getElementById("Game");
      Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
      Game.style.backgroundColor = "red";
      Game.style.color = "white";
    }, 1000);
  } else if (IIndex1 === "index4") {
    but5.innerHTML = `<img src= ${images[1]}>`;
    fs -= 1;
    console.log(fs);
    setTimeout(() => {
      let Game = document.getElementById("Game");
      Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
      Game.style.backgroundColor = "red";
      Game.style.color = "white";
    }, 1000);
  } else {
    but5.innerHTML = `<img src= ${images[0]}>`;
    fs += 1;
    console.log(fs);
    if (fs === 7) {
      func111();
    }
  }
};
const switchImage5 = () => {
  if (IIndex === "index5") {
    but6.innerHTML = `<img src= ${images[1]}>`;
    fs -= 1;
    console.log(fs);
    setTimeout(() => {
      let Game = document.getElementById("Game");
      Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
      Game.style.backgroundColor = "red";
      Game.style.color = "white";
    }, 1000);
  } else if (IIndex1 === "index5") {
    but6.innerHTML = `<img src= ${images[1]}>`;
    fs -= 1;
    console.log(fs);
    setTimeout(() => {
      let Game = document.getElementById("Game");
      Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
      Game.style.backgroundColor = "red";
      Game.style.color = "white";
    }, 1000);
  } else {
    but6.innerHTML = `<img src= ${images[0]}>`;
    fs += 1;
    console.log(fs);
    if (fs === 7) {
      func111();
    }
  }
};
const switchImage6 = () => {
  if (IIndex === "index6") {
    but7.innerHTML = `<img src= ${images[1]}>`;
    fs -= 1;
    console.log(fs);
    setTimeout(() => {
      let Game = document.getElementById("Game");
      Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
      Game.style.backgroundColor = "red";
      Game.style.color = "white";
    }, 1000);
  } else if (IIndex1 === "index6") {
    but7.innerHTML = `<img src= ${images[1]}>`;
    fs -= 1;
    console.log(fs);
    setTimeout(() => {
      let Game = document.getElementById("Game");
      Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
      Game.style.backgroundColor = "red";
      Game.style.color = "white";
    }, 1000);
  } else {
    but7.innerHTML = `<img src= ${images[0]}>`;
    fs += 1;
    console.log(fs);
    if (fs === 7) {
      func111();
    }
  }
};
const switchImage7 = () => {
  if (IIndex === "index7") {
    but8.innerHTML = `<img src= ${images[1]}>`;
    fs -= 1;
    console.log(fs);
    setTimeout(() => {
      let Game = document.getElementById("Game");
      Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
      Game.style.backgroundColor = "red";
      Game.style.color = "white";
    }, 1000);
  } else if (IIndex1 === "index7") {
    but8.innerHTML = `<img src= ${images[1]}>`;
    fs -= 1;
    console.log(fs);
    setTimeout(() => {
      let Game = document.getElementById("Game");
      Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
      Game.style.backgroundColor = "red";
      Game.style.color = "white";
    }, 1000);
  } else {
    but8.innerHTML = `<img src= ${images[0]}>`;
    fs += 1;
    console.log(fs);
    if (fs === 7) {
      func111();
    }
  }
};
const switchImage8 = () => {
  if (IIndex === "index8") {
    but9.innerHTML = `<img src= ${images[1]}>`;
    fs -= 1;
    console.log(fs);
    setTimeout(() => {
      let Game = document.getElementById("Game");
      Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
      Game.style.backgroundColor = "red";
      Game.style.color = "white";
    }, 1000);
  } else if (IIndex1 === "index8") {
    but9.innerHTML = `<img src= ${images[1]}>`;
    fs -= 1;
    console.log(fs);
    setTimeout(() => {
      let Game = document.getElementById("Game");
      Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
      Game.style.backgroundColor = "red";
      Game.style.color = "white";
    }, 1000);
  } else {
    but9.innerHTML = `<img src= ${images[0]}>`;
    fs += 1;
    console.log(fs);
    if (fs === 7) {
      func111();
    }
  }
};

function func111() {
  if (fs === 7) {
    console.log("you win!");
    setTimeout(() => {
      let Game = document.getElementById("Game");
      Game.innerHTML = "<strong>Ты победил!!!</strong>";
      Game.style.backgroundColor = "#49b622";
      Game.style.color = "white";
    }, 1000);
  }
}
