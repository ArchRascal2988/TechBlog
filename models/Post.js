const { Model, DataTypes }= require("sequelize");
const bcrypt= require("bcrypt");
const sequelize= require("../config/config");

class Post extends Model{};

Post.init(
    {
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        content:{
            type: DataTypes.STRING,
            allowNull: false
        },
        post_author:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            references:{
                model: "users",
                key: "id"
            }
        }
    },
    {
        hooks:{
            beforeCreate: async(postdata) =>{
                this.postdata.title= this.postdata.title.toUpperCase();
                return postdata;
            }
        },
        sequelize,
        timestamps:true,
        freezeTableName: false,
        underscore: true,
        modelName: "post"
    }
);

module.exports= Post;