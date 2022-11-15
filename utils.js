      function getMobileOS() {
        const ua = navigator.userAgent;
        var hasA = /iPad|iPhone|iPod/.test(ua);
        if (/android/i.test(ua)) {
          return "android";
        } else if (
          hasA ||
          (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
        ) {
          return "ios";
        }
        return "other";
      }

      function isInstalled() {
        // For iOS
        if (window.navigator.standalone) return true;
        // For Android
        if (window.matchMedia("(display-mode: standalone)").matches)
          return true;
        // If neither is true, it's not installed
        return false;
      }

      function getSafeArea() {
        let style = getComputedStyle(document.documentElement);
        let bottom = style.getPropertyValue("--safe-area-bottom") || "0";
        let top = style.getPropertyValue("--safe-area-top") || "0";
        let right = style.getPropertyValue("--safe-area-right") || "0";
        let left = style.getPropertyValue("--safe-area-left") || "0";
        return [top, right, bottom, left];
      }

      function computeValue() {
        let style = getComputedStyle(document.documentElement);
        let bottom = style.getPropertyValue("--safe-area-bottom");
        let top = style.getPropertyValue("--safe-area-top");
        let right = style.getPropertyValue("--safe-area-right");
        let left = style.getPropertyValue("--safe-area-left");
        console.log("computed value:");
        console.log("ALL insets: ", bottom, top, right, left);
      }
      function getEngine() {
        return window.flutterWebRenderer;
      }

      function checkUrlParams() {
        // detect engine first.
        const urlParams = new Proxy(
          new URLSearchParams(window.location.search),
          {
            get: (searchParams, prop) => searchParams.get(prop),
          }
        );
        var engine = urlParams.engine;
        var isValid = engine == "canvaskit" || engine == "html";
        if (isValid) {
          window.flutterWebRenderer = engine;
        }
        //else {
        //  if (isInstalled()) {
        //    window.flutterWebRenderer = "canvaskit";
        //  }
        //}
        console.log(
          "web renderer: " + window.flutterWebRenderer + " / " + engine
        );
      }
      function trace(msg) {
        console.log(msg);
      }