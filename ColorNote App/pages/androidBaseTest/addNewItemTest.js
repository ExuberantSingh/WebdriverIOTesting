const AddNewItem = require("../androidBase/addNewItem")

describe('Add New Item',()=>{

   it('Click oN Skip Tab',async()=>{
        await AddNewItemOne.clickoNSkipBtn();
    })

   it('Add New Item',async()=>{
       await AddNewItem.clickOnAddNewItem();
   }) 
    
   it('Click On Checklist Tab',async()=>{
       await AddNewItem.clickOnChecklist();
   })
   it('Check Add Items In List',async()=>{
       await AddNewItem.addItmInList();
   })
   it('Click on Amazon Option',async()=>{
       await AddNewItem.clickOnElpsisOption();
   })
   xit('Accept Chrome Browser Autherization',async()=>{ 
       await AddNewItem.chromeVerification();
   })
   it('Search Product',async()=>{
        
       await AddNewItem.searchProduct();
   })
   xit('Add Product To the Cart',async()=>{
       await AddNewItem.addProductToCart();
   })

})