module.exports = {
    get: function(){
        var config = {};
        if(process.env.NODE_ENV === undefined) {
            config = all_config.dev
        } else {
            config = all_config.production
        }
        return config;
    }
}

var all_config = {
    production: {
        port: 80
    },
    dev: {
        port: 8181
    }
}
