_extend = require('extend');
config = require('./config/base.json');

module.exports = function() {
  // Verify if config-{enviroment}.json file exists and extend config.json with this
  var configFile = './config/config-'+env+'.json';

  if (env !== 'production' && _fs.existsSync(configFile)) {
    _extend( true, config, require(configFile) )
  } else if (env === 'development') {
    console.log(env)
    return throw new Error('Por favor, crie o arquivo config-development.json com as configurações locais');
  }
  
  return {
    url: config.url || '0.0.0.0',
    port: config.port || process.env.PORT
  }
}();