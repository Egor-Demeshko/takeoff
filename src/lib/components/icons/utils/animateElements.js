export default function animateElements(isOpen, first, second, third, fourth){
    // Two states for animation
    // If menuOpenClode is true, the menu is open, so we draw the cross icon
    // If isMenuOpen is false, the menu is closed, so we draw the burger icon
    if(!first || !second || !third || !fourth){
        return;
    }
    if(isOpen){
        first.style.transform = "translateY(-50%)";
        first.style.opacity = "0";
        second.style.transform = "rotateZ(-45deg) translate(5%, -48%)";
        third.style.transform = "translateY(calc(50%))";
        third.style.opacity = 0;
        fourth.style.transform = "rotateZ(45deg) translate(-5%, -48%)";
        fourth.style.visibility = "visible";
    } else {
        first.style.transform = "";
        first.style.opacity = "1";
        second.style.transform = "";
        third.style.transform = "";
        third.style.opacity = 1;
        fourth.style.transform = "rotateZ(0) translate(0, -50%)";

        setTimeout( () => {
            fourth.style.visibility = "hidden";
        }, 300);
    }
}