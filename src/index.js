//==============================
// arman 2019

import controller from "./controller/controller";
import { ON_EVENT } from "./util/input";

// init page
controller.index();

// test onclick
ON_EVENT.click( (target) => {
    console.log(target.id ? target.id : 'no target-id');
});
