// setTimeout(function () {
//   console.log("Đã hết 3 giây! (sau 3 giây)");
// }, 3000);

// console.log("Đang chờ");

// setTimeout(() => {
//   console.log("Đã hết 4 giây! (sau 4 giây)");
// }, 4000);

// console.log("Đang chờ");

const numbers1 = [1, 2, 3, 4];

numbers1.forEach(function (num) {
  console.log(num + 1);
});

//Kết quả: 2, 3, 4, 5 Viết lại theo kiểu arrow function:

const numbers = [1, 2, 3, 4];

numbers.forEach((num) => console.log(num + 1));

const thongBao = () => {
  console.log("Chưa có thông báo, khi nào có thông báo sẽ thông báo!");
};

thongBao();

const binhPhuong = x => x * x;

console.log(binhPhuong(25)); // 9

const numbers2 = [1, 2, 3, 4];

numbers.forEach((num) => console.log(num * num));

function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // 'this' tham chiếu đến đối tượng Person

    console.log(this.age);
  }, 1000);
}

const p = new Person();