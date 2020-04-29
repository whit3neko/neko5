
function ValidateForm() {
    var msv = document.forms["form1"].masv.value;
    var name = document.forms["form1"].ten.value;
    var email = document.forms["form1"].email1.value;
    var nam = document.getElementById("gtnam");
    var nu = document.getElementById("gtnu");
    
    if (msv == '') {
        alert("Không để trống mã svsv")
        document.getElementById("msv").style.background = "yellow";
        return false;
    }
    else {
       
        document.getElementById("msv").style.background = "none";
    }


    if (name == '') {
        alert( "Không được để trống họ tên");
        document.getElementById("name").style.background = "yellow";
        return false;
    }
    else {
        document.getElementById("errorname").innerHTML = "";
        document.getElementById("name").style.background = "none";
        
    }


    if (email == '') {
        
        document.getElementById("email").style.background = "yellow";
        
    }
    else {
        
        document.getElementById("erroremail").innerHTML = "";
        document.getElementById("email").style.background = "none";
        
    }

   
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form1.email1.value))
  {
    document.getElementById("erroremail").innerHTML = "";
    document.getElementById("email").style.background = "none";
   
  }
  else {
     alert( "Vui lòng nhập đúng định dạng email.");
    document.getElementById("erroremail").style.color = "red";
    document.getElementById("email").style.background = "yellow"; 
    return false;
}
if (nam.checked == false && nu.checked == false) {
   alert( "Vui lòng chọn giới tính")
  return false;
}
else {
    document.getElementById("errorgender").innerHTML = ""
    document.getElementById("errorgender").style.color = "red"
}

        var sothich = document.querySelectorAll('.sothich:checked');
        if (sothich.length === 0) {
               alert( 'Chọn ít nhất 1 sở thích');
                return false;
        }
        else{
            document.getElementById("errorhob").innerHTML= ''

        }

    if (document.getElementById("quoctich").selectedIndex == 0) 
    {
        alert(  "Vui lòng chọn quốc tịch");
        
        document.getElementById("quoctich").style.background = "yellow";
        return false;
    }
    else {
        document.getElementById("errorReg").innerHTML = "";
        document.getElementById("quoctich").style.background = "none";
    }
alert("Success Register") 
    
}

