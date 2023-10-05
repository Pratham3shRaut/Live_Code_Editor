function updateOutput() {
  const htmlCode = document.getElementById("html-code").value;
  const cssCode = document.getElementById("css-code").value;
  const jsCode = document.getElementById("js-code").value;
  const outputFrame = document.getElementById("output");
  const outputDocument =
    outputFrame.contentDocument || outputFrame.contentWindow.document;

  outputDocument.open();
  outputDocument.write(`
      <html>
      <head>
          <style>${cssCode}</style>
      </head>
      <body>
          ${htmlCode}
          <script>${jsCode}</script>
      </body>
      </html>
  `);
  outputDocument.close();
}

document.getElementById("html-code").addEventListener("input", updateOutput);
document.getElementById("css-code").addEventListener("input", updateOutput);
document.getElementById("js-code").addEventListener("input", updateOutput);

updateOutput();

// let editor = document.querySelector("#editor");

// ace.edit(editor, {
//   theme: "ace/theme/cobalt",
//   mode: "ace/mode/html-code",
// });
