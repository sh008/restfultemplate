"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
class deviceControler {
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
        this.router.get('/api/device/getAllDevice', (req, res) => {
            res.json({
                msg: 'device api'
            });
        });
    }
}
exports.default = deviceControler;
//# sourceMappingURL=devicecontroler.js.map