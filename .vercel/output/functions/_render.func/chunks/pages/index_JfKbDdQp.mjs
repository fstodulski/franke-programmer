/* empty css                          */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, j as renderSlot, k as renderHead, g as addAttribute, h as createAstro } from '../astro_DpVIhAgO.mjs';

const $$Avatar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<figure class="w-32 relative flex items-center justify-center h-32" data-astro-cid-43aphwgt> <img src="/assets/coding.svg" alt="Coding sign rotated" class="absolute animate-rotate" data-astro-cid-43aphwgt> <img class="w-20 h-20 rounded-full" src="/assets/avatar.webp" alt="Franek Stodulski image" data-astro-cid-43aphwgt> </figure> `;
}, "/Users/franciszekstodulski/Dev/@others/franekstodulski/src/components/Avatar/Avatar.astro", void 0);

/** @returns {void} */

function run(fn) {
	return fn();
}

function blank_object() {
	return Object.create(null);
}

/**
 * @param {Function[]} fns
 * @returns {void}
 */
function run_all(fns) {
	fns.forEach(run);
}

/** @returns {{}} */
function compute_rest_props(props, keys) {
	const rest = {};
	keys = new Set(keys);
	for (const k in props) if (!keys.has(k) && k[0] !== '$') rest[k] = props[k];
	return rest;
}

let current_component;

/** @returns {void} */
function set_current_component(component) {
	current_component = component;
}

// general each functions:

function ensure_array_like(array_like_or_iterator) {
	return array_like_or_iterator?.length !== undefined
		? array_like_or_iterator
		: Array.from(array_like_or_iterator);
}

const _boolean_attributes = /** @type {const} */ ([
	'allowfullscreen',
	'allowpaymentrequest',
	'async',
	'autofocus',
	'autoplay',
	'checked',
	'controls',
	'default',
	'defer',
	'disabled',
	'formnovalidate',
	'hidden',
	'inert',
	'ismap',
	'loop',
	'multiple',
	'muted',
	'nomodule',
	'novalidate',
	'open',
	'playsinline',
	'readonly',
	'required',
	'reversed',
	'selected'
]);

/**
 * List of HTML boolean attributes (e.g. `<input disabled>`).
 * Source: https://html.spec.whatwg.org/multipage/indices.html
 *
 * @type {Set<string>}
 */
const boolean_attributes = new Set([..._boolean_attributes]);

/** @typedef {typeof _boolean_attributes[number]} BooleanAttributes */

const invalid_attribute_name_character =
	/[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter

/** @returns {string} */
function spread(args, attrs_to_add) {
	const attributes = Object.assign({}, ...args);
	if (attrs_to_add) {
		const classes_to_add = attrs_to_add.classes;
		const styles_to_add = attrs_to_add.styles;
		if (classes_to_add) {
			if (attributes.class == null) {
				attributes.class = classes_to_add;
			} else {
				attributes.class += ' ' + classes_to_add;
			}
		}
		if (styles_to_add) {
			if (attributes.style == null) {
				attributes.style = style_object_to_string(styles_to_add);
			} else {
				attributes.style = style_object_to_string(
					merge_ssr_styles(attributes.style, styles_to_add)
				);
			}
		}
	}
	let str = '';
	Object.keys(attributes).forEach((name) => {
		if (invalid_attribute_name_character.test(name)) return;
		const value = attributes[name];
		if (value === true) str += ' ' + name;
		else if (boolean_attributes.has(name.toLowerCase())) {
			if (value) str += ' ' + name;
		} else if (value != null) {
			str += ` ${name}="${value}"`;
		}
	});
	return str;
}

/** @returns {{}} */
function merge_ssr_styles(style_attribute, style_directive) {
	const style_object = {};
	for (const individual_style of style_attribute.split(';')) {
		const colon_index = individual_style.indexOf(':');
		const name = individual_style.slice(0, colon_index).trim();
		const value = individual_style.slice(colon_index + 1).trim();
		if (!name) continue;
		style_object[name] = value;
	}
	for (const name in style_directive) {
		const value = style_directive[name];
		if (value) {
			style_object[name] = value;
		} else {
			delete style_object[name];
		}
	}
	return style_object;
}

const ATTR_REGEX = /[&"]/g;
const CONTENT_REGEX = /[&<]/g;

/**
 * Note: this method is performance sensitive and has been optimized
 * https://github.com/sveltejs/svelte/pull/5701
 * @param {unknown} value
 * @returns {string}
 */
function escape(value, is_attr = false) {
	const str = String(value);
	const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
	pattern.lastIndex = 0;
	let escaped = '';
	let last = 0;
	while (pattern.test(str)) {
		const i = pattern.lastIndex - 1;
		const ch = str[i];
		escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
		last = i + 1;
	}
	return escaped + str.substring(last);
}

function escape_attribute_value(value) {
	// keep booleans, null, and undefined for the sake of `spread`
	const should_escape = typeof value === 'string' || (value && typeof value === 'object');
	return should_escape ? escape(value, true) : value;
}

/** @returns {{}} */
function escape_object(obj) {
	const result = {};
	for (const key in obj) {
		result[key] = escape_attribute_value(obj[key]);
	}
	return result;
}

/** @returns {string} */
function each(items, fn) {
	items = ensure_array_like(items);
	let str = '';
	for (let i = 0; i < items.length; i += 1) {
		str += fn(items[i], i);
	}
	return str;
}

function validate_component(component, name) {
	if (!component || !component.$$render) {
		if (name === 'svelte:component') name += ' this={...}';
		throw new Error(
			`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`
		);
	}
	return component;
}

let on_destroy;

/** @returns {{ render: (props?: {}, { $$slots, context }?: { $$slots?: {}; context?: Map<any, any>; }) => { html: any; css: { code: string; map: any; }; head: string; }; $$render: (result: any, props: any, bindings: any, slots: any, context: any) => any; }} */
function create_ssr_component(fn) {
	function $$render(result, props, bindings, slots, context) {
		const parent_component = current_component;
		const $$ = {
			on_destroy,
			context: new Map(context || (parent_component ? parent_component.$$.context : [])),
			// these will be immediately discarded
			on_mount: [],
			before_update: [],
			after_update: [],
			callbacks: blank_object()
		};
		set_current_component({ $$ });
		const html = fn(result, props, bindings, slots);
		set_current_component(parent_component);
		return html;
	}
	return {
		render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
			on_destroy = [];
			const result = { title: '', head: '', css: new Set() };
			const html = $$render(result, props, {}, $$slots, context);
			run_all(on_destroy);
			return {
				html,
				css: {
					code: Array.from(result.css)
						.map((css) => css.code)
						.join('\n'),
					map: null // TODO
				},
				head: result.title + result.head
			};
		},
		$$render
	};
}

/** @returns {string} */
function add_attribute(name, value, boolean) {
	if (value == null || (boolean )) return '';
	const assignment = `="${escape(value, true)}"`;
	return ` ${name}${assignment}`;
}

/** @returns {string} */
function style_object_to_string(style_object) {
	return Object.keys(style_object)
		.filter((key) => style_object[key] != null && style_object[key] !== '')
		.map((key) => `${key}: ${escape_attribute_value(style_object[key])};`)
		.join(' ');
}

/* src/components/Pills/Pills.svelte generated by Svelte v4.2.17 */

const Pills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const PILLS = ["Leading team of 10+", "Recruiting Devs", "Dev PreSales", "Hardcode Coding"];

	return `<div class="mt-4 flex w-full flex-col flex-wrap items-center gap-3 md:max-w-[80%] md:flex-row">${each(PILLS, pill => {
		return `<span class="pill">${escape(pill)}</span>`;
	})}</div>`;
});

const $$InfoContainer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex w-full h-full flex-col gap-6 p-4 bg-slate-(lighten)-slate-900 items-center rounded-xl justify-center md:items-start"> ${renderComponent($$result, "Avatar", $$Avatar, {})} <article class="flex flex-col items-center md:items-start gap-2"> <h1 class="uppercase text-slate-500 font-bold font-inter">Franciszek Stodulski</h1> <span class="text-base-white text-4xl text-center md:text-left font-syne">
8+ years of Coding cool products
</span> ${renderComponent($$result, "Pills", Pills, {})} </article> </section>`;
}, "/Users/franciszekstodulski/Dev/@others/franekstodulski/src/components/InfoContainer/InfoContainer.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$GTag = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$3 || (_a$3 = __template$3([`<script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-6TTS9E3D2Z"><\/script> <script type="text/partytown">
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'G-6TTS9E3D2Z');
<\/script>`])));
}, "/Users/franciszekstodulski/Dev/@others/franekstodulski/src/components/Analytics/GTag/GTag.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$GTM = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2([`<script type="text/partytown">
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', 'GTM-PLNNPDLS');
<\/script>`])));
}, "/Users/franciszekstodulski/Dev/@others/franekstodulski/src/components/Analytics/GTM/GTM.astro", void 0);

const $$GTMNoScript = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Google Tag Manager (noscript) -->${maybeRenderHead()}<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PLNNPDLS" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><!-- End Google Tag Manager (noscript) -->`;
}, "/Users/franciszekstodulski/Dev/@others/franekstodulski/src/components/Analytics/GTMNoScript/GTMNoScript.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$TikTok = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1([`<script type="text/partytown">
  !(function (w, d, t) {
    w.TiktokAnalyticsObject = t;
    var ttq = (w[t] = w[t] || []);
    (ttq.methods = [
      'page',
      'track',
      'identify',
      'instances',
      'debug',
      'on',
      'off',
      'once',
      'ready',
      'alias',
      'group',
      'enableCookie',
      'disableCookie'
    ]),
      (ttq.setAndDefer = function (t, e) {
        t[e] = function () {
          t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
        };
      });
    for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
    (ttq.instance = function (t) {
      for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++)
        ttq.setAndDefer(e, ttq.methods[n]);
      return e;
    }),
      (ttq.load = function (e, n) {
        var i = 'https://analytics.tiktok.com/i18n/pixel/events.js';
        (ttq._i = ttq._i || {}),
          (ttq._i[e] = []),
          (ttq._i[e]._u = i),
          (ttq._t = ttq._t || {}),
          (ttq._t[e] = +new Date()),
          (ttq._o = ttq._o || {}),
          (ttq._o[e] = n || {});
        var o = document.createElement('script');
        (o.type = 'text/javascript'), (o.async = !0), (o.src = i + '?sdkid=' + e + '&lib=' + t);
        var a = document.getElementsByTagName('script')[0];
        a.parentNode.insertBefore(o, a);
      });

    ttq.load('C7P4DQDMP02CMKLT4N50');
    ttq.page();
  })(window, document, 'ttq');
