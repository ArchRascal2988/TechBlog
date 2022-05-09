const { Model, DataTypes }= require("sequelize");
const sequelize= require("../config/config");

class Comment extends Model {}

Comment.init(
    {
        post_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model:"posts",
                key:"id"
            }
        },
        content:{
            type: DataTypes.STRING,
            allowNull: false
        },
        comment_author:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: "users",
                key: "id"
            }
        }
    },
    {
        sequelize,
        timestamps:true,
        freezeTableName: false,
        underscore: true,
        modelName: "comment"
    }
);

module.exports = Comment;