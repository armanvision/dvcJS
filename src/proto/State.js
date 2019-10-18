// abstract class State
export function State() {}

// virtual methods
State.prototype.enter = function() {};
State.prototype.update = function() {};
State.prototype.exit = function() {};


//////////////////////////////////////////////////////////////////
// example state:


//import { State } from "./prototypes/State";

//export const oneExampleState = new State();

// override methods
/*oneExampleState.enter = function() {
    console.log('Entering oneExampleState')
};*/


//////////////////////////////////////////////////////////////////
// State Machine


/*import { State } from "./prototypes/State";

let state = new State();

export function setState(newState) {
    if(!(newState instanceof State)) console.log('not a state');            
    else {
        state.exit();
        state = newState;
        state.enter();
    }
}*/

// init state-machine
//setState(oneExampleState);
