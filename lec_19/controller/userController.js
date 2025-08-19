const Users=require("../model/blog")



module.exportns.postaddUser = async (req, res) => {
  let { email, username, password } = req.body;
  let newUser = new Users({
    email: email,
    username: username,
    password: password
  });
  await newUser.save();
  res.json({
    success: true,
    data: newUser,
    message: "user added successfully!!!"
  });
}

module.exports.getreadUser = async (req, res) => {
  let allUsers = await Users.find();
  res.json({
    success: true,
    data: allUsers
  });
}
module.exports.getOneUser = async (req, res) => {
  let { id } = req.params;
  let user = await Users.findOne({ _id: id });
  res.json({
    success: true,
    data: user
  });
}
// module.exports.deletOneBlog = async(req,res)=>{
//   let {blogId} = req.params;
//   let {userId} = req.body;
//   let blogExist = await Blogs.findById(blogId);
//   if(!blogExist) return res.json({
//     success:false,
//     message:"Blog not exist"
//   })
//   if(blogExist.userId  != userId){
//     return res.json({
//       success:false,
//       message:"You are not allowed to delete this blog"
//     })
//   }
//   await Blogs.findByIdAndDelete(blogId);
//   let userExists = await Users.findById(userId);
//   let blog =userExists.blogs.filter((id)=>id!=blogId);
//   userExists.blogs = blog;
//   await userExists.save();
//   res.json({
//     success:true,
//     message:"Blog Deleted",
//     data:userExists
//   })

// }