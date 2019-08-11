import {assert} from 'chai';
import sel from '../selectors/nav-bar';
import exp from '../expected/nav-bar';

describe('Header btn and logo', function () {

    it('logo "GlobalLogic" is apears', function () {
        browser.url('/');
        let logo = $(sel.logo);
        let actual = logo.isDisplayed();
        assert.equal(actual, true);
    })

    it('button "Services" is apear', function () {
        let btn = $$(sel.btnHeader)[0];
        let actual = btn.isDisplayed();
        assert.equal(actual, true);
    })

    it('button "Work" is apear', function () {
        let btn = $$(sel.btnHeader)[4];
        let actual = btn.isDisplayed();
        assert.equal(actual, true);
    })

    it('button "Insights" is apear', function () {
        let btn = $$(sel.btnHeader)[7];
        let actual = btn.isDisplayed();
        browser.pause(2000);
        assert.equal(actual, true);
    })
})

describe('werify CSS design btn "Services"', function () {

    it('werify btn "Services" font-family', function () {
        browser.url('/');
        let btn = $$(sel.btnHeader)[0];
        let actual = btn.getCSSProperty('font-family').value;
        assert.equal(actual, exp.fontFamily);
    })

    it('werify btn "Services" font-size', function () {
        let btn = $$(sel.btnHeader)[0];
        let actual = btn.getCSSProperty('font-weight').value;
        //console.log(actual);
        assert.equal(actual, exp.fontWeight);
    })

    it('werify btn "Services" color', function () {
        let btn = $$(sel.btnHeader)[0];
        let actual = btn.getCSSProperty('color').value;
        assert.equal(actual, exp.color);
    })

})

describe('werify btns', function () {

    it('button "Services" linck is worked', function () {
        let btn = $$(sel.btnHeader)[0];
        btn.click();
        let btn2 = $$(sel.btnServisesOfering)[0];
        let actual = btn2.isExisting();
        assert.equal(actual, true);
    })

})

