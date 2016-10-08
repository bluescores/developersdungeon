//consider a battle.js, encounter.js, puzzle.js, and so forth

var jsonContent='';

function Encounter(encFile) {
  var fs = require("fs");
  var json = fs.readFileSync(encFile);
  this.jsonContent = JSON.parse(json);
  console.log(this.jsonContent)
}

 Encounter.prototype.describe = function() {
   return JSON.stringify(this.jsonContent.description);
 };

 Encounter.prototype.getMonsterList = function() {
   var npcList = [];
   var npc = this.jsonContent.npcs.forEach(function(npc){
     npcList.push(npc["name"])
   });
   console.log(npcList)
   return npcList;
 }

module.exports = Encounter;
