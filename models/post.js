module.exports = function(sequelize, DataTypes) {
    const Post = sequelize.define("Post",
      {
        location: {
          type: DataTypes.STRING(100),
          validation: {
            notEmpty: true,
            notNull: true,
          }
        },
        body: {
          type: DataTypes.STRING(300),
          validation: {
            len: [313],
            notEmpty: true,
            notNull: true,
          }
        },
        userName: {
          type: DataTypes.STRING(300),
          validation: {
            notEmpty: true,
            notNull: true,
          }
        }
      }
    );
  
    Post.associate = function(models) {
  
      Post.belongsTo(models.User, {
        foreignKey: 
        {
          allowNull: false
        }
      });
    };
  
    return Post;
  };