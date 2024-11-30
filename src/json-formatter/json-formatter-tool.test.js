const JsonFormatterTool = require("./json-formatter-tool");


describe("JsonFormatterTool", () => {
    let jsonFormatterTool;
    let inputArea;
    let outputArea;
    let formatBtn;
  
    beforeEach(() => {
      document.body.innerHTML = `
        <json-formatter-tool></json-formatter-tool>
      `;
      
      // Get references to elements inside the custom element
      jsonFormatterTool = document.querySelector("json-formatter-tool");
      inputArea = jsonFormatterTool.querySelector(".input-area");
      outputArea = jsonFormatterTool.querySelector(".output-area");
      formatBtn = jsonFormatterTool.querySelector(".format-btn");
    });
  


test("Should render the JSON formatter tool correctly", ()=>{
    expect(inputArea).toBeTruthy();
    expect(formatBtn).toBeTruthy();
    expect(outputArea).toBeTruthy();
});

test("should format JSON correctly when valid JSON is entered", () => {
    // Input valid JSON and trigger the format button
    inputArea.value = '{"name": "Dylan Lukes", "age": 30}';
    formatBtn.click();

    // Check that the output area contains formatted JSON
    expect(outputArea.value).toBe('{\n  "name": "Dylan Lukes",\n  "age": 30\n}');
  });

test("should error out when input is empty",()=>{
    inputArea = '';
    formatBtn.click();
    
    //The output should be empty
    expect(outputArea.value).toBe('');
});

test("should indicate error on invalid JSON",()=>{

    inputArea.value = '{"name": "Dylan Lukes", "age": 30';
    formatBtn.click();

    // Check that the output area shows the error
    expect(outputArea.value).toMatch(/Error/);
})

})