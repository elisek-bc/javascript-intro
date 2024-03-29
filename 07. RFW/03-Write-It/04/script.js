const bestActors = [
    {
      actor: "Forest Whitaker",
      film: "The Last King of Scotland",
      age: 45
    }, {
      actor: "Daniel Day-Lewis",
      film: "There Will Be Blood",
      age: 50
    }, {
      actor: "Sean Penn",
      film: "Milk",
      age: 48
    }, {
      actor: "Jeff Bridges",
      film: "Crazy Heart",
      age: 60
    }, {
      actor: "Colin Firth",
      film: "The King's Speech",
      age: 50
    }, {
      actor: "Jean Dujardin",
      film: "The Artist",
      age: 39
    }, {
      actor: "Daniel Day-Lewis",
      film: "Lincoln",
      age: 55
    }, {
      actor: "Matthew McConaughey",
      film: "Dallas Buyers Club",
      age: 44
    }, {
      actor: "Eddie Redmayne",
      film: "The Theory of Everything",
      age: 33
    }, {
      actor: "Leonardo DiCaprio",
      film: "The Revenant",
      age: 41
    }
  ];

const wrapWithTag = (content,tag) => 
`<${tag}>${content}</${tag}>`;

const fullNames = bestActors.map((oscar) => oscar.actor);
console.log(fullNames);
const lastNames = fullNames.map((name) => name.split(' ').slice(-1));
const listItems = lastNames.map((name) => wrapWithTag(name,`li`))
const sorted = listItems.sort();

document.write(`<ul> ${sorted} </ul>`);

