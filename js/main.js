const generateBtn = document.querySelector('.advice button');
function generate() {
  let response = fetch('https://api.adviceslip.com/advice');
  response.then(res => res.json()).then(
    (data) => {
      console.log(data);
      const adviceHTML = document.querySelector('.advice .text');
      const idHTML = document.querySelector('.advice .id span');
      let advice = data.slip.advice;
      let id = data.slip.id;
      adviceHTML.textContent = '“ ' + advice + ' ”';
      idHTML.textContent = id;
    });
}
generateBtn.onclick = generate;