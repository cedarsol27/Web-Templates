onload = () =>{ // Called arrow function expression. Similar to function, has some limitations


    const btnNav = document.querySelector('.btn-nav'); // Selects the first element with specified name
    const nav = document.querySelector('.nav');
    const navItems = document.querySelectorAll('.nav-items'); // Selects all elements with specified name
    
    let navClose = true;
    
    const handlerNavigation = () =>{
    
        let scale = 1, translateY = 0;
    
        btnNav.classList.toggle('ri-close-line'); // Pulls a class (classList), assigns it to another, toggle on or off (.toggle)
        btnNav.classList.toggle('ri-menu-line'); 
    
        nav.classList.toggle('nav-open');
        nav.classList.toggle('nav-close');
    
        if(!navClose){
            scale = 4;
            translateY = -100;
        }
        navItems.forEach( (item,index)=>{
            item.setAttribute('style',`transition-delay:.${ index + 1 }s; transform: translateY(${translateY}vh) scale(${scale})`); // I think this is saying for each link in nav, apply a transition delay of adding one second additional from the previous nav, and apply a css style
        });
    
        navClose = !navClose; // switches true to false
    }
    
    // Event added
    
    btnNav.addEventListener('click',handlerNavigation); // When the button is clicked, run through the function of handlerNavigation. EventListener is this action
    }
    