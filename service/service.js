angular.module("tempTwo")
      .service("sharedProperties", function() {
    
          var objectValue = {};
    
    return {
       
        getObject: function() {
            return objectValue;
        },

        setObject: function(value) {
        	objectValue = value;
        }
    };
});
