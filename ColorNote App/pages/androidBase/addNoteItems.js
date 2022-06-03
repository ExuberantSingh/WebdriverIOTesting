class AddCheckList {

    get skipBttn(){
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip']");
        }
    
    // get addNotes(){
    //     return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/empty_text']");
    // }
    get addNoteTab() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]');
    }
    
    get checkListTab(){
        return $("//*[@text='Checklist']");
    }

    get editText(){
        return $("//*[@resource-id ='com.socialnmobile.dictapps.notepad.color.note:id/datetime_relative']");
    }

    get addItemTab(){
        return $("(//*[@resource-id ='com.socialnmobile.dictapps.notepad.color.note:id/icon'])[0]");
    }

    get addItemText(){
        return $("//*[@resource-id ='com.socialnmobile.dictapps.notepad.color.note:id/edit']");
    }

    get oKTab(){
       
        return $("//*[@text ='OK']");
    }
    //One Back Opeartion

    get enteredText(){
        return $("//*[@text='Ship Toys']");
    }

    get elipsisTab(){
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/image']")
    }

    get amazonSearchTab(){
        return $("//*[@text='Amazon Search']");
    }

    async clickoNSkipBtn(){
        await (await this.skipBttn).click();
    }

    async clickOnAddNoteTab(){
        await (await this.addNoteTab).click();

    } 

    async clickOnCheckListTab(){
        await (await this.checkListTab).click();
    }

    async addItemInList(){
        await (await this.addItemTab).click();
        await (await this.addItemText).addValue("Ship Toys");
        await (await this.oKTab).click();
        await driver.back();
    }

    async clickOnAmazonSearch(){
        await (await this.elipsisTab).click();
        await (await this.amazonSearchTab).click();
        
    }
}

module.exports = new AddCheckList();

