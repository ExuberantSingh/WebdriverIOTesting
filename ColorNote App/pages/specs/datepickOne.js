class DatePick{

get viewPageTab(){
    return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Views")');
}
get dateWidgetTab(){
    return $('~Date Widgets');
}
get dialogTab(){
 return $('~1. Dialog');
}
get currentDateTab(){
    return $("//android.widget.TextView[@resource-id='io.appium.android.apis:id/dateDisplay']");
}
get changeTheDate(){
    return $('~change the date');
}
get selectDate(){
    return $('~10 May 2022');
}


async clickViewPage(){
await (await this.viewPage).click();
}

async clickOnDateWidget(){
    await (await this.dateWidgetTab).click();
}

async clickOnDialogTab(){
    await (await this.dialogTab).click();
    const currentDate = await (await this.currentDateTab).getText();
    console.log("Current Date is :- " + currentDate);
}

async clickOnChangeDate(){
    await (await this.changeTheDate).click();
    await $('android= new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
    await (await this.selectDate).click();
    const selectedDate = await (await this.selectDate).getText();
    console.log("The Selected Date :- "+selectedDate);
}

}
module.exports = new DatePick();