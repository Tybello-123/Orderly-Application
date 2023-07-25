const logregSection = document.querySelector('.logreg-section');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
// toggle menu button


const  getStartedBtn = document.getElementById('getStarted');
const home = document.getElementById('logo');





// onToggleMenu.addEventListener('click', e => {
//     e.target.classList.toggle('fa-close');
   
//     // e.name = e.name === 'menu' ? 'close' : 'menu'
//     const isDropDownVisible = navLinks.style.display === "block"

//     if(isDropDownVisible){
       
//         navLinks.style.display = "none";

//         getStartedBtn.addEventListener('click', () => {
//             getStartedBtn.disabled = false;
            
  
//             logregSection.classList.remove('hidden');

//             registerLink.addEventListener('click', () => {
//                 // start the transitions in the css   
//                  logregSection.classList.add('active');
//              })
             
//              loginLink.addEventListener('click', () => {
//              //    put it back to it's original place
//                  logregSection.classList.remove('active');
//              })
               
//              home.addEventListener('click', () => {
//                 logregSection.classList.add('hidden');
//                 navLinks.style.display = "none";
//                 getStartedBtn.disabled = true;
//             })

//         })
       
//     }else{
//         navLinks.style.display = "block";
//         getStartedBtn.disabled = true;
//     }

    
    
  

// })

getStartedBtn.addEventListener('click', () => {
   

    logregSection.classList.remove('hidden');
   
   

    registerLink.addEventListener('click', () => {
        // start the transitions in the css   
         logregSection.classList.add('active');
     })
     
     loginLink.addEventListener('click', () => {
     //    put it back to it's original place
         logregSection.classList.remove('active');
     })
       
     home.addEventListener('click', () => {
        logregSection.classList.add('hidden');
        navLinks.style.display = "none";
        getStartedBtn.disabled = true;
    })

})










