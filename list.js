/* todo
stringified JSON object holding initial messages
-> this is a string
*/

const initMessage1 = {
  text: 'List item example 1'
};
const initStr = JSON.stringify(initMessage1);

const defaultCateg = 'default';
const schoolCateg = 'school';
const workCateg = 'work';
const homeCateg = 'home';

function displayInit() {
  let initText;

  JSON.parse(initStr,(key, value) => {
    if (typeof value === 'string') {
      initText = value;
    }
  })

  let span = document.createElement('span');
  let item = document.createElement('li');
  let text = document.createTextNode(initText);
  span.appendChild(item);
  item.appendChild(text);
  item.classList.add('listItem');

  document.getElementById('addedItems').appendChild(span);
}

function addItem() {
  let input = document.getElementById('input').value;

  let span = document.createElement('span');
  let item = document.createElement('li');
  let text = document.createTextNode(input);
  let category = document.getElementById('chooseType').value;

  span.appendChild(item);
  item.appendChild(text);

  switch(category) {
    case schoolCateg:
      item.classList.add('schoolItem');
      break;
    case workCateg:
      item.classList.add('workItem');
      break;
    case homeCateg:
      item.classList.add('homeItem');
      break;
    default:
      item.classList.add('defaultItem');
  }

  item.classList.add('listItem');

  document.getElementById('addedItems').appendChild(span);
  document.getElementById('input').value = '';
}


function clearList() {
  let list = document.getElementById('addedItems');
  list.innerHTML = '';
}
