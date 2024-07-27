// press a key and it will show what key was pressed
// keydown event in JS - triggered when a key on the keyboard is pressed down. It allows you to execute a function or piece of code in response to the user pressing a key.
// add an event listener to that particukar id - "insert"

const insert = document.getElementById('insert');

window.addEventListener('keydown', function(e){
    insert.innerHTML = `
    <table>
    <tr>
        <th>Key</th>
        <th>KeyCode</th>
        <th>Code</th>
    </tr>
    <tr>
        <td>${e.key === ' ' ? 'Space': e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
    </tr>
    </table>
    `;
},false);