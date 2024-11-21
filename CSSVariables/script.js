/* Noah Sanchez NOV 20 2024
Adapted From https://javascripts.com/
 CSS Variable */

const inputs = document.querySelectorAll('.controls input, .controls select');
    const image = document.getElementById('dynamic-image');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      if (this.name === 'overlay') {
        const color = this.value;
        document.documentElement.style.setProperty(`--overlay-color`, color + '80'); 
      } else if (this.name === 'photo') {
        image.src = this.value;
      } else {
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
      }
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));