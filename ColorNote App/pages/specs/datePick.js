describe('Android Native Feature',()=>{
    it('Date Pick',async()=>{

        // await $('~Views').click();
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Views")').click();
        await $('~Date Widgets').click();
        await $('~1. Dialog').click();
        const currentDate = await $("//android.widget.TextView[@resource-id='io.appium.android.apis:id/dateDisplay']").getText();
        console.log("Current Date is :- " + currentDate);
        
        await $('~change the date').click();
        await $('android= new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('~10 May 2022').click();
        const selectedDate = await $('~10 May 2022').getText();
        console.log("The Selected Date :- "+selectedDate);

    })
})