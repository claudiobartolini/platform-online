// @ts-check
const { BackendApplicationConfigProvider } = require('@theia/core/lib/node/backend-application-config-provider');
const main = require('@theia/core/lib/node/main');
BackendApplicationConfigProvider.set({});

const serverModule = require('../src-gen/backend/server');
const serverAddress = main.start(serverModule(process.env.PORT));
serverAddress.then(function ({ port, address }) {
    if (process && process.send) {
        process.send({ port, address });
    }
});
module.exports = serverAddress;
