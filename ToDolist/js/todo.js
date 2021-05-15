$("ul").on('click' , 'li' ,function(){
    $(this).toggleClass("create");
});

$("ul").on('click', 'span' , function(event){
    $(this).parent().fadeOut(400,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which===13){
        let html= $(this).val();
        $(this).val('');
        $('ul').append(`<li><span><i class="fa fa-trash"></i></span>`+ html +`</li>`)
    }
});

$('.fa-plus').click(function(){
    $("input[type='text']").fadeToggle();    
});


$('#print').click(function(){
    var pdf=new jsPDF();
    var doc=$('.container');
    pdf.fromHTML(doc.html(),70,15);
    date=new Date;
    pdf.save('TO-DO.pdf')
});