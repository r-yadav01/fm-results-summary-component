console.log('script loaded successfully');

let data = null;
fetch('data.json')
  .then((resolved) => resolved.json())
  .then((json) => createSubject(json));

function createSubject(objArray) {
  const summary = document.querySelector('.summary');

  objArray.forEach((personData, index) => {
    const currSubject = document.createElement('div');
    currSubject.setAttribute('class', `subject sub-${index}`);

    const subName = document.createElement('span');
    subName.setAttribute('class', 'sub-name');

    const subImage = document.createElement('img');
    subImage.setAttribute('src', personData.icon);
    subImage.setAttribute('alt', 'subject-icon');

    subName.appendChild(subImage);
    subName.innerText = personData.category;

    const marks = document.createElement('span');
    marks.setAttribute('class', 'marks');

    const marksObt = document.createElement('b');
    marksObt.innerText = personData.score;

    marks.appendChild(marksObt);
    marks.append(' / 100');

    currSubject.appendChild(subName);
    currSubject.appendChild(marks);

    summary.appendChild(currSubject);
  });

  const buttonn = document.createElement('button');
  buttonn.setAttribute('class', 'continue');
  buttonn.innerText = 'continue';

  summary.appendChild(buttonn);

  calculateResult();
}

function calculateResult() {
  let sum = 0;

  const marksList = document.querySelectorAll('.marks b');
  marksList.forEach((element) => (sum += Number(element.innerText)));

  let percentScored = Math.floor((sum / (marksList.length * 100)) * 100);
  const result = document.querySelector('.obtained');
  result.innerText = percentScored;
}
