/****************************************************
 * THugntrHUgnSharu
 ****************************************************/

/* ================= BASE PERFORMANCE ================= */

user_pref("gfx.webrender.all", true);
user_pref("layers.acceleration.force-enabled", true);

user_pref("toolkit.cosmeticAnimations.enabled", false);
user_pref("browser.tabs.animate", false);
user_pref("browser.fullscreen.animate", false);

user_pref("nglayout.initialpaint.delay", 0);
user_pref("nglayout.initialpaint.delay_in_oopif", 0);
user_pref("content.notify.interval", 100000);

user_pref("network.dns.disablePrefetch", false);
user_pref("network.prefetch-next", true);
user_pref("network.http.speculative-parallel-limit", 6);

user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);

user_pref("network.http.request.max-start-delay", 0);

user_pref("general.smoothScroll", true);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("apz.overscroll.enabled", true);

user_pref("mousewheel.default.delta_multiplier_y", 250);

/* ================= PRIVACY CORE  ================= */

user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);

user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("privacy.partition.network_state", false);

user_pref("network.predictor.enabled", false);
user_pref("network.dns.disablePrefetchFromHTTPS", false);

/* ================= TELEMETRY OFF ) ================= */

user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("app.shield.optoutstudies.enabled", false);

/* ================= MOZILLA UI / ANNNOYANCES ================= */

user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

user_pref("browser.discovery.enabled", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.preferences.moreFromMozilla", false);

user_pref("browser.aboutwelcome.enabled", false);
user_pref("browser.aboutConfig.showWarning", false);

user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);

user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.trending.featureGate", false);

user_pref("extensions.pocket.enabled", false);

user_pref("browser.tabs.groups.smart.enabled", false);
user_pref("browser.ml.linkPreview.enabled", false);

/* ================= AI FEATURES OFF ================= */

user_pref("browser.ai.control.default", "blocked");
user_pref("browser.ml.enable", false);
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.menu", false);
user_pref("browser.ai.chat.enabled", false);
user_pref("browser.ai.enable", false);
user_pref("browser.ai.summarizer.enabled", false);
user_pref("browser.tabs.ai.enabled", false);

/* ================= FINAL TAG ================= */

user_pref("_user.js.hybrid", "PESKYFOX + USER CONFIG");
