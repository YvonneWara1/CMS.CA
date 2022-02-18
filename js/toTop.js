topButton = document.querySelector("#toTop");

window.onscroll = function() 
{scrollFunction(topButton)}; 

function scrollFunction(topButton) {
    if (document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 800)
        {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    
}

function topFunction() {
    document.documentElement.scrollTop = 0;
    
}