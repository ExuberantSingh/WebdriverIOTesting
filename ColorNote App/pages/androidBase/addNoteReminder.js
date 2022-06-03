class AddNoteReminder{

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

    get elipsisMenuTab(){
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/menu_btn']");
     }

     get reminderTab(){
         return $("//*[@text='Reminder']");
     }

     get typeOption(){
         return $("//*[@text='None']");
     }

     get timeAlarmText(){
         return $("//*[@text='Time alarm']");
     }
     
     get reminderTime(){
         return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/reminder_time']");
     }
    
    get clickOnHours(){
        return $("//android.widget.RadialTimePickerView.RadialPickerTouchHelper[@content-desc='7']");
    }


    get clickOnMinValue(){
        return $("//*[@content-desc='55']");
    }

    get clickOnPM(){
        return $("//*[@resource-id='android:id/pm_label']");
    }

    get clickOnOk(){
        return $("//*[@text='OK']");
    }

    get yearValue(){
        return $("//*[contains(text(),'Yearly')]");
    }

    get tapOnDone(){
        return $("//*[@text='DONE']");
    }



    async clickOnElipsisMenu(){
        await (await this.elipsisMenuTab).click();
    }

    async setReminderTime(){
        await (await this.reminderTab).click();
        await (await this.typeOption).click();
        await (await this.timeAlarmText).click();
        await (await this.reminderTime).click();
        await (await this.clickOnHours).click();
        await (await this.clickOnMinValue).click();
        await (await this.clickOnPM).click();
        await (await this.clickOnOk).click();
        await (await this.tapOnDone).click();
        await driver.back();



    }



    async verifyEditButton(){
        await expect(this.editButton).toBeDisplayed();
    }
    
    async addEditValue(){      
        await(await this.setEditValue).addValue("Aman Birthday");
        }
    
    async backPage(){
        await driver.back();
        // await driver.back();
    }
    
    
    
     async addTitle(value){
        await(await this.setTitleValue).addValue(value);
    
        try {
           const titleText = await expect(this.setTitleValue).toHaveTextContaining('Birthday');
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

module.exports = new AddNoteReminder();