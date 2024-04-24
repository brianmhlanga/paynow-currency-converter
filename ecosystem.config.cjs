module.exports = {
    apps: [
      {
        name: 'Paynow Currency Converter',
        port: '3021',
        exec_mode: 'cluster',
        instances: '1',
        script: './.output/server/index.mjs' 
      }
    ]
  }