const csv2json = require('csvjson-csv2json');
const fs  = require('fs');
// const fsPromises = reuire('fs').promises;

fs.promises.readFile('./SampleFile_GOSales.xls - page.csv','utf-8' )
.then ( (result) => {
  const json = csv2json(result, {parseNumbers: true})
  const jsonString = JSON.stringify(json)
  console.log(json)
  fs.promises.writeFile('resultString.json', jsonString)
})
.catch( (error) => {
  console.log(error)
})