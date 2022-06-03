const AddNoteScreenOne = require("../androidBase/addNoteOne")
 const Title = require("../data/dataFile")
describe('Color NotePad',()=>{

//Click on Skip Button
it('Click On Skip Button',async()=>{
    await AddNoteScreenOne.clickOnSkipButton();
})

//Verify Add_Note Tab
it('Verify The Add Note Tab',async()=>{
       await expect(AddNoteScreenOne.addNotes).toBeDisplayed();
})

//Click on Add Button
it('Click on Add Button', async()=>{
    await AddNoteScreenOne.clickOnAddNoteButton();
})

//Verify edit Screen
it('Verify Edit Screen',async()=>{
      await AddNoteScreenOne.verifyEditText();
 })

//Enter the Title in Text Field
it('Enter The Title', async()=>{
    await AddNoteScreenOne.addTitle(Title.List);
})

//Enter The Text in Edit Field       
it('Enter Values Under Title', async()=>{
    await AddNoteScreenOne.addEditValue();
})

//Click on Back Button
it('Saved Value & Back to Tab', async()=>{
    await AddNoteScreenOne.backPage();
})

//Verify Edit Button
it('Verify Edit Button', async()=>{
    await AddNoteScreenOne.verifyEditButton();
    
})



})