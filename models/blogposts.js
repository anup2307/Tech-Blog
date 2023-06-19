const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connections');

class BlogPosts extends Model {}

BlogPosts.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true
        },
        heading:{
            type: DataTypes.STRING,
            allowNull:false
        },
        description:{
            type: DataTypes.TEXT,
            allowNull:false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull:false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'blogposts',
      }
    );
    
    module.exports = BlogPosts;