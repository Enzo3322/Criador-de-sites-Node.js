const projects = require('./src/data/projects');

module.exports = {
  site: {
    title: 'EnzoSpag',
    description: 'Mini gerador de páginas estáticas desenvolvido em Node.js',
    basePath: process.env.NODE_ENV === 'production' ? '/enzo3322' : '',
    projects
  },
  build: {
    outputPath: process.env.NODE_ENV === 'production' ? './docs' : './public'
  }
};