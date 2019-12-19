import myExcelXML from './jsonToExcel'

let data = [
    {       
        'item': 1,
        'description': 1
    },
    {       
        'item': 1,
        'description': 1
    },
    {       
        'item': 1,
        'description': 1
    },
    {       
        'item': 1,
        'description': 1
    },
]

var myTestXML = new myExcelXML(JSON.stringify(data));
myTestXML.downLoad();