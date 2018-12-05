module.exports = function (dolphin) {
    'use strict;'

    const { opts } = dolphin;

    /**
     *  id=<node id>
        name=<node name>
        membership=(pending|accepted|rejected)`
        role=(worker|manager)`
     **/
    const nodes = function (filters) {
        return dolphin._list('nodes', filters, opts);
    };

    /*
      {
        "Availability": "active",
        "Name": "node-name",
        "Role": "manager",
        "Labels": {
          "foo": "bar"
        }
      }
    */
    nodes.update = function (nodeId, params, version) {
        return dolphin._post('nodes/' + nodeId + '/update?version=' + version, params, opts);
    };

    nodes.remove = function (nodeId) {
        return dolphin._delete('nodes/' + nodeId, opts);
    };

    return nodes;
};