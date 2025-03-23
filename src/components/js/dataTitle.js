import KR from "../../assets/images/kamen_rider/gavv/KamenRiderGavv.png";
import MCU from "../../assets/images/mcu/MCU.png";
import DCU from "../../assets/images/dcu/DCU.png";
import SPSB from "../../assets/images/super_sentai/Boonboomger.webp";
import React from "react";

const titleOfMovie = [
  {
    id: "KR",
    titleSerie: "Kamen Rider",
    link: "/kamen-rider",
    movies: [
      { title: "Kamen Rider Gavv", link: "/kamen-rider-gavv" },
      { title: "Kamen Rider Gotchard", link: "/kamen-rider-gotchard" },
      { title: "Kamen Rider Geats", link: "/kamen-rider-geats" },
      { title: "Kamen Rider Revice", link: "/kamen-rider-revice" },
      { title: "Kamen Rider Saber", link: "/kamen-rider-saber" },
      { title: "Kamen Rider Zero One", link: "/kamen-rider-zero-one" },
      { title: "Kamen Rider Zi-o", link: "/kamen-rider-Zi-o" },
      { title: "Kamen Rider Build", link: "/kamen-rider-build" },
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
