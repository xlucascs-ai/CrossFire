/*
 * CF AL BR Script Loader
 *
 * Atualize a URL abaixo com o endpoint real do bundle a ser carregado.
 */
(() => {
  const config = {
    id: "cf-al-br-loader",
    url: "https://example.com/cf-al-br.bundle.js",
    async: true,
    defer: true,
    attrs: {
      "data-app": "cf-al-br",
      "data-loader": "cf-al-br",
    },
  };

  const inject = () => {
    if (document.getElementById(config.id)) {
      return;
    }

    const script = document.createElement("script");
    script.id = config.id;
    script.src = config.url;
    script.async = config.async;
    script.defer = config.defer;
    script.crossOrigin = "anonymous";

    if (config.nonce) {
      script.nonce = config.nonce;
    }

    Object.entries(config.attrs).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });

    const target = document.head || document.documentElement;
    target.appendChild(script);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject, { once: true });
  } else {
    inject();
  }
})();
