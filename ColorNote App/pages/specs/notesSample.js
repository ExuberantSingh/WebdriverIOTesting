
describe('Color Notepad',()=>{
    it('Notepad Practice',async()=>{
      
        await $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip']").click();


        await expect($("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/empty_text']")).toBeDisplayed();
                
    })

    it('Add & Save the Changes', async()=>{
        const addNoteBtn = await $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/main_btn1']");
        await addNoteBtn.click();
        await $("//*[@text='Text']").click();
        
        //Assertion
        await expect($("//*[@resource-id ='com.socialnmobile.dictapps.notepad.color.note:id/edit_title']")).toBeDisplayed();

        await $("//*[@resource-id ='com.socialnmobile.dictapps.notepad.color.note:id/edit_title']").addValue("FrameWork");
        await $("//*[@resource-id ='com.socialnmobile.dictapps.notepad.color.note:id/edit_note']").addValue("Mocha\nCucucumber\nJasmine");

        await driver.back();
        await driver.back();

       

        await $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/edit_btn']").toBeDisplayed();
        // await expect($("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/view_note']")).toHaveText("Mocha\nCucucumber\nJasmine");

    })

})