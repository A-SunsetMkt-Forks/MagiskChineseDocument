import{_ as a,o as e,c as s,V as t}from"./chunks/framework.fc84ac3a.js";const k=JSON.parse('{"title":"常见问题","description":"","frontmatter":{},"headers":[],"relativePath":"faq.md","filePath":"faq.md","lastUpdated":1675020658000}'),o={name:"faq.md"},r=t('<h1 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h1><h2 id="q-我安装了一个模块-然后启动时卡在了开机动画。求助" tabindex="-1">Q: 我安装了一个模块，然后启动时卡在了开机动画。求助！ <a class="header-anchor" href="#q-我安装了一个模块-然后启动时卡在了开机动画。求助" aria-label="Permalink to &quot;Q: 我安装了一个模块，然后启动时卡在了开机动画。求助！&quot;">​</a></h2><p>如果在开发人员选项中启用了USB调试，请将手机连接到 PC。如果检测到设备（通过 <code>adb devices</code> 检查），请进入 ADB shell 并运行命令 <code>magisk --remove-modules</code>。这将删除所有模块并自动重新启动设备。</p><p>如果您没有启用 USB 调试，请重新启动到安全模式。大多数现代 Android 设备都支持在启动时按特殊键组合键以进入安全模式作为紧急选项。Magisk 将检测到安全模式被激活，所有模块将被禁用。然后重启回到正常模式（模块禁用状态持续），并通过 Magisk App 管理模块。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>如果您不知道什么是 ADB shell ，那么请在电脑上直接运行以下命令</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">adb</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shell</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">magisk</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--remove-modules</span></span></code></pre></div><p>如果您还不知道什么是 ADB ，那么请查看<a href="https://developer.android.google.cn/studio/command-line/adb?hl=zh-cn" target="_blank" rel="noreferrer">《Android 调试桥 (adb)》</a></p></div><h2 id="q-为什么-xxx应用会检测到-root" tabindex="-1">Q: 为什么 XXX应用会检测到 Root？ <a class="header-anchor" href="#q-为什么-xxx应用会检测到-root" aria-label="Permalink to &quot;Q: 为什么 XXX应用会检测到 Root？&quot;">​</a></h2><p>Magisk 不再处理 Root 隐藏。有大量 Magisk/Zygisk 模块专门提供这些功能，请在网络上查找它们。😉（您可以在“酷安”或者“哔哩哔哩”中搜索）</p><p>比较流行的模块是 <a href="https://github.com/LSPosed/LSPosed.github.io/releases/latest" target="_blank" rel="noreferrer">Shamiko</a> 。</p><h2 id="q-在我隐藏-magisk-app-后-应用图标显示异常。" tabindex="-1">Q: 在我隐藏 Magisk App 后，应用图标显示异常。 <a class="header-anchor" href="#q-在我隐藏-magisk-app-后-应用图标显示异常。" aria-label="Permalink to &quot;Q: 在我隐藏 Magisk App 后，应用图标显示异常。&quot;">​</a></h2><p>当隐藏 Magisk App 时，它将安装一个“存根”APK，其中没有任何内容。这个存根应用程序的唯一功能是将完整的 Magisk app APK 下载到其内部存储并动态加载。由于APK实际上是 <em>empty</em>，因此它不包含 APP 的图标资源。</p><p>当您打开隐藏的 Magisk App 时，它将为您提供在主屏幕中创建快捷方式的选项（其中包含正确的应用名称和图标），以方便您使用。您还可以手动要求应用在应用设置中创建图标。</p><h2 id="q-为什么这个文档很多错误或者不通顺的地方" tabindex="-1">Q: 为什么这个文档很多错误或者不通顺的地方 <a class="header-anchor" href="#q-为什么这个文档很多错误或者不通顺的地方" aria-label="Permalink to &quot;Q: 为什么这个文档很多错误或者不通顺的地方&quot;">​</a></h2><p>这个文档本质上还是机器翻译的，然而机器翻译的正确率有待提高。如果您发现了这些错误或者不通顺的地方，希望您可以向我们<a href="https://gitee.com/Jesse205/magisk-chinese-document/issues" target="_blank" rel="noreferrer">提交反馈</a>。</p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><a href="https://topjohnwu.github.io/Magisk/faq.html" target="_blank" rel="noreferrer">Magisk Frequently Asked Questions</a>（官方）</li></ul>',15),l=[r];function i(n,p,c,d,h,m){return e(),s("div",null,l)}const g=a(o,[["render",i]]);export{k as __pageData,g as default};
