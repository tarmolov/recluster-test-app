const path = require('path');
const recluster = require('recluster');
const app1 = recluster(path.join(__dirname, 'app1.js'), {
    workers: 1,
    timeout: 1
});
app1.run();

const app2 = recluster(path.join(__dirname, 'app2.js'), {
    workers: 1,
    timeout: 1
});
app2.run();
