import KR from "../../assets/images/KamenRider/KRGavv/KamenRiderGavv.png";
import MCU from "../../assets/images/MCU/MCU.png";
import DCU from "../../assets/images/DCU/DCU.png";
import SPSB from "../../assets/images/SuperSentai/Boonboomger.webp";
import React from "react";

const titleOfMovie = [
  {
    id: "KR",
    titleSerie: "Kamen Rider",
    link: "/home",
    movies: [
      { title: "Kamen Rider Gavv", link: "./KamenRider/KamenRiderGavv.html" },
      { title: "Kamen Rider Gotchard", link: "./KamenRiderGotchard.html" },
      { title: "Kamen Rider Geats", link: "./KamenRiderGeats.html" },
      { title: "Kamen Rider Revice", link: "./KamenRiderRevice.html" },
      { title: "Kamen Rider Saber", link: "./KamenRiderSaber.html" },
      { title: "Kamen Rider Zero One", link: "./KamenRiderZero-One.html" },
      { title: "Kamen Rider Zi-o", link: "./KamenRiderZero-One.html" },
      { title: "Kamen Rider Build", link: "./KamenRiderZero-One.html" },
    ],
    icon: React.createElement("i", { className: "fas fa-chevron-down" }),
    imgMovie: KR,
  },
  {
    id: "DS",
    titleSerie: "Demon Slayer",
    movies: [],
    icon: null,
    imgMovie: null,
  },
  {
    id: "JS",
    titleSerie: "Jujutsu Kaisen",
    movies: [],
    icon: null,
    imgMovie: null,
  },
  {
    id: "MCU",
    titleSerie: "Marvel Universe",
    movies: [
      { title: "Iron Man", link: "./MCU/IronMan.html" },
      { title: "Spider Man", link: "./MCU/SpiderMan.html" },
      { title: "Hulk", link: "./MCU/Hulk.html" },
      { title: "Thor", link: "./MCU/Thor.html" },
      { title: "Captain America", link: "./MCU/CaptainAmerica.html" },
      { title: "Doctor Strange", link: "./MCU/DoctorStrange.html" },
      { title: "Moon Knight", link: "./MCU/MoonKnight.html" },
      { title: "Thanos", link: "./MCU/Thanos.html" },
      { title: "Black Panther", link: "./MCU/Thanos.html" },
      { title: "Loki", link: "./MCU/Thanos.html" },
    ],
    icon: React.createElement("i", { className: "fas fa-chevron-down" }),
    imgMovie: MCU,
  },
  {
    id: "DCU",
    titleSerie: "DC Universe",
    movies: [
      { title: "Superman", link: "./DCU/Superman.html" },
      { title: "Batman", link: "./DCU/Batman.html" },
      { title: "Wonder Woman", link: "./DCU/WonderWoman.html" },
      { title: "Aquaman", link: "./DCU/Aquaman.html" },
      { title: "The Flash", link: "./DCU/TheFlash.html" },
      { title: "Shazam", link: "./DCU/TheFlash.html" },
      { title: "Black Adam", link: "./DCU/TheFlash.html" },
      { title: "Green Lantern", link: "./DCU/TheFlash.html" },
    ],
    icon: React.createElement("i", { className: "fas fa-chevron-down" }),
    imgMovie: DCU,
  },
  {
    id: "SPS",
    titleSerie: "Super Sentai",
    movies: [
      { title: "Boonboomger", link: "./SuperSentai/Boonboomger.html" },
      { title: "KingOhger", link: "./SuperSentai/KingOhger.html" },
      { title: "Donbrothers", link: "./SuperSentai/Donbrothers.html" },
      { title: "Zenkaiger", link: "./SuperSentai/Zenkaiger.html" },
      { title: "Kiramager", link: "./SuperSentai/Kiramager.html" },
      { title: "Ryusoulger", link: "./SuperSentai/Ryusoulger.html" },
    ],
    icon: React.createElement("i", { className: "fas fa-chevron-down" }),
    imgMovie: SPSB,
  },
];
export default titleOfMovie;
