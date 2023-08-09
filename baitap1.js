// 1. Tạo đối tượng person rỗng
// a. Thêm thuộc tính firstName và lastName với giá trị là “Nguyễn Văn” và “Bình”
// b. Thay đổi giá trị lastName là “Hòa”
// c. Xóa thuộc tính lastName khỏi đối tượng

// 1. Tạo đối tượng person rỗng
let person = {};
// a. Thêm thuộc tính firstName và lastName với giá trị là “Nguyễn Văn” và “Bình”
person.firstName = "Nguyễn Văn";
person.lastName = "Bình";
//b. Thay đổi giá trị lastName là “Hòa”
person.lastName = "Hòa";

console.log("Trước khi xóa: ", person);
// c. Xóa thuộc tính lastName khỏi đối tượng
delete person.lastName;

console.log("sau khi xóa: ", person);

