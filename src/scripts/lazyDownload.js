export default function lazyDownload() {
const lazyLinks = document.querySelectorAll('[data-lazy="true"]');

lazyLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior

    const href = link.getAttribute('href');

    fetch(href)
      .then(response => {
        if (response.ok) {
          return response.blob(); // Get the document as a blob
        } else {
          throw new Error('Failed to download document');
        }
      })
      .then(blob => {
        // Create a temporary URL for the blob
        const url = window.URL.createObjectURL(blob);
        
        // Open the document in a new tab or window
        window.open(url, '_blank');
      })
      .catch(error => {
        console.error('Error downloading document:', error);
      });
  });
});
}