'use strict'

var AccountService = require ('../services/AccountService'),
    expect = require ('chai').expect,
    db = require ('../db'),
    inputs = require ('./inputs/test-inputs');


// TDD for AccountService
describe ('The AccountService testing', () => {
    describe ('Checking "authenticate function"', () => {

        /**
         * TEST#1
         * check functions existence
         */
        it ('should export a function', () => {
            expect (AccountService.authenticate).to.be.a ('function');
        })

        /**
         * validate the arguments
         */
        it ('it should validate the param values/name are present and valid', () => {
            expect (inputs.authInputs).to.have.property ('username').and('password');
        })

        it ('should fail for params' , () => {
            expect (inputs.authInvalidInputs).to.have.property ('username')
                .and ('password');
        })


    });
});