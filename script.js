// Smooth Scroll
document.querySelectorAll('.navbar-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Change Navbar Background on Scroll
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const navbarLinks = document.querySelectorAll('.navbar-link');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#ffe3c4';
        navbarLinks.forEach(link => {
            link.style.color = 'black';
        });

        navbarLinks.forEach(link => {
            link.addEventListener('mouseover', () => {
                link.style.color = '#71adcd'; // Change color on hover
            });
        });

        navbarLinks.forEach(link => {
            link.addEventListener('mouseout', () => {
                link.style.color = 'black'; // Change color on hover out
            });
        });
    } 
    else {
      navbar.style.backgroundColor = '#9be9ac';
      navbarLinks.forEach(link => {
          link.style.color = 'white';
      });

    }
  });
  
  // Slide Social Media Links to the Right on Hover
  const socialLinks = document.querySelectorAll('.social-link');
  
  socialLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.transition = 'transform 0.3s';
      link.style.transform = 'translateX(10px)';
    });
  
    link.addEventListener('mouseout', () => {
      link.style.transform = 'translateX(0)';
    });
  });

  const aboutItems = document.querySelectorAll('.about-item');
  
  aboutItems.forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.transition = 'transform 0.3s';
      link.style.transform = 'translateX(10px)';
    });
  
    link.addEventListener('mouseout', () => {
      link.style.transform = 'translateX(0)';
    });
  });

  const servicesItem = document.querySelectorAll('.services-item');
  
  servicesItem.forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.transition = 'transform 0.3s';
      link.style.transform = 'translateX(10px)';
    });
  
    link.addEventListener('mouseout', () => {
      link.style.transform = 'translateX(0)';
    });
  });
  