/**
 * ===================================================================
 * PORTFOLIO CLIENT-SIDE INTERACTIVITY
 * Candidate: Shubhangi Aggarwal
 * Description: Clean, vanilla JavaScript for responsive navigation,
 *              scroll tracking, skill filtering, contact handling,
 *              and subtle scroll-triggered micro-animations.
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // ---------------- 1. DYNAMIC FOOTER YEAR ----------------
  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  // ---------------- 2. STICKY HEADER SCROLL EFFECT ----------------
  const header = document.getElementById('header');
  const handleHeaderScroll = () => {
    if (window.scrollY > 24) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // ---------------- 3. MOBILE NAVIGATION DRAWER ----------------
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const openDrawer = () => {
    mobileDrawer.classList.add('open');
    drawerBackdrop.classList.add('active');
    mobileToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    mobileDrawer.classList.remove('open');
    drawerBackdrop.classList.remove('active');
    mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', openDrawer);
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeDrawer);
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', closeDrawer);
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
      closeDrawer();
    }
  });


  // ---------------- 4. ACTIVE NAVIGATION LINK SPY ----------------
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-menu .nav-link');

  const updateActiveNavLink = () => {
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        desktopNavLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });


  // ---------------- 5. BACK TO TOP BUTTON ----------------
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }


  // ---------------- 6. SKILL CATEGORY FILTERING ----------------
  const filterButtons = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active states on buttons
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.transition = 'opacity 0.25s ease-in-out';
            card.style.opacity = '1';
          }, 30);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });


  // ---------------- 7. ONE-CLICK EMAIL COPY UTILITY ----------------
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyBtnText = document.getElementById('copyBtnText');
  const userEmailText = document.getElementById('userEmailText');

  if (copyEmailBtn && userEmailText && copyBtnText) {
    copyEmailBtn.addEventListener('click', async () => {
      const email = userEmailText.textContent.trim();

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
        } else {
          // Fallback for non-https contexts
          const textArea = document.createElement('textarea');
          textArea.value = email;
          textArea.style.position = 'fixed';
          textArea.style.left = '-9999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }

        const originalText = copyBtnText.textContent;
        copyBtnText.textContent = 'Copied! ✓';
        copyEmailBtn.classList.remove('btn-secondary');
        copyEmailBtn.classList.add('btn-primary');

        setTimeout(() => {
          copyBtnText.textContent = originalText;
          copyEmailBtn.classList.remove('btn-primary');
          copyEmailBtn.classList.add('btn-secondary');
        }, 2500);

      } catch (err) {
        console.error('Failed to copy email:', err);
        // Fallback: open mailto directly
        window.location.href = `mailto:${email}`;
      }
    });
  }


  // ---------------- 8. CONTACT FORM VALIDATION & HANDLING ----------------
  const contactForm = document.getElementById('contactForm');
  const nameInput = document.getElementById('senderName');
  const emailInput = document.getElementById('senderEmail');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');
  const submitBtn = document.getElementById('submitBtn');
  const submitBtnText = document.getElementById('submitBtnText');
  const formSuccessMessage = document.getElementById('formSuccessMessage');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const subjectError = document.getElementById('subjectError');
  const messageError = document.getElementById('messageError');

  // Email format validator
  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Helper to clear error
  const clearError = (input, errorEl) => {
    input.classList.remove('error');
    if (errorEl) errorEl.textContent = '';
  };

  // Helper to set error
  const setError = (input, errorEl, message) => {
    input.classList.add('error');
    if (errorEl) errorEl.textContent = message;
  };

  // Attach live input listeners to clear errors on typing
  [
    { input: nameInput, error: nameError },
    { input: emailInput, error: emailError },
    { input: subjectInput, error: subjectError },
    { input: messageInput, error: messageError }
  ].forEach(item => {
    if (item.input) {
      item.input.addEventListener('input', () => clearError(item.input, item.error));
    }
  });

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let hasError = false;

      // Validate Name
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        setError(nameInput, nameError, 'Please enter your name (at least 2 characters).');
        hasError = true;
      }

      // Validate Email
      if (!emailInput.value.trim()) {
        setError(emailInput, emailError, 'Please enter your email address.');
        hasError = true;
      } else if (!isValidEmail(emailInput.value.trim())) {
        setError(emailInput, emailError, 'Please enter a valid email address.');
        hasError = true;
      }

      // Validate Subject
      if (!subjectInput.value.trim() || subjectInput.value.trim().length < 3) {
        setError(subjectInput, subjectError, 'Please enter a subject (at least 3 characters).');
        hasError = true;
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 8) {
        setError(messageInput, messageError, 'Please enter a message (at least 8 characters).');
        hasError = true;
      }

      if (hasError) {
        return;
      }

      // Simulate sending with nice button spinner/feedback
      submitBtn.disabled = true;
      const originalBtnText = submitBtnText.textContent;
      submitBtnText.textContent = 'Sending Message...';

      setTimeout(() => {
        // Reset submit button state
        submitBtn.disabled = false;
        submitBtnText.textContent = originalBtnText;

        // Reset inputs
        contactForm.reset();

        // Show success confirmation
        formSuccessMessage.style.display = 'flex';
        formSuccessMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Auto hide success notice after 8 seconds
        setTimeout(() => {
          formSuccessMessage.style.display = 'none';
        }, 8000);

      }, 800);
    });
  }


  // ---------------- 9. SCROLL REVEAL MICRO-ANIMATIONS ----------------
  const revealElements = document.querySelectorAll('.timeline-item, .skill-card, .project-card, .cert-card, .pillar-card');
  
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal', 'active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => {
      el.classList.add('reveal');
      revealObserver.observe(el);
    });
  } else {
    // Fallback if IntersectionObserver is not supported
    revealElements.forEach(el => el.classList.add('reveal', 'active'));
  }

});
