class Accordion {
	constructor(id) {
		this.accordionElem = document.getElementById(id);
		this.accordionButton = this.accordionElem.children[0];
		this.accordionBody = this.accordionElem.children[1];
		this.active = false;
	}

	open() {
		this.accordionElem.classList.add('accordion-active');
		this.active = true;
		this.accordionButton.classList.remove('btn-secondary');
 		this.accordionButton.classList.add('btn-success');
	}

	close() {
		this.accordionElem.classList.remove('accordion-active');
		this.active = false;
		this.accordionButton.classList.add('btn-secondary');
 		this.accordionButton.classList.remove('btn-success');
	}

	init() {
		this.accordionButton.addEventListener('click', () => {
			if(!this.active) {
				this.open();
			}
			else {
				this.close();
			}
		});

	}
}

class Slider {
	constructor(id) {
		this.slider = document.getElementById(id);
		this.slides = this.slider.children[0].children;

		this.controls = this.slider.children[1].children;

		this.slideIndex = 0;
		this.length = this.slides.length;
		this.sliderSliding = false;
	}

	next() {
		if (this.slideSliding) return;
		this.slideSliding = true;

		this.slides[this.slideIndex].classList.remove('show');
		this.slideIndex++;

		if(this.slideIndex > this.length - 1) {
			this.slideIndex = 0;
		}

		this.slides[this.slideIndex].classList.add('show');

		this.slideSliding = false;
	}

	prev() {
		if (this.slideSliding) return;
		this.slideSliding = true;

		this.slides[this.slideIndex].classList.remove('show');
		this.slideIndex--;

		if(this.slideIndex < 0) {
			this.slideIndex = this.length - 1;
		}

		this.slides[this.slideIndex].classList.add('show');

		this.slideSliding = false;
	}

	init() {
		this.controls[0].addEventListener('click', () => {
			this.prev();
		});
		this.controls[1].addEventListener('click', () => {
			this.next();
		});
	}
}

const educationSlider = new Accordion('education-slider');
const codeSlider = new Accordion('code-slider');
const slider = new Slider('rs-projects');

educationSlider.init();
codeSlider.init();
slider.init();

const contact = document.getElementById('contactPopup');
const overlay = document.getElementsByClassName('overlay')[0];


contact.addEventListener('click', (e) => {
	overlay.style.display = 'block';
});

overlay.addEventListener('click', (e) => {
	overlay.style.display = 'none';
});

const mobileMenuButton = document.getElementById('mobile-menu');
const mobile_menu = document.getElementsByClassName('fix')[0];
let mobileMenuButton__active = false;

mobileMenuButton.addEventListener('click', e => {
	if(mobileMenuButton__active) {
		mobile_menu.classList.remove('menu-active');
		mobileMenuButton__active = false;
	}
	else {
		mobile_menu.classList.add('menu-active');
		mobileMenuButton__active = true;
	}
});

/* <Scrolling> */
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()
    
		const blockID = anchor.getAttribute('href').substr(1)
    
		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}
/* </Scrolling> */

const switchButton = document.getElementsByClassName('switch')[0];
const container = document.getElementsByClassName('container')[0];
const aboutSelf = document.getElementsByClassName('about-self')[0];
const mdStyles = document.getElementById('swtch');

let switched = true;

const forMobile = `<span class="sw-text">Go mobile</span>
					<i class="fas fa-mobile-alt fa-1x"></i>`;
const forDesktop = `<span class="sw-text">Go desktop</span>
					<i class="fas fa-desktop fa-1x"></i>`;

switchButton.addEventListener('click', () => {
	if(switched) {
		switchButton.innerHTML = forDesktop;
		container.style.width = '375px';
		mdStyles.href = 'styles/mobi.css'
		aboutSelf.classList.remove('col-lg-8');
		aboutSelf.classList.add('col-lg-12');
		switched = false;
		
	}

	else {
		switchButton.innerHTML = forMobile;
		container.style.width = '1140px';
		mdStyles.href = 'styles/styles.css';
		aboutSelf.classList.remove('col-lg-12');
		aboutSelf.classList.add('col-lg-8');
		switched = true;
	}
});
