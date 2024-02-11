function toggleMenu() {
    const navigation = document.getElementById('navigation');
    document.body.classList.toggle('menu-active');
    
    // Check if the menu is active and set the padding accordingly
    if (document.body.classList.contains('menu-active')) {
      navigation.style.display = 'flex'; // Temporarily display the menu to measure its height
      const navHeight = navigation.offsetHeight + 'px'; // Get the height of the navigation
      document.documentElement.style.setProperty('--nav-height', navHeight); // Set the height as a CSS variable
      navigation.style.display = ''; // Remove the display style
    } else {
      document.documentElement.style.removeProperty('--nav-height');
    }
  }