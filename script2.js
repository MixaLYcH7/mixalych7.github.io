let but1 = document.getElementById("but1");
let but2 = document.getElementById("but2");
let but3 = document.getElementById("but3");
let but4 = document.getElementById("but4");
let but5 = document.getElementById("but5");
let but6 = document.getElementById("but6");
let but7 = document.getElementById("but7");
let but8 = document.getElementById("but8");
let but9 = document.getElementById("but9");
let randomIndex = 0;
let randomIndex1 = 0;
let randomIndex2 = 0;
let randomIndex3 = 0;
let randomIndex4 = 0;
let randomIndex5 = 0;
let randomIndex6 = 0;
let randomIndex7 = 0;
let randomIndex8 = 0;
let IIndex = 0;
let IIndex1 = 0;
let IIndex2 = 0;
let IIndex3 = 0;
let IIndex4 = 0;
let IIndex5 = 0;
let IIndex6 = 0;
let IIndex7 = 0;
let IIndex8 = 0;
let randomBomb = document.getElementById("randomBomb");
let Procent = document.getElementById("Procent");
let imageIndex = 0;
let images = ["монетка.jpg", "смерть.jpg"];
let a = Math.floor(Math.random() * 2);
let play = document.getElementById("play");
let fs = 0;
let loss = 0;
let bombs = 0;
console.log(fs);

const Reloading = () => {
  location.reload();
};

function randomBombs() {
  bombs = Math.floor(Math.random() * 9);
  let procent = ((9 - bombs) / 9) * 100;
  if (bombs === 0) {
    bombs = Math.floor(Math.random() * 9);
  }
  randomBomb.innerHTML = bombs;
  Procent.innerHTML = `Победа: ${Math.round(procent)}%`;
  randomBobik();
}

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

