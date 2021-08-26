function Add() {
    var inp1 = document.getElementById('finput').value
    var inp2 = document.getElementById('sinput').value
    document.getElementById('demo').innerHTML = parseInt(inp1) + parseInt(inp2)
    Clear()
}

function Sub() {
    var inp1 = document.getElementById('finput').value
    var inp2 = document.getElementById('sinput').value
    document.getElementById('demo').innerHTML = parseInt(inp1) - parseInt(inp2)
    Clear()
}

function Multiply() {
    var inp1 = document.getElementById('finput').value
    var inp2 = document.getElementById('sinput').value
    document.getElementById('demo').innerHTML = parseInt(inp1) * parseInt(inp2)
    Clear()
}


function Div() {
    var inp1 = document.getElementById('finput').value
    var inp2 = document.getElementById('sinput').value
    document.getElementById('demo').innerHTML = parseInt(inp1) / parseInt(inp2)
    Clear()
}

function Clear() {
    document.getElementById('finput').value = ''
    document.getElementById('sinput').value = ''
}