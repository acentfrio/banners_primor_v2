var countRepeat = 0;

function animation() {
  TweenLite.delayedCall(0.2, function() {
    const duration = 1.5;
    TweenLite.to(prato1, duration, {
      top: "+=" + 350,
      ease: Power1.easeOut
    });
    TweenLite.to(manteiga, duration, {
      opacity: 1,
      ease: Power0.easeNone
    }).delay(0.5);
    TweenLite.to(eat1, duration, {
      top: "-=" + 80,
      ease: Power1.easeOut
    }).delay(0.5);
    TweenLite.to(eat2, duration, {
      top: "+=" + 90,
      ease: Power1.easeOut
    }).delay(0.5);
  });

  TweenLite.delayedCall(4.5, function() {
    const duration = 0.5;
    TweenLite.to(txt, duration, {
      opacity: 0,
      ease: Power0.easeNone
    });
    TweenLite.to(manteiga, duration, {
      opacity: 0,
      ease: Power0.easeNone
    });
    TweenLite.to(manteiga1, 1, {
      opacity: 1,
      ease: Power0.easeNone
    }).delay(1.5);

    TweenLite.to(bg_white, duration, {
      bottom: 600,
      ease: Power0.easeNone
    });

    TweenLite.to(eat1, duration, {
      top: 80,
      ease: Power0.easeNone
    });

    TweenLite.to(eat2, duration, {
      top: -90,
      ease: Power0.easeNone
    });

    TweenLite.to(manteiga, 0, {
      opacity: 0,
      ease: Power0.easeNone
    });

    TweenLite.to(passatempo, 1, {
      opacity: 1,
      ease: Power0.easeNone
    }).delay(1);

    TweenLite.to(prato1, duration, { top: -350 });
    TweenLite.to(prato1, 1, {
      top: "+=" + 350,
      ease: Power1.easeOut
    }).delay(duration);
  });
  // TweenLite.delayedCall(6.5, function() {
  //   const duration = 1;
  //   TweenLite.to(prato1, duration, { opacity: 0 });

  //   TweenLite.to(passatempo, duration, { opacity: 0 });
  //   TweenLite.to(ganhe_sempre, 0.5, {
  //     scale: 1,
  //     ease: Power1.easeOut
  //   }).delay(0.5);
  // });
  TweenLite.delayedCall(9.8, function() {
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

    TweenLite.to(eat2, 0, { top: -90 });
    TweenLite.to(eat1, 0, { top: 80 });
    TweenLite.to(txt, 0, { opacity: 1 });
    TweenLite.to(manteiga, 0, { opacity: 0 });
    TweenLite.to(manteiga1, 0, { opacity: 0 });
    TweenLite.to(passatempo, 0, { opacity: 0 });
    TweenLite.to(prato1, 0, { top: -350 });
    TweenLite.to(prato1, 0, { opacity: 1 });
    // TweenLite.to(ganhe_sempre, 0, {
    //   scale: 0,
    //   ease: Power1.easeOut
    // });
    TweenLite.to(bg_white, 0, { bottom: 0, onComplete: animation });
  }
}
