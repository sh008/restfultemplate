"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const jwt = require("jsonwebtoken");
const config_1 = require("../../config");
class UserControler {
    constructor() {
        this.router = express.Router();
        this.config();
        this.call();
    }
    config() {
        this.router.use(bodyParser.urlencoded({ extended: true }));
        this.router.use(bodyParser.json());
    }
    call() {
        this.router.post('/api/user/getAllUser', (req, res) => {
            if (req.body.password == 'sh008' && req.body.user == '123456') {
                //create token
                let token = jwt.sign({ id: 1 }, config_1.default.key, {
                    expiresIn: 86400
                });
                res.status(200).send({ msg: 'success', token: token });
            }
            else {
                res.status(400).send({ msg: 'fail' });
            }
        });
    }
}
exports.default = UserControler;
//# sourceMappingURL=userControler.js.map