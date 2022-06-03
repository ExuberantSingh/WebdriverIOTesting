const VerifyList = require("../androidBase/listVerify");

describe('Verify the List',()=>{
    it('Click oN Skip Tab',async()=>{
        await VerifyList.clickoNSkipBtn();
    })

   it('Add New Item',async()=>{
       await VerifyList.clickOnAddNewItem();
   }) 
    
   it('Click On Checklist Tab',async()=>{
       await VerifyList.clickOnChecklist();
   })
   it('Check Add Items In List',async()=>{
       await VerifyList.addItmInList();
   })

})