var romanToInt = function(s) {
    var sum = 0;
    for(var start=0;start< s.length;start++){
        if(s[start] == "I"){
            sum += 1;
        }else if(s[start] == "V"){
            sum += 5;
        }else if(s[start] == "X"){
            sum += 10;
        }else if(s[start] == "L"){
            sum += 50;
        }else if(s[start] == "C"){
            sum += 100;
        }else if(s[start] == "D"){
            sum += 500;
        }else if(s[start] == "M"){
            sum += 1000;
        }
    }
    for(var start=1;start< s.length;start++){
        if(s[start] == "V" || s[start] == "X"){
            if(s[start-1] == "I"){
                sum -= 2;
            }
        }else if(s[start] == "L" || s[start] == "C"){
            if(s[start-1] == "X"){
                sum -= 20;
            }
        }else if(s[start] == "D" || s[start] == "M"){
            if(s[start-1] == "C"){
                sum -= 200;
            }
        }
    }


    return sum;
};


