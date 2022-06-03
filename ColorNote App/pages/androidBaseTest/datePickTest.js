const DatePick = require("../specs/datepickOne")

describe('Date Pick',()=>{

    it('Click On View Tab',async()=>{ await DatePick.clickViewPage(); })

    it('Click on Date Widget',async()=>{await DatePick.clickOnDateWidget();})

    it('Click On Dialog Tab',async()=>{await DatePick.clickOnDialogTab();})

    it('Select The Date',async()=>{await DatePick.clickOnChangeDate();})


})