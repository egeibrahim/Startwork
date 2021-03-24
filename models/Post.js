const mongoose = require('mongoose');
const User = require('./User');
const CustomError = require("../helpers/error/CustomError");

const Schema = mongoose.Schema;

const PostSchema = Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "User"
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    },
    content: {
        type: String
    },
    media: {
        type: String
    },
    likes:[{
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "User"
    }],
    comments:[{
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "Comment"
    }]
});

PostSchema.post("save", function (next){
    User.findByIdAndUpdate(this.userId, {
        $push: {posts: this._id}
    }, err => {
        if(err){
            return next(new CustomError("Bir hata oluştu", 500));
        }
    });
});

module.exports = mongoose.model("Post", PostSchema);