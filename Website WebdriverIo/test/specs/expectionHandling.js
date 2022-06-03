describe('Dynamic Wait' , ()=>{

    it('Wait for Text',async ()=>{

        await browser.url("https://the-internet.herokuapp.com/dynamic_loading/1");

        browser.maximizeWindow();
        const startBtn = await $("//button[contains(text(),'Start')]");
        await startBtn.click();


        // browser.addCommand('getUrlAndTitle', async function (customVar) {
        //     // `this` refers to the `browser` scope
        //     return {
        //         url: await this.getUrl(),
        //         title: await this.getTitle(),
        //         customVar: customVar
        //     }
        // })
 

        const text = await (await $("//h4[contains(text(),'Hello World!')]")).waitForDisplayed();

    //    const verifyText =  await text.waitForDisplayed() ;

      
        // try {
        //     await this.waitForDisplayed(10000)
        //     return true
        // } catch (err) {
        //     return false
        // };
 
    //    console.log("Visible Text Is : "+verifyText);
    //    if(verifyText===true){
    //        console.log("Text Is Matching")
    //    }else{
    //        console.log("Text is not Matching")
    //    }

        // await browser.pause(5000);
        // browser.addCommand("waitAndClick", async function () {
        //     // `this` is return value of $(selector)
        //     await this.waitForDisplayed()
        //       }, true)

        

    })
})