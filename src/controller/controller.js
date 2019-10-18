//==============================
// arman 2019
// get data, get view, build dom

import data from "../data/data";
import { view } from "../view/view";

const PAGE = document.querySelector('#page');

export default {

    index() {

        const DATA = data.get();

        PAGE.appendChild( view(DATA) );
    }
};
