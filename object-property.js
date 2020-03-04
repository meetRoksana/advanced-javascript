const students = [
    {id: 12, name: "Rahim"},
    {id: 43, name: "Fahim"},
    {id: 52, name: "Tahim"},
    {id: 72, name: "Mahim"},
];

const names = students.map(s => s.name);
//console.log(names);

const ids = students.map(s => s.id);
//console.log(ids);


const bigger = students.filter(s => s.id > 40);

console.log(bigger);

const bigger1 = students.find(s => s.id > 40);

console.log(bigger1);

