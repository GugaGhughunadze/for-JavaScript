// მისალმების ტექსტი

let userFirstName = "ნიკა";

console.log(`სალამი ${userFirstName}!`);



// ონლაინ მაღაზია

let userBalance = 200;
let cartTotal = 300;

if(userBalance >= cartTotal) {
    console.log("გადახდა წარმატებით შესრულდა");
} else {
    console.log("თქვენ არ გაქვთ საკმარისი თანხა, გთხოვთ დამატებით ჩარიცხოთ" + (cartTotal - userBalance) + "ლარი ოპერაციის დასასრულებლად");
}



// გამოცდის ქულა

let maxScore = 100;
let barrier = 51;
let studentScore = 51;

if(studentScore >= barrier) {
    console.log("გილოცავთ, თქვენ გადალახეთ" + (barrier) + "ქულიანი ბარიერი" + (studentScore) + "/" + (maxScore) + "ქულით");
} else {    
    console.log("ვწუხვარ, თქვენ ვერ გადალახეთ" + (barrier) + "ქულიანი ბარიერი" + (studentScore) + "/" + (maxScore) + "ქულით");
}



// მიტანის სერვისი

let shippingIsPossible = true;

console.log("თქვენს მისამართზე მიტანის სერვისი ხელმისაწვდომი" + (shippingIsPossible ? " არის" : " არ არის"));



// პოლიტკორექტული მისალმება - დამშვიდობების მექანიზმი

let userLoggedIn = false;
let usersFirstName = "ნინო";
let userIsFemale = true;

if(userLoggedIn) {
    console.log("სალამი," + (userIsFemale ? "ქალბატონო" : "ბატონო") + usersFirstName);
} else {
    console.log("დროებით," + (userIsFemale ? "ქალბატონო" : "ბატონო") + usersFirstName);
}



// ChatGPT-ის ლიმიტომეტრი

let userQuestions = [];

if(userQuestions.length > 25) {
    console.log("შემდეგი კითხვის დასმას შეძლებთ 3 საათში");
}



// ფიტნეს აპლიკაცია

let userWeights = [100, 95];
let goal = 80;

console.log("შედეგის მიღწევამდე დაგრჩა" + (userWeights[userWeights.length -1] - goal) + "კილო");



// როგორ სწავლობს ჩემი ბიჭი?

let gigosTestResults = [60, 90, 60, 60];

if(gigosTestResults[gigosTestResults.length - 1]  - gigosTestResults[0] <= 10) {
    console.log("რა ვიცი, ნიჭიერია მარა ზარმაცი.");
} else if(gigosTestResults[gigosTestResults.length - 1] - gigosTestResults[0] >= 10) {
    console.log("კარგი შვილი გყავთ ქალბატონო, ნუ ნერვიულობთ.");
} else if(gigosTestResults[gigosTestResults.length - 1] - gigosTestResults[0] == 0) {
    console.log("უხ, გიგო, გიგოოო...");
}



// როგორ სწავლობს ჩემი ბიჭი? ვერსია 2

let gigossTestResults = [84, 60, 50, 97]

if(gigosTestResults[gigossTestResults.length - 1] - gigossTestResults[0] >= 2) {
    console.log("ნიჭიერი, მაგრამ ზარმაცი");
} else if(gigossTestResults[gigossTestResults.length - 1] - gigossTestResults[0] >= 5) {
    console.log("კარგი შვილი");
}



// ეროვნულები

let gigosResults = [26, 20]

if(gigosResults[gigosResults.length - 1] <= 25) {
    console.log("სამწუხაროდ თქვენ ჩაიჭერით");
}