let Q=0,W=`string`,P=1,X=`Object`,T=`utf-8`,O=null,S=`undefined`,Y=4,V=`function`,M=128,_=510,L=Array,U=Error,Z=Object,R=Uint8Array,N=undefined;var w=((c,d,e)=>{try{a.wasm_bindgen__convert__closures__invoke1_mut_ref__hc6f3b16d90cb835b(c,d,v(e))}finally{b[u++]=N}});var s=(a=>{const b=typeof a;if(b==`number`||b==`boolean`||a==O){return `${a}`};if(b==W){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==O){return `Symbol`}else{return `Symbol(${b})`}};if(b==V){const b=a.name;if(typeof b==W&&b.length>Q){return `Function(${b})`}else{return `Function`}};if(L.isArray(a)){const b=a.length;let c=`[`;if(b>Q){c+=s(a[Q])};for(let d=P;d<b;d++){c+=`, `+ s(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>P){d=c[P]}else{return toString.call(a)};if(d==X){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return X}};if(a instanceof U){return `${a.name}: ${a.message}\n${a.stack}`};return d});var y=((c,d,e)=>{try{a._dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hbd6a32fb6d2452b5(c,d,v(e))}finally{b[u++]=N}});var H=((a,b)=>{});var E=((a,b)=>{a=a>>>Q;const c=D();const d=c.subarray(a/Y,a/Y+ b);const e=[];for(let a=Q;a<d.length;a++){e.push(f(d[a]))};return e});var A=((c,d,e)=>{try{a._dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h87fa0214d5bc6b05(c,d,v(e))}finally{b[u++]=N}});var x=((b,c)=>{a.wasm_bindgen__convert__closures__invoke0_mut__h398a247a080daf0f(b,c)});var g=(a=>{if(d===b.length)b.push(b.length+ P);const c=d;d=b[c];b[c]=a;return c});var f=(a=>{const b=c(a);e(a);return b});function B(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(g(b))}}var K=(async(b)=>{if(a!==N)return a;if(typeof b===S){b=new URL(`svg2gcode-web-cd6cb47dfb49ede3_bg.wasm`,import.meta.url)};const c=G();if(typeof b===W||typeof Request===V&&b instanceof Request||typeof URL===V&&b instanceof URL){b=fetch(b)};H(c);const {instance:d,module:e}=await F(await b,c);return I(d,e)});var J=(b=>{if(a!==N)return a;const c=G();H(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return I(d,b)});var p=(()=>{if(o===O||o.byteLength===Q){o=new Int32Array(a.memory.buffer)};return o});var n=(a=>a===N||a===O);var c=(a=>b[a]);var I=((b,c)=>{a=b.exports;K.__wbindgen_wasm_module=c;o=O;C=O;i=O;a.__wbindgen_start();return a});var G=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_drop_ref=(a=>{f(a)});b.wbg.__wbindgen_cb_drop=(a=>{const b=f(a).original;if(b.cnt--==P){b.a=Q;return !0};const c=!1;return c});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return g(b)});b.wbg.__wbindgen_string_get=((b,d)=>{const e=c(d);const f=typeof e===W?e:N;var g=n(f)?Q:m(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var i=h;p()[b/Y+ P]=i;p()[b/Y+ Q]=g});b.wbg.__wbindgen_string_new=((a,b)=>{const c=r(a,b);return g(c)});b.wbg.__wbg_listenerid_12315eee21527820=((a,b)=>{const d=c(b).__yew_listener_id;p()[a/Y+ P]=n(d)?Q:d;p()[a/Y+ Q]=!n(d)});b.wbg.__wbg_setlistenerid_3183aae8fa5840fb=((a,b)=>{c(a).__yew_listener_id=b>>>Q});b.wbg.__wbg_subtreeid_e348577f7ef777e3=((a,b)=>{const d=c(b).__yew_subtree_id;p()[a/Y+ P]=n(d)?Q:d;p()[a/Y+ Q]=!n(d)});b.wbg.__wbg_setsubtreeid_d32e6327eef1f7fc=((a,b)=>{c(a).__yew_subtree_id=b>>>Q});b.wbg.__wbg_cachekey_b61393159c57fd7b=((a,b)=>{const d=c(b).__yew_subtree_cache_key;p()[a/Y+ P]=n(d)?Q:d;p()[a/Y+ Q]=!n(d)});b.wbg.__wbg_setcachekey_80183b7cfc421143=((a,b)=>{c(a).__yew_subtree_cache_key=b>>>Q});b.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new U();return g(a)});b.wbg.__wbg_stack_658279fe44541cf6=((b,d)=>{const e=c(d).stack;const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/Y+ P]=g;p()[b/Y+ Q]=f});b.wbg.__wbg_error_f851667af71bcfc6=((b,c)=>{let d;let e;try{d=b;e=c;console.error(r(b,c))}finally{a.__wbindgen_free(d,e,P)}});b.wbg.__wbg_clearTimeout_76877dbc010e786d=(a=>{const b=clearTimeout(f(a));return g(b)});b.wbg.__wbg_setTimeout_75cb9b6991a4031d=function(){return B(((a,b)=>{const d=setTimeout(c(a),b);return g(d)}),arguments)};b.wbg.__wbg_error_71d6845bf00a930f=((b,c)=>{var d=E(b,c).slice();a.__wbindgen_free(b,c*Y,Y);console.error(...d)});b.wbg.__wbg_body_db30cc67afcfce41=(a=>{const b=c(a).body;return n(b)?Q:g(b)});b.wbg.__wbg_createElement_d975e66d06bc88da=function(){return B(((a,b,d)=>{const e=c(a).createElement(r(b,d));return g(e)}),arguments)};b.wbg.__wbg_createElementNS_0863d6a8a49df376=function(){return B(((a,b,d,e,f)=>{const h=c(a).createElementNS(b===Q?N:r(b,d),r(e,f));return g(h)}),arguments)};b.wbg.__wbg_createTextNode_31876ed40128c33c=((a,b,d)=>{const e=c(a).createTextNode(r(b,d));return g(e)});b.wbg.__wbg_instanceof_Window_c5579e140698a9dc=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_document_508774c021174a52=(a=>{const b=c(a).document;return n(b)?Q:g(b)});b.wbg.__wbg_localStorage_b5b6d3c826dbfeda=function(){return B((a=>{const b=c(a).localStorage;return n(b)?Q:g(b)}),arguments)};b.wbg.__wbg_sessionStorage_263f344230ee7188=function(){return B((a=>{const b=c(a).sessionStorage;return n(b)?Q:g(b)}),arguments)};b.wbg.__wbg_fetch_66df15eb00fb9843=((a,b,d)=>{const e=c(a).fetch(r(b,d));return g(e)});b.wbg.__wbg_instanceof_Element_6fe31b975e43affc=(a=>{let b;try{b=c(a) instanceof Element}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_namespaceURI_a1c6e4b9bb827959=((b,d)=>{const e=c(d).namespaceURI;var f=n(e)?Q:m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=h;p()[b/Y+ P]=g;p()[b/Y+ Q]=f});b.wbg.__wbg_setinnerHTML_76dc2e7ffb1c1936=((a,b,d)=>{c(a).innerHTML=r(b,d)});b.wbg.__wbg_outerHTML_e90651c874c31e05=((b,d)=>{const e=c(d).outerHTML;const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/Y+ P]=g;p()[b/Y+ Q]=f});b.wbg.__wbg_children_a62d21390b1805ff=(a=>{const b=c(a).children;return g(b)});b.wbg.__wbg_removeAttribute_77e4f460fd0fde34=function(){return B(((a,b,d)=>{c(a).removeAttribute(r(b,d))}),arguments)};b.wbg.__wbg_setAttribute_1b177bcd399b9b56=function(){return B(((a,b,d,e,f)=>{c(a).setAttribute(r(b,d),r(e,f))}),arguments)};b.wbg.__wbg_click_c8fd597e1946e0f8=(a=>{c(a).click()});b.wbg.__wbg_addEventListener_d25d1ffe6c69ae96=function(){return B(((a,b,d,e)=>{c(a).addEventListener(r(b,d),c(e))}),arguments)};b.wbg.__wbg_addEventListener_3a7d7c4177ce91d1=function(){return B(((a,b,d,e,f)=>{c(a).addEventListener(r(b,d),c(e),c(f))}),arguments)};b.wbg.__wbg_removeEventListener_315d6f929fccf484=function(){return B(((a,b,d,e,f)=>{c(a).removeEventListener(r(b,d),c(e),f!==Q)}),arguments)};b.wbg.__wbg_value_513f15ec48684f3a=((b,d)=>{const e=c(d).value;const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/Y+ P]=g;p()[b/Y+ Q]=f});b.wbg.__wbg_target_bb43778021b84733=(a=>{const b=c(a).target;return n(b)?Q:g(b)});b.wbg.__wbg_bubbles_0a277ad42caf0211=(a=>{const b=c(a).bubbles;return b});b.wbg.__wbg_cancelBubble_42441ef40999b550=(a=>{const b=c(a).cancelBubble;return b});b.wbg.__wbg_composedPath_85d84e53cceb3d62=(a=>{const b=c(a).composedPath();return g(b)});b.wbg.__wbg_get_93d5f60cbfadbdfb=function(){return B(((b,d,e,f)=>{const g=c(d)[r(e,f)];var i=n(g)?Q:m(g,a.__wbindgen_malloc,a.__wbindgen_realloc);var j=h;p()[b/Y+ P]=j;p()[b/Y+ Q]=i}),arguments)};b.wbg.__wbg_set_862c97e8f911f327=function(){return B(((a,b,d,e,f)=>{c(a)[r(b,d)]=r(e,f)}),arguments)};b.wbg.__wbg_checked_29f4b9f0e2a0087b=(a=>{const b=c(a).checked;return b});b.wbg.__wbg_setchecked_46f40fa426cedbb8=((a,b)=>{c(a).checked=b!==Q});b.wbg.__wbg_files_5bf9e8ddd7ed0428=(a=>{const b=c(a).files;return n(b)?Q:g(b)});b.wbg.__wbg_value_09d384cba1c51c6f=((b,d)=>{const e=c(d).value;const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/Y+ P]=g;p()[b/Y+ Q]=f});b.wbg.__wbg_setvalue_7605619324f70225=((a,b,d)=>{c(a).value=r(b,d)});b.wbg.__wbg_value_664b8ba8bd4419b0=((b,d)=>{const e=c(d).value;const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/Y+ P]=g;p()[b/Y+ Q]=f});b.wbg.__wbg_setvalue_272abbd8c7ff3573=((a,b,d)=>{c(a).value=r(b,d)});b.wbg.__wbg_parentNode_65dd881ebb22f646=(a=>{const b=c(a).parentNode;return n(b)?Q:g(b)});b.wbg.__wbg_parentElement_065722829508e41a=(a=>{const b=c(a).parentElement;return n(b)?Q:g(b)});b.wbg.__wbg_lastChild_649563f43d5b930d=(a=>{const b=c(a).lastChild;return n(b)?Q:g(b)});b.wbg.__wbg_nextSibling_6e2efeefd07e6f9e=(a=>{const b=c(a).nextSibling;return n(b)?Q:g(b)});b.wbg.__wbg_setnodeValue_008911a41f1b91a3=((a,b,d)=>{c(a).nodeValue=b===Q?N:r(b,d)});b.wbg.__wbg_textContent_d953d0aec79e1ba6=((b,d)=>{const e=c(d).textContent;var f=n(e)?Q:m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=h;p()[b/Y+ P]=g;p()[b/Y+ Q]=f});b.wbg.__wbg_appendChild_1139b53a65d69bed=function(){return B(((a,b)=>{const d=c(a).appendChild(c(b));return g(d)}),arguments)};b.wbg.__wbg_insertBefore_2e38a68009b551f3=function(){return B(((a,b,d)=>{const e=c(a).insertBefore(c(b),c(d));return g(e)}),arguments)};b.wbg.__wbg_removeChild_48d9566cffdfec93=function(){return B(((a,b)=>{const d=c(a).removeChild(c(b));return g(d)}),arguments)};b.wbg.__wbg_instanceof_ShadowRoot_5aea367fb03b2fff=(a=>{let b;try{b=c(a) instanceof ShadowRoot}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_host_ca6efb67ffed0f2e=(a=>{const b=c(a).host;return g(b)});b.wbg.__wbg_readyState_7f711a461df8502f=(a=>{const b=c(a).readyState;return b});b.wbg.__wbg_result_839cb1211554bc23=function(){return B((a=>{const b=c(a).result;return g(b)}),arguments)};b.wbg.__wbg_error_88745103c6b59280=(a=>{const b=c(a).error;return n(b)?Q:g(b)});b.wbg.__wbg_new_32c981a7eea04579=function(){return B((()=>{const a=new FileReader();return g(a)}),arguments)};b.wbg.__wbg_abort_301fb699f8b91063=(a=>{c(a).abort()});b.wbg.__wbg_readAsArrayBuffer_8ce1370d7368bea1=function(){return B(((a,b)=>{c(a).readAsArrayBuffer(c(b))}),arguments)};b.wbg.__wbg_readAsText_3cc902d3bbeecf13=function(){return B(((a,b)=>{c(a).readAsText(c(b))}),arguments)};b.wbg.__wbg_name_ae233a503e60a8f9=((b,d)=>{const e=c(d).name;const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/Y+ P]=g;p()[b/Y+ Q]=f});b.wbg.__wbg_url_59cb32ef6a837521=((b,d)=>{const e=c(d).url;const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/Y+ P]=g;p()[b/Y+ Q]=f});b.wbg.__wbg_text_65fa1887e8f7b4ac=function(){return B((a=>{const b=c(a).text();return g(b)}),arguments)};b.wbg.__wbg_name_2445f03c91840966=((b,d)=>{const e=c(d).name;const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/Y+ P]=g;p()[b/Y+ Q]=f});b.wbg.__wbg_message_cdc7ca975e5bbd7a=((b,d)=>{const e=c(d).message;const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/Y+ P]=g;p()[b/Y+ Q]=f});b.wbg.__wbg_length_804062329ac4ddbb=(a=>{const b=c(a).length;return b});b.wbg.__wbg_item_5372a3f69071ba85=((a,b)=>{const d=c(a).item(b>>>Q);return n(d)?Q:g(d)});b.wbg.__wbg_debug_efabe4eb183aa5d4=((a,b,d,e)=>{console.debug(c(a),c(b),c(d),c(e))});b.wbg.__wbg_error_a7e23606158b68b9=(a=>{console.error(c(a))});b.wbg.__wbg_error_50f42b952a595a23=((a,b,d,e)=>{console.error(c(a),c(b),c(d),c(e))});b.wbg.__wbg_info_24d8f53d98f12b95=((a,b,d,e)=>{console.info(c(a),c(b),c(d),c(e))});b.wbg.__wbg_log_9b164efbe6db702f=((a,b,d,e)=>{console.log(c(a),c(b),c(d),c(e))});b.wbg.__wbg_warn_8342bfbc6028193a=((a,b,d,e)=>{console.warn(c(a),c(b),c(d),c(e))});b.wbg.__wbg_get_7303ed2ef026b2f5=((a,b)=>{const d=c(a)[b>>>Q];return g(d)});b.wbg.__wbg_length_820c786973abdd8a=(a=>{const b=c(a).length;return b});b.wbg.__wbg_newnoargs_c9e6043b8ad84109=((a,b)=>{const c=new Function(r(a,b));return g(c)});b.wbg.__wbg_call_557a2f2deacc4912=function(){return B(((a,b)=>{const d=c(a).call(c(b));return g(d)}),arguments)};b.wbg.__wbg_new_2b6fea4ea03b1b95=(()=>{const a=new Z();return g(a)});b.wbg.__wbg_self_742dd6eab3e9211e=function(){return B((()=>{const a=self.self;return g(a)}),arguments)};b.wbg.__wbg_window_c409e731db53a0e2=function(){return B((()=>{const a=window.window;return g(a)}),arguments)};b.wbg.__wbg_globalThis_b70c095388441f2d=function(){return B((()=>{const a=globalThis.globalThis;return g(a)}),arguments)};b.wbg.__wbg_global_1c72617491ed7194=function(){return B((()=>{const a=global.global;return g(a)}),arguments)};b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===N;return b});b.wbg.__wbg_from_6bc98a09a0b58bb1=(a=>{const b=L.from(c(a));return g(b)});b.wbg.__wbg_instanceof_ArrayBuffer_ef2632aa0d4bfff8=(a=>{let b;try{b=c(a) instanceof ArrayBuffer}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_message_eab7d45ec69a2135=(a=>{const b=c(a).message;return g(b)});b.wbg.__wbg_new0_494c19a27871d56f=(()=>{const a=new Date();return g(a)});b.wbg.__wbg_toISOString_9970f74228c1a802=(a=>{const b=c(a).toISOString();return g(b)});b.wbg.__wbg_is_20a2e5c82eecc47d=((a,b)=>{const d=Z.is(c(a),c(b));return d});b.wbg.__wbg_instanceof_TypeError_f3d25d85e63e7b4b=(a=>{let b;try{b=c(a) instanceof TypeError}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_resolve_ae38ad63c43ff98b=(a=>{const b=Promise.resolve(c(a));return g(b)});b.wbg.__wbg_then_8df675b8bb5d5e3c=((a,b)=>{const d=c(a).then(c(b));return g(d)});b.wbg.__wbg_then_835b073a479138e5=((a,b,d)=>{const e=c(a).then(c(b),c(d));return g(e)});b.wbg.__wbg_buffer_55ba7a6b1b92e2ac=(a=>{const b=c(a).buffer;return g(b)});b.wbg.__wbg_new_09938a7d020f049b=(a=>{const b=new R(c(a));return g(b)});b.wbg.__wbg_set_3698e3ca519b3c3c=((a,b,d)=>{c(a).set(c(b),d>>>Q)});b.wbg.__wbg_length_0aab7ffd65ad19ed=(a=>{const b=c(a).length;return b});b.wbg.__wbg_set_07da13cc24b69217=function(){return B(((a,b,d)=>{const e=Reflect.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbindgen_debug_string=((b,d)=>{const e=s(c(d));const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/Y+ P]=g;p()[b/Y+ Q]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new U(r(a,b))});b.wbg.__wbindgen_memory=(()=>{const b=a.memory;return g(b)});b.wbg.__wbindgen_closure_wrapper991=((a,b,c)=>{const d=t(a,b,_,w);return g(d)});b.wbg.__wbindgen_closure_wrapper993=((a,b,c)=>{const d=t(a,b,_,x);return g(d)});b.wbg.__wbindgen_closure_wrapper1761=((a,b,c)=>{const d=t(a,b,971,y);return g(d)});b.wbg.__wbindgen_closure_wrapper1891=((a,b,c)=>{const d=t(a,b,1019,z);return g(d)});b.wbg.__wbindgen_closure_wrapper1932=((a,b,c)=>{const d=t(a,b,1041,A);return g(d)});return b});var F=(async(a,b)=>{if(typeof Response===V&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===V){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var D=(()=>{if(C===O||C.byteLength===Q){C=new Uint32Array(a.memory.buffer)};return C});var z=((b,c,d)=>{a.wasm_bindgen__convert__closures__invoke1_mut__h0a889be53124c31f(b,c,g(d))});var e=(a=>{if(a<132)return;b[a]=d;d=a});var t=((b,c,d,e)=>{const f={a:b,b:c,cnt:P,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=Q;try{return e(c,f.b,...b)}finally{if(--f.cnt===Q){a.__wbindgen_export_2.get(f.dtor)(c,f.b)}else{f.a=c}}};g.original=f;return g});var m=((a,b,c)=>{if(c===N){const c=k.encode(a);const d=b(c.length,P)>>>Q;j().subarray(d,d+ c.length).set(c);h=c.length;return d};let d=a.length;let e=b(d,P)>>>Q;const f=j();let g=Q;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==Q){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,P)>>>Q;const b=j().subarray(e+ g,e+ d);const f=l(a,b);g+=f.written};h=g;return e});var j=(()=>{if(i===O||i.byteLength===Q){i=new R(a.memory.buffer)};return i});var r=((a,b)=>{a=a>>>Q;return q.decode(j().subarray(a,a+ b))});var v=(a=>{if(u==P)throw new U(`out of js stack`);b[--u]=a;return u});let a;const b=new L(M).fill(N);b.push(N,O,!0,!1);let d=b.length;let h=Q;let i=O;const k=typeof TextEncoder!==S?new TextEncoder(T):{encode:()=>{throw U(`TextEncoder not available`)}};const l=typeof k.encodeInto===V?((a,b)=>k.encodeInto(a,b)):((a,b)=>{const c=k.encode(a);b.set(c);return {read:a.length,written:c.length}});let o=O;const q=typeof TextDecoder!==S?new TextDecoder(T,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw U(`TextDecoder not available`)}};if(typeof TextDecoder!==S){q.decode()};let u=M;let C=O;export default K;export{J as initSync}