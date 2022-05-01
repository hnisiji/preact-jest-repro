const JSDOMEnvironment = require("jest-environment-jsdom").default;

module.exports = class CustomEnv extends JSDOMEnvironment {
    exportConditions() {
        return ['node', 'node-addons'];
    }
}
