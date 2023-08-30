// BT1
var inputNum = [];
var arrNum1 = document.querySelector("#arrNumber1");
var box = document.querySelector("#display");
document.querySelector("#addNum1").onclick = function () {
  var arrNum1 = +document.querySelector("#arrNumber1").value;
  inputNum.push(arrNum1);
  console.log("Số đã nhập:" + inputNum);
  clearAndShow();
};
function clearAndShow() {
  arrNum1.value = "";
  box.innerHTML = "";
  box.innerHTML += "Số đã nhập: " + inputNum.join(", ");
}

document.querySelector("#handleNum1").onclick = function () {
  var sumPlus = 0;
  for (var i = 0; i < inputNum.length; i++) {
    if (inputNum[i] > 0) {
      sumPlus += inputNum[i];
    }
  }
  document.querySelector("#result1").innerHTML = `
    Tổng các số dương: ${sumPlus}`;
};

//-------------------------------------------------------------------------------------
// BT2

document.querySelector("#countNumb2").onclick = function() {
    var countPlus = 0;
    for(var i = 0; i < inputNum.length; i++){
        if(inputNum[i] > 0){
            countPlus++;
        }
    }
    document.querySelector("#result2").innerHTML = ` Tổng các số dương: ${countPlus}`
}

//----------------------------------------------------------------------------------------
// BT3

document.querySelector("#findNum3").onclick = function() {
    var minNum = inputNum[0]
    for(var i = 0; i < inputNum.length; i++){
        if(inputNum[i] < minNum){
            minNum = inputNum[i]
        }
    }

    document.querySelector("#result3").innerHTML = ` Số nhỏ nhất của chuỗi: ${minNum}`
}

//-------------------------------------------------------------------------------------
// BT4 

document.querySelector("#findNum4").onclick = function() {
    var minNum4 = inputNum[0]
    for(var i = 0; i < inputNum.length; i++){
        if(inputNum[i] > 0 && inputNum[i] < minNum4){
            minNum4 = inputNum[i]
        }
    }

    document.querySelector("#result4").innerHTML = ` Số nhỏ nhất của chuỗi: ${minNum4}`
}

//--------------------------------------------------------------------------------------
// BT5 
var inputNum2 = [];
document.querySelector("#findNum5").onclick = function() {
    for(var i = 0; i < inputNum.length; i++){
        var inputNum2 = inputNum.filter(function (n) {
            return n%2 == 0;
        })
        console.log(inputNum2);

        if(inputNum2.length == ""){
            document.querySelector("#result5").innerHTML = "Chuỗi không chứa số chẵn"
        } else {
            var lastNum = inputNum2.pop()
            document.querySelector("#result5").innerHTML = ` Số chẵn cuối cùng: ${lastNum}`
        }
    }
}

document.querySelector("#swapNum6").onclick = function () {
    var m = +document.querySelector("#locate1").value;
    var n = +document.querySelector("#locate2").value;
    if(m < inputNum.length && n < inputNum.length){
        [inputNum[m], inputNum[n]] = [inputNum[n], inputNum[m]];

        document.querySelector("#result6").innerHTML = ` Sau thay đổi: ${inputNum}`
    } else {
        document.querySelector("#result6").innerHTML = "vui lòng nhập lại vị trí"
    }

    clearAndShow6()
}

function clearAndShow6 () {
    document.querySelector("#locate1").value = "";
    document.querySelector("#locate2").value = "";
}