function randomBobik() {
  if (bombs === 1) {
    randomIndex = Math.floor(Math.random() * 8);
    IIndex = MasIndex[randomIndex];
    console.log(IIndex);
  } else if (bombs === 2) {
    randomIndex = Math.floor(Math.random() * 8);
    randomIndex1 = Math.floor(Math.random() * 8);
    IIndex = MasIndex[randomIndex];
    IIndex1 = MasIndex[randomIndex1];
    console.log(IIndex);
    console.log(IIndex1);
  } else if (bombs === 3) {
    let MasIndex1 = ["index", "index1", "index2"];
    let MasIndex2 = ["index3", "index4", "index5"];
    let MasIndex3 = ["index6", "index7", "index8"];
    randomIndex = Math.floor(Math.random() * 3);
    randomIndex1 = Math.floor(Math.random() * 3);
    randomIndex2 = Math.floor(Math.random() * 3);
    IIndex = MasIndex1[randomIndex];
    IIndex1 = MasIndex2[randomIndex1];
    IIndex2 = MasIndex3[randomIndex2];
    console.log(IIndex);
    console.log(IIndex1);
    console.log(IIndex2);
  } else if (bombs === 4) {
    let MasIndex1 = ["index", "index1"];
    let MasIndex2 = ["index3", "index4"];
    let MasIndex3 = ["index6", "index7"];
    let MasIndex4 = ["index2", "index5", "index8"];
    randomIndex = Math.floor(Math.random() * 2);
    randomIndex1 = Math.floor(Math.random() * 2);
    randomIndex2 = Math.floor(Math.random() * 2);
    randomIndex3 = Math.floor(Math.random() * 3);
    IIndex = MasIndex1[randomIndex];
    IIndex1 = MasIndex2[randomIndex1];
    IIndex2 = MasIndex3[randomIndex2];
    IIndex3 = MasIndex4[randomIndex3];
    console.log(IIndex);
    console.log(IIndex1);
    console.log(IIndex2);
    console.log(IIndex3);
  } else if (bombs === 5) {
    let MasIndex1 = ["index", "index1"];
    let MasIndex2 = ["index3", "index4"];
    let MasIndex3 = ["index6", "index7", "index8"];
    let MasIndex4 = ["index2", "index5"];
    randomIndex = Math.floor(Math.random() * 2);
    randomIndex1 = Math.floor(Math.random() * 2);
    randomIndex2 = Math.floor(Math.random() * 2);
    randomIndex3 = Math.floor(Math.random() * 3);
    randomIndex4 = Math.floor(Math.random() * 3);
    if (randomIndex3 === randomIndex4) {
      randomIndex4 = Math.floor(Math.random() * 3);
    }
    IIndex = MasIndex1[randomIndex];
    IIndex1 = MasIndex2[randomIndex1];
    IIndex2 = MasIndex4[randomIndex2];
    IIndex3 = MasIndex3[randomIndex3];
    IIndex4 = MasIndex3[randomIndex4];
    console.log(IIndex);
    console.log(IIndex1);
    console.log(IIndex2);
    console.log(IIndex3);
    console.log(IIndex4);
  } else if (bombs == 6) {
    let MasIndex1 = ["index", "index1", "index2"];
    let MasIndex2 = ["index3", "index4", "index5"];
    let MasIndex3 = ["index6", "index7", "index8"];
    randomIndex = Math.floor(Math.random() * 3);
    randomIndex1 = Math.floor(Math.random() * 3);
    randomIndex2 = Math.floor(Math.random() * 3);
    IIndex = MasIndex1[randomIndex];
    IIndex1 = MasIndex2[randomIndex1];
    IIndex2 = MasIndex3[randomIndex2];
    console.log(IIndex);
    console.log(IIndex1);
    console.log(IIndex2);
  } else if (bombs == 7) {
    randomIndex = Math.floor(Math.random() * 8);
    randomIndex1 = Math.floor(Math.random() * 8);
    if (randomIndex === randomIndex1) {
      randomIndex1 = Math.floor(Math.random() * 3);
    }
    IIndex = MasIndex[randomIndex];
    IIndex1 = MasIndex[randomIndex1];
    console.log(IIndex);
    console.log(IIndex1);
  } else if (bombs == 8) {
    randomIndex = Math.floor(Math.random() * 8);
    IIndex = MasIndex[randomIndex];
    console.log(IIndex);
  }
}

