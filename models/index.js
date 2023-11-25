const User = require("./User");
const Comment = require("./comment");
const Post = require("./post")

User.hasMany(Post, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = { User, Comment };