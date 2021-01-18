Object.size = function(obj) {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };
  


module.exports = {
  Checkifexists:function(param1,param2){
        var x,count,length
        length = Object.size(param1)
        count = 0
        for (x in param1){
            count++
            if ( count <= length ){
                if ( param1[x].name === param2 ) {
                    return true ,param1[x].conn
                } 
             }else if ( count === length ) {
                 return false
            }
            
        }
    }
}


