
function checkall(x) {
    checkboxes = document.getElementsByName('checkbox')
    for (var i = 0, n = (checkboxes.length); i < n; i++) {
        checkboxes[i].checked = x.checked;
    }

}
function Calculator() {
    var dg = document.getElementsByClassName("dG")
    var sl = document.getElementsByClassName("sL")
    var tt = document.getElementsByClassName("TT")
    var checkboxes = document.getElementsByName('checkbox')
    var x = document.getElementsByClassName("sL");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            tt[i].innerHTML = parseInt(dg[i].innerHTML) * parseInt(sl[i].value) + "$";
            var tien = parseInt(dg[i].innerHTML) * parseInt(sl[i].value);
            if (!Number.isInteger(tien)) {
                tt[i].innerHTML = 0 + "$";
            }
            x[i].disabled = false;
        }
    }
    for (var i = 0; i < checkboxes.length; i++) {
        if (!checkboxes[i].checked) {
            tt[i].innerHTML = null;
            x[i].disabled = true;
        }
    }
    var total = document.getElementById("tong");
    var sum = 0;
    var tt = document.getElementsByClassName("TT")
    var checkboxes = document.getElementsByName('checkbox')
    for (var i = 0; i < tt.length; i++) {
        if (checkboxes[i].checked) {
            sum += parseInt(tt[i].innerText, 10);
        }
    }
    total.innerHTML = sum + "$";

}
function Filter() {
  
    var x1 = document.getElementById("filter").options[1];
    var x2 = document.getElementById("filter").options[2];
    var x3 = document.getElementById("filter").options[3];
    var x4 = document.getElementById("filter").options[4];
    var x5 = document.getElementById("filter").options[5];
    var x6 = document.getElementById("filter").options[6];
    var sp = document.getElementsByClassName("sanpham")
    var dg = document.getElementsByClassName("dG")
    for(var i=0;i<sp.length;i++){
        if(x6.selected){
            sp[i].style.display =""
        }
        if(x1.selected){
            sp[i].style.display =""
            if(parseFloat(dg[i].innerHTML)>=parseFloat(x1.value)){
                sp[i].style.display="none"
        }
       
        }
        if(x2.selected){
            sp[i].style.display =""
            if(parseFloat(dg[i].innerHTML)>=parseFloat(x2.value)){
                sp[i].style.display="none"
        }
        
        }
        if(x3.selected){
            sp[i].style.display =""
            if(parseFloat(dg[i].innerHTML)>=parseFloat(x3.value)){
                sp[i].style.display="none"
        }
        
        }
        if(x4.selected){
            sp[i].style.display="none"
            if(parseFloat(dg[i].innerHTML)==parseFloat(x4.value)){
                sp[i].style.display =""

        }
        
        }
        if(x5.selected){
            sp[i].style.display="none"
            if(parseFloat(dg[i].innerHTML)==parseFloat(x5.value)){
                sp[i].style.display =""
        }
        
        }
    }
}





