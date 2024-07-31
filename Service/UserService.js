"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserById = exports.findUserById = void 0;
const Logger_1 = require("../Helper/Logger");
let users = [
    { id: 1, name: 'Vishnu', email: 'Vish@gmail.com', phoneNumber: 12323332 },
    { id: 2, name: 'Glo', email: 'Glo@gmail.com', phoneNumber: 444444444 }
];
const findUserById = (id) => {
    return users.find(user => user.id === id);
};
exports.findUserById = findUserById;
const UpdateUserById = (id, name, email, phoneNumber) => {
    const user = (0, exports.findUserById)(id);
    if (!user) {
        return console.log(`User Not Found with id ${id}`);
    }
    user.email = email;
    user.phoneNumber = phoneNumber;
    (0, Logger_1.LogUpdate)(`User with ${id} has been updated with this ${email} and new number ${phoneNumber}`);
};
exports.UpdateUserById = UpdateUserById;
