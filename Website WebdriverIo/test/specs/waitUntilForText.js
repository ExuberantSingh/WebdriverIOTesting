import timeoutone from '../pageobjects/timeoutone';



describe('Wait Until',()=>{
    it('Wait Until Text',async()=>{
    await browser.url("https://seleniumpractise.blogspot.com/search?q=explicit+wait");
    const clickbtn = await $("//button[contains(text(),'Click me to start timer')]");
    await clickbtn.click();

    const elementss = await $('#demo')
    // let value = timeoutone.timeOut();
     
    await elementss.waitUntil(

        async function(){
        return(await this.getText()==='WebDriver')
        },
       
        {
            timeout : 6000,
            timeoutMsg : 'The Text Is Not Visible'
        });
          


    });
});