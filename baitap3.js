// 3. Xây dựng đối tượng chứa tiền lương của các nhân viên trong phòng. 
// Viết hàm tính tổng lương của các nhân viên trong phòng

//xay dung doi tuong chứa tiền lương.
let nhanViens=[
    {name:"nguyenVanA", luong: 2000},
    {name:"nguyenVanB", luong: 1500},
    {name:"nguyenVanC", luong: 3000},
    {name:"nguyenVanD", luong: 2500},
];

//Viết hàm tính tổng lương của các nhân viên trong phòng
function tinhtongLuong(){
    let tongLuong=0;
    for(let nhanVien of nhanViens){
        tongLuong+=nhanVien.luong;
    }
return tongLuong;
}
console.log(nhanViens);
console.log("tổng lương là: ", tinhtongLuong());