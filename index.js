let intervalId;
      let count = 0;
      let i = 0;
    document.querySelector('.js-start-button').addEventListener('click',() => {
      if(intervalId) {
        clearInterval(intervalId);
      }
        i = count;
        intervalId = setInterval(() => {
        document.querySelector('.js-display-message').innerHTML = `Counter: ${++i}`;
      },1000); 
    });

    document.querySelector('.js-stop-button').addEventListener('click',() => {
      clearInterval(intervalId);
      count = i;
    });

    document.querySelector('.js-reset-button').addEventListener('click',() => {
      count = 0;
      i = 0;
      if(intervalId) {
        clearInterval(intervalId);
      }
      
      document.querySelector('.js-display-message').innerHTML = `Counter: 0`;
    });
