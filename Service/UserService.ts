import { User } from "../Model/User";
import { LogUpdate } from "../Helper/Logger";


let users:User[] =[
    {id:1,name:'Vishnu',email:'Vish@gmail.com',phoneNumber:12323332},
    {id:2,name:'Glo',email:'Glo@gmail.com',phoneNumber:444444444}
];

export  const findUserById =(id:number):User | undefined=>{
   return users.find(user =>user.id === id )
};

export const UpdateUserById = (id:number,name:string,email:string,phoneNumber:number):void =>{
const user = findUserById(id);
if(!user){
    return console.log(`User Not Found with id ${id}`);
    
}
user.email =email;
user.phoneNumber=phoneNumber
LogUpdate(`User with ${id} has been updated with this ${email} and new number ${phoneNumber}`)
};

