// import { read } from "fs";

const storage = {

    save(key, value) {
        localStorage.setItem(
            key,
            JSON.stringify(value)
        )
    },

    format() {
        localStorage.clear();

    },

    read(key) {
        const text = localStorage.getItem(key);
        return JSON.parse(text);
    }

};

module.exports = storage;