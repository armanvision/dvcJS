//==============================
// arman 2019
// returns html-element

export const view = (data) => {

    const container = document.createElement('div');

    container.textContent = data;

    return container;
}
