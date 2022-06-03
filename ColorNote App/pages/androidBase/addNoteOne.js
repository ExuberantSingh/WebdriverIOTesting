class AddNoteScreenOne {

    get skipBttn(){
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip']");
        }
    
    get addNotes(){
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/empty_text']");
    }
    get clickOnAddNote() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]')
    }
    
    get setTitleValue(){
        return $("//*[@resource-id ='com.socialnmobile.dictapps.notepad.color.note:id/edit_title']")
    }
    
    get clickOnAddBtn(){
        return $("//*[@text='Text']") ;
    }
    
    get editTitle(){
        return $("//*[@resource-id ='com.socialnmobile.dictapps.notepad.color.note:id/edit_title']");
    }
    
    get setEditValue(){
        return $("//*[@resource-id ='com.socialnmobile.dictapps.notepad.color.note:id/edit_note']");
    }
    
    get editButton(){
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/edit_btn']");
    }
    
    async verifyEditButton(){
        await expect(this.editButton).toBeDisplayed();
    }
    
    async addEditValue(){
        // await(await this.setEditValue).addValue("Mocha\nCucucumber\nJasmine");
        await(await this.setEditValue).addValue("Mocha\nCucucumber\nJasmine");
        }
    
    async backPage(){
        await driver.back();
        await driver.back();
    }
    
    
    
     async addTitle(value){
        await(await this.setTitleValue).addValue(value);
    
        try {
           const titleText = await expect(this.setTitleValue).toHaveTextContaining('FrameWork');
           console.log("The Title Text is :- "+ titleText);           
        } catch (error) {
            console.log("Did Not Match the Title"+error);
        }
    }
     async clickOnAddNoteButton(){
         await(await this.clickOnAddNote).click();
         await(await this.clickOnAddBtn).click();
         
     }
     async clickOnSkipButton(){
         await(await this.skipBttn).click();
     }
    
     async verifyEditText(){
         await expect(this.editTitle).toBeDisplayed();
     }
    


}
module.exports = new AddNoteScreenOne() ;