<\/script>`])));
}, "/Users/franciszekstodulski/Dev/@others/franekstodulski/src/components/Analytics/TikTok/TikTok.astro", void 0);

/* node_modules/.pnpm/@steeze-ui+svelte-icon@1.5.0_svelte@4.2.17/node_modules/@steeze-ui/svelte-icon/dist/Icon.svelte generated by Svelte v4.2.17 */

const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let icon;
	let $$restProps = compute_rest_props($$props, ["src","size","theme","title"]);
	let { src } = $$props;
	let { size = "100%" } = $$props;
	let { theme = "default" } = $$props;
	let { title = void 0 } = $$props;

	if (size !== "100%") {
		if (size.slice(-1) != "x" && size.slice(-1) != "m" && size.slice(-1) != "%") {
			try {
				size = parseInt(size) + "px";
			} catch(error) {
				size = "100%";
			}
		}
	}

	if ($$props.src === void 0 && $$bindings.src && src !== void 0) $$bindings.src(src);
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0) $$bindings.theme(theme);
	if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
	icon = src?.[theme] ?? src?.["default"];

	return `<svg${spread(
		[
			escape_object(icon?.a),
			{ xmlns: "http://www.w3.org/2000/svg" },
			{ width: escape_attribute_value(size) },
			{ height: escape_attribute_value(size) },
			escape_object($$restProps)
		],
		{}
	)}>${title ? `<title>${escape(title)}</title>` : ``}${each(icon?.path ?? [], a => {
		return `<path${spread([escape_object(a)], {})}></path>`;
	})}${each(icon?.rect ?? [], a => {
		return `<rect${spread([escape_object(a)], {})}></rect>`;
	})}${each(icon?.circle ?? [], a => {
		return `<circle${spread([escape_object(a)], {})}></circle>`;
	})}${each(icon?.polygon ?? [], a => {
		return `<polygon${spread([escape_object(a)], {})}></polygon>`;
	})}${each(icon?.polyline ?? [], a => {
		return `<polyline${spread([escape_object(a)], {})}></polyline>`;
	})}${each(icon?.line ?? [], a => {
		return `<line${spread([escape_object(a)], {})}></line>`;
	})}</svg>`;
});

const ExternalLink = { "default": { "a": { "viewBox": "0 0 24 24", "fill": "currentColor" }, "path": [{ "d": "M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z" }] }, "solid": { "a": { "viewBox": "0 0 24 24", "fill": "currentColor" }, "path": [{ "d": "M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V12L17.206 8.207L11.2071 14.2071L9.79289 12.7929L15.792 6.793L12 3H21Z" }] } };

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="w-full p-4 page-content"> <nav class="w-full p-3 justify-between flex bg-slate-(lighten)-slate-900 rounded-xl"> <a class="link" target="_blank" href="https://www.linkedin.com/in/%F0%9F%91%8B-franciszek-stodulski-50b771101/" referrerpolicy="no-referrer">
Linkedin
${renderComponent($$result, "Icon", Icon, { "src": ExternalLink, "size": "14px" })} </a> <a class="btn" href="mailto:franek.stodulski@gmail.com">Contact Me</a> </nav> </header>`;
}, "/Users/franciszekstodulski/Dev/@others/franekstodulski/src/components/Header/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const META = {
    title: "Franciszek Stodulski - Software developer",
    description: "Franciszek Stodulski - Software developer with 8+ years of experience with Web Applications.",
    image: "/meta.webp",
    url: "https://franciszekstodulski.dev"
  };
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width"><meta name="msapplication-TileColor" content="#da532c"><meta name="theme-color" content="#020617"><meta name="author" content="Franciszek Stodulski"><link rel="icon" href="/favicon.svg"><meta name="generator"', `><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Syne:wght@600;700&display=swap" rel="preload" as="style" onload="this.rel='stylesheet'"><meta name="title"`, '><meta name="description"', '><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', "><title>", "</title><!-- Google Tag Manager -->", "", "", "<!-- End Google Tag Manager -->", "</head> <body> ", " ", " ", ' <script type="application/ld+json">\n      {\n        "@context": "https://schema.org/",\n        "@type": "Person",\n        "name": "Franciszek",\n        "url": "https://franciszekstodulski.dev",\n        "image": "",\n        "sameAs": [\n          "https://www.linkedin.com/in/%F0%9F%91%8B-franciszek-stodulski-50b771101",\n          "https://franciszekstodulski.dev"\n        ],\n        "jobTitle": "Software developer",\n        "worksFor": {\n          "@type": "Organization",\n          "name": "FlipShop"\n        }\n      }\n    <\/script> </body> </html>'])), addAttribute(META.description, "content"), addAttribute(Astro2.generator, "content"), addAttribute(META.title, "content"), addAttribute(META.description, "content"), addAttribute(META.url, "content"), addAttribute(META.title, "content"), addAttribute(META.description, "content"), addAttribute(META.image, "content"), addAttribute(META.url, "content"), addAttribute(META.title, "content"), addAttribute(META.description, "content"), addAttribute(META.image, "content"), META.title, renderComponent($$result, "GTag", $$GTag, {}), renderComponent($$result, "GTM", $$GTM, {}), renderComponent($$result, "TikTok", $$TikTok, {}), renderHead(), renderComponent($$result, "GTMNoScript", $$GTMNoScript, {}), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]));
}, "/Users/franciszekstodulski/Dev/@others/franekstodulski/src/layouts/Layout.astro", void 0);

