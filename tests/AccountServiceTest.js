'use strict'
/**
 * this file contains the test specification for AccountService that
 * contains the test specs for account authentication, log in , logout 
 * and updating account information
 */
var AccountService = require ('../services/AccountService'),
	chai = require ('chai'),
    expect = chai.expect,
	chaiHttp = require ('chai-http'),
    request = require ('request'),
	should = chai.should(),
	server = require ('../server'),
    db = require ('../db'),
    inputs = require ('./inputs/test-inputs'),
    httpMocks = require ('node-mocks-http');


chai.use (chaiHttp);

// TDD for AccountService
describe ('The AccountService testing', () => {

	/**
	 * The authentication test specification
	 */
    describe ('Checking "authenticate function"', () => {

        /**
         * TEST#1
         * check functions existence
         */
        it ('should export a function', () => {
            expect (AccountService.authenticate).to.be.a ('function');
        })


        /**
         * TEST #2
         * check for status code and json response
         */
        it ('should validate the json response from server', (done) => {
            
            chai.request (server).post ('/api/account/auth', inputs.authInputs)
                .end ((err, res) => {
                    // if (err) console.error (err);
                    res.should.have.status (200);
                    res.body.should.be.a ('object');
                    res.body.authenticated.should.be.a ('boolean');
                    res.body.message.should.equal ('authenticated');
                    done();
                });
        })
        
    });


    /**
     * Test Speciication to check creation of new user
     */
    describe ('Checking "Create user" function', () => {

    })
});