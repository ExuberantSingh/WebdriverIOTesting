const AddCheckList = require("../androidBase/addNoteItems")

describe('Add Item & Search In Amazon Shopping App',()=>{
    it('Click On Skip Button',async()=>{
      await AddCheckList.clickoNSkipBtn();
    })
    it('Click On Add Note Tab',async ()=>{
         await AddCheckList.clickOnAddNoteTab();
    })
    it('Click On Check List Tab',async()=>{
        await AddCheckList.clickOnCheckListTab();
    })
    it('Add Item In List',async()=>{
        await AddCheckList.addItemInList();
    })
    it('Click On Amazon Search',async()=>{
        await AddCheckList.clickOnAmazonSearch();
    })

})