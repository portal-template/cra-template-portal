// eslint-disable-next-line @typescript-eslint/no-var-requires,import/no-extraneous-dependencies
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function setupProxy (app) {

  const portalServer = createProxyMiddleware({
    target: '<portal-api-address>',
    changeOrigin: true,
    logLevel: 'debug',
  })

  app.use('/api', portalServer)
  app.use('/public', portalServer)

}
