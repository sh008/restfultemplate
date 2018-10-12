import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as sha256 from 'sha256';
import * as jwt from 'jsonwebtoken';
import config from '../../config';

export default class UserControler {
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
        //api/user/login
        this.router.post('/api/user/login', (req, res) => {
            if (
                req.body.username == 'sh008' &&
                req.body.password == 'password'
            ) {
                //create token
                let token = jwt.sign({ id: 1 }, config.key, {
                    expiresIn: 86400
                });
                res.status(200).send({ msg: 'success', token: token });
            } else {
                res.status(400).send({ msg: 'fail' });
            }
        });

        //api/user/get
        this.router.get('/api/user/getalluser', (req, res) => {
            var token = req.headers['x-access-token'];
            if (!token)
                return res
                    .status(401)
                    .send({ auth: false, message: 'No token provided.' });

            jwt.verify(token, config.key, function(err, decoded) {
                if (err)
                    return res.status(500).send({
                        auth: false,
                        message: 'Failed to authenticate token.'
                    });

                res.status(200).send({
                    msg: 'ok'
                });
            });
        });
    }
}
