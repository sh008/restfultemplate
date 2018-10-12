"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const userControler_1 = require("./user/userControler");
const devicecontroler_1 = require("./device/devicecontroler");
class App {
    constructor() {
        this.app = express();
        this.config();
    }
    config() {
        this.app.use(new userControler_1.default().router);
        this.app.use(new devicecontroler_1.default().router);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map