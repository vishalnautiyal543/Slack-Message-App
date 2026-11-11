import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema  = new mongoose.Schema({

    email:{
        type:String,
        required:[true, "Email is required"],
        unique: [true, "Email is already exist"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password:{
        type: String,
        required:true
    },
    username:{
        type:String,
        required:[true,"username is required"],
        unique:[true,"username is already exist"],
        match:[
            /^[a-zA-Z0-9]+$/,
            "username must contain only letters and numbers"
        ]
    },
    avatar:{
        type:String
    }

},
{timestamps:true}
)

userSchema.pre('save',function saveUser(){
    const user = this;
    const hashedPassword = bcrypt.hash(user.password,10);
    user.password = hashedPassword;
    user.avatar = `https://robohash.dark-gaming.com/${user.username}`
    
})

const User = mongoose.model('User',userSchema);

export default User;

