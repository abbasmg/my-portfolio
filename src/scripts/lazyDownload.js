export default function lazyDownload() {
  const lazyLinks = document.querySelectorAll('[data-lazy="true"]');

  lazyLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const href = link.getAttribute('href');

      // Open the tab synchronously to avoid popup blockers
      const newTab = window.open('', '_blank');
      if (!newTab) {
        // Fallback if popup was blocked: navigate directly
        window.location.href = href;
        return;
      }

      fetch(href)
        .then(response => {
          if (response.ok) {
            return response.blob();
          } else {
            throw new Error('Failed to load document');
          }
        })
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          newTab.location.href = url;
        })
        .catch(error => {
          console.error('Error loading document:', error);
          newTab.close();
        });
    });
  });
}
