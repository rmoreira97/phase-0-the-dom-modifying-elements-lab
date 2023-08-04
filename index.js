// Write your code here!
const newHeader = document.createElement('h1');
newHeader.textContent = "Rafa is the champion";
newHeader.id = "victory";


const mainElement = document.getElementById('main');

mainElement.remove();


const element = document.createElement("div");
document.body.append(element);

const ul = document.createElement("ul");

for (let i = 0; i < 20; i++) {
    const li = document.createElement("li");
    li.textContent = (i + 1).toString();
    ul.append(li);
  }

  element.append(ul);

  const main = document.getElementById("main");
main.innerHTML =
  "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";


  