/* node_modules/.pnpm/svelte-marquee-text-widget@1.1.0/node_modules/svelte-marquee-text-widget/src/MarqueeTextWidget.svelte generated by Svelte v4.2.17 */

const css = {
	code: ".content.svelte-1ymq3wt.svelte-1ymq3wt{width:100000px}.text.svelte-1ymq3wt.svelte-1ymq3wt{animation-name:svelte-1ymq3wt-animation;animation-timing-function:linear;animation-iteration-count:infinite;float:left}.paused.svelte-1ymq3wt .text.svelte-1ymq3wt{animation-play-state:paused}@keyframes svelte-1ymq3wt-animation{0%{transform:translateX(0)}100%{transform:translateX(-100%)}}",
	map: "{\"version\":3,\"file\":\"MarqueeTextWidget.svelte\",\"sources\":[\"MarqueeTextWidget.svelte\"],\"sourcesContent\":[\"<script>\\n  import { onMount } from \\\"svelte\\\";\\n  export let duration = 15;\\n  export let repeat = 2;\\n  export let paused = false;\\n</script>\\n\\n<style>\\n  .content {\\n    width: 100000px;\\n  }\\n  .text {\\n    animation-name: animation;\\n    animation-timing-function: linear;\\n    animation-iteration-count: infinite;\\n    float: left;\\n  }\\n  .paused .text {\\n    animation-play-state: paused;\\n  }\\n  @keyframes animation {\\n    0% {\\n      transform: translateX(0);\\n    }\\n    100% {\\n      transform: translateX(-100%);\\n    }\\n  }\\n</style>\\n\\n<div style=\\\"overflow: hidden;\\\">\\n  <div class=\\\"content\\\" class:paused={paused === true}>\\n    {#each Array(repeat) as _, i}\\n      <div class=\\\"text\\\" style=\\\"animation-duration: {duration}s\\\">\\n        <slot />\\n      </div>\\n    {/each}\\n  </div>\\n</div>\\n\"],\"names\":[],\"mappings\":\"AAQE,sCAAS,CACP,KAAK,CAAE,QACT,CACA,mCAAM,CACJ,cAAc,CAAE,wBAAS,CACzB,yBAAyB,CAAE,MAAM,CACjC,yBAAyB,CAAE,QAAQ,CACnC,KAAK,CAAE,IACT,CACA,sBAAO,CAAC,oBAAM,CACZ,oBAAoB,CAAE,MACxB,CACA,WAAW,wBAAU,CACnB,EAAG,CACD,SAAS,CAAE,WAAW,CAAC,CACzB,CACA,IAAK,CACH,SAAS,CAAE,WAAW,KAAK,CAC7B,CACF\"}"
};

