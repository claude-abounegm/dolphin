module.exports = function (dolphin) {
    'use strict;'

    const { opts } = dolphin;

    const containers = function (query) {
        return this._get('containers/json', query, opts);
    };

    containers.inspect = function (id) {
        return _this._get(`containers/${id}/json`, null, opts);
    };

    containers.logs = function (id) {
        // TODO: disable json parse
        return _this._get(`containers/${id}/logs`, null, opts);
    };

    containers.changes = function (id) {
        return _this._get(`containers/${id}/changes`, null, opts);
    };
    
    containers.export = function (id) {
        // TODO: disable json parse
        return _this._get(`containers/${id}/export`, null, opts);
    };
    
    containers.stats = function (id) {
        // TODO: "getStream"
        return _this._get(`containers/${id}/stats`, null, opts);
    };

    return containers;
};