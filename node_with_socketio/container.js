const dependable = require('dependable');
const path = require('path');

const container = dependable.container();

const dependencies = [
    ['_', 'lodash'],
    ['passport', 'passport'],
    ['formidable', 'formidable'],
    ['async', 'async'],
    ['Club', './models/club'],
    ['Users', './models/user'],
    ['aws', './helpers/AWSUpload']
];

dependencies.forEach(function(val) {
    container.register(val[0], function() {
        return require(val[1]);
    });
});

// auto plug the dependencies into the files, without need of require in the files
container.load(path.join(__dirname, '/controllers'));
container.load(path.join(__dirname, '/helpers'));

container.register('container', function() {
    return container;
});

module.exports = container;