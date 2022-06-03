
const AddNoteReminder = require("../androidBase/addNoteReminder");
const Title = require("../data/dataFile")

describe('Add Note Reminder',()=>{

    it('Click On Skip Button',async()=>{
        await AddNoteReminder.clickOnSkipButton();
    })
    
    //Verify Add_Note Tab
    it('Verify The Add Note Tab',async()=>{
           await expect(AddNoteReminder.addNotes).toBeDisplayed();
    })
    
    //Click on Add Button
    it('Click on Add Button', async()=>{
        await AddNoteReminder.clickOnAddNoteButton();
    })
    
    //Verify edit Screen
    it('Verify Edit Screen',async()=>{
          await AddNoteReminder.verifyEditText();
     })
    
    //Enter the Title in Text Field
    it('Enter The Title', async()=>{
        await AddNoteReminder.addTitle(Title.Birthday);
    })
    
    //Enter The Text in Edit Field       
    it('Enter Values Under Title', async()=>{
        await AddNoteReminder.addEditValue();
    })
    
    //Click on Back Button
    it('Saved Value & Back to Tab', async()=>{
        await AddNoteReminder.backPage();
    })

    //Set the Reminder
    it('Set The Reminder',async()=>{
        await AddNoteReminder.clickOnElipsisMenu();
        await AddNoteReminder.setReminderTime();
    })
    






    // //Verify Edit Button
    // it('Verify Edit Button', async()=>{
    //     await AddNoteReminder.verifyEditButton();
        
    // })

})