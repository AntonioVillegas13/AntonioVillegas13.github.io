var b1 = document.getElementById('bloq1'),
c1 =document.getElementById('apagar1'),
b2 = document.getElementById('bloq2'),
c2 =document.getElementById('apagar2'),
b3 = document.getElementById('bloq3'),
c3 =document.getElementById('apagar3'),
b4 = document.getElementById('bloq4'),
c4 =document.getElementById('apagar4'),
b5 = document.getElementById('bloq5'),
c5 =document.getElementById('apagar5'),
b6 = document.getElementById('bloq6'),
c6 =document.getElementById('apagar6');
    
var tex = "Aplicacion Bloqueada"
var tex1 = "Aplicacion"

    function bloqueado1()
    {document.getElementById('txt1').value = tex}
    b1.addEventListener('click',bloqueado1,true)

    function cancelar1()
    {document.getElementById('txt1').value = tex1}
    c1.addEventListener('click',cancelar1,true)

    function bloqueado2()
    {document.getElementById('txt2').value = tex}
    b2.addEventListener('click',bloqueado2,true)

    function cancelar2()
    {document.getElementById('txt2').value = tex1}
    c2.addEventListener('click',cancelar2,true)

    function bloqueado3()
    {document.getElementById('txt3').value = tex}
    b3.addEventListener('click',bloqueado3,true)

    function cancelar3()
    {document.getElementById('txt3').value = tex1}
    c3.addEventListener('click',cancelar3,true)

    function bloqueado4()
    {document.getElementById('txt4').value = tex}
    b4.addEventListener('click',bloqueado4,true)

    function cancelar4()
    {document.getElementById('txt4').value = tex1}
    c4.addEventListener('click',cancelar4,true)
    
    function bloqueado5()
    {document.getElementById('txt5').value = tex}
    b5.addEventListener('click',bloqueado5,true)

    function cancelar5()
    {document.getElementById('txt5').value = tex1}
    c5.addEventListener('click',cancelar5,true)


   