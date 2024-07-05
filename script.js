const keyCounts = {};

document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (keyCounts[key] === undefined) {
    keyCounts[key] = 0;
  }
  keyCounts[key] += 1;

  const output = document.getElementById("output");
  output.textContent = `Key pressed: ${key}`;

  const keyList = document.getElementById("key-list");
  keyList.innerHTML = "";
  for (const [key, count] of Object.entries(keyCounts)) {
    const listItem = document.createElement("li");
    listItem.textContent = `${key}: ${count}`;
    keyList.appendChild(listItem);
  }
});
