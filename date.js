let date_ob = new Date();

let date = ("0" + date_ob.getDate()).slice(-2);

let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

let year = date_ob.getFullYear();

let hours = date_ob.getHours();

let minutes = date_ob.getMinutes();

let seconds = date_ob.getSeconds();

console.log("\x1b[36m"+hours + "\x1b[0m:" + "\x1b[36m"+minutes + "\x1b[0m:" + "\x1b[36m"+seconds + " \x1b[0m(" + "\x1b[36m"+date + "\x1b[0m-" + "\x1b[36m"+month + "\x1b[0m-" + "\x1b[36m"+year + "\x1b[0m)" );