const { Model, DataTypes }= require("sequelize");
const bcrypt= require("bcrypt");
const sequelize= require("../config/config");

class User extends Model {
    isPassword(comparison){
        return bcrypt.compare(comparison, this.user.password);
    }
};

User.init(
    {
        username:{
            type:DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password:{
            type:DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },
    {
        hooks:{
            beforeCreate: async (userdata)=>{
                userdata.password= await bcrypt.hash(userdata.password, 10);
                return userdata;
            }
        },
        sequelize,
        timestamps:true,
        freezeTableName: false,
        underscore: true,
        modelName: "user"
    }
);

module.exports = User;