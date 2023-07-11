function salamAhvalPorse(robots) {
  const sentence = robots.includes("salam");

  if (sentence) {
    console.log('salam');
  } else if (robots === "whats up?") {
    console.log("all good");
  } else if (robots === "where are you from?") {
    console.log(robots.slice(0, robots.indexOf(" ")));
  } else if (robots === "how old are you?") {
    console.log("24");
  } else if (robots === "whats your faverit color?") {
    console.log("red");
  } else if (robots === "whats your faverit movie?") {
    console.log(" Interstellar");
  } else if (robots === "what your faverit food?") {
    console.log("kabak");
  } else if (!sentence) {
    console.log("نمیذونم چی میگی");
  } else {
    console.log(robots.slice(0, robots.indexOf(" ")) || "undifine question");
  }
}
salamAhvalPorse("");
