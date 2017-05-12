// 'use strict'

// var Methods = require('../util/methods'),
// 	expect = require ('chai').expect,
// 	db = require ('../db');

// // var expect = chai.expect;
// describe ('Checking the existence of methods', () => {
// 	describe ('"checking createUser function"', () => {
		
// 		// check if the function exists
// 		it ('Should export a function', () =>{
// 			expect (Methods.createUser).to.be.a ('function');
// 		});

// 		// check if it is returning a promise
// 		it ('should return a promise', () => {
// 			const printMethodReturn = Methods.createUser();
// 			expect (printMethodReturn).to.be.a ('function');
// 		});

// 		// test case for checking whether the function generates the database table or not
// 		it ('should create a table named "users"', () => {
// 			return Methods.createUser()
// 				.then (() => db.schema.hasTable('users'))
// 				.then ((hasUsersTable) => expect (hasUsersTable).to.be.true);
// 		});

// 		// test if created database has required fields
// 		it ('should have specified fields', () => {
// 			// TODO
			
// 			expect (true.to.be.false);
// 		});


// 	});
// });

// // test case that printMethod should return a promise