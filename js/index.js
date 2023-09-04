function clearAndShow(arr, position, input) {
  input.value = "";
  position.innerHTML = "";
  position.innerHTML += "Số đã nhập: " + arr.join(", ");
}
function reset(arr, position) {
  arr.splice(0, arr.length);
  position.innerHTML = "";
}

function check(arr, input, position) {
  var checkNum = Number.isInteger(input);
  if (checkNum === true) {
    arr.push(input);
    position.innerHTML = "";
  } else {
    position.innerHTML = "Vui lòng nhập số nguyên";
  }
}

// BT1
var arrNum = [];
var box = document.querySelector("#display");
var boxWarning = document.querySelector("#displayWarning");
document.querySelector("#addNum1").onclick = function () {
  var inputNum = +document.querySelector("#inputNum").value;
  // var check = Number.isInteger(inputNum);
  // if( check === true){
  //   arrNum.push(inputNum);
  // }
  check(arrNum, inputNum, boxWarning);

  console.log("Số đã nhập:" + arrNum);
  clearAndShow(arrNum, box, document.querySelector("#inputNum"));
};

document.querySelector("#reset1").onclick = function () {
  reset(arrNum, box);
};

document.querySelector("#handleNum1").onclick = function () {
  var sumPlus = 0;
  for (var i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > 0) {
      sumPlus += arrNum[i];
    }
  }
  document.querySelector("#result1").innerHTML = `
    Tổng các số dương: ${sumPlus}`;
};

//-------------------------------------------------------------------------------------
// BT2

document.querySelector("#countNumb2").onclick = function () {
  var countPlus = 0;
  for (var i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > 0) {
      countPlus++;
    }
  }
  document.querySelector(
    "#result2"
  ).innerHTML = ` Tổng các số dương: ${countPlus}`;
};

//----------------------------------------------------------------------------------------
// BT3

document.querySelector("#findNum3").onclick = function () {
  var minNum = arrNum[0];
  for (var i = 0; i < arrNum.length; i++) {
    if (arrNum[i] < minNum) {
      minNum = arrNum[i];
    }
  }

  document.querySelector(
    "#result3"
  ).innerHTML = ` Số nhỏ nhất của chuỗi: ${minNum}`;
};

//-------------------------------------------------------------------------------------
// BT4

document.querySelector("#findNum4").onclick = function () {
  var minNum4 = arrNum[0];
  for (var i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > 0 && arrNum[i] < minNum4) {
      minNum4 = arrNum[i];
    }
  }

  document.querySelector(
    "#result4"
  ).innerHTML = ` Số nhỏ nhất của chuỗi: ${minNum4}`;
};

//--------------------------------------------------------------------------------------
// BT5
var arrNum2 = [];
document.querySelector("#findNum5").onclick = function () {
  for (var i = 0; i < arrNum.length; i++) {
    var arrNum2 = arrNum.filter(function (n) {
      return n % 2 == 0;
    });
    console.log(arrNum2);

    if (arrNum2.length == "") {
      document.querySelector("#result5").innerHTML = "Chuỗi không chứa số chẵn";
    } else {
      var lastNum = arrNum2.pop();
      document.querySelector(
        "#result5"
      ).innerHTML = ` Số chẵn cuối cùng: ${lastNum}`;
    }
  }
};

//------------------------------------------------------------------------------------------
//BT6
document.querySelector("#swapNum6").onclick = function () {
  var m = +document.querySelector("#locate1").value;
  var n = +document.querySelector("#locate2").value;
  if (m < arrNum.length && n < arrNum.length) {
    [arrNum[m], arrNum[n]] = [arrNum[n], arrNum[m]];

    document.querySelector("#result6").innerHTML = ` Sau thay đổi: ${arrNum}`;
  } else {
    document.querySelector("#result6").innerHTML = "vui lòng nhập lại vị trí";
  }

  clearAndShow6();
};

function clearAndShow6() {
  document.querySelector("#locate1").value = "";
  document.querySelector("#locate2").value = "";
}

//---------------------------------------------------------------------------------------
// BT7
document.querySelector("#sortNum7").onclick = function () {
  arrNum = arrNum.sort(function (a, b) {
    return a - b;
  });
  document.querySelector("#result7").innerHTML = arrNum;
};

//--------------------------------------------------------------------------------------
// BT8

document.querySelector("#findNum8").onclick = function () {
  var arrNum8 = [];
  arrNum8 = arrNum.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return number > 1;
  });

  console.log(arrNum8);

  for (var m = 0; m <= arrNum8.length; m++) {
    var index = arrNum8.indexOf(arrNum8[m], -1);
    if (index == -1) {
      document.querySelector("#result8").innerHTML =
        "Không tìm thấy số nguyên tố";
    } else {
      var arrShift = arrNum8.shift();
      document.querySelector(
        "#result8"
      ).innerHTML = ` Số nguyên tố đầu tiên: ${arrShift}`;
    }
  }
};

//------------------------------------------------------------------------------------
// BT9
var arrNum9 = [];
var box9 = document.querySelector("#display9");
document.querySelector("#addNum9").onclick = function () {
  inputNum9 = +document.querySelector("#inputNum9").value;
  arrNum9.push(inputNum9);
  clearAndShow(arrNum9, box9, document.querySelector("#inputNum9"));
};

document.querySelector("#reset9").onclick = function () {
  reset(arrNum9, box9);
};
document.querySelector("#findNum9").onclick = function () {
  for(var k = 0; k < arrNum9.length; k++){
    if(Number.isInteger(arrNum9[k]) === false){
      arrNumber.splice(k, 1);
    }
  }
  
  console.log(arrNum9);
  var count = arrNum9.length;
  if (count === 0) {
    document.querySelector(
      "#result9"
    ).innerHTML = ` Mảng gồm không chứa số nguyên.`;
  } else {
    document.querySelector(
      "#result9"
    ).innerHTML = ` Mảng gồm ${count} số nguyên.`;
  }
};

//---------------------------------------------------------------------------------------
// BT10
document.querySelector("#compare10").onclick = function () {
  var positiveNum = [];
  var negativeNum = [];
  for (var i = 0; i < arrNum.length; i++) {
    if (arrNum[i] !== 0) {
      if (arrNum[i] > 0) {
        positiveNum.push(arrNum[i]);
      } else {
        negativeNum.push(arrNum[i]);
      }
    }
    // console.log(positiveNum);
    // console.log(negativeNum);
    if (positiveNum.length > negativeNum.length) {
      document.querySelector("#result10").innerHTML =
        "Số dương nhiều hơn số âm";
    } else if (positiveNum < negativeNum) {
      document.querySelector("#result10").innerHTML =
        "Số âm nhiều hơn số dương";
    } else {
      document.querySelector("#result10").innerHTML =
        "Số âm và số dương bằng nhau";
    }
  }
};
