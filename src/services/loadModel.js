const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    return tf.loadGraphModel('file://src/model/model.json');
}
module.exports = loadModel;