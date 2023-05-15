import{_ as e,o as a,c as o,V as s}from"./chunks/framework.fc84ac3a.js";const p=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"releases/21400.md","filePath":"releases/21400.md","lastUpdated":1674222670000}'),r={name:"releases/21400.md"},t=s('<h2 id="_2021-1-17-magisk-v21-4" tabindex="-1">2021.1.17 Magisk v21.4 <a class="header-anchor" href="#_2021-1-17-magisk-v21-4" aria-label="Permalink to &quot;2021.1.17 Magisk v21.4&quot;">​</a></h2><p><strong>Update</strong>: v21.4 adds more regression hot fixes.</p><p>Happy 2021! v21.3 adds a workaround for devices with buggy F2FS Linux kernel drivers. This F2FS bug may cause bootloops on many devices. Checkout the full <a href="https://topjohnwu.github.io/Magisk/releases/21000.html" target="_blank" rel="noreferrer">v21.0 release notes</a> if coming from older releases.</p><h3 id="v21-4" tabindex="-1">v21.4 <a class="header-anchor" href="#v21-4" aria-label="Permalink to &quot;v21.4&quot;">​</a></h3><ul><li>[MagiskSU] Fix <code>su -c</code> behavior that broke many root apps</li><li>[General] Properly handle read/write over sockets (the <code>broken pipe</code> issue)</li></ul><h3 id="v21-3" tabindex="-1">v21.3 <a class="header-anchor" href="#v21-3" aria-label="Permalink to &quot;v21.3&quot;">​</a></h3><ul><li>[MagiskInit] Avoid mounting <code>f2fs</code> userdata as it may result in kernel crashes. This shall fix a lot of bootloops</li><li>[MagiskBoot] Fix a minor header checksum bug for <code>DHTB</code> header and ASUS <code>blob</code> image formats</li><li>[MagiskHide] Allowing hiding isolated processes if the mount namespace is separated</li></ul><h3 id="full-changelog-here" tabindex="-1">Full Changelog: <a href="/MagiskChineseDocument/changes.html">here</a> <a class="header-anchor" href="#full-changelog-here" aria-label="Permalink to &quot;Full Changelog: [here](/changes.md)&quot;">​</a></h3>',8),i=[t];function l(n,h,d,c,u,g){return a(),o("div",null,i)}const _=e(r,[["render",l]]);export{p as __pageData,_ as default};