const switchImage = () => {
  if (bombs === 1) {
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
    } else {
      but1.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      console.log(fs);
      if (fs === 8) {
        func111();
      }
    }
  } else if (bombs === 2) {
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
  } else if (bombs === 3) {
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
    } else if (IIndex2 === "index") {
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
      if (fs === 6) {
        func111();
      }
    }
  } else if (bombs === 4) {
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
    } else if (IIndex2 === "index") {
      but1.innerHTML = `<img src= ${images[1]}>`;
      fs -= 1;
      console.log(fs);
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
    } else if (IIndex3 === "index") {
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
      if (fs === 5) {
        func111();
      }
    }
  } else if (bombs === 5) {
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
    } else if (IIndex2 === "index") {
      but1.innerHTML = `<img src= ${images[1]}>`;
      fs -= 1;
      console.log(fs);
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
    } else if (IIndex3 === "index") {
      but1.innerHTML = `<img src= ${images[1]}>`;
      fs -= 1;
      console.log(fs);
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
    } else if (IIndex4 === "index") {
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
      if (fs === 4) {
        func111();
      }
    }
  } else if (bombs === 6) {
    if (IIndex === "index") {
      but1.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 3) {
        func111();
      }
      console.log(fs);
    } else if (IIndex1 === "index") {
      but1.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 3) {
        func111();
      }
      console.log(fs);
    } else if (IIndex2 === "index") {
      but1.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 3) {
        func111();
      }
      console.log(fs);
    } else {
      but1.innerHTML = `<img src= ${images[1]}>`;
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
      fs -= 1;
      console.log(fs);
    }
  } else if (bombs === 7) {
    if (IIndex === "index") {
      but1.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 2) {
        func111();
      }
      console.log(fs);
    } else if (IIndex1 === "index") {
      but1.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 2) {
        func111();
      }
      console.log(fs);
    } else {
      but1.innerHTML = `<img src= ${images[1]}>`;
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
      fs -= 1;
      console.log(fs);
    }
  } else if (bombs === 8) {
    if (IIndex === "index") {
      but1.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 1) {
        func111();
      }
      console.log(fs);
    } else {
      but1.innerHTML = `<img src= ${images[1]}>`;
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
      fs -= 1;
      console.log(fs);
    }
  }
};
const switchImage1 = () => {
  if (bombs === 1) {
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
    } else {
      but2.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      console.log(fs);
      if (fs === 8) {
        func111();
      }
    }
  } else if (bombs === 2) {
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
  } else if (bombs === 3) {
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
    } else if (IIndex2 === "index1") {
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
      if (fs === 6) {
        func111();
      }
    }
  } else if (bombs === 4) {
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
    } else if (IIndex2 === "index1") {
      but2.innerHTML = `<img src= ${images[1]}>`;
      fs -= 1;
      console.log(fs);
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
    } else if (IIndex3 === "index1") {
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
      if (fs === 5) {
        func111();
      }
    }
  } else if (bombs === 5) {
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
    } else if (IIndex2 === "index1") {
      but2.innerHTML = `<img src= ${images[1]}>`;
      fs -= 1;
      console.log(fs);
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
    } else if (IIndex3 === "index1") {
      but2.innerHTML = `<img src= ${images[1]}>`;
      fs -= 1;
      console.log(fs);
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
    } else if (IIndex4 === "index1") {
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
      if (fs === 4) {
        func111();
      }
    }
  } else if (bombs === 6) {
    if (IIndex === "index1") {
      but2.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 3) {
        func111();
      }
      console.log(fs);
    } else if (IIndex1 === "index1") {
      but2.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 3) {
        func111();
      }
      console.log(fs);
    } else if (IIndex2 === "index1") {
      but2.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 3) {
        func111();
      }
      console.log(fs);
    } else {
      but2.innerHTML = `<img src= ${images[1]}>`;
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
      fs -= 1;
      console.log(fs);
    }
  } else if (bombs === 7) {
    if (IIndex === "index1") {
      but2.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 2) {
        func111();
      }
      console.log(fs);
    } else if (IIndex1 === "index1") {
      but2.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 2) {
        func111();
      }
      console.log(fs);
    } else {
      but2.innerHTML = `<img src= ${images[1]}>`;
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
      fs -= 1;
      console.log(fs);
    }
  } else if (bombs === 8) {
    if (IIndex === "index1") {
      but2.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 1) {
        func111();
      }
      console.log(fs);
    } else {
      but2.innerHTML = `<img src= ${images[1]}>`;
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
      fs -= 1;
      console.log(fs);
    }
  }
};
const switchImage2 = () => {
  if (bombs === 1) {
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
    } else {
      but3.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      console.log(fs);
      if (fs === 8) {
        func111();
      }
    }
  } else if (bombs === 2) {
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
  } else if (bombs === 3) {
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
    } else if (IIndex2 === "index2") {
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
      if (fs === 6) {
        func111();
      }
    }
  } else if (bombs === 4) {
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
    } else if (IIndex2 === "index2") {
      but3.innerHTML = `<img src= ${images[1]}>`;
      fs -= 1;
      console.log(fs);
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
    } else if (IIndex3 === "index2") {
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
      if (fs === 5) {
        func111();
      }
    }
  } else if (bombs === 5) {
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
    } else if (IIndex2 === "index2") {
      but3.innerHTML = `<img src= ${images[1]}>`;
      fs -= 1;
      console.log(fs);
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
    } else if (IIndex3 === "index2") {
      but3.innerHTML = `<img src= ${images[1]}>`;
      fs -= 1;
      console.log(fs);
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
    } else if (IIndex4 === "index2") {
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
      if (fs === 4) {
        func111();
      }
    }
  } else if (bombs === 6) {
    if (IIndex === "index2") {
      but3.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 3) {
        func111();
      }
      console.log(fs);
    } else if (IIndex1 === "index2") {
      but3.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 3) {
        func111();
      }
      console.log(fs);
    } else if (IIndex2 === "index2") {
      but3.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 3) {
        func111();
      }
      console.log(fs);
    } else {
      but3.innerHTML = `<img src= ${images[1]}>`;
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
      fs -= 1;
      console.log(fs);
    }
  } else if (bombs === 7) {
    if (IIndex === "index2") {
      but3.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 2) {
        func111();
      }
      console.log(fs);
    } else if (IIndex1 === "index2") {
      but3.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 2) {
        func111();
      }
      console.log(fs);
    } else {
      but3.innerHTML = `<img src= ${images[1]}>`;
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
      fs -= 1;
      console.log(fs);
    }
  } else if (bombs === 8) {
    if (IIndex === "index2") {
      but3.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 1) {
        func111();
      }
      console.log(fs);
    } else {
      but3.innerHTML = `<img src= ${images[1]}>`;
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
      fs -= 1;
      console.log(fs);
    }
  }
};
const switchImage3 = () => {
  if (bombs === 1) {
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
    } else {
      but4.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      console.log(fs);
      if (fs === 8) {
        func111();
      }
    }
  } else if (bombs === 2) {
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
  } else if (bombs === 3) {
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
    } else if (IIndex2 === "index3") {
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
      if (fs === 6) {
        func111();
      }
    }
  } else if (bombs === 4) {
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
    } else if (IIndex2 === "index3") {
      but4.innerHTML = `<img src= ${images[1]}>`;
      fs -= 1;
      console.log(fs);
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
    } else if (IIndex3 === "index3") {
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
      if (fs === 5) {
        func111();
      }
    }
  } else if (bombs === 5) {
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
    } else if (IIndex2 === "index3") {
      but4.innerHTML = `<img src= ${images[1]}>`;
      fs -= 1;
      console.log(fs);
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
    } else if (IIndex3 === "index3") {
      but4.innerHTML = `<img src= ${images[1]}>`;
      fs -= 1;
      console.log(fs);
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
    } else if (IIndex4 === "index3") {
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
      if (fs === 4) {
        func111();
      }
    }
  } else if (bombs === 6) {
    if (IIndex === "index3") {
      but4.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 3) {
        func111();
      }
      console.log(fs);
    } else if (IIndex1 === "index3") {
      but4.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 3) {
        func111();
      }
      console.log(fs);
    } else if (IIndex2 === "index3") {
      but4.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 3) {
        func111();
      }
      console.log(fs);
    } else {
      but4.innerHTML = `<img src= ${images[1]}>`;
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
      fs -= 1;
      console.log(fs);
    }
  } else if (bombs === 7) {
    if (IIndex === "index3") {
      but4.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 2) {
        func111();
      }
      console.log(fs);
    } else if (IIndex1 === "index3") {
      but4.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 2) {
        func111();
      }
      console.log(fs);
    } else {
      but4.innerHTML = `<img src= ${images[1]}>`;
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
      fs -= 1;
      console.log(fs);
    }
  } else if (bombs === 8) {
    if (IIndex === "index3") {
      but4.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 1) {
        func111();
      }
      console.log(fs);
    } else {
      but4.innerHTML = `<img src= ${images[1]}>`;
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
      fs -= 1;
      console.log(fs);
    }
  }
};
const switchImage4 = () => {
  if (bombs === 1) {
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
    } else {
      but5.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      console.log(fs);
      if (fs === 8) {
        func111();
      }
    }
  } else if (bombs === 2) {
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
  } else if (bombs === 3) {
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
    } else if (IIndex2 === "index4") {
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
      if (fs === 6) {
        func111();
      }
    }
  } else if (bombs === 4) {
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
    } else if (IIndex2 === "index4") {
      but5.innerHTML = `<img src= ${images[1]}>`;
      fs -= 1;
      console.log(fs);
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
    } else if (IIndex3 === "index4") {
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
      if (fs === 5) {
        func111();
      }
    }
  } else if (bombs === 5) {
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
    } else if (IIndex2 === "index4") {
      but5.innerHTML = `<img src= ${images[1]}>`;
      fs -= 1;
      console.log(fs);
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
    } else if (IIndex3 === "index4") {
      but5.innerHTML = `<img src= ${images[1]}>`;
      fs -= 1;
      console.log(fs);
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
    } else if (IIndex4 === "index4") {
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
      if (fs === 4) {
        func111();
      }
    }
  } else if (bombs === 6) {
    if (IIndex === "index4") {
      but5.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 3) {
        func111();
      }
      console.log(fs);
    } else if (IIndex1 === "index4") {
      but5.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 3) {
        func111();
      }
      console.log(fs);
    } else if (IIndex2 === "index4") {
      but5.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 3) {
        func111();
      }
      console.log(fs);
    } else {
      but5.innerHTML = `<img src= ${images[1]}>`;
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
      fs -= 1;
      console.log(fs);
    }
  } else if (bombs === 7) {
    if (IIndex === "index4") {
      but5.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 2) {
        func111();
      }
      console.log(fs);
    } else if (IIndex1 === "index4") {
      but5.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 2) {
        func111();
      }
      console.log(fs);
    } else {
      but5.innerHTML = `<img src= ${images[1]}>`;
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
      fs -= 1;
      console.log(fs);
    }
  } else if (bombs === 8) {
    if (IIndex === "index4") {
      but5.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 1) {
        func111();
      }
      console.log(fs);
    } else {
      but5.innerHTML = `<img src= ${images[1]}>`;
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
      fs -= 1;
      console.log(fs);
    }
  }
};
const switchImage5 = () => {
  if (bombs === 1) {
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
    } else {
      but6.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      console.log(fs);
      if (fs === 8) {
        func111();
      }
    }
  } else if (bombs === 2) {
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
  } else if (bombs === 3) {
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
    } else if (IIndex2 === "index5") {
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
      if (fs === 6) {
        func111();
      }
    }
  } else if (bombs === 4) {
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
    } else if (IIndex2 === "index5") {
      but6.innerHTML = `<img src= ${images[1]}>`;
      fs -= 1;
      console.log(fs);
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
    } else if (IIndex3 === "index5") {
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
      if (fs === 5) {
        func111();
      }
    }
  } else if (bombs === 5) {
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
    } else if (IIndex2 === "index5") {
      but6.innerHTML = `<img src= ${images[1]}>`;
      fs -= 1;
      console.log(fs);
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
    } else if (IIndex3 === "index5") {
      but6.innerHTML = `<img src= ${images[1]}>`;
      fs -= 1;
      console.log(fs);
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
    } else if (IIndex4 === "index5") {
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
      if (fs === 4) {
        func111();
      }
    }
  } else if (bombs === 6) {
    if (IIndex === "index5") {
      but6.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 3) {
        func111();
      }
      console.log(fs);
    } else if (IIndex1 === "index5") {
      but6.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 3) {
        func111();
      }
      console.log(fs);
    } else if (IIndex2 === "index5") {
      but6.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 3) {
        func111();
      }
      console.log(fs);
    } else {
      but6.innerHTML = `<img src= ${images[1]}>`;
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
      fs -= 1;
      console.log(fs);
    }
  } else if (bombs === 7) {
    if (IIndex === "index5") {
      but6.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 2) {
        func111();
      }
      console.log(fs);
    } else if (IIndex1 === "index5") {
      but6.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 2) {
        func111();
      }
      console.log(fs);
    } else {
      but6.innerHTML = `<img src= ${images[1]}>`;
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
      fs -= 1;
      console.log(fs);
    }
  } else if (bombs === 8) {
    if (IIndex === "index5") {
      but6.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 1) {
        func111();
      }
      console.log(fs);
    } else {
      but6.innerHTML = `<img src= ${images[1]}>`;
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
      fs -= 1;
      console.log(fs);
    }
  }
};
const switchImage6 = () => {
  if (bombs === 1) {
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
    } else {
      but7.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      console.log(fs);
      if (fs === 8) {
        func111();
      }
    }
  } else if (bombs === 2) {
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
  } else if (bombs === 3) {
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
    } else if (IIndex2 === "index6") {
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
      if (fs === 6) {
        func111();
      }
    }
  } else if (bombs === 4) {
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
    } else if (IIndex2 === "index6") {
      but7.innerHTML = `<img src= ${images[1]}>`;
      fs -= 1;
      console.log(fs);
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
    } else if (IIndex3 === "index6") {
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
      if (fs === 5) {
        func111();
      }
    }
  } else if (bombs === 5) {
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
    } else if (IIndex2 === "index6") {
      but7.innerHTML = `<img src= ${images[1]}>`;
      fs -= 1;
      console.log(fs);
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
    } else if (IIndex3 === "index6") {
      but7.innerHTML = `<img src= ${images[1]}>`;
      fs -= 1;
      console.log(fs);
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
    } else if (IIndex4 === "index6") {
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
      if (fs === 4) {
        func111();
      }
    }
  } else if (bombs === 6) {
    if (IIndex === "index6") {
      but7.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 3) {
        func111();
      }
      console.log(fs);
    } else if (IIndex1 === "index6") {
      but7.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 3) {
        func111();
      }
      console.log(fs);
    } else if (IIndex2 === "index6") {
      but7.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 3) {
        func111();
      }
      console.log(fs);
    } else {
      but7.innerHTML = `<img src= ${images[1]}>`;
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
      fs -= 1;
      console.log(fs);
    }
  } else if (bombs === 7) {
    if (IIndex === "index6") {
      but7.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 2) {
        func111();
      }
      console.log(fs);
    } else if (IIndex1 === "index6") {
      but7.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 2) {
        func111();
      }
      console.log(fs);
    } else {
      but7.innerHTML = `<img src= ${images[1]}>`;
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
      fs -= 1;
      console.log(fs);
    }
  } else if (bombs === 8) {
    if (IIndex === "index6") {
      but7.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 1) {
        func111();
      }
      console.log(fs);
    } else {
      but7.innerHTML = `<img src= ${images[1]}>`;
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
      fs -= 1;
      console.log(fs);
    }
  }
};
const switchImage7 = () => {
  if (bombs === 1) {
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
    } else {
      but8.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      console.log(fs);
      if (fs === 8) {
        func111();
      }
    }
  } else if (bombs === 2) {
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
  } else if (bombs === 3) {
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
    } else if (IIndex2 === "index7") {
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
      if (fs === 6) {
        func111();
      }
    }
  } else if (bombs === 4) {
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
    } else if (IIndex2 === "index7") {
      but8.innerHTML = `<img src= ${images[1]}>`;
      fs -= 1;
      console.log(fs);
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
    } else if (IIndex3 === "index7") {
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
      if (fs === 5) {
        func111();
      }
    }
  } else if (bombs === 5) {
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
    } else if (IIndex2 === "index7") {
      but8.innerHTML = `<img src= ${images[1]}>`;
      fs -= 1;
      console.log(fs);
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
    } else if (IIndex3 === "index7") {
      but8.innerHTML = `<img src= ${images[1]}>`;
      fs -= 1;
      console.log(fs);
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
    } else if (IIndex4 === "index7") {
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
      if (fs === 4) {
        func111();
      }
    }
  } else if (bombs === 6) {
    if (IIndex === "index7") {
      but8.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 3) {
        func111();
      }
      console.log(fs);
    } else if (IIndex1 === "index7") {
      but8.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 3) {
        func111();
      }
      console.log(fs);
    } else if (IIndex2 === "index7") {
      but8.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 3) {
        func111();
      }
      console.log(fs);
    } else {
      but8.innerHTML = `<img src= ${images[1]}>`;
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
      fs -= 1;
      console.log(fs);
    }
  } else if (bombs === 7) {
    if (IIndex === "index7") {
      but8.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 2) {
        func111();
      }
      console.log(fs);
    } else if (IIndex1 === "index7") {
      but8.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 2) {
        func111();
      }
      console.log(fs);
    } else {
      but8.innerHTML = `<img src= ${images[1]}>`;
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
      fs -= 1;
      console.log(fs);
    }
  } else if (bombs === 8) {
    if (IIndex === "index7") {
      but8.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 1) {
        func111();
      }
      console.log(fs);
    } else {
      but8.innerHTML = `<img src= ${images[1]}>`;
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
      fs -= 1;
      console.log(fs);
    }
  }
};
const switchImage8 = () => {
  if (bombs === 1) {
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
    } else {
      but9.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      console.log(fs);
      if (fs === 8) {
        func111();
      }
    }
  } else if (bombs === 2) {
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
  } else if (bombs === 3) {
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
    } else if (IIndex2 === "index8") {
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
      if (fs === 6) {
        func111();
      }
    }
  } else if (bombs === 4) {
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
    } else if (IIndex2 === "index8") {
      but9.innerHTML = `<img src= ${images[1]}>`;
      fs -= 1;
      console.log(fs);
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
    } else if (IIndex3 === "index8") {
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
      if (fs === 5) {
        func111();
      }
    }
  } else if (bombs === 5) {
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
    } else if (IIndex2 === "index8") {
      but9.innerHTML = `<img src= ${images[1]}>`;
      fs -= 1;
      console.log(fs);
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
    } else if (IIndex3 === "index8") {
      but9.innerHTML = `<img src= ${images[1]}>`;
      fs -= 1;
      console.log(fs);
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
    } else if (IIndex4 === "index8") {
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
      if (fs === 4) {
        func111();
      }
    }
  } else if (bombs === 6) {
    if (IIndex === "index8") {
      but9.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 3) {
        func111();
      }
      console.log(fs);
    } else if (IIndex1 === "index8") {
      but9.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 3) {
        func111();
      }
      console.log(fs);
    } else if (IIndex2 === "index8") {
      but9.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 3) {
        func111();
      }
      console.log(fs);
    } else {
      but9.innerHTML = `<img src= ${images[1]}>`;
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
      fs -= 1;
      console.log(fs);
    }
  } else if (bombs === 7) {
    if (IIndex === "index8") {
      but9.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 2) {
        func111();
      }
      console.log(fs);
    } else if (IIndex1 === "index8") {
      but9.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 2) {
        func111();
      }
      console.log(fs);
    } else {
      but9.innerHTML = `<img src= ${images[1]}>`;
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
      fs -= 1;
      console.log(fs);
    }
  } else if (bombs === 8) {
    if (IIndex === "index8") {
      but9.innerHTML = `<img src= ${images[0]}>`;
      fs += 1;
      if (fs === 1) {
        func111();
      }
      console.log(fs);
    } else {
      but9.innerHTML = `<img src= ${images[1]}>`;
      setTimeout(() => {
        let Game = document.getElementById("Game");
        Game.innerHTML = "<strong>Ты проиграл!!!</strong>";
        Game.style.backgroundColor = "red";
        Game.style.color = "white";
      }, 1000);
      fs -= 1;
      console.log(fs);
    }
  }
};

function func111() {
  console.log("you win!");
  setTimeout(() => {
    let Game = document.getElementById("Game");
    Game.innerHTML = "<strong>Ты победил!!!</strong>";
    Game.style.backgroundColor = "#49b622";
    Game.style.color = "white";
  }, 1000);
}
