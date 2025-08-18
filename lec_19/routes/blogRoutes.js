const express = require("express");
const router = express.Router()


// const { getreadBlog, getOneBlog } = require("../controller/blogController");
const {postaddBlog,getreadBlog,getOneBlog,deleteOneBlog} = require("../controller/blogController")
router.post("/blogs",postaddBlog)

router.get("/blogs",getreadBlog)

router.get("/blogs/:id",getOneBlog)


router.delete("/blogs/:blogId",deleteOneBlog)

// router.put("/blogs/:blogId/:userId", async (req, res)=>{

//     let{blogId, userId}=req.params;
//     let{title, body}=req.body;

//     let blogExist=await Blogs.findById(blogId);
//     if(!blogExist){
//        return res.json({
//             success:false,
//             message:"Blog does not exist"
//         })
//     }
//       if(blogExist.userId!=userId){
//         return res.json({
//             success:false,
//             message:"You are not allowed to edit this blog"
//         })
//     }
//   let updatedBlog=  await Blogs.findByIdAndUpdate(blogId, { title, body}, {new:true});
//     res.json({
//         success:true,
//         message:"Blog edited successfully",
//         data:updatedBlog
//     })

// })

module.exports = router