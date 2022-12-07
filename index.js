var customerName = 'bob';
const leastFavoriteCustomer = 'bob';
var bestCustomer;

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}
function setBestCustomer(){
    bestCustomer = 'not bob'; 
}
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'not bob';
}