const speakers = [
    {
        spimg: '',
        spname: 'Narendra Modu',
        spinfo: 'President of India',
        spdetails: 'Narendra modi is the ',
    },
    {
        spimg: '',
        spname: 'Ashraf Ghani',
        spinfo: 'President of Afghanistan',
        spdetails: 'Ashraf Ghani is the second president of Republic of Afghanistan',
    },
    {
        spimg: '',
        spname: '',
        spinfo: '',
        spdetails: '',
    },
    {
        spimg: '',
        spname: '',
        spinfo: '',
        spdetails: '',
    },
    {
        spimg: '',
        spname: '',
        spinfo: '',
        spdetails: '',
    },
    {
        spimg: '',
        spname: '',
        spinfo: '',
        spdetails: '',
    },
];

// Hamburger menu

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})