const MarqueeTextWidget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { duration = 15 } = $$props;
	let { repeat = 2 } = $$props;
	let { paused = false } = $$props;
	if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0) $$bindings.duration(duration);
	if ($$props.repeat === void 0 && $$bindings.repeat && repeat !== void 0) $$bindings.repeat(repeat);
	if ($$props.paused === void 0 && $$bindings.paused && paused !== void 0) $$bindings.paused(paused);
	$$result.css.add(css);

	return `<div style="overflow: hidden;"><div class="${["content svelte-1ymq3wt", paused === true ? "paused" : ""].join(' ').trim()}">${each(Array(repeat), (_, i) => {
		return `<div class="text svelte-1ymq3wt" style="${"animation-duration: " + escape(duration, true) + "s"}">${slots.default ? slots.default({}) : ``} </div>`;
	})}</div></div>`;
});

var Composition = /* @__PURE__ */ ((Composition2) => {
  Composition2["SingleRotated"] = "singleRotated";
  Composition2["Single"] = "single";
  Composition2["Double"] = "double";
  Composition2["Triple"] = "triple";
  return Composition2;
})(Composition || {});
const TECH_STACK = [
  "Svelte",
  "Angular",
  "React/Next.js",
  "Node.js",
  "TypeScript",
  "Astro",
  "TailwindCSS",
  "SCSS",
  "Prisma",
  "PostgreSQL",
  "Google Cloud",
  "Firebase",
  "Docker"
];
const PROJECTS = [
  {
    title: "Flip.shop",
    points: ["FrontEnd Team Lead", "6 Web apps", "Leading team of 10+"],
    link: {
      href: "https://flip.shop",
      alt: "Flip.shop",
      ariaLabel: "Flip.shop - link to the website"
    },
    backgroundColor: "#0be094",
    fontColor: "#ffffff",
    composition: "triple" /* Triple */,
    assets: [
      {
        url: "/assets/flip-shop/Flip-Shop-2.webp",
        alt: "Flip.shop - website screenshot",
        width: 438,
        height: 798
      },
      {
        url: "/assets/flip-shop/Flip-Shop-1.webp",
        alt: "Flip.shop - website screenshot",
        width: 438,
        height: 798
      },
      {
        url: "/assets/flip-shop/Flip-Shop-3.webp",
        alt: "Flip.shop - website screenshot",
        width: 438,
        height: 798
      }
    ]
  },
  {
    title: "Tiny Heroes",
    points: ["Google Cloud", "Front + Backend", "NFT Smart Contracts"],
    height: 420,
    link: {
      href: "https://tiny-heroes-svelte.vercel.app",
      alt: "Tiny Heroes",
      ariaLabel: "Tiny Heroes - link to the website"
    },
    backgroundColor: "#2e9f3d",
    fontColor: "#9EEEA9",
    composition: "singleRotated" /* SingleRotated */,
    assets: [
      {
        url: "/assets/tiny-heroes/tiny-heroes.webp",
        alt: "Flip.shop - website screenshot",
        width: 1440,
        height: 1415,
        cssClass: "border-green-100"
      }
    ]
  },
  {
    title: "kubamikolajczyk.pl",
    points: ["Front"],
    link: {
      href: "https://www.kubamikolajczyk.pl",
      alt: "Flip.shop",
      ariaLabel: "Flip.shop - link to the website"
    },
    backgroundColor: "#4b47ff",
    fontColor: "#A3B5FA",
    composition: "single" /* Single */,
    assets: [
      {
        url: "/assets/kubu/kubu.webp",
        alt: "Flip.shop - website screenshot",
        width: 1440,
        height: 1071
      }
    ]
  },
  {
    title: "Givt",
    points: ["Frontend", "Dynamic Forms"],
    link: {
      href: "https://givt.com/en/",
      alt: "Givt.com",
      ariaLabel: "Givt.com - link to the website"
    },
    backgroundColor: "#d32f37",
    fontColor: "#FFC8CA",
    composition: "single" /* Single */,
    assets: [
      {
        url: "/assets/givt/givt.webp",
        alt: "GIVT - website screenshot",
        width: 1920,
        height: 900
      }
    ]
  },
  {
    title: "FarmRentCar",
    points: ["Front + Backend", "Design", "DevOps"],
    link: {
      href: "https://farmrentacar.com/",
      alt: "Farm Rent a Car",
      ariaLabel: "Farm Rent a Car - link to the website"
    },
    backgroundColor: "#4cabf2",
    fontColor: "#B7E1FF",
    composition: "double" /* Double */,
    assets: [
      {
        url: "/assets/farm-rent/farm-rent-2.webp",
        alt: "Farn Rent A Car - website screenshot",
        width: 438,
        height: 798
      },
      {
        url: "/assets/farm-rent/farm-rent-1.webp",
        alt: "Farm Rent A Car - second website screenshot",
        width: 438,
        height: 798
      }
    ]
  },
  {
    title: "Retail Me Not",
    points: ["Front + Backend", "Refactoring", "Maintenance"],
    height: 420,
    link: {
      href: "https://www.retailmenot.com/",
      alt: "Retail Me Not",
      ariaLabel: "Retail Me Not - link to the website"
    },
    backgroundColor: "#561d86",
    fontColor: "#D8AAFF",
    composition: "singleRotated" /* SingleRotated */,
    assets: [
      {
        url: "/assets/retail-me-not/retail-me-not.webp",
        alt: "Retail Me Not - website screenshot",
        width: 4320,
        height: 3762
      }
    ]
  },
  {
    title: "Home & Living",
    points: ["FrontEnd", "Angular", "Custom bed configurator"],
    height: 420,
    link: {
      href: "https://pd.agency/en/realizations/home-and-living-web/",
      alt: "Home & Living - Podwysocki Design, Website Design Agency",
      ariaLabel: "Home & Living - Podwysocki Design, Website Design Agency - link to the website"
    },
    backgroundColor: "#A58F57",
    fontColor: "#FFEBBB",
    composition: "single" /* Single */,
    assets: [
      {
        url: "/assets/h&l/h&l.webp",
        alt: "Home & Living - website screenshot",
        width: 1280,
        height: 811
      }
    ]
  }
];

