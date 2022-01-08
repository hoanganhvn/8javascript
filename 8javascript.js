// // BTTVN 1
// let a = parseInt(prompt("Nhập vào số cần tính thứ 1:"));
// let b = prompt("Nhập vào phép tính:");
// let c = parseInt(prompt("Nhập vào số cần tính thứ 2:"));
// let d;
// switch (b) {
//   case "+":
//     d = a + c;
//     break;
//   case "-":
//     d = a - c;
//     break;
//   case "*":
//     d = a * c;
//     break;
//   case "/":
//     d = a / c;
//     break;
// }
// alert("Kết quả là: " + d.toFixed(2));





// // BTTVN 2
let n = parseInt(prompt("Nhập vào số cần kiểm tra có phải là số nguyên tố hay không:"));

if (n == 2 || n ==3 || n ==5 || n ==7) {
    alert(n + " là số nguyên tố");
} else if (n > 1 && n%2 != 0 && n%3 != 0 && n%5 != 0 && n%7 != 0){
        alert(n + " là số nguyên tố");
    } else {
        alert(n + " không phải là số nguyên tố");
    }
