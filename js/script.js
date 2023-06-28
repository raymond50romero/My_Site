document.addEventListener('DOMContentLoaded', (listener) => {
  // get all of the needed elements from my file
  const hamburger = document.getElementById('hamburger');
  const navbar = document.getElementById('navbar');
  const hello = document.getElementById('hello');
  const introText = document.getElementById('name');
  const profession = document.getElementById('profession');

  // set navbar depending on the size of screen
  if (window.innerWidth <= 600) {
    console.log('navbar is hidden');
    navbar.style.display = 'none';
    hamburger.style.display = 'flex';
  } else {
    navbar.style.display = 'flex';
    hamburger.style.display = 'none';
  }

  // hide hamburger menu if screen is a certain size, show otherwise
  window.addEventListener('resize', (resize) => {
    if (window.innerWidth <= 600) {
      navbar.style.display = 'none';
      hamburger.style.display = 'flex';
    } else {
      navbar.style.display = 'flex';
      hamburger.style.display = 'none';
    }
  });

  // introduction hello
  let text1 = 'Hi!';
  let curr1 = 0;
  let Write1 = function write1() {
    hello.textContent += text1.charAt(curr1);
    curr1++;
    if (curr1 < text1.length) window.setTimeout(write1, 150);
  };
  Write1();

  // write introduction text
  let text = "I'm Ray";
  let curr = 0;
  let Write = function write() {
    introText.textContent += text.charAt(curr);
    curr++;
    if (curr < text.length) window.setTimeout(write, 100);
  };
  Write();

  // write profession
  let proText = 'Software Engineer';
  let curr2 = 0;
  let WritePro = function writePro() {
    profession.textContent += proText.charAt(curr2);
    curr2++;
    if (curr2 < proText.length) window.setTimeout(writePro, 100);
  };
  WritePro();
});
