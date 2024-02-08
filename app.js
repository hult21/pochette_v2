
//================== TAB TOGGLING ===================


const pages = {
    homePage: document.getElementById('home_page'),
    myPochettesPage: document.getElementById('mypochettes_page'),
    addPochettePage: document.getElementById('workspace_page')
};

document.querySelectorAll('.create_new_pochette').forEach(button => {
    button.addEventListener('click', function() {
      Object.values(pages).forEach(page => {
        page.style.display = 'none';
    pages.addPochettePage.style.display = 'block';
      });
    });
});


const navLinks = document.querySelectorAll('.nav_item a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        
        
            const linkAtt = link.getAttribute('href').replace('#', '');

            navLinks.forEach(item => {
                item.parentElement.classList.remove('active')
            });

            
            // Hide all sections
            document.querySelectorAll('.tab-content').forEach(section => {
                section.style.display = 'none';   
            });

            // Display the target section
            const targetSection = document.getElementById(linkAtt);
            if (targetSection) {
                targetSection.style.display = 'block';  
                link.parentElement.classList.add('active');
            };
        
    });
});



//================== MOUSEOVER EFFECTS ===================


const newPochetteDiv = document.querySelector('.new_pochette');

document.querySelector('.create_new_pochette').addEventListener('mouseover', function() {
  newPochetteDiv.style.display = 'block';
});

document.querySelector('.create_new_pochette').addEventListener('mouseout', function() {
    newPochetteDiv.style.display = 'none';
  });





//================== ENTRY PLACEHOLDER AND MAX ENTRY LENGTH ===================


document.addEventListener('DOMContentLoaded', (event) => {
    const textarea = document.querySelector('#textarea'); 

    textarea.addEventListener('input', function() {
        this.style.fontFamily = 'sans-serif';
        this.style.color = '#000';
        this.style.fontSize = '16px';
        this.style.fontWeight = '500';
    });

    textarea.addEventListener('input', function() {
        let characterLength = this.value.trim().length; 

        document.querySelector('.charCount p').textContent = `${characterLength}/1000`;
    });
});


  



//================== ENABLING SUBMIT ENTRY BUTTON + ADDING TODAY'S DATE TO ENTRY ===================

const saveEntryBtn = document.querySelector('.save_entry');
const textarea = document.getElementById('textarea');
const todaysDate = document.querySelector('.date-input'); //btn

const fullDateFormatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' });

function logDate() {
    const today = new Date();
    const formattedDate = fullDateFormatter.format(today);
  
    todaysDate.textContent = formattedDate; 
}

function checkInputs() {
    const today = new Date();
    const formattedDate = fullDateFormatter.format(today);

    if (textarea.value.trim() !== '' && todaysDate.textContent === formattedDate) {
        saveEntryBtn.removeAttribute('disabled');
        saveEntryBtn.style.backgroundColor = '#353B3A';
    } else {
        saveEntryBtn.setAttribute('disabled', 'disabled');
        saveEntryBtn.style.backgroundColor = '';
    }
}

textarea.addEventListener('input', checkInputs); // enable btn
todaysDate.addEventListener('click', logDate); // set the date
todaysDate.addEventListener('click', checkInputs); // enable btn





//================== DROP MENU ON SAVE ENTRY BTN ===================

const dropMenu = document.querySelector('.dropdown_menu');

saveEntryBtn.addEventListener('click', () => {
    // Check if the button is not disabled
    if (!saveEntryBtn.hasAttribute('disabled')) {
        // Toggle the display of the dropdown menu
        if (dropMenu.style.display === 'block') {
            dropMenu.style.display = 'none';
        } else {
            dropMenu.style.display = 'block';
        }
    }
});





//================== CUSTOM BOOK WORKSPACE ===================


// const imageView = document.querySelector('.book_custom_view img');
// const colorNameDisplay = document.querySelectorAll('#workspace_page footer h6');
// const defaultImageSrc = '/Assets/bluepoche_WITHshadow 1.svg';

// // Add event listeners to each color option image
// document.querySelectorAll('.color-options img').forEach(image => {
//     image.addEventListener('mouseover', function() {

//         colorNameDisplay.forEach(element => {
//             element.classList.remove('active');
//         });      
        
//         const color = this.className;

//         switch(color) {
//             case 'rabat':
//                 imageView.src = '/Assets/bluepoche_WITHshadow 1.svg';
                
//                 colorNameDisplay[0].classList.add('active');
//                 break;
//             case 'casablanca':
//                 imageView.src = '/Assets/beigepoche_WITHshadow.svg';
                
//                 colorNameDisplay[1].classList.add('active');
//                 break;
//             case 'dakhla':
//                 imageView.src = '/Assets/brownpoche_WITHshadow.svg';
                
//                 colorNameDisplay[2].classList.add('active');
//                 break;
//             default:
//                 imageView = '/Assets/bluepoche_WITHshadow 1.svg';
                
//                 colorNameDisplay[0].classList.add('active');
//         }
//     });

//     image.addEventListener('mouseout', function() {
//         imageView.src = defaultImageSrc;
//         colorNameDisplay.forEach(element => {
//             element.classList.remove('active');
//         });
//     });

//     image.addEventListener('click', function() {

//         colorNameDisplay.forEach(element => {
//             element.classList.remove('active');
//         });      
        
//         const color = this.className;

//         switch(color) {
//             case 'rabat':
//                 imageView.src = '/Assets/bluepoche_WITHshadow 1.svg';
                
