const Blogs=require("../model/blog");


module.exports.postaddBlog = async(req,res)=>{
    let {title,body,userId}=req.body;
    let userExists=await Users.findById(userId);
    if(userExists){
      let newBlog=new Blogs({
        title:title,
        body:body,
        date:Date.now(),
        userId:userId
    })
    await newBlog.save();
    userExists.blogs.push(newBlog._id);
    await userExists.save();
    res.json({
        success:true,
        data:newBlog,
        message:"blog added successfully!!!"
    })
    }
}

module.exports.getreadBlog = async(req,res)=>{
    let allblog=await Blogs.find();
    res.json({
        success:true,
        data:allblog
    })
}

module.exports.getOneBlog = async(req,res)=>{
    let {id}=req.params
    let blog=await Blogs.findOne({_id:id});
    res.json({
        success:true,
        data:blog
    })
}

module.exports.deleteOneBlog = async(req,res)=>{
  let {blogId} = req.params;
  let {userId} = req.body;
  let blogExist = await Blogs.findById(blogId);
  if(!blogExist) return res.json({
    success:false,
    message:"Blog not exist"
  })
  if(blogExist.userId  != userId){
    return res.json({
      success:false,
      message:"You are not allowed to delete this blog"
    })
  }
  await Blogs.findByIdAndDelete(blogId);
  let userExists = await Users.findById(userId);
  let blog =userExists.blogs.filter((id)=>id!=blogId);
  userExists.blogs = blog;
  await userExists.save();
  res.json({
    success:true,
    message:"Blog Deleted",
    data:userExists
  })

}