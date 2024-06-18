document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;
        
        if (name === "" || email === "" || message === "") {
            alert("تمام فیلڈز کو بھرنا ضروری ہے۔");
            return;
        }
        
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
        
        alert("آپ کا پیغام ارسال کر دیا گیا ہے۔");
        
        form.reset();
    });
});
