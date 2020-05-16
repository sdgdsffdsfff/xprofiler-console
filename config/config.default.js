/* eslint valid-jsdoc: "off" */

'use strict';

const fs = require('fs');
const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.keys = appInfo.name + '_1588763657594_4897';

  config.middleware = [
    'basicAuth',
  ];

  config.static = {
    gzip: true,
  };

  config.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(__dirname, '../app/public/favicon.ico')),
  };

  const userConfig = {};

  userConfig.view = {
    mapping: {
      '.html': 'nunjucks',
    },
  };

  // mysql
  userConfig.mysql = {
    app: true,
    agent: false,
    clients: {
      xprofiler_console: {
        host: '',
        port: 3306,
        user: '',
        password: '',
        database: 'xprofiler_console',
      },
      xprofiler_logs: {
        host: '',
        port: 3306,
        user: '',
        password: '',
        database: 'xprofiler_logs',
      },
    },
  };

  // redis
  userConfig.redis = {
    client: {
      sentinels: null,
      port: 6379,
      host: '',
      password: '',
      db: 0,
    },
  };

  // xtransit manager
  userConfig.xtransitManager = '';

  userConfig.secure = {
    secret: 'easy-monitor::xprofiler',
  };

  userConfig.httpTimeout = 15000;

  return {
    ...config,
    ...userConfig,
  };
};
