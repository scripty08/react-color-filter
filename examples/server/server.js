import { Server, IndexController } from '@scripty/server';

const init = async () => {
    let app = new Server();
    await app.addController(new IndexController({ title: '@scripty/react-color-filter' }));
    app.start(3001);
};

init().catch((err) => {
    console.error(err.message);
});
