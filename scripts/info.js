'use strict';

module.exports = function(req, res, mocks) {
    // hello
    const cities = mocks.cities;
    const contacts = mocks.contacts;
    const name = req.query.name;

    for (let i = 0, n = contacts.length; i < n; i++) {
        const contact = contacts[i];
        if (contact.name === name) {
            const city = getCity(contact.city, cities);
            delete city.name;
            return Object.assign(contact, city);
        }
    }

    return {};
};

function getCity(cityName, cities) {
    for (let i = 0, n = cities.length; i < n; i++) {
        let c = cities[i];
        if (c.name === cityName) {
            return c;
        }
    }
}
