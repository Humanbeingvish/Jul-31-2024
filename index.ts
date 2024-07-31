import { UpdateUserById } from "./Service/UserService";

try {
    UpdateUserById(1,'hari','hari@gmail.com',123456);
    UpdateUserById(3,'preeti','preeti@gmail.com',9898989)
} catch (error) {
    console.error((error as Error ).message)
}