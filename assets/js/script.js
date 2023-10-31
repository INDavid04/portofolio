$(function() {
    const texts = ['Oh Noo!!', 'You lost!', 'Try a next time!!'];
    var timer = null, interval = 100 * 6 * 6;

    $("#start").click(function() {
      if (timer !== null) return;
      timer = setInterval(function () {
          alert(texts[Math.floor(Math.random() * texts.length)]);
      }, interval); 
    });

    $("#stop").click(function() {
      clearInterval(timer);
      timer = null
    });
});