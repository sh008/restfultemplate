import * as express from 'express';
import user from './user/userControler';
import device from './device/devicecontroler';

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    private config(): void {
        this.app.use(new user().router);
        this.app.use(new device().router);
    }
}

export default new App().app;
