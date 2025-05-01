// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// Enviar_mensaje
$('#Enviar_mensaje').on("click",function(){
    alert("Tu mensaje fue enviado correctamente... !gracias¡");
});
