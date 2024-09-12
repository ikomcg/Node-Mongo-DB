const Blog = require("../models/blog");

const getAllBlog = (req, res) => {
   Blog.find()
      .then((result) => {
         res.send(result);
      })
      .catch((err) => {
         res.status(400).send(err);
      });
};

const addBlog = (req, res) => {
   const blog = new Blog(req.body);
   blog
      .save()
      .then((result) => {
         res.send(result);
      })
      .catch((err) => {
         res.status(400).send(err);
      });
};

const updateBlog = async (req, res) => {
   const { id } = req.params;
   const updateData = req.body;

   try {
      const updatedBlog = await Blog.findByIdAndUpdate(id, updateData, {
         new: true,
         runValidators: true,
      });

      if (!updatedBlog) {
         throw new Error({ message: "Blog not found" });
      }

      res.status(200).send(updatedBlog);
   } catch (err) {
      res.status(500).send({
         error: "An error occurred while updating the blog",
         details: err,
      });
   }
};

const findBlog = (req, res) => {
   Blog.findById(req.params.id)
      .then((result) => {
         res.send(result);
         console.log(result);
      })
      .catch((err) => res.status(400).send(err));
};

const deleteBlog = (req, res) => {
   Blog.findByIdAndDelete(req.params.id)
      .then((result) => {
         res.send({
            message: "Blog deleted successfully",
         });
      })
      .catch((err) => res.status(400).send(err));
};

module.exports = { getAllBlog, addBlog, updateBlog, findBlog, deleteBlog };
