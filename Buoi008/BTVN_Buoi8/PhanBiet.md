ND1: Cách phân biệt let và var,const trong javascript là
+ phân biệt var và let thì tên biến của var có giống nhau được còn let thì không thể giống nhau
 Ví dụ : var a = 10;
        var a = 20;
        (Hợp lệ)
        còn let a = 10;
            let a = 20;
        (Không hợp lệ)
+ Giống nhau giữa var và let là có thể cập nhật giá trị của chúng
 Ví dụ : var a = 10;
        a = 20;
        let b = 10;
        b = 20;
        (Đều hợp lệ)
+ Phân biệt sự khác nhau giữa let và const là giá trị biến của let có thể thay đổi còn giá trị của const thì k
 Ví dụ : let a = 10;
        a = 20;
        (Hợp lệ)
        const b = 10;
        b = 20;
        (Không hợp lệ)



ND2:Tìm hiểu các loại toans tử 

- Các toán tử gán trong js là:
 + '=' ví dụ là x = 10 nghĩa là gán giá trị 10 vào x;
 + "+=" Ví dụ là x += 10 là công thêm giá trị 10 vào x;
 + "-=" Ví dụ là x -= 10 là trừ đi 10 giá trị của x;
 + "*=" Ví dụ là x *= 10 là x = x*10 là nhân thêm 10 vào x;
 + "/=" Ví dụ là x /= 10 là x = x/10 là chia 10 cho x;
 + "%=" Vís dụ là x %= 10 là lấy giá trị dư của x/10;
 + "??=" Là phép gán khi null

 - Các toán tử số học JS
  + Phép cộng : '+';
  + Phép trừ : '-';
  + Phép nhân: '*';
  + Phép chia: '/';
  + Phép chia lấy dư: '%';
  + Tăng thêm 1 giá trị : " ++ "
  + Giảm đi 1 giá trị: "--";

-Cấc phép toán tử so sánh trong javascript 
 + "==" là so sánh bằng (và giá trị,khônbg so sánh về kiểu dữ liệu);
 + "===" khác vs so sánh bằng là nó có phân biệt về kiểu dữ liệu nếu cùng kdl thì đúng khác là sai;
 + "!=" là so sánh khác giá trị(dấu khác trong js chỉ so sánh và giá trị không xét đến kiểu);
 + "!==" khác vs trên là nó có phân biệt kieeur dữ liệu;
 + '>' là so sánh lớn hơn;
 + '<' là so sánh nhỏ hơn;
 + ">=" là so sánh lơn hơn hoặc bằng;
 + "<=" là so sánh nhỏ hơn hoặc bằng;

- Các toán tử logic trong js
 + "&&" là phép và ;
 + "||" là phép hoặc;
 + "!" là phép phủ định;

 - Toán tử typeof là toán tử kiểm tra kiểu dữ liệu của 1 biến: 
  Ví dụ: var a = 10;
       console.log(typeof(a));//Hiển thị là number
        var b = "HDZ";
        console.log(typeof(b));//Hiển thị là String



ND3 : Các câu lệnh điều kiện trong javascript 

 - Câu lệnh if
  Ví dụ : if(điều kiện){
       đoạn code;
  }
   Là nếu điều kiện đungs thì sẽ thụcw hiện đoạn code trong if conf nếu sai thì sẽ bỏ qua đoạn code trong if;

 - Câu lênhj if esle 
  Ví dụ : if(điều kiện){
       đoạn code 1;
  }else{
       đoạn code 2;
  }
   Là nếu điều kiện đungs thì sẽ thụcw hiện đoạn code 1 trong if conf nếu sai thì sẽ thực hiện đoạn code 2 trong esle;
  - Câu lệnh if esle lồng nhau:
   là nếu đk đúng lại vào kt đk bên trong tiếp;

  - Switch case 
  Đây là một loại câu lênhj rex nhánh (hay còn gọi là câu lệnh điều kiện) có đặc điểm là hay đi giải quyết các bài toán mà có các nhánh là các điều kiện cố định
  cú pháp là 
       switch(condition){
         case value 1 :
           //code
            break;
         case value2:
           //code
           break;
           
         default:
            //code
          break;
       }