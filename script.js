const App = Vue.createApp({
    data() {
        return {
            homePage: 'hide-home',
            aboutPage: 'hide-about',
            servicesPage: 'hide-services',
            contactPage: 'hide-contact',
            currentPage: '',
            clearHeader: false
        }
    },

    methods: {
        displayPages(className) {
            this.homePage = 'hide-home';
            this.aboutPage = 'hide-about';
            this.servicesPage = 'hide-services';
            this.contactPage = 'hide-contact';
            
            switch (className) {
                case 'show-home':
                    this.homePage = className;
                    this.currentPage = 'home';
                    break;
                case 'show-about':
                    this.aboutPage = className;
                    this.currentPage = 'about';
                    break;
                case 'show-services':
                    this.servicesPage = className;
                    this.currentPage = 'services';
                    break;
                case 'show-contact':
                    this.contactPage = className;
                    this.currentPage = 'contact';
                    break;
                default:
                    this.homePage = 'show-home';
                    this.currentPage = 'home';
            }
        },
        handleHeaderScroll() {
            if (window.scrollY >= 85) {
                this.clearHeader = true;
            } else {
                this.clearHeader = false;
            }
        }
    },

    created: function() {
        this.displayPages('show-home');
        this.currentPage = 'home';
    },

    mounted() {
        window.addEventListener('scroll', this.handleHeaderScroll);
    }
});

App.mount('#App');