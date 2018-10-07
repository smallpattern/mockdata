'use strict';

const assert = require('chai').assert;
const cities = require('../mocks/cities.json');
const contacts = require('../mocks/contacts.json');
const info = require('../scripts/info');
const mocks = {
    cities: cities,
    contacts: contacts
};

it('test info script', () => {
    let userName = 'Ted';
    let req = {
        query: {name: userName}
    };
    let contact = info(req, null, mocks);
    assert.equal(contact.name, userName);
    assert.equal(contact.city, 'San Francisco');
    assert.equal(contact.state, 'CA');

    userName = 'Mary';
    req = {
        query: {name: userName}
    };
    contact = info(req, null, mocks);
    assert.equal(contact.name, userName);
    assert.equal(contact.city, 'Chicago');
    assert.equal(contact.state, 'IL');

    userName = 'Bill';
    req = {
        query: {name: userName}
    };
    contact = info(req, null, mocks);
    assert.equal(contact.name, userName);
    assert.equal(contact.city, 'New York');
    assert.equal(contact.state, 'NY');

    userName = 'Ellen';
    req = {
        query: {name: userName}
    };
    contact = info(req, null, mocks);
    assert.isUndefined(contact.name);
    assert.isUndefined(contact.city);
    assert.isUndefined(contact.state);
});