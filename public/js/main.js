fetch("https://lnrd.online/wp-content/uploads/menu.json")
  // fetch("./js/menu.json")
  .then((response) => response.json())
  .then((data) => {
    // Get the template from the script tag
    const source = document.getElementById("template").innerHTML;

    // Compile the template
    const template = Handlebars.compile(source);

    // Pass the data to the template
    const html = template(data);

    // Insert the generated HTML into the result div
    document.getElementById("menu").innerHTML = html;
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });
