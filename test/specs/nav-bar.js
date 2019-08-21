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
        let btnServices = $(sel.btnServices);
        let actual = btnServices.isDisplayed();
        assert.equal(actual, true);
    })

    it('button "Work" is apear', function () {
        let btn = $(sel.btnWork);
        let actual = btn.isDisplayed();
        assert.equal(actual, true);
    })

    it('button "Insights" is apear', function () {
        let btn = $(sel.btnInsights);
        let actual = btn.isDisplayed();
        assert.equal(actual, true);
    })
})

describe('verify CSS design btn "Services"', function () {

    it('verify btn "Services" font-family', function () {
        let btn = $(sel.btnServices);
        let actual = btn.getCSSProperty('font-family').value;
        assert.equal(actual, exp.fontFamily);
    })

    it('verify btn "Services" font-weight', function () {
        let btn = $(sel.btnServices);
        let actual = btn.getCSSProperty('font-weight').value;
        assert.equal(actual, exp.fontWeight);
    })

    it('verify btn "Services" color', function () {
        let btn = $(sel.btnServices);
        let actual = btn.getCSSProperty('color').parsed.hex;
        assert.equal(actual, exp.color);
    })

    it('verify btn "Services" focus font-size', function () {
        browser.setWindowSize(1920, 1080)
        let btn = $(sel.btnServices);
        btn.moveTo();
        let actual = btn.getCSSProperty('font-size').parsed.value;
        assert.equal(actual, exp.fontSize);
    })

    it('verify btn "Services" focus color', function () {
        let btn = $(sel.btnServices);
        btn.moveTo();
        let actual = btn.getCSSProperty('color').parsed.hex;
        assert.equal(actual, exp.colorFocus);
    })

})

describe('werify btns', function () {

    it('button "Services" link is working', function () {
        let btn = $(sel.btnServices);
        btn.click();
        let btn2 = $(sel.btnServicesOffering);
        let actual = btn2.isExisting();
        assert.equal(actual, true);
    })

})

