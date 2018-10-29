
let jsonFile = require('jsonfile')
let fileName = 'error.json'

 function getErrorDescription(errorCode)
{
    let errorService  = {};
    let exists = false;
    var indexAt = 0 ;
    jsonFile.readFile(fileName, function(error, jsonData) {


        if(error)
        {

            return {"errMssage":"The file was not found or it is invalid"};

        }

       

        for(let i = 0; i< jsonData.length; i++)
        {

            if(jsonData[i].sessionErrorCode == errorCode)
            {

        
                errorService =  jsonData[i] ;
        
                console.log(errorService);
                 break;

            }


        }

        
      
  
    });

    // setTimeout(function afterTwoSeconds() {
         
    //   },100)

    


}
getErrorDescription(12514);
