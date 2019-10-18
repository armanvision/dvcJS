//==============================
// arman 2019
// starting facade:
// e.g.:
// Data.save('myKey', '[0, 1, 2]');

export default {

    save(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    },

    get(key) {
        const DATA = localStorage.getItem(key);

        if(!DATA) return 'No Data found';
        else return JSON.parse(DATA);
    },

    delete(key) {
        localStorage.removeItem(key);
    }
};
