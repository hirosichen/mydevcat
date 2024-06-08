document.addEventListener('DOMContentLoaded', () => {
  const progress = document.querySelector('.progress');
  const elementsToBlur = document.querySelectorAll(
    '.cat, .progress-bar, .quote, .date'
  );

  progress.addEventListener('animationend', () => {
    progress.classList.add('completed');

    // Delay for 5 seconds before blurring
    setTimeout(() => {
      elementsToBlur.forEach((element) => {
        element.classList.add('blur');
      });

      // Display the new quote
      const newQuote = document.createElement('div');
      newQuote.className = 'new-quote';
      newQuote.textContent = 'Unlock Your Imagination!';
      document.body.appendChild(newQuote);
    }, 5000);
  });

  // JavaScript to add today's date
  const dateElement = document.querySelector('.date');
  const today = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = today.toLocaleDateString(undefined, options);
  dateElement.textContent = formattedDate;
});
