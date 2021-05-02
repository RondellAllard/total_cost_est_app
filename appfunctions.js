const itemDescriptionSelector = document.getElementById("itemDescription");

for(let i = 0; i < itemDescriptionList.length; i++ ) {
  const option = document.createElement("option");
  const txt = document.createTextNode(itemDescriptionList[i].name);
  option.appendChild(txt);
  option.setAttribute("value",itemDescriptionList[i].name)
  itemDescriptionSelector.insertBefore(option,itemDescriptionSelector.lastChild);
}