/* src/components/ProjectCard/components/DoubleComposition.svelte generated by Svelte v4.2.17 */

const DoubleComposition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { assets } = $$props;

	const stylesByIndex = {
		[0]: "translate-y-2  translate-x-12 z-10",
		[1]: "translate-y-16 -translate-x-12  z-10"
	};

	if ($$props.assets === void 0 && $$bindings.assets && assets !== void 0) $$bindings.assets(assets);

	return `<div class="relative flex w-full px-5">${each(assets, (asset, index) => {
		return `<figure class="${"flex items-center justify-center overflow-hidden " + escape(stylesByIndex[index], true)}"><img class="aspect-auto w-full"${add_attribute("src", asset.url, 0)}${add_attribute("height", asset.height, 0)}${add_attribute("width", asset.width, 0)}${add_attribute("alt", asset.alt, 0)}> </figure>`;
	})}</div>`;
});

/* src/components/ProjectCard/components/SingleComposition.svelte generated by Svelte v4.2.17 */

const SingleComposition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { assets } = $$props;
	if ($$props.assets === void 0 && $$bindings.assets && assets !== void 0) $$bindings.assets(assets);

	return `<div class="relative mt-16 flex w-full items-center justify-center pb-12">${each(assets, asset => {
		return `<figure class="flex"><img${add_attribute("height", asset.height, 0)}${add_attribute("width", asset.width, 0)}${add_attribute("alt", asset.alt, 0)} class="mx-auto aspect-auto max-w-[90%] rounded-md drop-shadow-xl"${add_attribute("src", asset.url, 0)}> </figure>`;
	})}</div>`;
});

