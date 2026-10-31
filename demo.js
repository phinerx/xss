(async function () {
  const response = await fetch("/attack.html");

  if (!response.ok) {
    throw new Error("Could not load attack.html");
  }

  const html = await response.text();

  document.open();
  document.write(html);
  document.close();
})();
