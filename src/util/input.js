//==============================
// arman 2019
// call all functions fn pushed to array for specific event, e.g. ON_CLICK

const INPUT = { handleEvent: IEventListener };
const ON_CLICK = [];

export const ON_EVENT = {
    // "click"-event, gives e.target
    click(fn) { if ( typeof fn === 'function' ) ON_CLICK.push(fn); }
};

// Event Listener
document.body.addEventListener('click', INPUT);

function IEventListener(e) {
    e.stopPropagation();
    switch(e.type){
        // clickHandler(e);
        case "click":
            // Handler
            for(let fn of ON_CLICK) fn(e.target);
            break;
        default:
            console.log('Unhandled EventListener: ' + e.type);
    }
}
