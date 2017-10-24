module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'Jn6nimmtUtils',
      externals: {
        react: 'React'
      }
    }
  }
}
