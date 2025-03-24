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
      { title: "Kamen Rider Zi-o", link: "/kamen-rider-zi-o" },
      { title: "Kamen Rider Build", link: "/kamen-rider-build" },
    ],
    icon: React.createElement("i", { className: "fas fa-chevron-down" }),
    imgMovie: KR,
  },
  {
    id: "DS",
    titleSerie: "Demon Slayer",
    link: "/demon-slayer",
    movies: [],
    icon: null,
    imgMovie: null,
  },
  {
    id: "JS",
    titleSerie: "Jujutsu Kaisen",
    link: "jujutsu-kaisen",
    movies: [],
    icon: null,
    imgMovie: null,
  },
  {
    id: "MCU",
    titleSerie: "Marvel Universe",
    link: "/marvel-universe",
    movies: [
      { title: "Iron Man", link: "/iron-man" },
      { title: "Spider Man", link: "/spider-man" },
      { title: "Hulk", link: "/hulk" },
      { title: "Thor", link: "/thor" },
      { title: "Captain America", link: "/captain-america" },
      { title: "Doctor Strange", link: "/doctor-strange" },
      { title: "Moon Knight", link: "/moon-knight" },
      { title: "Thanos", link: "/thanos" },
      { title: "Black Panther", link: "/black-panther" },
      { title: "Loki", link: "/loki" },
    ],
    icon: React.createElement("i", { className: "fas fa-chevron-down" }),
    imgMovie: MCU,
  },
  {
    id: "DCU",
    titleSerie: "DC Universe",
    link: "/dc-universe",
    movies: [
      { title: "Superman", link: "/super-man" },
      { title: "Batman", link: "/batman" },
      { title: "Wonder Woman", link: "/wonder-woman" },
      { title: "Aquaman", link: "/aquaman" },
      { title: "The Flash", link: "/the-flash" },
      { title: "Shazam", link: "/shazam" },
      { title: "Black Adam", link: "/black-adam" },
      { title: "Green Lantern", link: "/green-lantern" },
    ],
    icon: React.createElement("i", { className: "fas fa-chevron-down" }),
    imgMovie: DCU,
  },
  {
    id: "SPS",
    titleSerie: "Super Sentai",
    link: "/super-sentai",
    movies: [
      { title: "Boonboomger", link: "/boon-boomger" },
      { title: "KingOhger", link: "/king-ohger" },
      { title: "Donbrothers", link: "/donbrothers" },
      { title: "Zenkaiger", link: "/zenkaiger" },
      { title: "Kiramager", link: "/kiramager" },
      { title: "Ryusoulger", link: "/ryusoulger" },
    ],
    icon: React.createElement("i", { className: "fas fa-chevron-down" }),
    imgMovie: SPSB,
  },
];
export default titleOfMovie;
