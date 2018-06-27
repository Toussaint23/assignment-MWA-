const subInput = document.querySelector('input');
const result = document.querySelector('#display');

const { Observable, from, interval, of } = rxjs;
const { map, filter, mergeAll, take, flatMap, single } = rxjs.operators;

var value = myFirstTest("https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json");
var myObservable = from(value);
myObservable.pipe( flatMap((obj)=>obj.teams)).subscribe((obj) => firstDisplay(obj));


function myFirstTest(url) {
    const value = fetch(url).then((data)=>data.json());
    return value;
}

function firstDisplay(val){
    var row = document.createElement("tr");
    var flagTeam = document.createElement("td");
    var nameTeam = document.createElement("td");
    var flagData = document.createElement("img");
    var nameData = document.createTextNode(val.name);
    
    flagData.setAttribute("src", val.flag);
    flagTeam.appendChild(flagData);
    nameTeam.appendChild(nameData);
    row.appendChild(flagTeam);
    row.appendChild(nameTeam);
    result.appendChild(row);
}

function searchTeams(val) {
    myObservable.pipe( 
        flatMap((obj)=>obj.teams),
        filter((obj)=>obj.name.match(val))
    )
    .subscribe((obj) => firstDisplay(obj));
  }

subInput.addEventListener('keyup', () => {
    result.innerHTML = "";
    searchTeams(subInput.value);
  });
