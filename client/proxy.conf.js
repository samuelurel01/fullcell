var PROXY_CONFIG  = {
  "/api": {
    "target": "http://localhost:8083",
    "secure": false,
    "pathRewrite": {
      "^/api": ""
    },
    "changeOrigin": true
  }
}

module.exports = PROXY_CONFIG;