/* src/components/ProjectCard/components/SingleRotatedComposition.svelte generated by Svelte v4.2.17 */

const SingleRotatedComposition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { height } = $$props;
	let { assets } = $$props;
	if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
	if ($$props.assets === void 0 && $$bindings.assets && assets !== void 0) $$bindings.assets(assets);

	return `<div style="${"height: " + escape(height, true) + "px"}" class="relative flex w-full justify-center">${each(assets, (asset, index) => {
		return `<figure class="flex translate-y-2 -rotate-6"><img${add_attribute("height", asset.height, 0)}${add_attribute("width", asset.width, 0)}${add_attribute("alt", asset.alt, 0)} class="${"aspect-auto w-full rounded-md shadow-md drop-shadow-2xl " + escape(asset.cssClass, true)}"${add_attribute("src", asset.url, 0)}> </figure>`;
	})}</div>`;
});

/* src/components/ProjectCard/components/TripleComposition.svelte generated by Svelte v4.2.17 */

const TripleComposition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { assets } = $$props;

	const stylesByIndex = {
		[0]: "absolute -translate-x-1/2 translate-y-2 scale-95 -rotate-6 z-10",
		[1]: "z-20",
		[2]: "absolute translate-x-1/2 translate-y-2 scale-95 rotate-6 z-10"
	};

	if ($$props.assets === void 0 && $$bindings.assets && assets !== void 0) $$bindings.assets(assets);

	return `<div class="relative flex w-full items-center justify-center">${each(assets, (asset, index) => {
		return `<figure class="${"flex h-full items-center justify-center overflow-hidden " + escape(stylesByIndex[index], true)}"><img${add_attribute("height", asset.height, 0)}${add_attribute("width", asset.width, 0)}${add_attribute("alt", asset.alt, 0)} class="aspect-auto max-w-[120px] md:max-w-[180px]"${add_attribute("src", asset.url, 0)}> </figure>`;
	})}</div>`;
});

