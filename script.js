document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('header nav a');
    const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');
    const menuToggleBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const accessibilityBtn = document.getElementById('accessibility-btn');
    const accessibilityModal = document.getElementById('accessibility-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const applyAccessibilityBtn = document.getElementById('apply-accessibility');
    const highContrastCheckbox = document.getElementById('high-contrast');
    const biggerTextCheckbox = document.getElementById('bigger-text');
    const dyslexiaFontCheckbox = document.getElementById('dyslexia-font');
    const animationControlSelect = document.getElementById('animation-control');

    // Mostrar sección basada en el hash de la URL
    const showSection = (hash) => {
        const targetId = hash.substring(1) || 'inicio';
        
        sections.forEach(section => {
            const shouldShow = section.id === targetId || 
                             (targetId.startsWith('deporte-detalle') && section.id.startsWith('deporte-detalle')) ||
                             (targetId.startsWith('paralimpico-detalle') && section.id.startsWith('paralimpico-detalle'));
            
            if (shouldShow) {
                section.classList.remove('hidden');
                section.classList.add('animate-fade-in');
                section.setAttribute('tabindex', '-1');
                section.focus();
            } else {
                section.classList.add('hidden');
                section.classList.remove('animate-fade-in');
            }
        });

        // Actualizar aria-current para accesibilidad
        const updateAriaCurrent = (links) => {
            links.forEach(link => {
                if (link.getAttribute('href') === hash) {
                    link.setAttribute('aria-current', 'page');
                } else {
                    link.removeAttribute('aria-current');
                }
            });
        };
        
        updateAriaCurrent(navLinks);
        updateAriaCurrent(mobileMenuLinks);

        // Cerrar menú móvil si está abierto
        mobileMenu.classList.add('hidden');
        menuToggleBtn.setAttribute('aria-expanded', 'false');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    };

    // Manejar la navegación por hash
    window.addEventListener('hashchange', () => showSection(window.location.hash));
    
    // Mostrar sección inicial
    showSection(window.location.hash);

    // Manejar la navegación por enlaces
    const handleLinkClick = (e) => {
        const link = e.currentTarget;
        const hash = link.getAttribute('href');
        
        if (hash.startsWith('#')) {
            e.preventDefault();
            window.location.hash = hash;
        }
    };
    
    navLinks.forEach(link => link.addEventListener('click', handleLinkClick));
    mobileMenuLinks.forEach(link => link.addEventListener('click', handleLinkClick));

    // Modo oscuro/claro
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        themeToggleBtn.setAttribute('aria-label', `Alternar a modo ${isDarkMode ? 'claro' : 'oscuro'}`);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        moonIcon.classList.toggle('hidden', isDarkMode);
        sunIcon.classList.toggle('hidden', !isDarkMode);
    });

    // Aplicar tema guardado
    if (localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark-mode');
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
    }

    // Menú móvil
    menuToggleBtn.addEventListener('click', () => {
        const isExpanded = menuToggleBtn.getAttribute('aria-expanded') === 'true';
        menuToggleBtn.setAttribute('aria-expanded', !isExpanded);
        mobileMenu.classList.toggle('hidden');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });

    // Validación de formulario
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Validar email
        if (!emailInput.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
            emailError.classList.remove('hidden');
            emailInput.setAttribute('aria-invalid', 'true');
            isValid = false;
        } else {
            emailError.classList.add('hidden');
            emailInput.setAttribute('aria-invalid', 'false');
        }

        // Validar contraseña
        if (passwordInput.value.length < 6) {
            passwordError.classList.remove('hidden');
            passwordInput.setAttribute('aria-invalid', 'true');
            isValid = false;
        } else {
            passwordError.classList.add('hidden');
            passwordInput.setAttribute('aria-invalid', 'false');
        }

        if (isValid) {
            // Simular envío exitoso
            const liveRegion = document.createElement('div');
            liveRegion.setAttribute('role', 'status');
            liveRegion.setAttribute('aria-live', 'polite');
            liveRegion.className = 'sr-only';
            liveRegion.textContent = 'Formulario enviado con éxito';
            document.body.appendChild(liveRegion);
            
            setTimeout(() => {
                liveRegion.remove();
                loginForm.reset();
                alert("Formulario enviado con éxito!");
            }, 100);
        } else {
            // Mover foco al primer error
            const firstError = emailError.classList.contains('hidden') ? passwordInput : emailInput;
            firstError.focus();
        }
    });

    // Modal de accesibilidad
    accessibilityBtn.addEventListener('click', () => {
        accessibilityModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        closeModalBtn.focus();
    });

    closeModalBtn.addEventListener('click', () => {
        accessibilityModal.classList.add('hidden');
        document.body.style.overflow = '';
    });

    applyAccessibilityBtn.addEventListener('click', () => {
        // Aplicar alto contraste
        if (highContrastCheckbox.checked) {
            document.body.classList.add('high-contrast');
        } else {
            document.body.classList.remove('high-contrast');
        }

        // Aplicar texto más grande
        if (biggerTextCheckbox.checked) {
            document.body.classList.add('bigger-text');
        } else {
            document.body.classList.remove('bigger-text');
        }

        // Aplicar fuente para dislexia
        if (dyslexiaFontCheckbox.checked) {
            document.body.classList.add('dyslexia-font');
        } else {
            document.body.classList.remove('dyslexia-font');
        }

        // Reducir animaciones
        if (animationControlSelect.value === 'reduce') {
            document.body.classList.add('reduce-motion');
        } else {
            document.body.classList.remove('reduce-motion');
        }

        // Guardar preferencias
        const accessibilityPrefs = {
            highContrast: highContrastCheckbox.checked,
            biggerText: biggerTextCheckbox.checked,
            dyslexiaFont: dyslexiaFontCheckbox.checked,
            reduceMotion: animationControlSelect.value === 'reduce'
        };
        
        localStorage.setItem('accessibilityPrefs', JSON.stringify(accessibilityPrefs));

        // Cerrar modal
        accessibilityModal.classList.add('hidden');
        document.body.style.overflow = '';
        
        // Notificar cambio
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('role', 'status');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.className = 'sr-only';
        liveRegion.textContent = 'Preferencias de accesibilidad aplicadas';
        document.body.appendChild(liveRegion);
        setTimeout(() => liveRegion.remove(), 1000);
    });

    // Cargar preferencias guardadas
    const savedPrefs = localStorage.getItem('accessibilityPrefs');
    if (savedPrefs) {
        const prefs = JSON.parse(savedPrefs);
        
        highContrastCheckbox.checked = prefs.highContrast;
        biggerTextCheckbox.checked = prefs.biggerText;
        dyslexiaFontCheckbox.checked = prefs.dyslexiaFont;
        animationControlSelect.value = prefs.reduceMotion ? 'reduce' : 'normal';
        
        // Aplicar estilos
        if (prefs.highContrast) document.body.classList.add('high-contrast');
        if (prefs.biggerText) document.body.classList.add('bigger-text');
        if (prefs.dyslexiaFont) document.body.classList.add('dyslexia-font');
        if (prefs.reduceMotion) document.body.classList.add('reduce-motion');
    }

    // Manejar teclado para tarjetas
    document.querySelectorAll('[role="button"], a[href^="#"]').forEach(element => {
        element.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                if (element.getAttribute('href')) {
                    window.location.href = element.getAttribute('href');
                } else if (element.onclick) {
                    element.onclick();
                }
            }
        });
    });
});