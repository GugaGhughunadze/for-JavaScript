// ახალი მესიჯი

console.log("სალამი შემოგევლე");

let newMessages = true;
if(newMessages) {
    console.log("შენ გაქვს რამდენიმე წაუკითხავი მესიჯი");
}



// ონლაინ მაღაზია

let userBalance = 2000;
let cartTotal = 1000;

if(cartTotal <= userBalance) {
    console.log("გადახდა წარმატებით შესრულდა");
} else {
    console.log("თქვენ არ გაქვთ საკმარისი თანხა");
}



// სტუდენტი გამოცდაზე

let testScore = 100;

if(testScore >= 95) {
    console.log("გილოცავთ! თქვენ მოხვდით ნოვატორში!");
} else if(testScore >= 70) {
    console.log("გილოცავთ! თქვენ მოხვდით კემბრიჯში!");
} else if(testScore >= 50) {
    console.log("არ გილოცავთ! თქვენ მოხვდით გეპეიში...");
}



// ფასდაკლებების სისტემა

let adminSale = 25;
let frequentClientSale = 35;
let studentSale = 50;

let usersBalance = 500;
let cartsTotal = 250;

let userIsAdmin = true;
let userIsFrequentClient = false;
let userIsStudent = false;

if(userIsAdmin && usersBalance >= cartsTotal - adminSale) {
    console.log("გადახდა წარმატებით შესრულდა");
} else if(userIsFrequentClient && usersBalance >= cartsTotal - frequentClientSale) {
    console.log("გადახდა წარმატებით შესრულდა");
} else if(userIsStudent && usersBalance >= cartsTotal - studentSale ) {
    console.log("გადახდა წარმატებით შესრულდა");
} else {
    console.log("თქვენ არ გაქვთ საკმარისი თანხა");
}



// თბილისი - ბათუმი

let fuel = 200;

if(fuel <= 10) {
    console.log("ამ წვეთებით იგოეთამდე თუ მოახერხებ ჩაგორებას ჩემო ძმაო");
} else if(fuel <= 20) {
    console.log("გორის კატლეტებამდე მიხვალ");
} else if(fuel <= 30) {
    console.log("ხაშურში ვართ?");
} else if(fuel <= 50) {
    console.log("ბიკენტიას საქაბაბის მიდამოები");
} else if(fuel <= 80) {
    console.log("ბათუმს ქათქათას");
} else if(fuel <= 110) {
    console.log("ბიკენტიას საქაბაბის მიდამოები");
} else if(fuel <= 130) {
    console.log("ხაშურში ვართ?");
} else if(fuel <= 140) {
    console.log("გორის კატლეტებამდე მიხვალ");
} else if(fuel <= 150) {
    console.log("ამ წვეთებით იგოეთამდე თუ მოახერხებ ჩაგორებას ჩემო ძმაო");
} else if(fuel >= 160) {
    console.log("თბილისო...");
}