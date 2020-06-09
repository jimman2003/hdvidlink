// ==UserScript==
// @name         Hdvid Link
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @exclude     /^https?://hdvid.{1,3}/embed.*/
// @include     /^https?://hdvid.*/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
if (location.href.indexOf("embed") !== -1) // NOTE: Don't run on image search
{return;}
var video_id=window.location.href.split('/')[3];
window.location.href=video_id.replace(video_id,"embed-"+video_id)
})();
setTimeout(function(){alert(jwplayer("vplayer").getPlaylist()[0].file)},500)
