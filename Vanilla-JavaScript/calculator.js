const calculator = {
    plus: function(a, b){
        console.log(a+b);
    },
    minus: function(a, b){
        console.log(a-b);
    },
    divide: function(a, b){
        console.log(a/b);
    },
    multiple: function(a, b){
        console.log(a*b);
    },
    powerof: function(a, b){
        console.log(a**b);
    },
}

calculator.plus(1,2); 
calculator.minus(2,1);
calculator.divide(3,4);
calculator.multiple(3,5);
calculator.powerof(2,3);