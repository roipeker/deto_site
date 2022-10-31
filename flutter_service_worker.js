'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "eaa413f0cf2bf22cc76bd98e3067da78",
"splash/img/light-2x.png": "2ee931f29bf3f0b50d8abb1e2ecadade",
"splash/img/dark-4x.png": "58510241cae7b28b6eae97c373371cee",
"splash/img/light-3x.png": "bb0d34250890bb54cf8aef4de756da2d",
"splash/img/dark-3x.png": "bb0d34250890bb54cf8aef4de756da2d",
"splash/img/light-4x.png": "58510241cae7b28b6eae97c373371cee",
"splash/img/dark-2x.png": "2ee931f29bf3f0b50d8abb1e2ecadade",
"splash/img/dark-1x.png": "d64e3e6bca1c7cc5d804f00fe6adf4ea",
"splash/img/light-1x.png": "d64e3e6bca1c7cc5d804f00fe6adf4ea",
"splash/splash.json": "7ee331b145b7b7dfcc6c3e9eaa6aacd5",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "309d4f23e7374c48a609008fb79e6e99",
"favicon.ico": "ec49c1978f58531baaff84c3ebe4f7bd",
"index.html": "b6dfc52c41faa7870518ef66fa76f988",
"/": "b6dfc52c41faa7870518ef66fa76f988",
"CNAME": "e4f6958fb51c51a65cc8853ec446b73a",
"main.dart.js": "2cc0c435ab0d50a3face1fb1840d2602",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "f18e2f33f2ca0d363993ba12d1f7f3ae",
"icons/favicon-16x16.png": "bd3ac64801c75be3c8849fd42b4bb6b7",
"icons/safari-pinned-tab.svg": "671e9183309f66fac8c9eff87d132c21",
"icons/android-chrome-192x192.png": "fc3067e9238df9a4871a5f02bcc86904",
"icons/apple-touch-icon.png": "016be13b4ff41bf1a0f897b8d71ca4c2",
"icons/Icon-192.png": "0e11fe3a5b6fc2324a30653c180afefc",
"icons/Icon-maskable-192.png": "0e11fe3a5b6fc2324a30653c180afefc",
"icons/android-chrome-512x512.png": "31636e52458475cc13f1a3f7652eec5b",
"icons/site.webmanifest": "e98c204872198e374f9e747763b89ee5",
"icons/mstile-150x150.png": "51a4ed0a71952e00fb3d089fd947cefe",
"icons/Icon-maskable-512.png": "dbc22b43e9f48f5e5e4792cd688170ac",
"icons/Icon-512.png": "dbc22b43e9f48f5e5e4792cd688170ac",
"icons/favicon-32x32.png": "fd934e3b34157b3aba42450b006d5dbb",
"manifest.json": "d334590ce2fd1da5421a5e60b8cb43dd",
"assets/AssetManifest.json": "8e7275ad35e8470aa46e75653a82ffb4",
"assets/NOTICES": "15b2e1df17dc975e4b49b08cffb09e8c",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/shaders/ink_sparkle.frag": "c5de3bde8b4cf6b98d18b84aaac6467e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/tos_de.md": "5bd9f3e335d98e8c9fb1f815c0948405",
"assets/assets/no_image.png": "6cefc696e3e52869243c863646cac27f",
"assets/assets/flags/un.webp": "783af2e51bf880eb6f559c9b56058b91",
"assets/assets/flags/gb-eng.webp": "e7cf327215ed5128f042478335a19570",
"assets/assets/flags/ki.webp": "e5de6fe0b890d1a38f9f0a9e0f23dac6",
"assets/assets/flags/sv.webp": "ebfc5dd7387a966929b74597343562d3",
"assets/assets/flags/ag.webp": "36d9042295b39628402bdbae4201a1d3",
"assets/assets/flags/mq.webp": "028f20c3ab0f2d84ad4016679e2ecfd5",
"assets/assets/flags/th.webp": "90e36067d7207476735da12e589e4b82",
"assets/assets/flags/jo.webp": "e41fa7ee77658a5882c595811c49ed57",
"assets/assets/flags/sc.webp": "86b06cca28fdde77ee49120a849874ea",
"assets/assets/flags/md.webp": "887c76abbe8306337ea6a23b4d8bdcb4",
"assets/assets/flags/ar.webp": "7f44c061bab25879158cff9be578c47c",
"assets/assets/flags/ck.webp": "72c406c83fdbb7f40f84b66cd4bf94ed",
"assets/assets/flags/xk.webp": "795ac8ffa9ab679b2c3b90aa81d56b65",
"assets/assets/flags/ie.webp": "563172f4184c697fbc559d62c382cd3f",
"assets/assets/flags/es.webp": "393f336ba21413e63b0355838d57f6e2",
"assets/assets/flags/re.webp": "028f20c3ab0f2d84ad4016679e2ecfd5",
"assets/assets/flags/lb.webp": "b65de324c26adcbfbbb90e4b4ebeff97",
"assets/assets/flags/bm.webp": "99ee29285c72981cef66e5e5796e8013",
"assets/assets/flags/gs.webp": "b10ba20835351d542bc8e943e2a5ac26",
"assets/assets/flags/ke.webp": "7e707d6387482c737e6474b40a15f956",
"assets/assets/flags/yt.webp": "1682fb8ec9cb5479c18b895b888d4edb",
"assets/assets/flags/bt.webp": "627b3635b7e6eac173a769b2eebd8a73",
"assets/assets/flags/pe.webp": "681880d7bbc8d251231db707c2406d56",
"assets/assets/flags/cr.webp": "0b0e9d079ddcca4f1785e0d26736c7ae",
"assets/assets/flags/sz.webp": "2b23523c7c98f5aefbbd52eb812adec8",
"assets/assets/flags/td.webp": "08bed74baa88e8d2d78e9e7a517e7ece",
"assets/assets/flags/mh.webp": "0ad244ab6aab8802317b0e4456d54e22",
"assets/assets/flags/cg.webp": "056b9933f7ee0ec2b8573828b94c3b45",
"assets/assets/flags/so.webp": "e1d8b06d5bfee197fc92bf8a1ed9a0a7",
"assets/assets/flags/kp.webp": "0a8e828cd0d29bd6a76c02034b37b5a1",
"assets/assets/flags/gf.webp": "1682fb8ec9cb5479c18b895b888d4edb",
"assets/assets/flags/ba.webp": "c34f622cfd46d50cbe2673cef13e8a50",
"assets/assets/flags/gg.webp": "9693b870d50a40df833e875ed1942afb",
"assets/assets/flags/vi.webp": "815809929b3624a7f62b3e73bc85bd49",
"assets/assets/flags/hn.webp": "5de99e26bbf2e51b29a1de69517bca4a",
"assets/assets/flags/sn.webp": "8c2457ff844d50a30a4655c4be6fbe0e",
"assets/assets/flags/cf.webp": "ba8a6d120d63cd664094daa196f47dc8",
"assets/assets/flags/dm.webp": "524d573a26e015a91a1ceaef13c42dbe",
"assets/assets/flags/nc.webp": "ce7e3db3dd7902cb7ac58c92d4ed47bb",
"assets/assets/flags/gr.webp": "d5922c91ff8e7c4465472efbd815fe5a",
"assets/assets/flags/nz.webp": "3b0e36a281fe03665e33f22441af4a6d",
"assets/assets/flags/lc.webp": "c030cc459eb4cc6ba9b2f9e6f9aa75db",
"assets/assets/flags/bl.webp": "028f20c3ab0f2d84ad4016679e2ecfd5",
"assets/assets/flags/id.webp": "8b340bcb241fa5b91d39712d9028238f",
"assets/assets/flags/er.webp": "0a0b8f5eb9742d4283e3a584da115474",
"assets/assets/flags/uz.webp": "695045fa31ac23ec0367eca7511e082f",
"assets/assets/flags/fm.webp": "6ac0ddeade54c6ccc4a8ee7c25eaee83",
"assets/assets/flags/ve.webp": "0bf9a84ad3d56eeb5d0b7525183d2df5",
"assets/assets/flags/me.webp": "3b11a3f595644bc5742d57b10e257863",
"assets/assets/flags/as.webp": "47eac5d30fb9a35f4b5d7d8437048f1c",
"assets/assets/flags/sb.webp": "142d821d39bc40a6f4377686e3eeac39",
"assets/assets/flags/af.webp": "ec278713884ac7130e02d40d526d8a4b",
"assets/assets/flags/mp.webp": "8a63c1d6cae3ae79833c4407342829d5",
"assets/assets/flags/by.webp": "4c278061e24e3a1544c315adea78559b",
"assets/assets/flags/no.webp": "48a7b79479af65f797d9c7f40b1fa429",
"assets/assets/flags/lv.webp": "da5b1314051fcf4ba60f3d6d0e1d4987",
"assets/assets/flags/ph.webp": "78b0ac2630c859e6c2fdcbd23140a8e6",
"assets/assets/flags/eg.webp": "c9bc6d183408884e93b18ac6c142dfbd",
"assets/assets/flags/iq.webp": "7f36ec6c68867b13a881de3aafeddca9",
"assets/assets/flags/kh.webp": "b3180e49f5b878f058f68d9b338dccc0",
"assets/assets/flags/gu.webp": "77b6fb9310f9fdfe91d1796ab1b2c828",
"assets/assets/flags/br.webp": "8d0b6e2cdf6248056cadb2b90f18c730",
"assets/assets/flags/am.webp": "ccceae82fac4dca9b8e298400ff520f7",
"assets/assets/flags/dj.webp": "b9f8930ed9675d9a15574afd68353108",
"assets/assets/flags/je.webp": "7c030b4dfc049f0fd6aca551f8a970a2",
"assets/assets/flags/zm.webp": "90647eecd820cab9012d0fb370fd080f",
"assets/assets/flags/mn.webp": "898383157ea9f9cd674da8a7f89c9b28",
"assets/assets/flags/ax.webp": "726421aad6b8a6023add1a83c9019d9f",
"assets/assets/flags/ca.webp": "55b1b7d4aef46d24d3b9b59297ffbe7f",
"assets/assets/flags/si.webp": "bdc986c7c9a5c5fa16b2484b7e31b876",
"assets/assets/flags/jp.webp": "1316f323d9e8e0a8df7b75bf28de998e",
"assets/assets/flags/tw.webp": "998a8776b699a5ef463e01863dde46b4",
"assets/assets/flags/vn.webp": "34d8a44f91736897520629ed86188723",
"assets/assets/flags/io.webp": "0d0c0ed809664ef84d11c63d67813601",
"assets/assets/flags/bg.webp": "ed4d26c439897cec43abbd5f3ae2e3bc",
"assets/assets/flags/ro.webp": "346f90b8aecc164a1f9e6f3b695f1317",
"assets/assets/flags/gy.webp": "ef5df477dc58c16e8abd486e82c6118c",
"assets/assets/flags/cx.webp": "6328df845cb19f51df8d81ee0a34400c",
"assets/assets/flags/mw.webp": "4e5ac7d36bbc65fddf61d2d6677384a9",
"assets/assets/flags/tn.webp": "89b8d096714ae6ef39341aa7e5d314a5",
"assets/assets/flags/za.webp": "eb0467cd4af2fe2e6a08b7c6d34a61cd",
"assets/assets/flags/xx.webp": "f9fafdfcff01c9f8b8c80ed3fadddba3",
"assets/assets/flags/se.webp": "ae114649b30f7598ce5d9def76fbf052",
"assets/assets/flags/cm.webp": "2304d8bf0b7dd4107f694b252d4dd338",
"assets/assets/flags/at.webp": "344a5814ccd99265f8a7f3c45b60746f",
"assets/assets/flags/fj.webp": "0e3186ee8166a7d24189e453ebb4b5a2",
"assets/assets/flags/kz.webp": "dcb8cc6215147810c10180a12d351691",
"assets/assets/flags/ic.webp": "035fcab37dc3bb35f57a28096ca0f7de",
"assets/assets/flags/gl.webp": "ce451b453db473fd40e23de96e76fd03",
"assets/assets/flags/eu.webp": "e6e2026b74671e78fde07e1092b3b1cc",
"assets/assets/flags/bj.webp": "5f5b645791e13fc36471ee397b6573e8",
"assets/assets/flags/gm.webp": "51306fbff09b0fbbb17ae8fede39b807",
"assets/assets/flags/et.webp": "2c605320bdc8dcb1c6b4d3d6f9860648",
"assets/assets/flags/fk.webp": "e7badda5dfaea8dc5b273667b3b3490e",
"assets/assets/flags/vc.webp": "4b710a646375c8d1e4f7ec4456439d11",
"assets/assets/flags/tz.webp": "9f102e03475e46a27f361198ce01d9ea",
"assets/assets/flags/mc.webp": "0ad5dfaaf6b631648e86c83b11b21a26",
"assets/assets/flags/cl.webp": "f5c0ebe562b49dcd43f7e3fdef1af30e",
"assets/assets/flags/au.webp": "4fff2fff91c1567a8f3823138a2901b2",
"assets/assets/flags/sd.webp": "e7e7e7b4926f234c67f17237f9763567",
"assets/assets/flags/dg.webp": "0d0c0ed809664ef84d11c63d67813601",
"assets/assets/flags/to.webp": "1fd38b244353cb5fa363b62eb38e6173",
"assets/assets/flags/cy.webp": "6cc154152972e6aa4f169924655be2e5",
"assets/assets/flags/mv.webp": "92798af58e13e9a30d88f5bee8543756",
"assets/assets/flags/ni.webp": "dfd84e491f90dfe967b5b7027ff59d71",
"assets/assets/flags/rw.webp": "f26f820578f754c2364d3f1c626ad66e",
"assets/assets/flags/pn.webp": "63722ab84be17a6e806f2807a072403d",
"assets/assets/flags/ea.webp": "393f336ba21413e63b0355838d57f6e2",
"assets/assets/flags/kn.webp": "69e1900aff65ab1a66b02200fdedfd6d",
"assets/assets/flags/pw.webp": "1bd46ad7bf3357dc03c658b715bd1231",
"assets/assets/flags/np.webp": "89e6ba9dca85d656fc24e6662175b713",
"assets/assets/flags/li.webp": "83cc26434a81ef8bef9556c175e3c583",
"assets/assets/flags/bf.webp": "72f4c894421527e444bda14898f32ecd",
"assets/assets/flags/in.webp": "564bd698c4c7063971d9fe844d3415cb",
"assets/assets/flags/kw.webp": "89a9e7c88a00e03df6012b54a5a1ecee",
"assets/assets/flags/ga.webp": "b138e4846aae674b8708cb4cbf59b1c1",
"assets/assets/flags/tv.webp": "1e82e4c116b5dc12081c0bab483e43d6",
"assets/assets/flags/sh.webp": "c40d168d5f4e95f7f39ff4675d05d8a2",
"assets/assets/flags/mo.webp": "0ec5d7d81878972e7cb2e0725ca4a0d0",
"assets/assets/flags/tc.webp": "f573835cb9fbfb90abb06bfc79cb8e51",
"assets/assets/flags/fr.webp": "1682fb8ec9cb5479c18b895b888d4edb",
"assets/assets/flags/dk.webp": "5c49a0b0d3fc871de82797e2014e8049",
"assets/assets/flags/al.webp": "dae5082cc3f8750be012ce6140f3834b",
"assets/assets/flags/cu.webp": "838c6cb3bddb65779ff75b1f47936cbc",
"assets/assets/flags/mz.webp": "3a3f0adfe2e6dc16bb597a1da4be388a",
"assets/assets/flags/bs.webp": "b4f52222cdcddc15e9a21603e89aa6aa",
"assets/assets/flags/ne.webp": "94d89e8671b86e996620ee981e787d91",
"assets/assets/flags/gb-wls.webp": "9e17072fea87ab134f35cc333e24bf42",
"assets/assets/flags/gt.webp": "097b0eb60aa008a1d11cc842e52c9e50",
"assets/assets/flags/pt.webp": "8764742ca841ce771d22090b316a725e",
"assets/assets/flags/be.webp": "3b8f32528f605808b4f8d9166cfe2f20",
"assets/assets/flags/us.webp": "4c27c957539656290bfa11e907b9e310",
"assets/assets/flags/ye.webp": "b492b7693b0648003facd1cb4d65c847",
"assets/assets/flags/gb.webp": "ef5e8531b12056cc4fb8ea6a46382d8c",
"assets/assets/flags/im.webp": "116a074cfe92534268bcde9f23393112",
"assets/assets/flags/hk.webp": "2aa505003be694f53e011a5ffbce553e",
"assets/assets/flags/sk.webp": "51c1bca009b43b307e3a9ef4954c3fd1",
"assets/assets/flags/cc.webp": "0bc0375bf12c1e256e23b3176f6bdbd4",
"assets/assets/flags/az.webp": "145b93361ec161b2a0901b7aa53fc2a5",
"assets/assets/flags/ml.webp": "7c79b58fe515881f74e22d91e2f0796d",
"assets/assets/flags/my.webp": "1bd362477fd176bf85e52f8dc3c14ed6",
"assets/assets/flags/cv.webp": "875630683283fdbcba99c8d379a942a7",
"assets/assets/flags/ao.webp": "fd50dfd36988870d941d524eb769d82d",
"assets/assets/flags/pa.webp": "c07f24af1682cde39989346f09a38116",
"assets/assets/flags/nf.webp": "d37c3c582507da218928649973e9a0ac",
"assets/assets/flags/gw.webp": "bbca3ea35a5742e3f6c7e344eea19f8b",
"assets/assets/flags/bi.webp": "92756da5025ae8a56038b75221688163",
"assets/assets/flags/gn.webp": "65d5d3d4f32c6517655217b15f36165c",
"assets/assets/flags/wf.webp": "1682fb8ec9cb5479c18b895b888d4edb",
"assets/assets/flags/co.webp": "4001635d897fe18cdc180e341fa3edcf",
"assets/assets/flags/sg.webp": "c7c271ac5d8f3734c4b313fdfe903c10",
"assets/assets/flags/hr.webp": "57fbaf0d3a91946f68e6986ab8dd693d",
"assets/assets/flags/tl.webp": "bcf9576e812e85eb0d1d9c4cde5957f7",
"assets/assets/flags/vu.webp": "bd327f232af21372939b763e953e8ef6",
"assets/assets/flags/mu.webp": "f3fd842019cf80eb0f76df2fbee46b61",
"assets/assets/flags/ac.webp": "c40d168d5f4e95f7f39ff4675d05d8a2",
"assets/assets/flags/cz.webp": "591aa2b8c62c9f99453402ce2d103d0d",
"assets/assets/flags/sr.webp": "871fcd9ace5d9d5c3025d9fadbafeb89",
"assets/assets/flags/ls.webp": "e05a2ef0791635a880a47a2352772f9e",
"assets/assets/flags/pm.webp": "1682fb8ec9cb5479c18b895b888d4edb",
"assets/assets/flags/it.webp": "8a15d46af4b6918f5d94671aa833317b",
"assets/assets/flags/km.webp": "3440177102261724cbd4f4e4d903ad53",
"assets/assets/flags/ws.webp": "5e07de5917a63879e89a52034cc429cf",
"assets/assets/flags/ec.webp": "a773aa5d822c7286af290c9fed86b7d5",
"assets/assets/flags/pl.webp": "1e20a6468bd9d64180f213230259a8d8",
"assets/assets/flags/ru.webp": "2a9d9e388d1aa5499abde68980ba49be",
"assets/assets/flags/lr.webp": "9712efaa774ad53fe5176352161e94b2",
"assets/assets/flags/ss.webp": "ae411f3669a539728888daedaaa15e8a",
"assets/assets/flags/mt.webp": "027f589491cac5a627681a40e3c7f4e8",
"assets/assets/flags/om.webp": "89ed2cfae2f9f7413eb2e05cdec966fd",
"assets/assets/flags/tm.webp": "2260d80ee5dd18337dc217ad6950838e",
"assets/assets/flags/de.webp": "61321f120efef348a2859fa76232400a",
"assets/assets/flags/aw.webp": "495171ec05f3876dfe114d527eeef63e",
"assets/assets/flags/cn.webp": "7ff833a4d7ed25a26f9869b9154519c6",
"assets/assets/flags/ma.webp": "8053fa53d861c279794bcde7127467a1",
"assets/assets/flags/va.webp": "5218d547ac0f783f12167725cd288be6",
"assets/assets/flags/zw.webp": "5c4dfb827570baa2227e19f402edc004",
"assets/assets/flags/fi.webp": "4568063d13ecd0c7a3852a91153a9bee",
"assets/assets/flags/ky.webp": "7c68ea3db888869daef13ea9b0f76a23",
"assets/assets/flags/cefta.webp": "381f3ca1556f69135732e3ba7c3d14fa",
"assets/assets/flags/py.webp": "e6c3a5eb6a88f88564d69ef2a927d82a",
"assets/assets/flags/bh.webp": "05ebea6623d4a7c083a616bd5a00ad82",
"assets/assets/flags/ug.webp": "9f91411e1fec0ba6f90a074c65464f4f",
"assets/assets/flags/ng.webp": "388c6b1f187fbdb9f39c086aab4e3a1c",
"assets/assets/flags/bq.webp": "d7fd3cc842e12baea3eba74117afa94c",
"assets/assets/flags/mx.webp": "90e34dfbfc19726a0c387e1511b635ae",
"assets/assets/flags/cw.webp": "e45cb620b6e7c64c67964e641d404793",
"assets/assets/flags/ta.webp": "c40d168d5f4e95f7f39ff4675d05d8a2",
"assets/assets/flags/mm.webp": "ddca3cfa94e193733b59a25b82c33919",
"assets/assets/flags/sj.webp": "9ce88791c85d8cae709c74c333bd14f5",
"assets/assets/flags/tt.webp": "f2ea0e07d702fb6428e1d888cef1f6ce",
"assets/assets/flags/gb-nir.webp": "3aec3aee1c0de0f989d1b76faf2f31b7",
"assets/assets/flags/il.webp": "ed4ae8b45523064feaa823d7cb558623",
"assets/assets/flags/bd.webp": "1493bd50911fa4e56f1017563638dd7a",
"assets/assets/flags/lk.webp": "0b56d50de9b77bde2f5d9db64422689d",
"assets/assets/flags/nr.webp": "2b0412c1955ea7eb7312c72fc2e03f10",
"assets/assets/flags/bo.webp": "96cbcb318fbe9fc53be85ff42ced1c84",
"assets/assets/flags/gh.webp": "2929fdaeb45c0be76b0cb022ddcd704e",
"assets/assets/flags/uy.webp": "16c24a53a6257ffcdd3f8c26dc212f25",
"assets/assets/flags/ci.webp": "7c571750aa070129de82062c893bc3cb",
"assets/assets/flags/mf.webp": "1682fb8ec9cb5479c18b895b888d4edb",
"assets/assets/flags/sa.webp": "5abf1a6bc49db5ab4a6025d34bec0eec",
"assets/assets/flags/ht.webp": "61cec15cef0dc91bff5a6e548375de8a",
"assets/assets/flags/jm.webp": "433cf125ce8cbb6b3faf7d571719e776",
"assets/assets/flags/tj.webp": "9d0ead9ba7c54603185d95ee6ec0e244",
"assets/assets/flags/ms.webp": "376de50b154265b29d5bfe56b4ed64e9",
"assets/assets/flags/gb-sct.webp": "4c1efc74a4d43247d540544122b392ca",
"assets/assets/flags/ae.webp": "acc8ff4fb5087db496a06af33e0a96cb",
"assets/assets/flags/st.webp": "2d6c40d3a92f9b9ed5a6bdd298a7d2e8",
"assets/assets/flags/lu.webp": "7c40ac9a20ceafbb18f56a1cd7b08500",
"assets/assets/flags/nl.webp": "d7fd3cc842e12baea3eba74117afa94c",
"assets/assets/flags/bz.webp": "ba9eb4394d956f2746719008600f0bae",
"assets/assets/flags/pk.webp": "715edff17af0100a1ac4f0d5ed7fa003",
"assets/assets/flags/ir.webp": "a271d4d06372797a2970effac6a974ac",
"assets/assets/flags/pr.webp": "80cf67885d1c9ac9ad727b23a473f427",
"assets/assets/flags/nu.webp": "cbe04261e0296ce222b7d49d80043664",
"assets/assets/flags/gd.webp": "49b303a8f22164475669ed6f3c7877cd",
"assets/assets/flags/kr.webp": "d09c7b5b91ad91965defd6db9fcbb2a7",
"assets/assets/flags/es-ga.webp": "5c37a67b71eb867baa45593b69913224",
"assets/assets/flags/hm.webp": "4fff2fff91c1567a8f3823138a2901b2",
"assets/assets/flags/sm.webp": "52a26335167cc81570f195f1fa328ed6",
"assets/assets/flags/tf.webp": "7fbe3f46e7c3d87a681c4cda9c37c187",
"assets/assets/flags/sx.webp": "5112a70dce952733cf968ac2d6a43d76",
"assets/assets/flags/qa.webp": "73eb0a9917f9cf89d6c6fa44834eccf9",
"assets/assets/flags/ai.webp": "e39f3085d941b079e7998806c8dfeaf2",
"assets/assets/flags/cp.webp": "1682fb8ec9cb5479c18b895b888d4edb",
"assets/assets/flags/pg.webp": "43dd02e2e098d45ccef1c72b6fcd706e",
"assets/assets/flags/ly.webp": "4a5453573161e7ef51cd8f953a21e8bd",
"assets/assets/flags/bv.webp": "db110987471026d7354df165d99ae86f",
"assets/assets/flags/kg.webp": "3a26c045557392d1bcbcda7eae3bed3c",
"assets/assets/flags/eh.webp": "28549ac7515e9404feafd8ac1cb4ce05",
"assets/assets/flags/gq.webp": "99f05c40de66b2dbb5da6380a0ce4513",
"assets/assets/flags/gp.webp": "1682fb8ec9cb5479c18b895b888d4edb",
"assets/assets/flags/ua.webp": "368799b6c08a32a1e4acec0d662f3cef",
"assets/assets/flags/na.webp": "8a834b187907a5f0c48c6388fdd568c2",
"assets/assets/flags/bw.webp": "37f5d18da5760b1df5e4d6c2e599ab54",
"assets/assets/flags/pf.webp": "9b66aedc5f896bd33c860f02dc00512c",
"assets/assets/flags/es-ct.webp": "91df7a88c63c0e73fa25878c267f8508",
"assets/assets/flags/sy.webp": "278b6674f82391d6135830cf893f9260",
"assets/assets/flags/do.webp": "5f4aae27748f6cad41772679ebb9dd8f",
"assets/assets/flags/tg.webp": "e2fb73fab71c12c317a836eb9ad974a2",
"assets/assets/flags/cd.webp": "7e115eee23d4bd420978424d9323907c",
"assets/assets/flags/mk.webp": "71d2e3cc10cf19afc8a2c3aa1b23c182",
"assets/assets/flags/sl.webp": "1c5fee4bcbc43e170626d2125938c8ed",
"assets/assets/flags/dz.webp": "1c2b85e648f55a84eed579bbda3b7bcc",
"assets/assets/flags/tr.webp": "e4569c36c5c46513b698c9253eff67d5",
"assets/assets/flags/ge.webp": "12837ee828ed713063c43b083ee30729",
"assets/assets/flags/bb.webp": "adefb801f9c646f37cbe8a969c3806f1",
"assets/assets/flags/ps.webp": "b8d505ef428d9f4859b969531b158dd8",
"assets/assets/flags/um.webp": "280ad4325f5db6d609660edb08654b7c",
"assets/assets/flags/is.webp": "e4cedffeeeaf918c6e88a255d25ea0f6",
"assets/assets/flags/ee.webp": "13b269d7d823240b66f775a6eb1fe220",
"assets/assets/flags/rs.webp": "04023b54979d37abae81a05f8d8b98d0",
"assets/assets/flags/lt.webp": "2f20b2eb7ba411d57798f6637d0330a5",
"assets/assets/flags/mr.webp": "9998335e66b087c97e26e576d61b4bdd",
"assets/assets/flags/ad.webp": "e69ac2e81a2db318d1ddae4b5eeee926",
"assets/assets/flags/tk.webp": "042dc2ff118bb931b3b37798889eb16e",
"assets/assets/flags/hu.webp": "025e0fccfa9af0bab56cb7e55e2185a9",
"assets/assets/flags/ch.webp": "42cd179ca63092ee31953384d1263a15",
"assets/assets/flags/aq.webp": "5e79679236a908da265f3abe02cb554a",
"assets/assets/flags/mg.webp": "38205bc33787873cef5f7f200a78c6ed",
"assets/assets/flags/vg.webp": "26d940b95899b911f9663a0a70bb7db4",
"assets/assets/flags/fo.webp": "f8a8d5076aaa47c60c3aff0fb60aa8be",
"assets/assets/flags/gi.webp": "4bde95addac907194fdd9a8dcf02b010",
"assets/assets/flags/bn.webp": "1bc0c5b66add8ce5b90d54a4915aafdf",
"assets/assets/flags/la.webp": "538d988581e73633d5bd116daaf901a7",
"assets/assets/social_platforms/rumble.png": "864e14f40832f61e3fea476461894a69",
"assets/assets/social_platforms/telegram.png": "acfa2ce2922ea78a82f8becacdf766f6",
"assets/assets/social_platforms/odysee.png": "bd44865f523be341e6271e4845a82daf",
"assets/assets/social_platforms/vk.png": "67fec398c7359d854365867eaa4ca0a5",
"assets/assets/social_platforms/tiktok.png": "b88687f514ba95a27c9d81bc8870dca9",
"assets/assets/social_platforms/twitter.png": "125338e9318e23a0030f7f5685bca4cf",
"assets/assets/social_platforms/trovo.png": "7d548dddb9953db33017a9f3c51c5323",
"assets/assets/social_platforms/twitch.png": "e7b99fc231f72cc999a3bafff96e135a",
"assets/assets/social_platforms/youtube.png": "6cfb34cc04146a61b8311f0860da23d7",
"assets/assets/social_platforms/facebook.png": "c5d3b5c9d54e3aa043bbcbe7175961cf",
"assets/assets/social_platforms/dlive.png": "d6cb022cba15e3acdee8ed45e8bcb0d9",
"assets/assets/intro_screen/home_screen.png": "7dbcd9ed6244f833d67f9b803b0d9a21",
"assets/assets/intro_screen/event_widget.png": "f9920dac32c5b1ceb9e1be5a1aa61710",
"assets/assets/tos_en.md": "9ea9ee2bc3bdb6a2493e2ee0064b2839",
"assets/assets/gdpr_de.md": "8814f4640e1e009c2a92e8e7a816fe17",
"assets/assets/logo_dark.png": "58510241cae7b28b6eae97c373371cee",
"assets/assets/logo_light.png": "48962b04d0bfa5b7d40fe00c7a44e941",
"assets/assets/gdpr_en.md": "5c299e6debd607e4be32ff251209a492",
"browserconfig.xml": "137b817e5309836915ae036961187dbc",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
