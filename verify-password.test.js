const verifyPassword = require('./verify-password');

const passwordHasMaxNineCharacters = verifyPassword.passwordHasMaxNineCharacters;
const passwordIsNotNull = verifyPassword.passwordIsNotNull;
const passwordHasOneOrMoreUppercaseCharacters = verifyPassword.passwordHasOneOrMoreUppercaseCharacters;
const passwordHasOneOrMoreLowercaseCharacters = verifyPassword.passwordHasOneOrMoreLowercaseCharacters;
const passwordHasOneOrMoreNumbers = verifyPassword.passwordHasOneOrMoreNumbers;
const verifyPasswordFunction = verifyPassword.verifyPasswordFunction;

test("Verify Password has a maximum of 9 characters", function() {
    expect(passwordHasMaxNineCharacters('password')).toBeTruthy();
  });

test("Verify Password is not null", function() {
    expect(passwordIsNotNull('password')).toBeTruthy();
});

test("Verify Password has one or more uppercase characters", function() {
    expect(passwordHasOneOrMoreUppercaseCharacters('PASSword')).toBeTruthy();
});

test("Verify Password has one or more lowercase characters", function() {
    expect(passwordHasOneOrMoreLowercaseCharacters('passWORD')).toBeTruthy();
});

test("Verify Password has one or more numbers", function() {
    expect(passwordHasOneOrMoreNumbers('Password15!')).toBeTruthy();
});

test("Verify Password passes minimum requirements", function() {
    expect(verifyPasswordFunction('Password15')).toBeTruthy();
});