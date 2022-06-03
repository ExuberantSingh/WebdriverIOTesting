class AddNewItem {

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

get amazonOption(){
    return $("//*[@text='Amazon Search']");
}

get continueOption(){    
    return $("//android.widget.Button[@resource-id='com.android.chrome:id/terms_accept']");
}

get noThanksOption(){
    return $("//android.widget.Button[@resource-id='com.android.chrome:id/negative_button']");
}

get amazonPay(){
    // return $("//android.view.View[@text='Amazon Pay']");
    return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Amazon Pay")')

    
}

get amazonSearchOption(){
    // return $("//android.view.View[@text='Clear search keywords']");
    // return $('~nav-search-keywords');
    // return $("//android.widget.EditText[@resource-id='nav-search-keywords']");
     return $("//android.widget.EditText[@index='1']");	
    // return $("//android.widget.EditText[@index='0']")
   
}

get goTab(){
    // return $("//android.widget.Button[@text='GO']");
    return $("//android.widget.Button[@index='0']") 
}

get productLink(){
    // return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Aircraft Carrier Toy,with 5 Aircrafts Includes Destroyer Ship 4.5 out of 5 stars578")');
    return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Tata Salt Lite, 15% Low Sodium Iodised Salt, 1kg Low Sodium Iodised Salt · 1 kg (Pack of 1) 4.6 out of 5 stars 9,856 product-detail")')
    // return $("//android.view.View[@text='Tata Salt Lite, 15% Low Sodium Iodised Salt, 1kg Low Sodium Iodised Salt · 1 kg (Pack of 1) 4.6 out of 5 stars 9,856 product-detail']");
}

get addToCartTab(){
    return $("//android.widget.Button[@text='Add to Cart']");
}

get productQuantity(){
    return $("//android.view.View[@resource-id='quantity-label-C680db4ca-df98-4205-bd7e-89b83f8f3627']");
   }

get productCartQuantity(){
    return $("//android.view.View[@text='Cart']");
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
            await (await this.addItmText).addValue("www.amazon.in");
            await (await this.oKButton).click();
            await browser.pause(3000);
            await (await driver).back();
            await browser.pause(3000);
        }
        
        async clickOnElpsisOption(){
            await (await this.elipsisOption).click();
        }

        async chromeVerification(){           
            await (await this.continueOption).click();
            await (await this.noThanksOption).click();             
        }

        async searchProduct(){
            // await (await this.amazonSearchOption).waitForClickable({timeout :30000});
            await (await this.amazonSearchOption).click();
            await (await this.amazonSearchOption).addValue("Tata Salt Lite");
            // await (await this.amazonPay).waitForClickable();
            // await (await this.amazonPay).click();
            await (await this.goTab).click();

        }

        async addProductToCart(){
            // await (await this.productLink).waitForClickable();
            await (await this.productLink).click();
            await (await this.addToCartTab).click();           
        }




    



}
module.exports = new AddNewItem();