/* src/components/ProjectCard/ProjectCard.svelte generated by Svelte v4.2.17 */

const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { project } = $$props;
	if ($$props.project === void 0 && $$bindings.project && project !== void 0) $$bindings.project(project);

	return `<div style="${"background-color: " + escape(project.backgroundColor, true) + ";"}" class="${"project-card flex w-full flex-col overflow-hidden rounded-xl bg-[" + escape(project.backgroundColor, true) + "] gap-6"}"><article class="flex flex-col"><div class="flex w-full justify-between"><h2 class="tex-base text-base-white font-syne pl-5 pt-4">${escape(project.title)}</h2> <div class="bg-slate-(lighten)-slate-900 rounded-bl-xl px-6 py-4"><a${add_attribute("href", project.link.href, 0)} target="_blank" referrerpolicy="no-referrer" class="font-inter text-slate-500"><span style="${"color: " + escape(project.fontColor, true) + "; border-color: " + escape(project.fontColor, true) + ";"}" class="flex items-center gap-2 rounded-full border px-2 py-0.5">Open link ${validate_component(Icon, "Icon").$$render($$result, { src: ExternalLink, size: "14px" }, {}, {})}</span></a></div></div> <ul class="list-disc px-10" style="${"color: " + escape(project.fontColor, true)}">${each(project.points, point => {
		return `<li>${escape(point)}</li>`;
	})}</ul></article> <div class="flex h-full w-full">${project.composition === Composition.Triple
	? `${validate_component(TripleComposition, "TripleComposition").$$render($$result, { assets: project.assets }, {}, {})}`
	: ``} ${project.composition === Composition.SingleRotated
	? `${validate_component(SingleRotatedComposition, "SingleRotatedComposition").$$render(
			$$result,
			{
				height: project.height,
				assets: project.assets
			},
			{},
			{}
		)}`
	: ``} ${project.composition === Composition.Single
	? `${validate_component(SingleComposition, "SingleComposition").$$render($$result, { assets: project.assets }, {}, {})}`
	: ``} ${project.composition === Composition.Double
	? `${validate_component(DoubleComposition, "DoubleComposition").$$render($$result, { assets: project.assets }, {}, {})}`
	: ``}</div> </div>`;
});

