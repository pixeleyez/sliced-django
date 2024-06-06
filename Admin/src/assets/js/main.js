/*
-------------------------------------------------------------------------
* Template Name    : Sliced - Tailwind CSS Admin & Dashboard Template   * 
* Author           : SRBThemes                                          *
* Version          : 1.0.0                                              *
* Created          : May 2023                                           *
* File Description : Main Js file of the template                       *
*------------------------------------------------------------------------
*/

(function () {
    ("use strict");

    document.addEventListener("alpine:init", () => {
        Alpine.data("collapse", () => ({
            collapse: false,

            collapseSidebar() {
                this.collapse = !this.collapse;
            },
        }));
        Alpine.data("dropdown", (initialOpenState = false) => ({
            open: initialOpenState,

            toggle() {
                this.open = !this.open;
            },
        }));
        Alpine.data("modals", (initialOpenState = false) => ({
            open: initialOpenState,
            toggle() {
                this.open = !this.open;
            },
        }));

        // main - custom functions
        Alpine.data("main", (value) => ({}));

        Alpine.store("app", {
            // sidebar
            sidebar: false,
            toggleSidebar() {
                this.sidebar = !this.sidebar;
            },
            // Light and dark Mode
            mode: Alpine.$persist('light'),
            sidebarMode: Alpine.$persist('light'),
            layout: Alpine.$persist('vertical'),
            direction: Alpine.$persist('ltr'),
            showSettings: false,
            toggleMode(val) {
                if (!val) {
                    val = this.mode || "light"; // light And Dark
                  
                }
                this.mode = val;
               
            },
           
            toggleFullScreen() {
                if (document.fullscreenElement) {
                    document.exitFullscreen();
                } else {
                    document.documentElement.requestFullscreen();
                }
            },

            setLayout() {
                // Set the layout based on current settings
                this.layout = this.layout || 'vertical';
                this.mode = this.mode || 'light';
                this.sidebarMode = this.sidebarMode || 'light';
                this.direction = this.direction || 'ltr';
                this.open = false;
            },

            resetLayout() {
                // Reset to default layout settings
                this.layout = 'vertical';
                this.mode = 'light';
                this.sidebarMode = 'light';
                this.direction = 'ltr';
                this.open = false;
            }
        });

        // sidebar menu activation
        function getActiveMenuFromURL() {
            const path = window.location.pathname;
            const menuMapping = {
                'project-dashboard.html': 'dashboard',
                'ecommerce-dashboard.html': 'dashboard',
                'index.html': 'dashboard',
                'email.html': 'apps',
                'chat.html': 'apps',
                'contact.html': 'apps',
                'invoice.html': 'apps',
                'calendar.html': 'apps',
                'ui-tabs.html': 'components',
                'ui-accordions.html': 'components',
                'ui-modals.html': 'components',
                'ui-clipboard.html': 'components',
                'ui-notification.html': 'components',
                'ui-carousel.html': 'components',
                'ui-pricing.html': 'components',
                'ui-lightbox.html': 'components',
                'ui-countdown.html': 'components',
                'ui-counter.html': 'components',
                'ui-flatpickr.html': 'components',
                'ui-alerts.html': 'elements',
                'ui-buttons.html': 'elements',
                'ui-buttons-group.html': 'elements',
                'ui-badge.html': 'elements',
                'ui-breadcrumb.html': 'elements',
                'ui-videos.html': 'elements',
                'ui-images.html': 'elements',
                'ui-dropdowns.html': 'elements',
                'ui-typography.html': 'elements',
                'ui-avatar.html': 'elements',
                'ui-tooltips.html': 'elements',
                'ui-loader.html': 'elements',
                'ui-pagination.html': 'elements',
                'ui-progress-bar.html': 'elements',
                'chart.html': 'chart',
                'icons.html': 'icons',
                'drag-and-drop.html': 'drag',
                'forms-basic.html': 'forms',
                'forms-input-group.html': 'forms',
                'forms-editors.html': 'forms',
                'forms-validation.html': 'forms',
                'forms-checkbox.html': 'forms',
                'forms-radio.html': 'forms',
                'forms-switches.html': 'forms',
                'tables-basic.html': 'table',
                'tables-datatables.html': 'table',
                'tables-editable.html': 'table',
                'pages-users-profile.html': 'users',
                'pages-users-settings.html': 'users',
                'blank.html': 'pages',
                'pages-maintenance.html': 'pages',
                'pages-coming-soon.html': 'pages',
                'pages-404.html': 'pages',
                'pages-500.html': 'pages',
                'pages-503.html': 'pages',
                'creative.html': 'layout',
                'detached.html': 'layout',
                'login.html': 'authentication',
                'signup.html': 'authentication',
                'reset-pw.html': 'authentication',


            };
            // Find the matching menu item for the current path
            for (const url in menuMapping) {
                if (path.includes(url)) {
                    return menuMapping[url];
                }
            }
            // Return a default value if no match is found
            return 'unknown';
        }

        const activeMenuFromStorage = localStorage.getItem('activeMenu');
        const activeMenu = activeMenuFromStorage ? activeMenuFromStorage : getActiveMenuFromURL();

        Alpine.store('sidebar', {
            activeMenu: activeMenu,
            toggleMenu(menu) {
                this.activeMenu = this.activeMenu === menu ? null : menu;
                localStorage.setItem('activeMenu', this.activeMenu);
            },
            setActiveMenuFromURL() {
                this.activeMenu = getActiveMenuFromURL();
                localStorage.setItem('activeMenu', this.activeMenu);
            }
        });

        function setActiveClass() {
            const path = window.location.pathname;
            const aTags = document.querySelectorAll('a');
            aTags.forEach(tag => {
                const href = tag.getAttribute('href');
                if (path.includes(href)) {
                    tag.classList.add('active');
                } else {
                    tag.classList.remove('active');
                }
            });
        }
        setActiveClass();

        Alpine.data('sidebarMenu', () => ({
            init() {
                this.$store.sidebar.setActiveMenuFromURL();
                setActiveClass();
            },
            isActive(menu) {
                return this.$store.sidebar.activeMenu === menu;
            },
            toggle(menu) {
                this.$store.sidebar.toggleMenu(menu);
            }
        }));
    });


    window.Alpine.start();
})();