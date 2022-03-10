$("#form-submit").click((event) => {
    let name = $("#name").val();
    let mail = $("#email").val();
    let mensaje = $("#message").val();
    event.preventDefault();
    window.open("https://wa.me/+5491169166534?text=Hola, ni nombre es "+name+", mi mail es "+mail+" y les envio este mensaje desde el sitio web de Optitools: "+mensaje);
    $("#contact").fadeOut(1000, ()=> {
        $("#form-contacto").append("<h3>¡Mensaje enviado!</h3>")
    })
});