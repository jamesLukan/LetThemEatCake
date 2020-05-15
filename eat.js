function eat_cake(str){
 var k = 0
    if(str.length == 0){
        k = 1
    }

    for (var i =0; i <= str.length; i++) {
        if ((str.length % i) == 0) {
            if (str.substring(0, str.length / i) == str.substring(str.length - str.length / i, str.length)) {
                k = i
            }
        }
    }
    return k
}
