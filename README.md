# JsonToExcel
This library is not mine, it is one that I found in stackoverflow but it is not sufficiently documented and arranged as public use is for the person in this forum https://stackoverflow.com/questions/28892885/javascript-json-to-excel-file-download/52948276#52948276


How To Use:
    - `import`
    - `Json Data`
    - `Send Data in string`
    - `Download`

    ```javascript
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
    ```
    
