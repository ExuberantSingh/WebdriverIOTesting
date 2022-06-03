describe('Dynamic Wait' , ()=>{


    it('Hello Text',async()=>{   await browser.url('https://www.opencart.com/index.php?route=account/login');
    browser.maximizeWindow();
    
    //Get the URL 
    console.log(await browser.getUrl()); 

    const textOne = await $("//img[@title='OpenCart - Account Login']")
    console.log("Text of Title is : "+ textOne.getTagName());
    try {
        
    } catch (error) {
        
    }

    // try {
    //     await textOne.waitForDisplayed()
    //         return true
    // } catch (err) {
    //     return false
    // };

})
 

})