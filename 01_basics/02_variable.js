const accountId = 144553
let accountEmail = "sumit02@gmail.com"
var accountPassword = "1234"
accountCity = "jaipur"
let accountState;

// accountId = 2 not allowed
accountEmail = "abc@gmail.com"
accountPassword = "2324"
accountCity = "Bangaluru"
console.log(accountId);
/*
prefer not to use var
because of issue of block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);