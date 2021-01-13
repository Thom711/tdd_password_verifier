const passwordHasMaxNineCharacters = (password) => {
    return password.length <= 9;
};

const passwordIsNotNull = (password) => {
    return !(password == null);
};

const passwordHasOneOrMoreUppercaseCharacters = (password) => {
    return !(password === password.toLowerCase());
};

const passwordHasOneOrMoreLowercaseCharacters = (password) => {
    return !(password === password.toUpperCase());
};

const passwordHasOneOrMoreNumbers = (password) => {
    return /[0-9]/.test(password);
};

const countConditions = (conditions) => {
    return conditions.filter(bool => bool).length >= 3;
};

const verifyPasswordFunction = (password) => {
    const conditions = [
        passwordHasMaxNineCharacters(password),
        passwordIsNotNull(password),
        passwordHasOneOrMoreUppercaseCharacters(password),
        passwordHasOneOrMoreLowercaseCharacters(password),
        passwordHasOneOrMoreNumbers(password)
    ];

    return countConditions(conditions) && passwordHasOneOrMoreLowercaseCharacters(password);
};

module.exports = {
    passwordHasMaxNineCharacters,
    passwordIsNotNull,
    passwordHasOneOrMoreUppercaseCharacters,
    passwordHasOneOrMoreLowercaseCharacters,
    passwordHasOneOrMoreNumbers,
    verifyPasswordFunction,
};