module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        debug: false,
        modules: false,
        targets: {
          browsers: ['> 1%', 'IE < 12']
        },
        useBuiltIns: 'usage'
      }
    ]
  ]
}