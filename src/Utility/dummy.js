import assets from "./assets";
const r = ["#cb997e", "#ddbea9", "#b7b7a4", "#6b705c"];
// const randomColor = Math.floor(Math.random() * r.length);
// // console.log(randomColor);
// const a = r[Math.floor(Math.random() * r.length)];
// console.log(a);
// console.log(Math.floor(Math.random(randomColor)));

const Data = [
  {
    id: "SLEEP-01",
    name: "RAIN",
    time: "5min",
    image: assets.sleep1,
    bg: r[Math.floor(Math.random() * r.length)],
  },
  {
    id: "SLEEP-02",
    name: "STORM",
    time: "5min",
    image: assets.sleep2,
    bg: r[Math.floor(Math.random() * r.length)],
  },
  {
    id: "SLEEP-03",
    name: "RAIN",
    time: "5min",
    image: assets.sleep3,
    bg: r[Math.floor(Math.random() * r.length)],
  },
  {
    id: "SLEEP-04",
    name: "RAIN",
    time: "5min",
    image: assets.sleep4,
    bg: r[Math.floor(Math.random() * r.length)],
  },
  {
    id: "MEDITATE-01",
    name: "RAIN",
    time: "5min",
    image: assets.meditate1,
    bg: r[Math.floor(Math.random() * r.length)],
  },

  {
    id: "MEDITATE-02",
    name: "RAIN",
    time: "5min",
    image: assets.meditate2,
    bg: r[Math.floor(Math.random() * r.length)],
  },
  {
    id: "MEDITATE-03",
    name: "RAIN",
    time: "5min",
    image: assets.meditate3,
    bg: r[Math.floor(Math.random() * r.length)],
  },
  {
    id: "MEDITATE-04",
    name: "RAIN",
    time: "5min",
    image: assets.meditate4,
    bg: r[Math.floor(Math.random() * r.length)],
  },
  {
    id: "ROCK",
    name: "RAIN",
    time: "5min",
    image: assets.tea,
    bg: r[Math.floor(Math.random() * r.length)],
  },
  {
    id: "TEA",
    name: "RAIN",
    time: "5min",
    image: assets.tea,
    bg: r[Math.floor(Math.random() * r.length)],
  },
];

export { Data };
