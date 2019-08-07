document.addEventListener('DOMContentLoaded', function() {
  var ToggleButton = document.getElementById('toggle');
  ToggleButton.addEventListener('click', function(tab) {
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        ;
    });

    function modifyDOM() {
      a = document.body.getElementsByClassName('outdated-comment');
      b = Array.from(a);
      b.forEach(l => l.classList.toggle('open'));
      return;
    }
  }, false);
}, false);