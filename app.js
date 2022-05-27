// const selectElement = (element) => document.querySelector(element);

// selectElement(".menu-icons").
//   addEventListener(
//     'click',
//      () => {
//       selectElement('nav').classList.toggle('active');
//       console.log('uhjs');
//     })
//     console.log('hi');





    const menuIcon=document.querySelector('.menu-icons')
    const nav=document.querySelector('nav')

    menuIcon.addEventListener('click',()=>{
        nav.classList.toggle('active')

        // console.log('euo');
    })
  
