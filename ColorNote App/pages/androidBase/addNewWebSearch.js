class WebSearch{

get skipBtn(){
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip']");
        }
get addNoteTab() {
            return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]');
        }
get checkListsTab(){
            return $("//*[@text='Checklist']");
        }
get addItmTab(){
            return $("(//*[@resource-id ='com.socialnmobile.dictapps.notepad.color.note:id/icon'])[1]"); 
}

get websiteIcon(){
    return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/image']")
}

async clickoNSkipBtn(){
    await (await this.skipBtn).click();
}

async clickOnAddNewItem(){
    await (await this.addNoteTab).click();
}

async  clickOnChecklist(){
    await (await this.checkListsTab).click();
}

async addItmInList(){
await (await this.addItmTab).click();

}

}
module.exports = new WebSearch();