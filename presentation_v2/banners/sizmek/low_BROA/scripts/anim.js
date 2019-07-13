var countRepeat = 0;

function animation() {
  TweenLite.delayedCall(0.2, function() {
    const duration = 1.5;
    TweenLite.to(prato1, duration, {
      top: "+=" + 150,
      ease: Power1.easeOut
    });

    TweenLite.to(eat1, duration, {
      top: "-=" + 70,
      ease: Power1.easeOut
    }).delay(0.5);
    TweenLite.to(eat2, duration, {
      left: "+=" + 60,
      ease: Power1.easeOut
    }).delay(0.5);
    TweenLite.to(eat3, duration, {
      left: "-=" + 60,
      ease: Power1.easeOut
    }).delay(0.8);
  });
  TweenLite.delayedCall(3.5, function() {
    const duration = 0.5;
    TweenLite.to(txt, duration, {
      opacity: 0,
      ease: Power0.easeNone
    });
    TweenLite.to(manteiga, duration, {
      opacity: 1,
      ease: Power0.easeNone
    }).delay(duration);
  });
  TweenLite.delayedCall(5.5, function() {
    const duration = 0.5;
    TweenLite.to(bg_white, duration, {
      bottom: 250,
      ease: Power0.easeNone
    });

    TweenLite.to(eat1, duration, {
      top: 70,
      ease: Power0.easeNone
    });

    TweenLite.to(eat2, duration, {
      left: -60,
      ease: Power0.easeNone
    });
    TweenLite.to(eat3, duration, {
      left: 60,
      ease: Power0.easeNone
    });

    TweenLite.to(manteiga, 0, {
      opacity: 0,
      ease: Power0.easeNone
    });

    TweenLite.to(passatempo, duration, {
      opacity: 1,
      ease: Power0.easeNone
    }).delay(duration);

    TweenLite.to(prato1, duration, { top: -150 });

    TweenLite.to(prato2, 1, {
      top: "+=" + 150,
      ease: Power1.easeOut
    }).delay(duration);
  });
  // TweenLite.delayedCall(7, function() {
  //   const duration = 1;
  //   TweenLite.to(prato2, duration, { opacity: 0 });

  //   TweenLite.to(passatempo, duration, { opacity: 0 });
  //   TweenLite.to(ganhe_sempre, 0.5, {
  //     scale: 1,
  //     ease: Power1.easeOut
  //   }).delay(0.5);
  // });
  TweenLite.delayedCall(9.9, function() {
    if (countRepeat < 2) {
      restartAnim();
    }
  });
}

TweenLite.delayedCall(0.2, function() {
  animation();
});

function restartAnim() {
  if (countRepeat < 2) {
    countRepeat++;

    TweenLite.to(eat2, 0, { left: -60 });
    TweenLite.to(eat3, 0, { left: 60 });
    TweenLite.to(eat1, 0, { top: 70 });
    TweenLite.to(txt, 0, { opacity: 1 });
    TweenLite.to(manteiga, 0, { opacity: 0 });
    TweenLite.to(passatempo, 0, { opacity: 0 });
    TweenLite.to(prato2, 0, { top: -150 });
    TweenLite.to(prato2, 0, { opacity: 1 });
    // TweenLite.to(ganhe_sempre, 0, {
    //   scale: 0,
    //   ease: Power1.easeOut
    // });
    TweenLite.to(bg_white, 0, { bottom: 0, onComplete: animation });
  }
}
