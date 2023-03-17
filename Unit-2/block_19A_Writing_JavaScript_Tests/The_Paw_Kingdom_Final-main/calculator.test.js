
const Checkbox_Click = require('./calculator');

test('Test 1 ', () => {
  // Create a mock HTML element
  document.body.innerHTML = `
    <div>
      <input type="checkbox" value="10.00" checked>
      <input type="checkbox" value="5.00">
      <input type="checkbox" value="8.00" checked>
      <input type="checkbox" value="10.00">
      <input type="checkbox" value="5.00" checked>
      <input type="checkbox" value="8.00" checked>
      <input type="checkbox" value="6.00" checked>
      <input type="checkbox" value="7.00">
      <input type="checkbox" value="5.00">
      <input type="checkbox" value="6.00">
      <input type="checkbox" value="5.00">
    </div>
    <div>
      <input type="checkbox" value=0 id="discountedTotal" checked>
    </div>
    <div id="output"></div>
  `;

  // Call the function
  Checkbox_Click();

  // Check the output
  expect(document.getElementById('output').innerHTML).toBe('After discount total is: $33');
});


test('Test 2 ', () => {
    // Create a mock HTML element
    document.body.innerHTML = `
      <div>
        <input type="checkbox" value="10.00">
        <input type="checkbox" value="5.00" checked>
        <input type="checkbox" value="8.00" checked>
        <input type="checkbox" value="10.00">
        <input type="checkbox" value="5.00" checked>
        <input type="checkbox" value="8.00" checked>
        <input type="checkbox" value="6.00" checked>
        <input type="checkbox" value="7.00"checked>
        <input type="checkbox" value="5.00">
        <input type="checkbox" value="6.00">
        <input type="checkbox" value="5.00"checked>
      </div>
      <div>
        <input type="checkbox" value=0 id="discountedTotal" checked>
      </div>
      <div id="output"></div>
    `;
  
    // Call the function
    Checkbox_Click();
  
    // Check the output
    expect(document.getElementById('output').innerHTML).toBe('After discount total is: $40');
  });
  
  test('Test 3 ', () => {
    // Create a mock HTML element
    document.body.innerHTML = `
      <div>
        <input type="checkbox" value="10.00" >
        <input type="checkbox" value="5.00">
        <input type="checkbox" value="8.00" checked>
        <input type="checkbox" value="10.00">
        <input type="checkbox" value="5.00" checked>
        <input type="checkbox" value="8.00">
        <input type="checkbox" value="6.00" checked>
        <input type="checkbox" value="7.00">
        <input type="checkbox" value="5.00" checked>
        <input type="checkbox" value="6.00">
        <input type="checkbox" value="5.00">
      </div>
      <div>
        <input type="checkbox" value=0 id="discountedTotal" checked>
      </div>
      <div id="output"></div>
    `;
  
    // Call the function
    Checkbox_Click();
  
    // Check the output
    expect(document.getElementById('output').innerHTML).toBe('After discount total is: $22');
  });

  test('Test 4 ', () => {
    // Create a mock HTML element
    document.body.innerHTML = `
      <div>
        <input type="checkbox" value="10.00" checked>
        <input type="checkbox" value="5.00">
        <input type="checkbox" value="8.00" checked>
        <input type="checkbox" value="10.00">
        <input type="checkbox" value="5.00" checked>
        <input type="checkbox" value="8.00" checked>
        <input type="checkbox" value="6.00" checked>
        <input type="checkbox" value="7.00" checked>
        <input type="checkbox" value="5.00">
        <input type="checkbox" value="6.00">
        <input type="checkbox" value="5.00" checked>
      </div>
      <div>
        <input type="checkbox" value=0 id="discountedTotal">
      </div>
      <div id="output"></div>
    `;
  
    // Call the function
    Checkbox_Click();
  
    // Check the output
    expect(document.getElementById('output').innerHTML).toBe('Total is: $49');
  });

  test('Test 5 ', () => {
    // Create a mock HTML element
    document.body.innerHTML = `
      <div>
        <input type="checkbox" value="30.00" checked>
        <input type="checkbox" value="40.00">
        <input type="checkbox" value="45.00" checked>
      </div>
      <div>
        <input type="checkbox" value=0 id="discountedTotal">
      </div>
      <div id="output"></div>
    `;
  
    // Call the function
    Checkbox_Click();
  
    // Check the output
    expect(document.getElementById('output').innerHTML).toBe('Total is: $75');
  });
  
  

  
 