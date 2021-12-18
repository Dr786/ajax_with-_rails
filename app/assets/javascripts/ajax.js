// Run the fetch request once the DOM has loaded.
document.addEventListener('DOMContentLoaded', () => {

  fetch('https://dog.ceo/api/breeds/list/all').then(result => {
    return result.json();
  });
  
});
