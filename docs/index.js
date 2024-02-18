const basicInfo = require('./basicInfo')
const components = require('./components');
const tasks = require('./tasks.js');
module.exports = {
    ...basicInfo,
    ...tasks,
    ...components
};
