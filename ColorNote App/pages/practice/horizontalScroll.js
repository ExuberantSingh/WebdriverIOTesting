describe('Android Native Feature',()=>{
    it('Access Them Directly',async()=>{

        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.Gallery1");
        await driver.pause(3000);
        await $('android= new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('android= new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');


 

    })
})