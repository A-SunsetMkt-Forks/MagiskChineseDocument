import{_ as s,o as n,c as a,V as l}from"./chunks/framework.fc84ac3a.js";const d=JSON.parse('{"title":"Magisk 工具","description":"","frontmatter":{},"headers":[],"relativePath":"tools.md","filePath":"tools.md","lastUpdated":1684159014000}'),p={name:"tools.md"},e=l(`<h1 id="magisk-工具" tabindex="-1">Magisk 工具 <a class="header-anchor" href="#magisk-工具" aria-label="Permalink to &quot;Magisk 工具&quot;">​</a></h1><p>Magisk 为开发人员提供了大量安装工具、守护程序和实用程序。本文档涵盖了4个二进制文件和所有包含的小程序。二进制文件和小程序如下所示：</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">magiskboot                 /* binary */</span></span>
<span class="line"><span style="color:#A6ACCD;">magiskinit                 /* binary */</span></span>
<span class="line"><span style="color:#A6ACCD;">magiskpolicy               /* binary */</span></span>
<span class="line"><span style="color:#A6ACCD;">supolicy -&gt; magiskpolicy</span></span>
<span class="line"><span style="color:#A6ACCD;">magisk                     /* binary */</span></span>
<span class="line"><span style="color:#A6ACCD;">resetprop -&gt; magisk</span></span>
<span class="line"><span style="color:#A6ACCD;">su -&gt; magisk</span></span></code></pre></div><h2 id="magiskboot" tabindex="-1">magiskboot <a class="header-anchor" href="#magiskboot" aria-label="Permalink to &quot;magiskboot&quot;">​</a></h2><p>一个用于解压缩/重新打包 boot 映像、解析/修补/解压缩 cpio 、修补 dtb 、十六进制修补二进制文件，以及使用多种算法压缩/解压缩文件的工具。</p><p><code>magiskboot</code> 支持常见的压缩格式（这意味着它不依赖于外部工具），包括 <code>gzip</code>、<code>lz4</code>、<code>lz4_legacy</code>（<a href="https://events.static.linuxfound.org/sites/events/files/lcjpcojp13_klee.pdf" target="_blank" rel="noreferrer">仅在LG上使用</a>)、<code>lzma</code>、<code>xz</code> 和 <code>bzip2</code>。</p><p><code>magiskboot</code> 的概念是使 boot 映像修改更简单。对于解包，它解析标头并提取映像中的所有部分，如果在任何部分中检测到压缩，则会立即解压缩。对于重新打包，需要原始 boot 映像，以便可以使用原始标头，只需更改必要的内容，如节大小和校验和。如果需要，所有部分将被压缩回原始格式。该工具还支持许多 CPIO 和 DTB 操作。</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">用法: ./magiskboot &lt;操作&gt; [参数...]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">支持的操作:</span></span>
<span class="line"><span style="color:#A6ACCD;">  unpack [-n] [-h] &lt;bootimg&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      将 &lt;bootimg&gt; 解压缩到其各个组件，每个组件到一个文件，并在当前目录中具有相</span></span>
<span class="line"><span style="color:#A6ACCD;">    应的文件名。</span></span>
<span class="line"><span style="color:#A6ACCD;">      支持的组件：kernel、kernel_dtb、ramdisk.cpio、second、dtb、extra 和</span></span>
<span class="line"><span style="color:#A6ACCD;">    recovery_dtbo。</span></span>
<span class="line"><span style="color:#A6ACCD;">      默认情况下，每个组件将在写入输出文件之前即时自动解压缩。</span></span>
<span class="line"><span style="color:#A6ACCD;">      如果提供“-n”，则将跳过所有解压缩操作;每个组件将保持不变，以原始格式转储。</span></span>
<span class="line"><span style="color:#A6ACCD;">      如果提供了“-h”，则启动映像标头信息将转储到文件“header”，该文件可用于</span></span>
<span class="line"><span style="color:#A6ACCD;">    在重新打包期间修改标头配置。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    返回值：</span></span>
<span class="line"><span style="color:#A6ACCD;">    0:valid    1:error    2:chromeos</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  repack [-n] &lt;原始bootimg&gt; [输出bootimg]</span></span>
<span class="line"><span style="color:#A6ACCD;">      使用当前目录中的文件将启动映像组件重新打包到 [输出bootimg]，如果未指</span></span>
<span class="line"><span style="color:#A6ACCD;">    定，则为“new-boot.img”。</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;原始bootimg&gt; 是用于解压缩组件的原始启动映像。</span></span>
<span class="line"><span style="color:#A6ACCD;">      默认情况下，每个组件将使用 &lt;原始bootimg&gt; 中检测到的相应格式自动压缩。如</span></span>
<span class="line"><span style="color:#A6ACCD;">    果当前目录中的组件文件已被压缩，则不会对该特定组件执行任何附加压缩。</span></span>
<span class="line"><span style="color:#A6ACCD;">      如果提供“-n”，则将跳过所有压缩操作。</span></span>
<span class="line"><span style="color:#A6ACCD;">    如果 env 变量 PATCHVBMETAFLAG 设置为 true，则将设置启动映像的 vbmeta</span></span>
<span class="line"><span style="color:#A6ACCD;">    header 中的所有禁用标志。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  hexpatch &lt;文件&gt; &lt;hexpattern1&gt; &lt;hexpattern2&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    在 &lt;文件&gt; 中搜索 &lt;hexpattern1&gt;，并将其替换为 &lt;hexpattern2&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  cpio &lt;incpio&gt; [命令...]</span></span>
<span class="line"><span style="color:#A6ACCD;">    对 &lt;incpio&gt; 执行 cpio 命令（修改已到位）</span></span>
<span class="line"><span style="color:#A6ACCD;">    每个命令都是一个参数，请为每个命令添加引号。</span></span>
<span class="line"><span style="color:#A6ACCD;">    支持的命令:</span></span>
<span class="line"><span style="color:#A6ACCD;">      exists ENTRY</span></span>
<span class="line"><span style="color:#A6ACCD;">        如果 ENTRY 存在，则返回 0，否则返回 1</span></span>
<span class="line"><span style="color:#A6ACCD;">      rm [-r] ENTRY</span></span>
<span class="line"><span style="color:#A6ACCD;">        删除 ENTRY，指定 [-r] 以递归删除</span></span>
<span class="line"><span style="color:#A6ACCD;">      mkdir MODE ENTRY</span></span>
<span class="line"><span style="color:#A6ACCD;">        在 MODE 权限下创建目录 ENTRY</span></span>
<span class="line"><span style="color:#A6ACCD;">      ln TARGET ENTRY</span></span>
<span class="line"><span style="color:#A6ACCD;">        使用名称 ENTRY 创建指向 TARGET 的符号链接</span></span>
<span class="line"><span style="color:#A6ACCD;">      mv SOURCE DEST</span></span>
<span class="line"><span style="color:#A6ACCD;">        将 SOURCE 移动到 DEST</span></span>
<span class="line"><span style="color:#A6ACCD;">      add MODE ENTRY INFILE</span></span>
<span class="line"><span style="color:#A6ACCD;">        在 MODE 权限中添加 INFILE 作为 ENTRY；替换 ENTRY（如果存在）</span></span>
<span class="line"><span style="color:#A6ACCD;">      extract [ENTRY OUT]</span></span>
<span class="line"><span style="color:#A6ACCD;">        将 ENTRY 解压到 OUT，或将所有条目解压到当前目录</span></span>
<span class="line"><span style="color:#A6ACCD;">      test</span></span>
<span class="line"><span style="color:#A6ACCD;">        测试 cpio 的状态</span></span>
<span class="line"><span style="color:#A6ACCD;">        返回值为0或或运算以下值：</span></span>
<span class="line"><span style="color:#A6ACCD;">        0x1:Magisk    0x2:unsupported    0x4:Sony</span></span>
<span class="line"><span style="color:#A6ACCD;">      patch</span></span>
<span class="line"><span style="color:#A6ACCD;">        应用 ramdisk 补丁</span></span>
<span class="line"><span style="color:#A6ACCD;">        用 env 变量进行配置：KEEPVERITY KEEPFORCEENCRYPT</span></span>
<span class="line"><span style="color:#A6ACCD;">      backup ORIG</span></span>
<span class="line"><span style="color:#A6ACCD;">        从 ORIG 创建 ramdisk 备份</span></span>
<span class="line"><span style="color:#A6ACCD;">      restore</span></span>
<span class="line"><span style="color:#A6ACCD;">        从 incpio 中存储的 ramdisk 备份恢复 ramdisk</span></span>
<span class="line"><span style="color:#A6ACCD;">      sha1</span></span>
<span class="line"><span style="color:#A6ACCD;">        如果以前已在 ramdisk 中备份，则输出原始引导SHA1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  dtb &lt;文件&gt; &lt;操作&gt; [参数...]</span></span>
<span class="line"><span style="color:#A6ACCD;">    对 &lt;文件&gt; 执行与 dtb 相关的操作</span></span>
<span class="line"><span style="color:#A6ACCD;">    支持的操作：</span></span>
<span class="line"><span style="color:#A6ACCD;">      print [-f]</span></span>
<span class="line"><span style="color:#A6ACCD;">        打印 dtb 的所有内容以进行调试</span></span>
<span class="line"><span style="color:#A6ACCD;">        指定 [-f] 以仅打印 fstab 节点</span></span>
<span class="line"><span style="color:#A6ACCD;">      patch</span></span>
<span class="line"><span style="color:#A6ACCD;">        搜索 fstab 并删除 verity/avb</span></span>
<span class="line"><span style="color:#A6ACCD;">        直接对文件进行修改</span></span>
<span class="line"><span style="color:#A6ACCD;">        使用 env 变量进行配置：KEEPVERITY</span></span>
<span class="line"><span style="color:#A6ACCD;">      test</span></span>
<span class="line"><span style="color:#A6ACCD;">        测试 fstab 的状态</span></span>
<span class="line"><span style="color:#A6ACCD;">        返回值:</span></span>
<span class="line"><span style="color:#A6ACCD;">        0:valid    1:error</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  split &lt;文件&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    将 image.*-dtb 拆分为 kernel + kernel_dtb</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  sha1 &lt;文件&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    出 &lt;文件&gt; 的 SHA1 校验和</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  cleanup</span></span>
<span class="line"><span style="color:#A6ACCD;">    清理当前工作目录</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  compress[=格式] &lt;输入文件&gt; [输出文件]</span></span>
<span class="line"><span style="color:#A6ACCD;">    使用 [格式] 将 &lt;输入文件&gt; 压缩为 [输出文件]。</span></span>
<span class="line"><span style="color:#A6ACCD;">    可以是“-”，以作为 STDIN/STDOUT。</span></span>
<span class="line"><span style="color:#A6ACCD;">    如果未指定 [格式]，则将使用 gzip。</span></span>
<span class="line"><span style="color:#A6ACCD;">    如果未指定 [输出文件]，则 &lt;输入文件&gt; 将被替换为</span></span>
<span class="line"><span style="color:#A6ACCD;">    后缀为匹配文件扩展名的另一个文件。</span></span>
<span class="line"><span style="color:#A6ACCD;">    支持格式: gzip zopfli xz lzma bzip2 lz4 lz4_legacy lz4_lg </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  decompress &lt;输入文件&gt; [输出文件]</span></span>
<span class="line"><span style="color:#A6ACCD;">    检测格式并将 &lt;输入文件&gt; 解压缩到 [输出文件]。</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;输入文件&gt;/[输出文件] 可以是“-”，以作为 STDIN/STDOUT。</span></span>
<span class="line"><span style="color:#A6ACCD;">    如果未指定 [输出文件]，则 &lt;输入文件&gt; 将替换为另一个文件，</span></span>
<span class="line"><span style="color:#A6ACCD;">    删除其文件格式文件扩展名。</span></span>
<span class="line"><span style="color:#A6ACCD;">    支持格式: gzip zopfli xz lzma bzip2 lz4 lz4_legacy lz4_lg</span></span></code></pre></div><h2 id="magiskinit" tabindex="-1">magiskinit <a class="header-anchor" href="#magiskinit" aria-label="Permalink to &quot;magiskinit&quot;">​</a></h2><p>这个二进制文件将替换 Magisk 补丁启动映像的 ramdisk 中的 <code>init</code>。它最初是为支持以 system-as-root 的设备而创建的，但该工具被扩展为支持所有设备，并成为 Magisk 的关键部分。更多详细信息可以在 <a href="./details.html#magisk-booting-process">Micsk Booting Process</a> 中的 <strong>Pre-Init</strong> 部分找到。</p><h2 id="magiskpolicy" tabindex="-1">magiskpolicy <a class="header-anchor" href="#magiskpolicy" aria-label="Permalink to &quot;magiskpolicy&quot;">​</a></h2><p>（此工具别名为 <code>supolicy</code>，以与 SuperSU 的 sepolicy 工具兼容）</p><p>高级开发人员可以使用此工具修改 SELinux 策略。在像 Linux 服务器管理员这样的常见场景中，他们会直接修改 SELinux 策略源（<code>*.te</code>）并重新编译 <code>sepolicy</code> 二进制文件，但在 Android 上，我们直接修补二进制文件（或运行时策略）。</p><p>Magisk 守护进程派生的所有进程，包括 root shell 及其所有分支，都在上下文 <code>u:r:magisk:s0</code> 中运行。所有安装了 Magisk 的系统上使用的规则都可以被视为官方的 <code>sepolicy</code> 具有以下补丁：<code>magiskpolicy --magisk &#39;allow magisk * * *&#39;</code>。</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">用法: ./magiskpolicy [--选项...] [策略声明...]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">选项:</span></span>
<span class="line"><span style="color:#A6ACCD;">   --help            显示 policy 语句的帮助消息</span></span>
<span class="line"><span style="color:#A6ACCD;">   --load FILE       从 FILE 加载 sepolicy</span></span>
<span class="line"><span style="color:#A6ACCD;">   --load-split      从预编译的 sepolicy 加载或编译拆分的 cil 策略</span></span>
<span class="line"><span style="color:#A6ACCD;">   --compile-split   编译拆分的cil策略</span></span>
<span class="line"><span style="color:#A6ACCD;">   --save FILE       将整体策略转储到 FILE 文件</span></span>
<span class="line"><span style="color:#A6ACCD;">   --live            立即将 sepolicy 加载到内核中</span></span>
<span class="line"><span style="color:#A6ACCD;">   --magisk          应用内置 Magisk sepolicy 规则</span></span>
<span class="line"><span style="color:#A6ACCD;">   --apply FILE      应用 FILE 中的规则，作为策略语句逐行读取和分析</span></span>
<span class="line"><span style="color:#A6ACCD;">                     (允许多重 --apply)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">如果既没有指定 --load、--load-split，也没有指定 --compile-split，则它</span></span>
<span class="line"><span style="color:#A6ACCD;">将从当前活动策略（/sys/fs/selinux/policy）加载</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">一个策略声明应被视为一个参数，这意味着每个策略声明都应该用引号括起来。</span></span>
<span class="line"><span style="color:#A6ACCD;">可以在一个命令中提供多个策略语句。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">语句的格式为“&lt;rule_name&gt; [args...]”。</span></span>
<span class="line"><span style="color:#A6ACCD;">标有 (^) 的参数可以接受一个或多个条目。多个条目由大括号 ({}) 中的空格分隔列表组成。</span></span>
<span class="line"><span style="color:#A6ACCD;">标有 (*) 的参数与 (^) 相同，但另外支持 match-all 运算符 (*)。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">示例：&quot;allow { s1 s2 } { t1 t2 } class *&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">将扩展到：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">allow s1 t1 class { all-permissions-of-class }</span></span>
<span class="line"><span style="color:#A6ACCD;">allow s1 t2 class { all-permissions-of-class }</span></span>
<span class="line"><span style="color:#A6ACCD;">allow s2 t1 class { all-permissions-of-class }</span></span>
<span class="line"><span style="color:#A6ACCD;">allow s2 t2 class { all-permissions-of-class }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">支持的策略声明：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;allow *source_type *target_type *class *perm_set&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;deny *source_type *target_type *class *perm_set&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;auditallow *source_type *target_type *class *perm_set&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;dontaudit *source_type *target_type *class *perm_set&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;allowxperm *source_type *target_type *class operation xperm_set&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;auditallowxperm *source_type *target_type *class operation xperm_set&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;dontauditxperm *source_type *target_type *class operation xperm_set&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">- 唯一支持的操作是“ioctl”</span></span>
<span class="line"><span style="color:#A6ACCD;">- xperm_set 格式为 “low-high”、“value”或“*”。</span></span>
<span class="line"><span style="color:#A6ACCD;">  “*”将被视为“0x0000-0xFFFF”。</span></span>
<span class="line"><span style="color:#A6ACCD;">  所有值应以十六进制书写。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;permissive ^type&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;enforce ^type&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;typeattribute ^type ^attribute&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;type type_name ^(attribute)&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">- 参数“attribute”是可选的，默认为“domain”</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;attribute attribute_name&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;type_transition source_type target_type class default_type (object_name)&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">- 参数“object_name”是可选的</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;type_change source_type target_type class default_type&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;type_member source_type target_type class default_type&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;genfscon fs_name partial_path fs_context&quot;</span></span></code></pre></div><h2 id="magisk" tabindex="-1">magisk <a class="header-anchor" href="#magisk" aria-label="Permalink to &quot;magisk&quot;">​</a></h2><p>当使用名称 <code>magisk</code> 调用 magisk 二进制文件时，它作为一个实用工具，具有许多助手函数和几个 Magisk 服务的入口点。</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">用法: magisk [小程序 [参数]...]</span></span>
<span class="line"><span style="color:#A6ACCD;">   或: magisk [选项]...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">选项：</span></span>
<span class="line"><span style="color:#A6ACCD;">   -c                        打印当前二进制版本</span></span>
<span class="line"><span style="color:#A6ACCD;">   -v                        打印正在运行的守护程序版本</span></span>
<span class="line"><span style="color:#A6ACCD;">   -V                        打印正在运行的守护程序版本号</span></span>
<span class="line"><span style="color:#A6ACCD;">   --list                    列出所有可用的小程序</span></span>
<span class="line"><span style="color:#A6ACCD;">   --remove-modules          移除所有模块并重新启动</span></span>
<span class="line"><span style="color:#A6ACCD;">   --install-module ZIP      安装模块 zip 文件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">高级选项（内部 APIs）：</span></span>
<span class="line"><span style="color:#A6ACCD;">   --daemon                  手动启动 Magisk 守护进程</span></span>
<span class="line"><span style="color:#A6ACCD;">   --stop                    移除所有 Magisk 更改并停止守护程序</span></span>
<span class="line"><span style="color:#A6ACCD;">   --[init trigger]          初始化触发器上的回调。有效的触发器：</span></span>
<span class="line"><span style="color:#A6ACCD;">                             post-fs-data, service, boot-complete, zygote-restart</span></span>
<span class="line"><span style="color:#A6ACCD;">   --unlock-blocks           将所有块设备的 BLKROSET 标志设置为 OFF</span></span>
<span class="line"><span style="color:#A6ACCD;">   --restorecon              恢复 Magisk 文件上的 selinux 上下文</span></span>
<span class="line"><span style="color:#A6ACCD;">   --clone-attr SRC DEST     克隆权限、所有者和 selinux 上下文</span></span>
<span class="line"><span style="color:#A6ACCD;">   --clone SRC DEST          克隆 SRC 到 DEST</span></span>
<span class="line"><span style="color:#A6ACCD;">   --sqlite SQL              执行 SQL 命令到 Magisk 数据库</span></span>
<span class="line"><span style="color:#A6ACCD;">   --path                    打印 Magisk tmpfs 挂载路径</span></span>
<span class="line"><span style="color:#A6ACCD;">   --denylist ARGS           拒绝列表配置 CLI</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">可用的小程序:</span></span>
<span class="line"><span style="color:#A6ACCD;">    su, resetprop</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">用法: magisk --denylist [操作 [参数...] ]</span></span>
<span class="line"><span style="color:#A6ACCD;">操作:</span></span>
<span class="line"><span style="color:#A6ACCD;">   status          返回强制的状态</span></span>
<span class="line"><span style="color:#A6ACCD;">   enable          启用拒绝列表强制</span></span>
<span class="line"><span style="color:#A6ACCD;">   disable         禁用拒绝列表强制</span></span>
<span class="line"><span style="color:#A6ACCD;">   add PKG [PROC]  将新目标添加到拒绝列表</span></span>
<span class="line"><span style="color:#A6ACCD;">   rm PKG [PROC]   从拒绝列表中删除目标</span></span>
<span class="line"><span style="color:#A6ACCD;">   ls              打印当前拒绝列表</span></span>
<span class="line"><span style="color:#A6ACCD;">   exec CMDs...    在隔离的挂载命名空间中执行命令并执行</span></span>
<span class="line"><span style="color:#A6ACCD;">                   所有卸载操作</span></span></code></pre></div><h2 id="su" tabindex="-1">su <a class="header-anchor" href="#su" aria-label="Permalink to &quot;su&quot;">​</a></h2><p>MagiskSU 入口点 <code>magisk</code> 的小程序。不错的旧 <code>su</code> 命令。</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">用法: su [选项] [-] [user [参数...]]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">选项:</span></span>
<span class="line"><span style="color:#A6ACCD;">  -c, --command 命令         将命令传递给调用的 shell</span></span>
<span class="line"><span style="color:#A6ACCD;">  -h, --help                    显示此帮助消息并退出</span></span>
<span class="line"><span style="color:#A6ACCD;">  -, -l, --login                将 shell 伪装成一个登录 shell</span></span>
<span class="line"><span style="color:#A6ACCD;">  -m, -p,</span></span>
<span class="line"><span style="color:#A6ACCD;">  --preserve-environment        保护整个环境</span></span>
<span class="line"><span style="color:#A6ACCD;">  -s, --shell SHELL             使用 SHELL 而不是默认的 /system/bin/sh</span></span>
<span class="line"><span style="color:#A6ACCD;">  -v, --version                 显示版本名并退出</span></span>
<span class="line"><span style="color:#A6ACCD;">  -V                            显示版本号并退出</span></span>
<span class="line"><span style="color:#A6ACCD;">  -mm, -M,</span></span>
<span class="line"><span style="color:#A6ACCD;">  --mount-master                在全局装载命名空间中强制运行</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">注意</p><p>尽管上面没有列出 <code>-Z, --context</code> 选项，但该选项仍然存在，以便与为 SuperSU 设计的应用程序进行 CLI 兼容。然而，该选项被默默忽略，因为它不再相应。</p></div><h2 id="resetprop" tabindex="-1">resetprop <a class="header-anchor" href="#resetprop" aria-label="Permalink to &quot;resetprop&quot;">​</a></h2><p><code>magisk</code> 的小程序。高级系统属性操作实用程序。查看 <a href="./details.html#重置属性-resetprop">Resetprop 详细信息</a> 以了解更多背景信息。</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">用法: resetprop [标志] [选项...]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">选项:</span></span>
<span class="line"><span style="color:#A6ACCD;">   -h, --help        显示此消息</span></span>
<span class="line"><span style="color:#A6ACCD;">   (no arguments)    输出所有属性</span></span>
<span class="line"><span style="color:#A6ACCD;">   NAME              获取 NAME 属性</span></span>
<span class="line"><span style="color:#A6ACCD;">   NAME VALUE        使用 VALUE 设置 NAME 属性</span></span>
<span class="line"><span style="color:#A6ACCD;">   --file FILE       从 FILE 加载属性</span></span>
<span class="line"><span style="color:#A6ACCD;">   --delete NAME     删除 NAME 属性</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">标志:</span></span>
<span class="line"><span style="color:#A6ACCD;">   -v      将详细输出打印到 stderr</span></span>
<span class="line"><span style="color:#A6ACCD;">   -n      设置 props 而不经过 property_service</span></span>
<span class="line"><span style="color:#A6ACCD;">           (此标志仅影响 setprop)</span></span>
<span class="line"><span style="color:#A6ACCD;">   -p      从/向持久存储读取/写入属性</span></span>
<span class="line"><span style="color:#A6ACCD;">           (此标志仅影响 getprop 和 delprop)</span></span></code></pre></div><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><a href="https://topjohnwu.github.io/Magisk/tools.html" target="_blank" rel="noreferrer">Magisk Tools</a>（官方）</li><li><a href="https://e7kmbb.github.io/Magisk/tools.html" target="_blank" rel="noreferrer">Magisk 工具</a></li></ul>`,27),o=[e];function t(c,i,C,A,r,y){return n(),a("div",null,o)}const g=s(p,[["render",t]]);export{d as __pageData,g as default};
