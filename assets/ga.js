/* Google Analytics 4 for createyl.com (homepage and /results).
   Paste the measurement ID (looks like G-XXXXXXXXXX) between the quotes below.
   While it is empty, nothing is loaded and nothing is tracked. */
(function () {
  var GA_ID = "";

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };

  // Count every click on a Book a call link (all of them go to Calendly)
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[href*="calendly.com"]');
    if (!a) return;
    window.gtag("event", "book_call_click", { link_text: a.textContent.trim(), link_url: a.href, transport_type: "beacon" });
  });

  if (!GA_ID) return;
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(s);
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
})();
