import * as bodyParser from 'body-parser';
import * as express from 'express';

export default class deviceControler {
    public router: express.router;

    constructor() {
        this.router = express.Router();
        this.config();
        this.call();
    }
    private config(): void {
        this.router.use(bodyParser.urlencoded({ extended: true }));
        this.router.use(bodyParser.json());
    }
    private call(): void {
        this.router.get('/api/device/getAllDevice', (req, res) => {
            res.json({
                msg: 'device api'
            });
        });
    }
}
