window.addEventListener('load', solution);

function solution() {
  let fullNameField = document.getElementById('fname');
  let emailField = document.getElementById('email');
  let phoneNumberField = document.getElementById('phone');
  let addressField = document.getElementById('address');
  let postalCodeField = document.getElementById('code');
  let submitBtn = document.getElementById('submitBTN');
  let editBtn = document.getElementById('editBTN');
  let continueBtn = document.getElementById('continueBTN');

  submitBtn.addEventListener('click', submitHandler);

  function submitHandler(event){
    event.preventDefault()

    let fullName = fullNameField.value;
    let email = emailField.value;
    let phone = phoneNumberField.value;
    let address = addressField.value;
    let postalCode = postalCodeField.value;

    if (fullName == '' && email == '') {
      return;
    }

    let ul = document.getElementById('infoPreview')

    ul.appendChild(e('li', {}, `Full Name: ${fullName}`));
    ul.appendChild(e('li', {}, `Email: ${email}`));
    ul.appendChild(e('li', {}, `Phone Number: ${phone}`));
    ul.appendChild(e('li', {}, `Address: ${address}`));
    ul.appendChild(e('li', {}, `Postal Code: ${postalCode}`));

    fullNameField.value = '';
    emailField.value = '';
    phoneNumberField.value = '';
    addressField.value = '';
    postalCodeField.value = '';

    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;


    editBtn.addEventListener('click', () => {
      fullNameField.value = fullName;
      emailField.value = email;
      phoneNumberField.value = phone;
      addressField.value = address;
      postalCodeField.value = postalCode;

      submitBtn.disabled = false;
      editBtn.disabled = true;
      continueBtn.disabled = true;

      let allLi = Array.from(document.querySelectorAll("#infoPreview li"));
      allLi.forEach((element) => {
        element.remove();
      })
  });

    continueBtn.addEventListener('click', () =>{
      divEl = document.getElementById('block');
      divEl.innerHTML = `<h3>Thank you for your reservation!</h3>`
    })
  
}


function e(type, attributes, ...content) {
  const result = document.createElement(type);

  for (let [attr, value] of Object.entries(attributes || {})) {
    if (attr.substring(0, 2) == 'on') {
      result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
    } else {
      result[attr] = value;
    }
  }

  content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

  content.forEach(e => {
    if (typeof e == 'string' || typeof e == 'number') {
      const node = document.createTextNode(e);
      result.appendChild(node);
    } else {
      result.appendChild(e);
    }
  });

  return result;
}
}