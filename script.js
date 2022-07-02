// Object about the speakers section
const speakers = [
  {
    spimg: './assets/images/narendra-modi.jpeg',
    spname: 'Narendra Modi',
    spinfo: 'President of India',
    spdetails: 'PM of India',
  },
  {
    spimg: './assets/images/ashraf-ghani.webp',
    spname: 'Ashraf Ghani',
    spinfo: 'President of Afghanistan',
    spdetails: 'President of Afghanistan',
  },
  {
    spimg: './assets/images/shahbaz-shareef.jpeg',
    spname: 'Shahbaz Shareef',
    spinfo: 'PM of Pakistan',
    spdetails: 'PM of Pakistan',
  },
  {
    spimg: './assets/images/bangladesh-pm.jpeg',
    spname: 'Sheikh Hasina',
    spinfo: 'PM of Bangladesh',
    spdetails: 'PM of Bangladesh',
  },
  {
    spimg: './assets/images/nepal-pm.jpeg',
    spname: 'Sher Bahadur',
    spinfo: 'PM of Nepal',
    spdetails: 'PM of Nepal',
  },
  {
    spimg: './assets/images/pm-srilanka.jpeg',
    spname: 'Gotabaya Rajapaksa',
    spinfo: 'PM of Srilanka',
    spdetails: 'PM of Srilanka',
  },
];

// for each loop to create the section as per the members

speakers.forEach((element, i) => {
  const thirdSection = document.querySelector('.third-section');
  const speakerCard = document.createElement('article');
  speakerCard.classList = 'featured-speakers';

  const spCard = `
    <div class="grid-two-parts">
        <div class="featured-photo-holder">
           <img src="${speakers[i].spimg}">
        </div>
        <div class="featured-text-holder">
            <h3 class="featured-name">${speakers[i].spname}</h3>
            <h4 class="featured-info">${speakers[i].spinfo}</h4>
            <p class="featured-details">${speakers[i].spdetails}</p>
        </div>
    </div>
  `;
  speakerCard.innerHTML += spCard;
  thirdSection.appendChild(speakerCard);
});

// Hamburger menu

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