/* src/containeres/Projects/Projects.svelte generated by Svelte v4.2.17 */

const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${each(PROJECTS, (project, index) => {
		return `${validate_component(ProjectCard, "ProjectCard").$$render($$result, { project }, {}, {})} ${index === 0
		? `<div class="bg-slate-(lighten)-slate-900 text-slate-slate-500 font-syne flex w-full items-center gap-6 rounded-full py-4 uppercase md:col-span-2">${validate_component(MarqueeTextWidget, "MarqueeTextWidget").$$render($$result, {}, {}, {
				default: () => {
					return `${each(TECH_STACK, tech => {
						return `<span class="mr-6">${escape(tech)} </span>`;
					})} `;
				}
			})} </div>`
		: ``}`;
	})}`;
});

/* src/components/Footer/Footer.svelte generated by Svelte v4.2.17 */

const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<footer class="page-content mb-2 flex justify-center" data-svelte-h="svelte-nzt458"><span class="text-slate-(lighten)-slate-800">Designed with ❤️ by
    <a class="hover:text-slate-(lighten)-slate-700 font-bold duration-300" href="https://kubamikolajczyk.pl" target="_blank">Kubu</a></span></footer>`;
});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Franciszek Stodulski - Software Developer" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 pb-5 page-content"> ${renderComponent($$result2, "InfoContainer", $$InfoContainer, {})} ${renderComponent($$result2, "Projects", Projects, {})} </main> ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "/Users/franciszekstodulski/Dev/@others/franekstodulski/src/pages/index.astro", void 0);

const $$file = "/Users/franciszekstodulski/Dev/@others/franekstodulski/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
