"use strict";

const express = require("express");

const app = express();

const port = process.env.PORT || 9000;

// GOI HAM EVENT
const envent = require("events");
const { console } = require("inspector");

const eventEmitter = new envent.EventEmitter();

eventEmitter.on("hetGio", xyLyThongBao);

function xyLyThongBao(tb) {
  console.log(tb);
}
setTimeout(() => {
  eventEmitter.emit("hetGio", "Het gio hoc roi ve thoi");
}, 2000);

eventEmitter.on("vaoLop", (thongBao) => {
  console.log(thongBao);
});

setTimeout(() => {
  eventEmitter.emit("vaoLop", "Hay vao lop hoc");
}, 5000);

// Middleware: ghi log mỗi khi có GET request

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] nhận GET request tại ${req.url}`);

  // Chuyển tiếp sự kiện đến route handler

  next();
});

// Express lắng nghe sự kiện GET request, tại route /

// nếu có sự kiện, gọi hàm callback (route handler) tương ứng

app.get("/", (req, res) => {
  const name = req.query.name;

  res.send(`Web server chào bạn ${name}`);
});

// Nối tiếp Route handler

app.get('/profile', (req, res, next) =>

{

      console.log('Kiểm tra quyền truy cập...');

      req.user = { name: "Ti"}; // Giả lập thêm dữ liệu

      next(); // Chuyển tiếp

    },

    (req, res) => { 

res.send(`Chào bạn: ${req.user.name}`);

    }

  );

//khoi dong web server
app.listen(port, () => {
  console.log(`server dang chay tren cong ${port}`);
});
