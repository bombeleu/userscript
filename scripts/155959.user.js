// ==UserScript==
// @name          YouTube Dark'n Red
// @namespace     http://userstyles.org
// @description	  Firefox & Chrome.
// @author        a3cAnton
// @homepage      http://userstyles.org/styles/58668
// @include       http://youtube.com/*
// @include       https://youtube.com/*
// @include       http://*.youtube.com/*
// @include       https://*.youtube.com/*
// @include       http://www.youtube*
// @run-at        document-start
// ==/UserScript==
(function() {
var css = "#watch-branded-actions img,#page.watch.watch-branded #watch-channel-brand-div,iframe[style=\"border: 0pt none; vertical-align: bottom;\"],#pyv-placeholder,embed[width=\"300\"][height=\"250\"],.ad-div,#watch-longform-ad,#watch-sidebar iframe,.watch-pyv-vid,#playnav-chevron,iframe[frameborder=\"0\"][style=\"border: 0px none; vertical-align: bottom;\"],#google_companion_ad_div,#instream_google_companion_ad_div,.pyv-promoted-videos,.premium-yva-unexpanded{display:none!important}a,button{outline:none!important;text-decoration:none!important}a{color:hsl(0,50%,87%)!important;background:transparent!important}a:hover{background:transparent!important; color:hsla(0,99%,75%,1)!important; text-shadow: 0 0 0.8em hsla(0,50%,85%,.6)!important; -moz-transition: all .3s ease!important; -webkit-transition: all .3s ease!important}a:active{background:transparent!important;color:hsla(0,99%,75%,1)!important}a:visited{opacity: 0.7!important;background:transparent!important;color:hsl(120,99%,73%)!important;text-shadow: 0 0 2px hsl(0,0%,80%)!important}a:focus{background:none!important;color:hsl(240,99%,73%)!important;text-shadow: 0 0 1px hsl(240,100%,80%)!important}input[class=\"search-term\"],input[type=\"button\"],input[type=\"submit\"],button,div,span,h1,h2,h3,h4,h5,h6,table,ul,li,p,b,.Hkf8Nd.wrfcoc *,.yt-uix-clickcard-card *{color:hsl(0,0%,73%)!important}textarea,textarea *{color:hsl(0,0%,13%)!important}button,button:hover,button *,button *:hover{font-weight:bold!important}#footer-main a,#footer-main a:hover,#picker-loading{font-weight:normal!important}#footer-main a{text-shadow:none!important}html,body,.feed-container,.guide-layout-container,#page.watch-branded #watch-sidebar,#page.watch-branded #watch-main-container,#main-channel-content,.yt-uix-overlay-fg-content,#builder-root,#yt-admin,#playlist-pane-container,.playlist-video-item.odd,.playlist-video-item:nth-child(2n+1),.channel-activity-feeds,.channel-layout-two-column .tab-content-body,#playlist-pane-container,#masthead-container,#channels-page-editor-form,#yt-admin-content h2,#yt-admin-content .yt-admin-h2,.branded-page-v2-container.no-top-row .branded-page-v2-primary-col,.branded-page-v2-container.has-top-row,.GJOPA4DCKBB,#yt-masthead-container.yt-masthead-hh,.branded-page-v2-secondary-column-hidden .branded-page-v2-col-container,body #footer-hh-container,#watch7-content,#watch7-user-header,#watch7-headline,.branded-page-v2-col-container,.yt-search-field,.primary-col,#watch7-action-panels #watch7-action-panel-footer,.pyv-shelf-wrapper,.watch-branded #watch7-sidebar,#page.watch #guide-container.branded,.GO1CBYXDNBB,.channels-search .search-field-container,#feed-background,.branded-page-v2-top-row{background: hsl(0,0%,7%) -moz-linear-gradient(top,hsl(0,0%,7%),hsl(0,0%,20%))!important;background: hsl(0,0%,7%) -webkit-linear-gradient(top,hsl(0,0%,7%),hsl(0,0%,20%))!important;background-repeat: repeat!important;background-position: center!important;background-attachment: fixed!important}.feed-item-container:not(:hover){background: transparent -moz-linear-gradient(left top,hsla(0,0%,22%,.5),transparent)!important;background: transparent -webkit-linear-gradient(left top,hsla(0,0%,22%,.5),transparent)!important}button,input[type=\"button\"],input[type=\"submit\"],li[role=\"menuitem\"]:hover,.yt-uix-button-menu-item:hover,.yt-playall-link,.search-box .search-term,div[role=\"button\"],div[style=\"-moz-user-select: none;\"],.yt-uix-form-input-text,.yt-uix-clickcard-card *{-moz-appearance: none!important;-webkit-appearance: none!important}button:not(.close):not(.close-small):not(.yt-uix-expander-arrow),.yt-uix-button:not(.close):not(.close-small),#masthead-subnav ul,#playlist-bar-bar-container,.yt-subscription-button.subscribed,.edit_controls_outer,.channel_settings_tab,.yt-playall-link,.yt-alert .yt-alert-content,.yt-alert.yt-alert-small .yt-alert-content,.infobox .editor-tab-container,.yt-alert-default.yt-alert-info,.yt-alert-actionable.yt-alert-info,.yt-alert-naked.yt-alert-info .yt-alert-icon,.yt-alert-small.yt-alert-info,#top-bar,#top-bar li,#yt-hitchhiker-feedback{background:transparent!important;background-image: -moz-linear-gradient(top,hsl(0,0%,33%) 48%,hsl(0,0%,20%) 49%,hsl(0,0%,0%) 85%,hsl(0,0%,20%))!important;background-image: -webkit-linear-gradient(top,hsl(0,0%,33%) 48%,hsl(0,0%,20%) 49%,hsl(0,0%,0%) 85%,hsl(0,0%,20%))!important}button:not(.close):not(.close-small):not(.yt-uix-expander-arrow):hover,.yt-uix-button:not(.close):not(.close-small):not(.yt-uix-expander-arrow):hover,.guide-item:hover,#masthead-subnav a:hover,.yt-uix-button-menu li a:hover,.channel_settings_tab:hover,#yt-admin-sidebar a:hover,li[role=\"menuitem\"]:hover,.yt-uix-button-menu-item,.yt-playall-link:hover,.gssb_a:hover,.navigation-menu li:hover,.h19TVe a:hover,.GGV3GFSDGV .GGV3GFSDOU:hover,.account-sidebar-section li:hover,.gssb_m tr:hover *,.GJOPA4DCAV > .GJOPA4DCHU,.GJOPA4DCHU:hover,.vm-vertical-nav li:hover{-moz-appearance: none;-webkit-appearance: none;background:transparent!important;background-image:-moz-radial-gradient(center bottom,hsla(0,77%,55%,.6),transparent),-moz-linear-gradient(top,hsl(0,0%,33%) 48%,hsl(0,0%,20%) 49%,hsl(0,0%,0%) 85%,hsl(0,0%,20%)) !important;background-image:-webkit-radial-gradient(center bottom,hsla(0,77%,55%,.6),transparent),-webkit-linear-gradient(top,hsl(0,0%,33%) 48%,hsl(0,0%,20%) 49%,hsl(0,0%,0%) 85%,hsl(0,0%,20%)) !important;-moz-transition: background-color .1s ease-in!important;-webkit-transition: background-color .1s ease-in!important}input[type=\"submit\"]:hover,button:hover,.yt-uix-button:hover,.guide-item:hover,.video-thumb:hover,#masthead-subnav a:hover,.yt-uix-button-menu li a:hover,.channel_settings_tab:hover,#yt-admin-sidebar a:hover,li[role=\"menuitem\"] span:hover,.yt-uix-button-menu-item span:hover,.yt-playall-link:hover,.gssb_a:hover,.placeholder.channel-module h3:hover,.vis-refresh-modifier .editor-tab.selected,.vis-refresh-modifier .editor-tab:hover,.yt-uix-button:active,.yt-uix-button.yt-uix-button-toggled,.yt-uix-button.yt-uix-button-toggled:hover,.yt-uix-button.yt-uix-button-toggled:focus,.navigation-menu li:hover,#video-sidebar .video-list-item:hover,#watch-sidebar .video-list-item a:hover,.featured-offers-view .featured-offer-container:hover,.store-display-offer-container:hover,.GGV3GFSDGV .GGV3GFSDOU:hover,.account-sidebar-section li:hover,.vm-vertical-nav li:hover{border-color: hsla(0,50%,75%,.6) hsla(0,50%,65%,.6) hsla(0,50%,55%,.6)!important;box-shadow:0 1px 0 hsla(0,0%,0%,.1),0 0 10px hsl(0,50%,75%)!important;-moz-transition:border-color .15s ease-in-out,box-shadow .3s ease-out,box-shadow .35s ease-in!important;-webkit-transition:border-color .15s ease-in-out,box-shadow .3s ease-out,box-shadow .35s ease-in!important;outline: none !important;opacity: 1.0 !important;color: hsl(0,100%,100%) !important;text-shadow:1px 1px 1px hsl(0,0%,0%),-1px -1px 1px hsl(0,0%,73%)!important}.feed-item-title,.guide-item.selected,#personalized-genres-container,#masthead-subnav .selected a,.expand,.collapse,#yt-admin-sidebar .selected a,#yt-admin-sidebar a.selected,.placeholder.channel-module h3,.navigation-menu .menu-item .selected a,.navigation-menu .menu-item a.selected,#seymour-editor .channel-editor-selected-tab,#yt-admin-sidebar .selected,#yt-admin-sidebar .selected:hover,.yt-nav-dark .selected .yt-nav-item,.GGV3GFSDGV .GGV3GFSDOU[selected],.account-sidebar-section li .selected,.vm-vertical-nav .selected{background:-moz-radial-gradient(center bottom,hsl(0,100%,47%),transparent),-moz-linear-gradient(top,hsl(0,0%,33%) 48%,hsl(0,0%,20%) 49%,hsl(0,0%,0%) 85%,hsl(0,0%,20%))!important;background:-webkit-radial-gradient(center bottom,hsl(0,100%,47%),transparent),-webkit-linear-gradient(top,hsl(0,0%,33%) 48%,hsl(0,0%,20%) 49%,hsl(0,0%,0%) 85%,hsl(0,0%,20%))!important;color: hsl(0,0%,80%)!important;font-weight: bold!important;text-shadow: 1px 1px 1px hsl(0,0%,0%),0 0 3px hsl(0,100%,100%),-1px -1px 1px #303a5d!important;box-shadow: 1px 1px 5px hsl(0,0%,0%),-1px -1px 5px #aaa!important}.browse-item:hover,.playlist-bar-item:hover,#guide-builder-promo,#yt-feedback,.subscribable-content-rec:hover,.video-list-item-link:hover,.yt-tile-visible:hover,#builder-header-right,.yt-tile-default:hover,#ppv-container .video-list-item-link,#playlist-pane-container .video-tile:hover,#playnav-title-bar,#video-sidebar .video-list-item:hover,#watch-sidebar .video-list-item a:hover,.featured-offers-view .featured-offer-container:hover,.store-display-offer-container:hover,.feed-item-container:hover,.context-playing,.lohp-shelf-cell-container:hover,.yt-lockup2:hover,.video-list-item a:hover{background-color: hsla(0,0%,0%,.8)!important;background-image: -moz-linear-gradient(top,hsla(0,99%,55%,.8),transparent)!important;background-image: -webkit-linear-gradient(top,hsla(0,99%,55%,.8),transparent)!important}.GGV3GFSDECB,.GJOPA4DCHBB,#watch7-playlist-tray .playlist-bar-item-playing,.GO1CBYXDKBB,.GO1CBYXDCCB{background-image: -moz-linear-gradient(center top,hsl(0,0%,20%),hsl(0,0%,10%))!important}input.GGV3GFSDH4,.playlist-video-item.even,.GJOPA4DCC4.GJOPA4DCKV.GJOPA4DCLV,.yt-alert-panel{background-color:hsl(0,0%,20%)!important}.outer-box-bg-color,#ppv-container,.watch-stats-title-cell,tr[style=\"background-color:#eee\"]{background-color:#500!important}#masthead-search-terms,#video-title,.media-filters table input,.search-box .search-term,.buttonbar,.GGV3GFSDOU,.premium-yva-unexpanded,.GO1CBYXDKBB input[type=\"text\"],.yt-uix-form-input-text{background:hsl(0,0%,20%)!important}#watch7-playlist-tray .playlist-bar-item-playing{background:hsla(0,80%,50%,.7)!important}#default-language-box,.feed-item-visual,.yt-tile-static,.yt-tile-visible,.yt-tile-default:hover,#guide-builder-promo,#yt-feedback,.iph-dialog,.subscribable-content-rec,.yt-tile-visible:hover,#playnav-channel-header,.vm-video-list,.vm-video-list .vm-video-item,.yt-uix-overlay-fg-content,.tile,.subscription-menu-expandable .subscription-menu-form,.subscription-menu-expandable .subscription-recommendations,#channel-body,.channel-bg-color,#branded-page-body-container,.GGV3GFSDMBB,ul[role=\"menubar\"],li[role=\"menuitem\"],.feed-promo,.yt-uix-form-input-container{background-color:hsl(0,0%,13%)!important}.yt-uix-button-menu,.yt-uix-button-menu *,#vm-video-actions-inner,#vm-video-actions-bar,#yt-admin-content h2,.yt-uix-overlay-fg-content,.vm-promo-opt-in,#vm-page-subheader,#builder-preview-pane,#playlist-pane-container .video-tile,.vm-video-metrics,.context-body,.mediapicker-audio.audio-track,#howto-addto:not(:hover),#seymour-editor,.GGV3GFSDGV,#contentTable,.GJOPA4DCPBB{background:hsl(0,0%,13%)!important}.feed-item-show-aggregate,.inner-box-bg-color,.inner-box-colors,.inner-box,.overlay-box ,.outer-box,.yt-uix-clickcard-card-body,.yt-uix-hovercard-card-body,.iph-pointer-caption-down,.iph-pointer-caption-up,#instructions,#upload-email-to,#search-base-div .ppv-promoted-videos,#yt-admin-content,.gssb_e,.secondary-pane,.subscription-menu-expandable-channels3,.channel-layout-full-width .tab-content-body,#watch-actions-area,.charts .video-card,.store-display-offer-container,.dashboard_content,.GGV3GFSDPBB,.GGV3GFSDECB,.gssb_m,body #masthead-expanded-container,#filter-dropdown,#results .ppv-promoted-videos{background-color:hsl(0,0%,8%)!important}#page.watch-branded #watch-video-container,.charts .videos-count-container,.charts .position,.featured-offers-view .featured-offer-container,#dashboard-no-videos-overlay{background-color:hsla(0,0%,0%,.5)!important}* img,img,span,input[type=\"button\"],input[type=\"submit\"],button,#masthead-search-terms *,.yt-tile-visible:hover *,#masthead-subnav ul *,.feed-item .feed-item-description,.feed-item.add-to-playlist .playlist-title,.ytg-fl,li[role=\"menuitem\"]:hover *,.yt-uix-button-menu-item:hover *,.yt-uix-button.yt-uix-button-active,.yt-uix-button.yt-uix-button-active:focus,.yt-uix-button.yt-uix-button-toggled:active,.yt-uix-button.yt-uix-button-toggled:focus,.close-small,.gssb_e *,#vm-videos-search-form .yt-uix-form-input-text,.yt-alert-panel,.yt-uix-form-input-text *{background-color:transparent!important}.gssb_m > tr:hover *{background:none transparent!important}#yt-admin-sidebar a,#yt-admin-content h2,#search-base-div .ppv-promoted-videos,#playlist-pane-container .video-tile{box-shadow: 0 1px 1px hsla(0,0%,0%,.4)!important}#default-language-box,.yt-tile-static,.yt-tile-visible,.yt-tile-default:hover,.iph-dialog,#personalized-genres-container,#masthead-subnav ul *,.expand,.collapse,.vm-promo-opt-in,.gssb_e,#ppv-container,.charts .video-card{box-shadow: 1px 1px 3px hsl(0,0%,0%)!important}input[type=\"button\"],input[type=\"submit\"],button,.edit_controls_outer,.channel_settings_tab,.inner-box-bg-color,.inner-box-colors,.inner-box,.yt-playall-link{box-shadow: 1px 1px 5px hsl(0,0%,0%)!important}#masthead-search-terms,.yt-uix-form-input-text,#vm-video-actions-inner,#video-title,.media-filters table input,.search-box .search-term,.GO1CBYXDKBB input[type=\"text\"]{box-shadow:1px 1px 5px hsl(0,0%,0%) inset,0 -1px 1px 1px hsla(0,0%,59%,.8) inset!important}.yt-alert-content,.vm-vertical-nav li{border-radius:2px!important}#default-language-box,button,input[type=\"button\"],input[type=\"submit\"],.feed-item-title,.iph-dialog,.feed-item-show-aggregate,.video-thumb,#video-sidebar a.video-list-item-link,#personalized-genres-container,#masthead-subnav ul,.yt-uix-button-menu li a:hover,.expand,.collapse,.playlist-bar-item:hover,.channel_settings_tab,.inner-box-bg-color,.inner-box-colors,.inner-box,#yt-admin-sidebar a,.yt-uix-clickcard-card-body,.yt-uix-hovercard-card-body,.yt-playall-link,.yt-alert,.vm-promo-opt-in,#search-base-div .ppv-promoted-videos,.secondary-pane,#playlist-pane-container .video-tile,.placeholder.channel-module h3,#ppv-container,.video-list-item a:hover,textarea,.feed-item-container,#filter-dropdown{border-radius:4px!important}#masthead-search-terms,.yt-uix-form-input-text,#video-title,.media-filters table input,.search-box .search-term,.GO1CBYXDKBB input[type=\"text\"]{border-radius:8px!important}#yt-feedback{border-radius:8px 8px 0 0!important}#default-language-box,button:not(.close):not(.close-small),input[type=\"button\"]:not(.close):not(.close-small),input[type=\"submit\"]:not(.close):not(.close-small),.channel_settings_tab,.yt-uix-button:not(.close):not(.close-small),.yt-playall-link{border-color:hsla(0,0%,0%,.8)!important}.comments-section *,#yt-admin *:not(button),#browse-main-column *:not(button),.gssb_e,#footer-container :not(button),.navigation-menu .menu-item,.browse-videos .browse-content,#yt-masthead-container.yt-masthead-hh,body #footer-hh-container,body #masthead-expanded-container,#footer-hh-main,input[type=\"text\"],.channels-search .search-field-container,.feed-item-container,.feed-container,.browse-container hr,#contentTable,.playlist-video-item,#watch7-main-container :not([class^=\"yt-subscription-button-subscriber\"]),.exp-new-site-width #page :not(button):not([class^=\"yt-subscription-button-subscriber\"]){border-color:hsla(0,0%,0%,0)!important}.yt-uix-clickcard-card-body,.yt-uix-hovercard-card-body{border:2px solid hsl(0,100%,100%)!important}.iph-pointer-caption-down,.iph-pointer-caption-up,#playnav-navbar a.navbar-tab-selected,#playnav-navbar a.navbar-tab:hover{border:2px solid hsl(48,83%,86%)!important}#masthead-search-terms,.yt-uix-form-input-text,#watch-description-expand,#watch-description-collapse,.expand,.collapse,.video-list-item-link:hover{border:0px solid hsla(0,0%,0%,0)!important}#video-sidebar a.video-list-item-link:hover,#masthead-user-expander .yt-uix-expander-head,#masthead-gaia-user-expander .yt-uix-expander-head,#masthead-gaia-photo-expander .yt-uix-expander-head,#yt-admin-sidebar li,#yt-admin,.close-small,#playlist-pane-container .video-tile,input.GGV3GFSDH4{border:none!important}#search-btn,.search-btn{margin-left:9px!important}.yt-uix-button.yt-uix-button-toggled:not(#masthead-user-button):not(.end):not(.yt-uix-button-hh-text){-moz-transform: scale(1.2)!important;-webkit-transform: scale(1.2)!important;font-size:13px!important;margin: 2px 4px 6px 4px !important}#search-btn{background:transparent!important;background-image: -moz-linear-gradient(top,hsl(0,90%,55%),hsl(0,60%,30%))!important;background-image: -webkit-linear-gradient(top,hsl(0,90%,55%),hsl(0,60%,30%))!important}#search-btn:hover{-moz-appearance: none;-webkit-appearance: none;background:transparent!important;background-image:-moz-radial-gradient(center bottom,hsla(0,5%,85%,.6),transparent),-moz-linear-gradient(top,hsl(0,99%,66%),hsl(0,70%,40%))!important;background-image:-webkit-radial-gradient(center bottom,hsla(0,5%,85%,.6),transparent),-webkit-linear-gradient(top,hsl(0,99%,66%),hsl(0,70%,40%))!important;-moz-transition: background-color .1s ease-in!important;-webkit-transition: background-color .1s ease-in!important}";
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		var node = document.createElement("style");
		node.type = "text/css";
		node.appendChild(document.createTextNode(css));
		heads[0].appendChild(node); 
	}
}
})();