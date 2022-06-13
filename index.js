// Code your solution here
function findMatching(driverNames,string){
 return driverNames.filter((match)=>match.toLowerCase()===string.toLowerCase())
}

function   fuzzyMatch(driverNames,string){
    return driverNames.filter((match)=>match.toLowerCase().indexOf(string.toLowerCase())=== 0)
}
function matchName(drivers, driverName) {
    return drivers.filter((record) => record.name === driverName);
  }