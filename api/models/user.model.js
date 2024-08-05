import mongoose from "mongoose";

const userSchema= new mongoose.Schema(
    username:{
        type:String,
        //asnje user nuk do te aksesoje db nese nuk ka nje username
        required:true,
        //username te jene unike
        //e kontrollon mongodb nese jane te njejta apo jo
        unique:true,
    },
    email:{
        type: String,
        //asnje user nuk do te aksesoje db nese nuk ka nje username
        required:true,
        //username te jene unike
        //e kontrollon mongodb nese jane te njejta apo jo
        unique:true,
    },
    password:{
        type:String,
        //asnje user nuk do te aksesoje db nese nuk ka nje username
        required:true,
        //dy user mund te kene te njejtin password
    }, { timestamps:true}
)
//krijohet model
const User= mongoose.model("User", userSchema);
export default User;