"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = require("./Service/UserService");
try {
    (0, UserService_1.UpdateUserById)(1, 'hari', 'hari@gmail.com', 123456);
    (0, UserService_1.UpdateUserById)(3, 'preeti', 'preeti@gmail.com', 9898989);
}
catch (error) {
    console.error(error.message);
}
