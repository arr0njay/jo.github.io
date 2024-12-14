onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");  // Removes 'not-loaded' after 1 second
      clearTimeout(c);
    }, 1000);
  };