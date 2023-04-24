function action(){ 
    var HTML=document.getElementById("HTML");
    var CSS=document.getElementById("CSS");
    var JAVASCRIPT=document.getElementById("JAVASCRIPT");
    var code=document.getElementById("code").contentWindow.document;

    document.body.onkeyup=function()
    {
        code.open();
        code.writeln(
            HTML.value + "<style>"+ CSS.value +"</style>" +
            
            "<script>"+ JAVASCRIPT.value +"</script>"
        );
        code.close();
    }
}
action();


