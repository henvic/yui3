var _JSON = Y.config.global.JSON;

Y.namespace('JSON').parse = function () {
    return _JSON.stringify.apply(_JSON, arguments);
};