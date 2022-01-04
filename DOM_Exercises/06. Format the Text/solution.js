function solve() {
  let input = document.getElementById('input').value;
  let output = document.getElementById('output');
  let sentences = input.split('.').filter(x => x !== '').map(x => x + '.');
  let paraNums = Math.ceil(sentences.length / 3);

  for (let i = 0; i < paraNums; i++) {
    output.innerHTML += `<p>${sentences.splice(0, 3).join('')}</p>`;
  }
}