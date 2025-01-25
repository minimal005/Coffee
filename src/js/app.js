window["FLS"] = true;

import "../scss/style.scss";
import * as flsFunctions from "./files/functions.js";

flsFunctions.isWebp();
flsFunctions.menuInit();
flsFunctions.spollers();

import "./files/sliders.js";
import "./files/scroll/lazyload.js";
import "./libs/watcher.js";
import "./libs/parallax.js";
import * as flsScroll from "./files/scroll/scroll.js";

flsScroll.pageNavigation();
flsScroll.headerScroll();

import "./libs/dynamic_adapt.js";
import "./files/script.js";
