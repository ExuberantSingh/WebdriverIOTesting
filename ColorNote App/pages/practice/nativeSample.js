const { AppiumDriver } = require("appium/build/lib/appium")

describe('Android Native Feature',()=>{
    it('Access Them Directly',async()=>{

        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.media.MediaPlayerDemo");
        await driver.pause(3000);
        const playText= await $("//*[@text(),'PLAY STREAMING VIDEO']");
        await expect(playText).toExist();

    })

    it('Alert Message',async()=>{

        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples");
        
        const alertMessg = await $("//android.widget.Button[@content-desc='OK Cancel dialog with a message']");
        await alertMessg.click();
        await driver.pause(6000);
        await driver.acceptAlert();
        await expect("//*[@resource-id='android:id/alertTitle']").not.toExist();

    })
    
})