//                 colorNameDisplay[0].classList.add('active');
//                 break;
//             case 'casablanca':
//                 imageView.src = '/Assets/beigepoche_WITHshadow.svg';
                
//                 colorNameDisplay[1].classList.add('active');
//                 break;
//             case 'dakhla':
//                 imageView.src = '/Assets/brownpoche_WITHshadow.svg';
                
//                 colorNameDisplay[2].classList.add('active');
//                 break;
//             default:
//                 imageView = '/Assets/bluepoche_WITHshadow 1.svg';
                
//                 colorNameDisplay[0].classList.add('active');
//         }
//     });
// });


const imageView = document.querySelector('.book_custom_view img');
const colorNameDisplay = document.querySelectorAll('#workspace_page footer h6');
const defaultImageSrc = '/Assets/bluepoche_WITHshadow 1.svg';

// Keeping track of the clicked image source
let clickedImageSrc = defaultImageSrc;

function updateImageAndActiveClass(color) {
    colorNameDisplay.forEach(element => {
        element.classList.remove('active');
    });

    let newSrc;
    switch(color) {
        case 'rabat':
            newSrc = '/Assets/bluepoche_WITHshadow 1.svg';
            colorNameDisplay[0].classList.add('active');
            break;
        case 'casablanca':
            newSrc = '/Assets/beigepoche_WITHshadow.svg';
            colorNameDisplay[1].classList.add('active');
            break;
        case 'dakhla':
            newSrc = '/Assets/brownpoche_WITHshadow.svg';
            colorNameDisplay[2].classList.add('active');
            break;
        default:
            newSrc = defaultImageSrc;
            colorNameDisplay[0].classList.add('active');
    }

    return newSrc;
}

document.querySelectorAll('.color-options img').forEach(image => {
    image.addEventListener('mouseover', function() {
        imageView.src = updateImageAndActiveClass(this.className);
    });

    image.addEventListener('mouseout', function() {
        imageView.src = clickedImageSrc;
        colorNameDisplay[0].classList.add('active');
    });

    image.addEventListener('click', function() {
        clickedImageSrc = updateImageAndActiveClass(this.className);
    });
});


//================== STICKER MENUS TOGGLE ===================


const showSticker = document.querySelectorAll('.sticker-elements div');
const allButtons = document.querySelectorAll('.slide-menu button');

allButtons.forEach((button,index) => {
    button.addEventListener('click', function(){
        allButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

    showSticker.forEach(div => div.style.display = 'none');
    showSticker[index].style.display = 'block';
    });
});


//================== DISPLAY STICKERS ON BOOK ===================

let stickersByPosition = {};

document.querySelector('.sticker-elements').addEventListener('click', function(event){

 if(event.target.tagName === 'IMG') {
  const stickerSrc = event.target.src;
  const stickerClass = event.target.className;
  const stickerID = event.target.parentElement.className;
  const addSticker = document.createElement('img');
  addSticker.src = stickerSrc;
  addSticker.style.position = 'absolute';

  if(stickerID === 'bookmark-stk') {
      addSticker.style.width = '110px';
  }else if(stickerID === 'ribbon-stk') {
    addSticker.style.width = '60px';
  } else if(stickerID === 'photo-stk') {
    addSticker.style.width = '130px';
  } else {
    addSticker.style.width = '100px';
  };

  if(stickerClass.includes('layered')){
    addSticker.style.position = 'absolute';
    addSticker.style.zIndex = -1;
    } else {
    addSticker.style.zIndex = 2;
}

if(stickerClass.includes('rotate')) {
    addSticker.style.transform = 'rotate(40deg)';
}
if(stickerClass.includes('straight')) {
    addSticker.style.transform = 'rotate(-90deg)';
}
if(stickerClass.includes('resize')) {
    addSticker.style.width = '70px';
}
if(stickerClass.includes('straight-right')) {
    addSticker.style.width = '399px';
}
if(stickerClass.includes('left-over')) {
    addSticker.style.width = '80px';
}


  const positions = {

    //Bookmark Pos
    'bottom-right': {left: '275px', top: '280px'},
    'layered-right': {left: '315px', top: '180px'},
    'layered-top': {left: '310px', top: '0'},
    'left-top': {left: '100px', top: '0'},
    'left-over': {left: '130px', top: '-54px'},

    //Flowers Pos
    'bottom-left': {left: '140px', top: '240px'},
    'center-left': {left: '260px', top: '200px'},

    //Ribbons Pos
    'center-left': {left: '300px', top: '180px'},
    'straight-right': {left: '140px', top: '0'},

    //Photos Pos
    'middle-top': {left: '180px', top: '30px'}
  };

  

  let positionKey = null;
        Object.keys(positions).forEach(key => {
            if (stickerClass.includes(key)) {
                addSticker.style.left = positions[key].left;
                addSticker.style.top = positions[key].top;
                positionKey = key;
            }
        });

        

        // Check if there's a sticker in this position and remove it if present
        if (stickersByPosition[positionKey]) {
            stickersByPosition[positionKey].remove();
        }

 

  document.getElementById('canva').appendChild(addSticker);

  stickersByPosition[positionKey] = addSticker;

 

}

});











//================== PROFILE PAGE ===================



// -------- DELETION TAB DISPLAY--------- //

const deletionTab = document.querySelector('.profile_deletion_tab');

document.querySelector('.deletion_btn').addEventListener('click', function() {
    deletionTab.style.display = 'block';
});

document.querySelector('.cancel_deletion').addEventListener('click', function() {
    deletionTab.style.display = 'none';
});