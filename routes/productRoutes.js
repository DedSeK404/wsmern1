const express = require("express")
const { addProduct, getallproducts, getoneprod ,updateprod, deleteprod} = require("../controllers/productController")
const filterproduct = require("../middlwares/filterproduct")
const router = express.Router()

/**
 * @route POST /product/add
 * @description add new product
 * @access public
 */
 router.post("/add",addProduct )
 /**
 * @route get /product/
 * @description get all products
 * @access public
 */
router.get("/",filterproduct,getallproducts)
 /**
 * @route get /product/:idprod
 * @description get one product
 * @access public
 */
router.get("/:idprod",getoneprod)
 /**
 * @route patch /product/:idprod
 * @description update  product
 * @access public
 */
router.patch("/:idprod",updateprod)
 /**
 * @route delete /product/:idprod
 * @description delete  product
 * @access public
 */


router.delete("/:idprod",deleteprod)
 module.exports=router