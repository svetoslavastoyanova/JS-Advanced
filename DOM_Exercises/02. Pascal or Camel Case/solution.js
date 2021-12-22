function solve() {
  let text = document.getElementById("text").value;
  let naming = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");


  let splitted = text.split(" ");

  let finalText = "";

  if (naming == "Pascal Case"){
    for (let i = 0; i < splitted.length; i ++){
      finalText += splitted[i][0].toUpperCase() + splitted[i].slice(1, splitted[i].length).toLowerCase();
    }
    result.textContent = finalText;

  }else if (naming == "Camel Case"){
    finalText += splitted[0][0].toLowerCase() + splitted[0].slice(1, splitted[0].length).toLowerCase();
    for (let i = 1; i < splitted.length; i ++){
      finalText += splitted[i][0].toUpperCase() + splitted[i].slice(1, splitted[i].length).toLowerCase();
    }
    result.textContent = finalText;

  }else{
    result.textContent = "Error!";

  }

}
