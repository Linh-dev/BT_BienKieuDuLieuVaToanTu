let Nhaply = prompt("Nhap Diem Mon Vat Ly:");
let Nhaphoa = prompt("Nhap Diem Mon Hoa Hoc:");
let Nhaptoan = prompt("Nhap Diem Mon Toan:");
let ly = parseInt(Nhaply);
let hoa =  parseInt(Nhaphoa);
let toan = parseInt(Nhaptoan);
let tong = ly+hoa+toan;
let tb = tong/3;
document.write('Diem Vat Ly: '+ly);
document.write('<br>');
document.write('Diem Hoa Hoc: '+hoa);
document.write('<br>');
document.write('Diem Toan: '+toan);
document.write('<br>');
document.write('Tong Diem: '+tong);
document.write('<br>');
document.write('Diem Trung Binh: '+tb);