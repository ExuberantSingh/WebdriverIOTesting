class VerifyList {
    get skipBtn(){
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip']");
        }
get addNoteTab1() {
            return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]');
        }
get checkListsTab(){
            return $("//*[@text='Checklist']");
        }
get addItmTab(){
            return $("(//*[@resource-id ='com.socialnmobile.dictapps.notepad.color.note:id/icon'])[1]"); 
}

get addItmText(){
    return $("//*[@resource-id ='com.socialnmobile.dictapps.notepad.color.note:id/edit']");
}

get oKButton(){
    return $("//*[@text ='OK']");
}

get elipsisOption(){
    return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/image']");
}

get listPath(){
    return $$ ("//android.widget.TextView[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/title']");
}

async clickoNSkipBtn(){
    await (await this.skipBtn).click();
}

async clickOnAddNewItem(){
    await (await this.addNoteTab1).click();
}

async  clickOnChecklist(){
    await (await this.checkListsTab).click();
}

async addItmInList(){
    await (await this.addItmTab).click();
    await (await this.addItmText).addValue("Mocha");
    await (await this.oKButton).click();
   
    await (await driver).back();
    await (await driver).back();
    const text1 = await (await $("//android.widget.TextView[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/text']"));
    await expect(text1).toHaveTextContaining('Mocha');
    await (await driver).back();

    await (await this.addNoteTab1).click();
    await (await this.checkListsTab).click();
    await (await this.addItmTab).click();  
    await (await this.addItmText).addValue("Cucumber");
    await (await this.oKButton).click();
    await (await driver).back();
    await (await driver).back();
    const text2 = await (await $("//android.widget.TextView[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/text']"));
    await expect(text2).toHaveTextContaining('Cucumber');
    await (await driver).back();

    // await (await this.addNoteTab1).click();
    // await (await this.checkListsTab).click();
    // await (await this.addItmTab).click();
    // await (await this.addItmText).addValue("Jasmine");
    // await (await this.oKButton).click();
    // await browser.back();
    // await browser.back();
    // await browser.back();
    // const textList = await $$('android.widget.TextView');
    const textList = await this.listPath;
    for(const element of textList){

        console.log("The Array List Value is :- "+ (await element.getText()));


    }
    await (await driver).back();
    
}



}
module.exports = new VerifyList();