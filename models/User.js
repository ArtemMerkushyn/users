import mongoose from "mongoose";

const UserShema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

// Додамо метод comparePassword до схеми користувача
UserShema.methods.comparePassword = function(candidatePassword) {
    return this.password === candidatePassword;
};

export default mongoose.model('User', UserShema);