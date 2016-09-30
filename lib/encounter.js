var jsonContent='';

function Encounter(json) {
  var fs = require("fs");
  var contents = fs.readFileSync(json);
  this.jsonContent = JSON.parse(contents);
  console.log(this.jsonContent);
  console.log(this.jsonContent.description);
}

 Encounter.prototype.describe = function() {
   return JSON.stringify(this.jsonContent.description);
 };

 Encounter.prototype.getNPCList = function() {
   var npcList = [];
   var creatures = this.jsonContent.creatures.forEach(function(creature){
     npcList.push(creature["name"])
   });
   console.log(npcList[2])
   return npcList;
 }

module.exports = Encounter;
