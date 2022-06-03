const { AppiumDriver } = require("appium/build/lib/appium");

describe('Sample',()=>{
    it('Sample Test',async()=>{
        const contentOption = await $('~Content'); 
        await contentOption.click();
        const resourceTab = await $('~Resources');
        await expect(resourceTab).toBeExisting();
        await resourceTab.click();
    });
    xit('This Test is not working', async()=>{

    });
    it('Find Element by Class-Name', async()=>{
        // Title of API Demo :
        const className= await $('android.widget.TextView');
        
       console.log("text is:=>"+await className.getText());
       // Assertion :
        await expect(className).toHaveText("API Demos");
    });
    it('Find Element by Xpath', async()=>{
        
        await $('//android.widget.TextView[@content-desc="Layout Reference"]').click();

        // Xpath by Resources-Id
    //    await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

        // Find by Text
        const defaultText =  await $('//android.widget.TextView[@text="Default layout"]').getText();
        console.log("The Text Of Default Layout is :- " + defaultText );


        // Assertion
        // const textAssertion = await $('//android.widget.TextView');
        // await expect(textAssertion).toHaveText("You selected: 1 , Command two");


    });
    it('Find Element by UIAutomator', async()=>{


        // Find Element by TextContains
       const defaultTextNew = await $('android=new UiSelector().textContains("Default")').getText();
       console.log("The New Text of Default Layout is :- " + defaultTextNew);


    });

    xit('Find Multiple Elements', async()=>{
        

        const expectedList = ["API Demos", "Access'ibility","Accessibility","Animation",'App','Content'
             , 'Graphics','Media','NFC','OS','Preference','Text','Views']
        const actualList = []

        const textList = await $$('android.widget.TextView');
        for(const element of textList){
        const getvalueOne =    actualList.push(await element.getText());
        const getvalueTwo =    actualList.push(await element);
        console.log("The Array List Value is :- "+ getvalueOne);

        }
        // await expect(actualList).toEqual(expectedList);
    });
    
    it.only('Working with the Text field',async()=>{
         await $('~Views').click() ;
        //  await $('~Auto Complete').click();
         await $('//*[@text="Auto Complete"]').click();
         await $('//*[@content-desc="1. Screen Top"]').click();
         const textField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
         await textField.addValue('Canada');
         await expect(textField).toHaveText('Canada');
    })
    
    });
    
