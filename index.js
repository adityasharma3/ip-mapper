console.log("index.js says hi");

document.getElementById('input-custom-ip').addEventListener('click' , () => {
    document.getElementById('input-container').style.visibility = "visible";
});

document.getElementById('user-ip-btn').addEventListener('click' , () => {
    var heading = document.getElementById('main-heading');
    heading.style.fontSize = "2em";
    heading.style.transition = "0.2s ease";
});