var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};


$(document).ready(function() {
  $("#math").submit(function(){
    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());
    var operation = $("input:radio[name=math]:checked").val();
    if (operation == "add"){
      var result = add(number1, number2);
    } else if(operation == "subtract"){
      var result = subtract(number1, number2);
    } else if(operation == "multiply"){
      var result = multiply(number1, number2);
    } else {
      var result = divide(number1, number2);
    }

    $("#output").text(result);
    event.preventDefault();
  });
});
