// იუთუბის კომენტარები

let userIsLoggedIn = true;
let videoIsCommentable = true;
const userCanComment = userIsLoggedIn && videoIsCommentable;

console.log(userCanComment);



// სოც ქსელი

let userLoggedIn = true;
let userIsBlocked = false;
const userCanPost = userLoggedIn && !userIsBlocked;

console.log(userCanPost);



// ონლაინ მაღაზია

let balance = 1200;
let userCartTotal = 200;
const paymenstComplete = balance >= userCartTotal;

console.log(paymenstComplete);



// კომენტარის წაშლა

let userIsAdmin = false;
let userIsModerator = false;
let userIsCommentAuthor = true;
const userCanDelete = userIsAdmin || userIsModerator || userIsCommentAuthor;

console.log(userCanDelete);



// ატომური ბომბი

let presidentKey = false;
let primeMinisterKey = false;
let generalOfArmiesKey = false;
let masterKey = true;
const bombWillLaunch = presidentKey && primeMinisterKey && generalOfArmiesKey || masterKey;

console.log(bombWillLaunch);



// პინ კოდი

const userPinCode = 0000;
const currentPinCode  = 0000;
const newPinCode = 1111;
const retypeNewPinCode = 1111;
const pinChangeComplete = userPinCode == currentPinCode && newPinCode == retypeNewPinCode;

console.log(pinChangeComplete);



// GAME OVER

let health = 0;
let lives = 3;
const gameOver = health == 0 && lives == 0;

console.log(gameOver);



// Meama

let capsuleCount = 1;
let capsulePrice = 5;
let userBalance = 10;
let creditCardStatus = userBalance > capsulePrice;
const paymentComplete = capsuleCount >0 && capsulePrice <= userBalance;

console.log(paymentComplete);



// Hotel booking

let availableRooms = 10;
let roomPrice = 70;
let discount = 25;
let usersBalance = 200;
let userHasDiscount = true;
let userRoomCount = 2;
const paymenIstComplete = availableRooms >= userRoomCount && usersBalance >= userRoomCount * roomPrice - discount;

console.log(paymenIstComplete);