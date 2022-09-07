

function price_plan(){

    var names = [];

    function pushingNames(name) {

        if(names.includes(name)){
         return false
        }else{
         return names.push(name)
        }
     }
     
   
 
     function ourNames() {
         return names
     }

    return{
        pushingNames,
        ourNames,

    }
}