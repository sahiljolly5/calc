
function download()

{
    var inputA = document.getElementById("name").value
    var inputB = document.getElementById('Age').value
    var inputC = document.getElementById('mail').value
    var inputD = document.getElementById('phone').value
    var inputZ = document.getElementById('addr').value

    //if (document.getElementById('name').value ="    "){
//alert("enter name");
if(inputA == '')
{
    alert('Enter Name')
}
else if(inputB == '')
{
    alert('Enter Age')
}
else if(inputC == '')
{
    alert('Enter Email')
}
else if(inputD == '')
{
    alert('Enter Phone')
}
else if(inputZ == '')
{
    alert('Enter Address')
}

    
     
else {

    document.getElementById('demo2').innerHTML = inputA 

    document.getElementById('demo3').innerHTML = inputB 
    
    
    document.getElementById('demo4').innerHTML = inputC
    
    document.getElementById('demo5').innerHTML = inputD
    
    document.getElementById('demo6').innerHTML = inputZ
    
    document.getElementById('out').style.display = 'block'
}
}
