describe('Android Native Feature',()=>{
    it('Scroll to Element',async()=>{

  await $('~App').click();
  await $('~Activity').click();
  const secureViewTab = await $("//android.widget.TextView[@content-desc='Secure Surfaces']");
  
  await $('android= new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("~SetWallpaper"))').click();
//   await $('~Secure Surfaces').click();

    })
})