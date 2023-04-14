window.ConfettiGenerator = function (e) {
  function t(e, t) {
    e || (e = 1);
    var i = Math.random() * e;
    return t ? Math.floor(i) : i;
  }
  function i() {
    return {
      x: t(a.width),
      y: t(a.height),
    };
  }
  var a = {
    target: 'confetti-holder',
    width: window.innerWidth,
    height: window.innerHeight,
  };
  e &&
    (e.target && (a.target = e.target),
    e.width && (a.width = e.width),
    e.height && (a.height = e.height));
  var o = document.getElementById(a.target),
    n = o.getContext('2d');
  return {
    render: function () {
      n.clearRect(0, 0, a.width, a.height);
    },
    clear: function () {
      n.clearRect(0, 0, o.width, o.height);
    },
  };
};
