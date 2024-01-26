"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv").config();
const { DB_PORT } = process.env;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/ping', (_req, res) => {
    const pingResponse = {
        status: 'OK',
        message: 'pong'
    };
    return res.status(200).send(pingResponse);
});
app.listen(DB_PORT, () => {
    console.log(`server running on port ${DB_PORT}`);
});
