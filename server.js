const jsonString = '{"name": "john", "age":30, "city": "new york"}'
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name);