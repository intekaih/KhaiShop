"use strict"

const express = require("express")

const app = express()

const port = process.env.PORT || 9000

// GOI HAM EVENT
const envent = require('events')
const { console } = require("inspector")

const eventEmitter = new envent.EventEmitter();

eventEmitter.on('hetGio', xyLyThongBao);

function xyLyThongBao(tb){
    console.log(tb);
}
setTimeout(()=> {
    eventEmitter.emit('hetGio', 'Het gio hoc roi ve thoi')
}, 2000)

eventEmitter.on('vaoLop', (thongBao) =>{
    console.log(thongBao);
})

setTimeout(()=> {eventEmitter.emit('vaoLop','Hay vao lop hoc')},5000)
//khoi dong web server

app.listen(port, () => {
  console.log(`server dang chay tren cong ${port}`);
});
