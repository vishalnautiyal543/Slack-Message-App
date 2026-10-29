import mongoose from "mongoose";

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

userSchema.pre('save',function saveUser(next){
    const user = this;
    user.avatar = `https://robohash.dark-gaming.com/${user.username}`
    next();
})

const User = mongoose.Model('User',userSchema);

export default User;

