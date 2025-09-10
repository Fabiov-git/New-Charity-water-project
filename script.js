// Handle CTA button interaction
document.getElementById('cta').addEventListener('click', function() {
  alert('💧 Thank you for supporting clean water projects! This will link to the donation flow.');
});

// Background check
(function checkBackground() {
  const img = new Image();
  // prefer the actual filename in the Img directory (case-sensitive)
  img.src = 'Img/background.JPG';
  img.onload = () => console.info('✅ Background loaded from Img/background.JPG');
  img.onerror = () => console.warn('⚠️ Missing Img/background.JPG. Drop your image there.');
})();
