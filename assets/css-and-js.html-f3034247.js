import{_ as n,o as s,c as a,a as t}from"./app-7492dbda.js";const p={},e=t(`<h1 id="tutorial-css-and-js" tabindex="-1"><a class="header-anchor" href="#tutorial-css-and-js" aria-hidden="true">#</a> [Tutorial] CSS and JS</h1><p>Our simple example project is nearly complete. We&#39;ll just add bootstrap and a button to finish it. This project is not something you usually make, but it teaches you all the basics of Htx.</p><h2 id="importing-bootstrap" tabindex="-1"><a class="header-anchor" href="#importing-bootstrap" aria-hidden="true">#</a> Importing Bootstrap</h2><p>Lets import Bootstrap into our project. I think it&#39;s a good thing to seperate this into another component, so we can easily find and edit it later if we want to.</p><p>First run this in the root to create the new component</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">touch</span> src/other/BootstrapImport.htx <span class="token comment"># or create it with &quot;new-item&quot; in a powershell in windows</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In this component paste the following code</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CSS</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>JS</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://code.jquery.com/jquery-3.3.1.slim.min.js<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>JS</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>JS</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This will import all the requirements for bootstrap into our project. Before we can actually use Bootstrap tough, we&#39;ll still need to import our component and also define where our scope imports will be placed. Since we want to use Bootstrap everywhere we can place it in the layout file (src/layouts/Default.htx)</p><p>Lets edit that layout file</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">&lt;!-- import &quot;../other/BootstrapImport&quot; --&gt;</span>
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token variable">$GLOBAL_call_list</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">array_push</span><span class="token punctuation">(</span><span class="token variable">$GLOBAL_call_list</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;layout/Default&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$props</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;title&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token variable">$props</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;title&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Page&quot;</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span><span class="token php language-php"><span class="token delimiter important">&lt;?=</span> <span class="token variable">$props</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;title&quot;</span><span class="token punctuation">]</span> <span class="token delimiter important">?&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BootstrapImport</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SCOPES</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>INNER</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- render call list --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token variable">$GLOBAL_call_list</span> <span class="token keyword">as</span> <span class="token variable">$called</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token delimiter important">?&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Called by the &quot;<span class="token php language-php"><span class="token delimiter important">&lt;?=</span> <span class="token variable">$called</span> <span class="token delimiter important">?&gt;</span></span>&quot;&quot; component<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token punctuation">}</span> <span class="token delimiter important">?&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SCOPES</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>js<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you convert all htx to php again and start php, you&#39;ll see bootstrap is imported and works.</p><h2 id="creating-a-button" tabindex="-1"><a class="header-anchor" href="#creating-a-button" aria-hidden="true">#</a> Creating a button</h2><p>To showcase internal component scopes we&#39;ll create a simple button that alerts a msg. Lets make the file for the button component using the following script</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">touch</span> src/other/ClickMe.htx <span class="token comment"># or use &quot;new-item&quot; in a powershell for windows</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Put the following code inside it</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn btn-primary<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">someClickAction</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>Click me!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This is just a simple button, however the &quot;someClickAction&quot; function is not yet defined anywhere. Lets create the component js file using the following script</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">touch</span> src/other/ClickMe.js <span class="token comment"># or use &quot;new-item&quot; in a powershell on windows</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Puttin both .htx, .js &amp; .css files together with other components can be harder to read, so you can also move the entire component into it&#39;s own folder</p></div><p>Now in that file paste the following</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">someClickAction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Lets also import it in our index.htx page like so</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">&lt;!-- import DefaultLayout from &quot;../layouts/Default&quot; --&gt;</span>
<span class="token comment">&lt;!-- import &quot;../other/Title&quot; --&gt;</span>
<span class="token comment">&lt;!-- import &quot;../other/ClickMe&quot; --&gt;</span>
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token variable">$title</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Htx Tutorial&quot;</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DefaultLayout</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>$title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Title</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>strtoupper($title)</span> <span class="token punctuation">/&gt;</span></span>
    Just a small page
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ClickMe</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DefaultLayout</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now if you run the example again by converting everything and running php you can click the button.</p>`,25),o=[e];function l(c,i){return s(),a("div",null,o)}const r=n(p,[["render",l],["__file","css-and-js.html.vue"]]);export{r as default};
