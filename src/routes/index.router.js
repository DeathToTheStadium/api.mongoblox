module.exports = {
    save:  require('./serverEndpoints/save-data.router'),
    fetch: require('./serverEndpoints/fetch-data.router'),
    update:require('./serverEndpoints/update-data.router'),
    delete:require('./serverEndpoints/delete-data.router')
}