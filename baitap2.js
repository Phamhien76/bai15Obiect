// 2. Viết hàm checkEmpty kiểm tra đối tượng có thuộc tính không? 
// Có thì trả về true, ngược lại trả về false

function checkEmpty(checkept,per){
return per in  checkept;
}
const check={
   name:"Nguyễn thị Na",
    Sex:"true",
    tAge:"3",
};

console.log(checkEmpty(check,"name"));

console.log(checkEmpty(check,"address"));