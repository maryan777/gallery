const cookies = {
    save(key, value)  {
        document.cookie = key + '=' + JSON.stringify(value);
    },

    format()    {
       
    },

    read(key)  {
        const list = document.cookie.split('; ');
        for (let cookie of list)  {
            if (cookie.startsWith(key + '=')) {
                const text = cookie.replace(key + '=', '')
                return JSON.parse(text);
            }
        }
        return null;
    }

};

module.exports = cookies;