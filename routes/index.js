const express=require("express");
const router=express.Router();
const Product=require('../model/Product');

//add
router.post("/add", async (req, res) => {
    try {
     
      const newProduct = new Product({
        productId: req.body.productId,
        quantity: req.body.quantity,
        operation: req.body.operation,
      });
  
      const product = await newProduct.save();
      res.status(200).json(product);
    } catch (err) {
     res.status(500).json(err)
    }
  });
  
//remove
router.delete('/:productId', async (req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.productId);
        res.status(200).json({message: "successfully deleted"});
    }catch(err){
        console.log(err);
    res.status(500).json(err);
    }
 });
module.exports=router;