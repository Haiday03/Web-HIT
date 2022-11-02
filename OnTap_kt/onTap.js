function kt(){
    var arr = document.getElementsByTagName('input');
    //console.log(arr);
    var testm = arr[0].value;//ten
    var g = arr[1].value;//ho 

    var one = /[a-zA-Z]$/;

    var emailtest = arr[2].value;//email
    var d = arr[3].value;//mat khau
    var f = arr[4].value;// nhap lai mk
    var h = arr[5].value;// ngay
    var n = arr[6].value;// thang
    var t = arr[7].value;//nam
    var l = arr[8].checked;//gioi tinh nam
    var p = arr[9].checked;//Gioi tinh nu

    //phan nay kt xem ho ten co so k 1d
    if(!one.test(testm)){
        alert('Ten k dc co so');
        return;
    }
    //day la kt email xem dung formal chua! 2d
    var regex = /^\w+@\w*\.\w*\.\w+$/;
    var regex2 = /^\w+@\w+\.\w+$/i;
    if(!regex.test(emailtest) && !regex2.test(emailtest)){
        alert("Ban nhap sai email");
        return;
    }
    // day la kt sdt neu co nhe! var reg = /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/; 
    // day la kt mk xem co toi thieu 7 ki tu va it nhat 1 hoa 1 thuong va 1 so chua
    // var reg = /^\[a-z]{1,}\[A-Z]{1,}\[0-9]{1,}$/; chua lam dc
    if(d.length <= 7){
        alert("Mk bn da nhap sai");
        return;
    }

    //kt xem mk va nhap lai mk co giong nhau khong
    if(d != f){
        alert('Mat khau va nhap lai mat khau phai trung nhau!');
        return;
    }
    if(n == "" || t == "" || h ==""){
        alert('Ngay thang nam k dc de trong');
        return;
    }
    if(p || l){
        
    }else {
        alert('Phai chon 1 trong 2 gt');
        return;
    }
    var gender = '';
    if(arr[8].checked){
        gender = "Male";
    }else {
        gender = "Female";
    }
    //Buoc cuoi hien thi ra mot trang khac
    document.write("Da nhap dung het tat ca thong tin gom ten la " + testm + " ho la " + g + "\n email:" + emailtest + "\n mk:" + d + "\n Ngay thang nam sinh la " + h + "/" + n +"/" + t +"\n Gioi tinh la "+ gender);
}     
//tenMang.charAt(chi so) la kiểm tra hoặc lấy từng pt đó trong mangr
//tenMang.split(',') tách chuôizx thành mang qua dấu phay
//tenMang.replace("Chuỗi cần muốn đỏi","chuõi thay thế")
//Cac phep de kiemtr tra email /^\w la kt chu so va chu cai + @[a-aA-Z]{3,} it nhat phai co 3 ky tu la kt co @ hay k va sau @ phair la chu ms dung \.com$ la cai cuoi cung phai la .com /i la k phan bietj chu hoa chu thuong
//var phoneNumberattern =  /^\d{3}[-\s]+ la it nhat 1 khoang trang ?\d{3}[-\s]?\d{4}$/; la kiem tra sdt co 3 so dau 3 so giyua va 4 so cuoi
//placeholder=".." trong input
