var AWESM=AWESM||{};if(typeof(AWESM._exists)==='undefined'){AWESM._exists=true;AWESM.d=document;AWESM.scriptVersion='2.0.0';AWESM.parentAwesm=false;AWESM.clickRef=false;AWESM.postClickRegistration=[];AWESM.sessionId=false;AWESM.initComplete=false;AWESM.postInitCalls=[];AWESM.fbAppIdDefault='129391740409903';AWESM.async='1';if(!AWESM.shares)AWESM.shares={}
AWESM.APICookie=':';if(typeof(AWESM.addressbar)==='undefined'){AWESM.addressbar='';}
AWESM.hashIdentifier='awesm=';if(typeof(AWESM.canonicalizeUrls)=='undefined'){AWESM.canonicalizeUrls=true;}}
AWESM.init=function(){this.manageSession();this.detectParents();this.setAddressbar();this.findButtons();this.findFrames();this.registerClick();this.registerPageview();this.setConvertAndGo();this.runPostInit();}
AWESM.callback=function(callbackUrl,params){var args=[];for(var i in params){args.push(i+'='+encodeURIComponent(params[i]));}
var url=callbackUrl+'?'+args.join('&');if(this.initComplete){this.makeScriptNode(url);}else{this.postInitCalls.push({'method':'makeScriptNode','param1':url});}}
AWESM.makeScriptNode=function(url){var script=this.d.createElement('script');script.setAttribute('src',url);this.d.getElementsByTagName('body')[0].appendChild(script);}
AWESM.runPostInit=function(){this.initComplete=true;for(var i=0;i<this.postInitCalls.length;i++){var call=this.postInitCalls[i];try{this[call['method']](call['param1'],call['param2']);}catch(e){window[call['method']](call['param1'],call['param2']);}}
if(typeof(this.onAvailable)!=='undefined'){this.onAvailable(this.sessionId);}else if(typeof(this.onavailable)!=='undefined'){this.onavailable(this.sessionId);}}
AWESM.getSession=function(){return this.sessionId;}
AWESM.mergeParams=function(params,overrides){var localParams={};if(typeof(params)==='object'){for(var key in params){localParams[key]=params[key];}}
if(typeof(overrides)!=='undefined'){for(var k in overrides){localParams[k]=overrides[k];}}
return localParams;}
AWESM.fillParams=function(params,defaults){if(!params)params={};for(var k in defaults){if(!params.hasOwnProperty(k)){params[k]=defaults[k];}}
return params;}
AWESM.addEvent=function(obj,evType,fn,useCapture){if(obj.addEventListener){obj.addEventListener(evType,fn,useCapture);return true;}else if(obj.attachEvent){obj['on'+evType]=fn;return true;}else{}}
AWESM.typeOf=function(value){var s=typeof value;if(s==='object'){if(value){if(value instanceof Array){s='array';}}else{s='null';}}
return s;};AWESM.canonicalizeUrl=function(url){if(!this.canonicalizeUrls)return url;var parser=AWESM.parseUri(url);var strippedQuery='';if(parser.query&&parser.query.length>0){var keyPairs=[];for(var key in parser.queryKey){if(key=='awesm')continue;if(key=='fb_ref')continue;var keyPair=key;if(parser.queryKey[key])keyPair+='='+parser.queryKey[key];keyPairs.push(keyPair);}
if(keyPairs.length>0){strippedQuery='?'+keyPairs.join('&');}}
var strippedHash='';if(parser.anchor){var anchorParts=parser.anchor.split('&');var anchorOutput=[];for(var i in anchorParts){if(anchorParts[i].indexOf(this.hashIdentifier)>=0)continue;anchorOutput.push(anchorParts[i]);}
if(anchorOutput.length>0){strippedHash='#'+anchorOutput.join('&');}}
var output=parser.protocol+'://';if(parser.userInfo){output+=parser.userInfo+'@';}
output+=parser.host+parser.port+parser.path;return output+strippedQuery+strippedHash;}
AWESM.parseUri=function(str){var o=this.parseUriOptions,m=o.parser[o.strictMode?"strict":"loose"].exec(str),uri={},i=14;while(i--)uri[o.key[i]]=m[i]||"";uri[o.q.name]={};uri[o.key[12]].replace(o.q.parser,function($0,$1,$2){if($1)uri[o.q.name][$1]=$2;});return uri;};AWESM.parseUriOptions={strictMode:false,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};;AWESM.detectParents=function(){if(this.getAPISession()['parent']!='false'){this.parentAwesm=this.getAPISession()['parent'];}
if(typeof AWESMEXTRA!='undefined'){if(typeof AWESMEXTRA['awesm']!='undefined'){this.parentAwesm=AWESMEXTRA['awesm'];}
if(typeof AWESMEXTRA['fb_ref']!='undefined'){this.clickRef=AWESMEXTRA['fb_ref'];this.parentAwesm=this.clickRef;}
return;}
var location=window.location;if(typeof location.search!='undefined'){var urlParams=location.search.substr(1).split('&');for(var i=0,l=urlParams.length;i<l;i++){var keyPair=urlParams[i].split('=');if(keyPair[0]=='fb_ref'&&keyPair[1]&&keyPair[1].indexOf('awesm')==0){this.parentAwesm=decodeURIComponent(keyPair[1]).substring(6);this.clickRef=this.parentAwesm;}}}
if(typeof location.hash!='undefined'){var fragmentParams=location.hash.substr(1).split('&');for(var i=0,l=fragmentParams.length;i<l;i++){if(fragmentParams[i].indexOf(this.hashIdentifier)===0){var hashValue=fragmentParams[i].substr(this.hashIdentifier.length);this.parentAwesm=hashValue;this.clickRef=hashValue;}}}
AWESM.setSession(this.sessionId,this.parentAwesm);}
AWESM.createRef=function(params){params.created=(String)(new Date().toUTCString());params.randSeed=Math.floor(Math.random()*100000);if(typeof this.parentAwesm=='undefined'||(typeof this.parentAwesm=='string'&&this.parentAwesm.toLowerCase()=='false')||this.parentAwesm==false){}else{params.parent=this.parentAwesm;}
params.scriptVersion=this.scriptVersion;var paramString='';for(var i in params){paramString+=params[i]+'-';}
var shareId=this.MD5(paramString);params.share_id=shareId;params.key='3986e628d89eb4c582fd4f119efb0787840e8cea6072a60d98fe83a5736135b8';this.callback('//widgets.awe.sm/v3/asyncshare/register',params);return shareId;}
AWESM.createButtonMount=function(shareId,buttonId,tag){var buttonMount=false;if(typeof tag!='undefined'){buttonMount=this.d.createElement('div');tag.parentNode.replaceChild(buttonMount,tag);}
else if(typeof buttonId!='undefined'){if(typeof buttonId=='object'){buttonMount=buttonId;}else{buttonMount=this.d.getElementById(buttonId);if(!buttonMount){throw("ERROR: no element found with ID "+buttonId+" . Button will not render.");}}
buttonMount.innerHTML='';}
if(!buttonMount||typeof buttonMount=='undefined'){if(this.async){throw("ERROR: When called asynchronously, you must provide an awesm_buttonid. Button will not render.");}else{this.d.write('<div id="ab_'+shareId+'"></div>');buttonMount=this.d.getElementById('ab_'+shareId);}}
return buttonMount;}
AWESM.setAddressbar=function(){if(!AWESM.addressbar)return;var localDefaults={'tool':'or2jwR','channel':'copy-paste','url':this.d.location.href}
var params=this.mergeParams(localDefaults,this.shares);var shareId=this.createRef(params);var fragment='#'+this.hashIdentifier+shareId;window.location.hash=fragment;}
AWESM.findButtons=function(){var likeBtns=this.d.getElementsByTagName('awesm:fblike');var sendBtns=this.d.getElementsByTagName('awesm:fbsend');var shareBtns=this.d.getElementsByTagName('awesm:fbshare');var tweetBtns=this.d.getElementsByTagName('awesm:tweet');var count=likeBtns.length;for(var i=0;i<count;i++){this.fblike(this.extractParamsFromTag(likeBtns[0]),likeBtns[0]);}
count=tweetBtns.length;for(i=0;i<count;i++){this.tweet(this.extractParamsFromTag(tweetBtns[0]),tweetBtns[0]);}
count=sendBtns.length;for(i=0;i<count;i++){this.fbsend(this.extractParamsFromTag(sendBtns[0]),sendBtns[0]);}
count=shareBtns.length;for(i=0;i<count;i++){this.fbshare(this.extractParamsFromTag(shareBtns[0]),shareBtns[0]);}}
AWESM.extractParamsFromTag=function(tag){var params={};for(var i=0;i<tag.attributes.length;i++){var key=tag.attributes.item(i).nodeName;var val=tag.attributes.item(i).nodeValue;if(key.indexOf(':')>0){key=key.replace(':','_');}
params[key]=val;}
return params;}
AWESM.registerClick=function(){if(typeof AWESMEXTRA!='undefined'){if(typeof AWESMEXTRA['capture_data']!='undefined'){if(AWESMEXTRA['capture_data']==false){return;}}}
if(this.clickRef){this.callback('//widgets.awe.sm/v3/asyncshare/click',{'ref':decodeURIComponent(this.clickRef),'callback':'AWESM.postRefClick'})}}
AWESM.alwaysPostClick=function(o){if(o['awesm_url']){this.parentAwesm=o['awesm_url'];this.clickRef=false;this.setSession(this.sessionId,this.parentAwesm);}
for(var i=0;i<this.postClickRegistration.length;i++){var call=this.postClickRegistration[i];this[call['method']](call['param1'],call['param2']);}}
if(AWESM.clickRegistered){AWESM.postRefClick=function(o){this.alwaysPostClick(o);this.clickRegistered(o);}}else{AWESM.postRefClick=AWESM.alwaysPostClick;}
AWESM.fbSDKinit=function(initObj,buttonMount,locale,inline){if(typeof FB=='undefined'){if(!this.d.getElementById('fb-root')){var fbroot=this.d.createElement('div');fbroot.id='fb-root';this.d.getElementsByTagName('body')[0].appendChild(fbroot);}
if(!this.fbsdk){this.fbsdk=this.d.createElement('script');this.fbsdk.async=true;this.fbsdk.src=this.d.location.protocol+'//connect.facebook.net/'+locale+'/all.js';this.d.getElementById('fb-root').appendChild(this.fbsdk);}
window.fbAsyncInit=function(){FB.init(initObj)
if(AWESM.fbEvents){AWESM.fbEvents();}};}
else{if(inline){FB.XFBML.parse(buttonMount);}else{if(typeof(FB)==="object"&&FB._apiKey===null){}else{FB.XFBML.parse(buttonMount);}}
if(AWESM.fbEvents){AWESM.fbEvents();}}}
AWESM.fbCommonConfig=function(params,tag){var inline=false;if(typeof params['awesm_inline']!='undefined'){inline=true;}
var fbAppId=this.fbAppIdDefault;if(typeof params['app_id']!='undefined'){fbAppId=params['app_id'];}
var fbInitObj={appId:fbAppId,status:true,cookie:true,xfbml:true};if(typeof params['fb_init']!='undefined'){fbInitObj=params['fb_init'];}
var locale='en_US';if(typeof params['locale']!='undefined'){if(params['locale'].length==5){locale=params['locale'];}}
var buttonId=params.awesm_buttonid;var buttonSpecificParams=this.fbExtractButtonParams(params);var shareId=this.createRef(buttonSpecificParams);var buttonMount=this.createButtonMount(shareId,buttonId,tag);return{'params':params,'inline':inline,'initObj':fbInitObj,'locale':locale,'shareId':shareId,'buttonMount':buttonMount};}
AWESM.fbExtractButtonParams=function(buttonParams){var params={};for(var fullKey in buttonParams){if(fullKey.indexOf('awesm')===0){var key=fullKey.substr(6);params[key]=buttonParams[fullKey];}}
params['url']=buttonParams['href'];return params;}
AWESM.fblikeConfig=function(params,tag){if(!params)params={};var channel='facebook-like';var defaults={'standard':{'like':{'show-faces':{'true':'GZMxY4','false':'BZeMAs'}},'recommend':{'show-faces':{'true':'OpG0dJ','false':'VZC34W'}},'min-width':'225','default-width':'450','height':{'show-faces':{'true':'80','false':'35'}}},'button_count':{'like':'tCsvyd','recommend':'bOqQsC','min-width':'90','default-width':'90','height':'20'},'box_count':{'like':'wtFKnQ','recommend':'H8xYfU','min-width':'55','default-width':'55','height':'65'}};var prefixedDefaults={};if(typeof(this.shares)!=='undefined'&&typeof(this.shares)=='object'){for(var k in this.shares){prefixedDefaults['awesm_'+k]=this.shares[k];}}
var finalParams=this.mergeParams(prefixedDefaults,params);if(!finalParams['href']){if(finalParams['awesm_url']){finalParams['href']=finalParams['awesm_url']}else{finalParams['href']=this.d.location.href;}}
delete finalParams['awesm_url'];finalParams.href=this.canonicalizeUrl(finalParams.href);if(typeof finalParams['awesm_channel']=='undefined')finalParams.awesm_channel=channel;var layout,action,faces;(typeof finalParams['layout']=='undefined')?layout='standard':layout=finalParams.layout;(typeof finalParams['action']=='undefined')?action='like':action=finalParams.action;(typeof finalParams['show_faces']=='undefined')?faces='true':faces=finalParams.show_faces;if(typeof finalParams['awesm_tool']=='undefined'){if(layout=='standard'){finalParams.awesm_tool=defaults[layout][action]['show-faces'][faces];}else{finalParams.awesm_tool=defaults[layout][action];}}
if(typeof finalParams['width']=='undefined'){finalParams['width']=defaults[layout]['default-width'];}else{if(finalParams['width']<defaults[layout]['min-width']){finalParams['width']=defaults[layout]['min-width'];}}
if(layout=='standard'){finalParams['height']=defaults[layout]['height']['show-faces'][faces];}else{finalParams['height']=defaults[layout]['height'];}
return this.fbCommonConfig(finalParams,tag);}
AWESM.fblike=function(params,tag){var config=this.fblikeConfig(params,tag)
params=config['params'];var shareId=config['shareId'];var buttonMount=config['buttonMount'];var initObj=config['initObj'];var locale=config['locale'];var inline=config['inline'];var btn=this.d.createElement('div');btn.setAttribute('class','fb-like');btn.className='fb-like';for(var i in params){var hyphenated=i.replace('_','-');btn.setAttribute('data-'+hyphenated,params[i]);}
btn.setAttribute('data-ref',"awesm:"+shareId);buttonMount.appendChild(btn);this.fbSDKinit(initObj,buttonMount,locale,inline);}
AWESM.fblikeFrame=function(params,tag){var config=this.fblikeConfig(params,tag)
params=config['params'];var shareId=config['shareId'];var buttonMount=config['buttonMount'];var btn=this.d.createElement('iframe');var src='//www.facebook.com/plugins/like.php?';for(var i in params){src+=i+'='+encodeURIComponent(params[i])+'&';}
src+='ref=awesm:'+shareId;btn.setAttribute('src',src);btn.setAttribute('scrolling',"no");btn.setAttribute('frameborder',"0");btn.setAttribute('style',"border:none; overflow:hidden; width:"+params['width']+"px; height:"+params['height']+"px;");btn.setAttribute('allowTransparency',"true");btn.setAttribute('width',params['width']);btn.setAttribute('height',params['height']);buttonMount.appendChild(btn);}
AWESM.fbsend=function(params,tag){if(!params)params={};var channel='facebook-send';var tool='936ArX';params['awesm_channel']=channel;params['awesm_tool']=tool;var finalParams=this.mergeParams(this.shares,params);if(typeof finalParams['href']=='undefined'){if(finalParams['url']){finalParams['href']=finalParams['url']}else{finalParams['href']=this.d.location.href;}}
delete finalParams['url'];finalParams.href=this.canonicalizeUrl(finalParams.href);var allConfig=this.fbCommonConfig(finalParams,tag);finalParams=allConfig['params'];var shareId=allConfig['shareId'];var buttonMount=allConfig['buttonMount'];var initObj=allConfig['initObj'];var locale=allConfig['locale'];var inline=allConfig['inline'];var btn=this.d.createElement('div');btn.setAttribute('class','fb-send');btn.className='fb-send';for(var i in finalParams){var hyphenated=i.replace('_','-');btn.setAttribute('data-'+hyphenated,finalParams[i]);}
btn.setAttribute('data-ref',"awesm:"+shareId);buttonMount.appendChild(btn);this.fbSDKinit(initObj,buttonMount,locale,inline)}
AWESM.fbshare=function(params,tag){if(this.clickRef){this.postClickRegistration.push({'method':'fbshare','param1':params,'param2':tag});return;}
var channel='facebook-post';params['awesm_channel']=channel;params['awesm_key']='3986e628d89eb4c582fd4f119efb0787840e8cea6072a60d98fe83a5736135b8';params['awesm_parent']=this.parentAwesm;var prefixedDefaults={};if(typeof(this.shares)!=='undefined'&&typeof(this.shares)=='object'){for(var k in this.shares){prefixedDefaults['awesm_'+k]=this.shares[k];}}
var finalParams=this.mergeParams(prefixedDefaults,params);if(typeof finalParams['href']=='undefined'){if(finalParams['url']){finalParams['href']=finalParams['url']}else{finalParams['href']=this.d.location.href;}}
delete finalParams['url'];finalParams.href=this.canonicalizeUrl(finalParams.href);var paramPairs=[];for(var p in finalParams){paramPairs.push(p+'='+encodeURIComponent(finalParams[p]));}
var paramString=paramPairs.join('&');var width,height;switch(params['size']){case'small':width=80;height=18;break;case'large':default:width=53;height=69;}
var buttonId=finalParams.awesm_buttonid;var buttonMount=this.createButtonMount('afsb_'+Math.random(),buttonId,tag);buttonMount.innerHTML='<iframe src="//widgets.awe.sm/v3/fbshare_button?'+paramString+'" width="'+width+'" height="'+height+'" allowtransparency="true" frameborder="0" scrolling="no" tabindex="0" class="facebook-share-button"></iframe>'}
AWESM.fblikeFrameCalls=[];AWESM.registerFblikeFrame=function(params,tag){this.fblikeFrameCalls.push({'params':params,'tag':tag});}
AWESM.findFrames=function(){for(var i=0;i<this.fblikeFrameCalls.length;i++){this.fblikeFrame(this.fblikeFrameCalls[i]['params'],this.fblikeFrameCalls[i]['tag']);}}
AWESM.tweet=function(params,tag){if(!params)params={};var sizes={en:{vertical:[55,62],horizontal:[110,20],none:[55,20]},it:{vertical:[55,62],horizontal:[110,20],none:[55,20]},es:{vertical:[64,62],horizontal:[110,20],none:[64,20]},ja:{vertical:[80,62],horizontal:[130,20],none:[80,20]},de:{vertical:[67,62],horizontal:[110,20],none:[67,20]},fr:{vertical:[65,62],horizontal:[110,20],none:[65,20]}};if(typeof params['data-lang']=='undefined'){params['data-lang']='en';}
if(typeof params['data-count']=='undefined'){params['data-count']='horizontal';}
var width=sizes[params['data-lang']][params['data-count']][0];var height=sizes[params['data-lang']][params['data-count']][1];params['awesm_key']='3986e628d89eb4c582fd4f119efb0787840e8cea6072a60d98fe83a5736135b8';params['awesm_parent']=this.parentAwesm;var prefixedDefaults={};if(typeof(this.shares)!=='undefined'&&typeof(this.shares)=='object'){for(var k in this.shares){prefixedDefaults['awesm_'+k]=this.shares[k];}}
var finalParams=this.mergeParams(prefixedDefaults,params);if(typeof finalParams['data-url']=='undefined'){if(finalParams['awesm_url']){finalParams['data-url']=finalParams['awesm_url']}else{finalParams['data-url']=this.d.location.href;}}
finalParams['data-url']=this.canonicalizeUrl(finalParams['data-url']);var paramPairs=[];for(var p in finalParams){var key=p;if(p.indexOf('data-')==0)key=p.substr(5);paramPairs.push(key+'='+encodeURIComponent(finalParams[p]));}
var paramString=paramPairs.join('&');var buttonId=finalParams.awesm_buttonid;var buttonMount=this.createButtonMount('atb_'+Math.random(),buttonId,tag);buttonMount.innerHTML='<iframe src="//widgets.awe.sm/v3/tweet_button?'+paramString+'" width="'+width+'" height="'+height+'" allowtransparency="true" frameborder="0" scrolling="no" tabindex="0" class="twitter-share-button twitter-count-'+this.count+'"></iframe>'}
AWESM.MD5=function(string){function RotateLeft(lValue,iShiftBits){return(lValue<<iShiftBits)|(lValue>>>(32-iShiftBits));}
function AddUnsigned(lX,lY){var lX4,lY4,lX8,lY8,lResult;lX8=(lX&0x80000000);lY8=(lY&0x80000000);lX4=(lX&0x40000000);lY4=(lY&0x40000000);lResult=(lX&0x3FFFFFFF)+(lY&0x3FFFFFFF);if(lX4&lY4){return(lResult^0x80000000^lX8^lY8);}
if(lX4|lY4){if(lResult&0x40000000){return(lResult^0xC0000000^lX8^lY8);}else{return(lResult^0x40000000^lX8^lY8);}}else{return(lResult^lX8^lY8);}}
function F(x,y,z){return(x&y)|((~x)&z);}
function G(x,y,z){return(x&z)|(y&(~z));}
function H(x,y,z){return(x^y^z);}
function I(x,y,z){return(y^(x|(~z)));}
function FF(a,b,c,d,x,s,ac){a=AddUnsigned(a,AddUnsigned(AddUnsigned(F(b,c,d),x),ac));return AddUnsigned(RotateLeft(a,s),b);};function GG(a,b,c,d,x,s,ac){a=AddUnsigned(a,AddUnsigned(AddUnsigned(G(b,c,d),x),ac));return AddUnsigned(RotateLeft(a,s),b);};function HH(a,b,c,d,x,s,ac){a=AddUnsigned(a,AddUnsigned(AddUnsigned(H(b,c,d),x),ac));return AddUnsigned(RotateLeft(a,s),b);};function II(a,b,c,d,x,s,ac){a=AddUnsigned(a,AddUnsigned(AddUnsigned(I(b,c,d),x),ac));return AddUnsigned(RotateLeft(a,s),b);};function ConvertToWordArray(string){var lWordCount;var lMessageLength=string.length;var lNumberOfWords_temp1=lMessageLength+8;var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1%64))/64;var lNumberOfWords=(lNumberOfWords_temp2+1)*16;var lWordArray=Array(lNumberOfWords-1);var lBytePosition=0;var lByteCount=0;while(lByteCount<lMessageLength){lWordCount=(lByteCount-(lByteCount%4))/4;lBytePosition=(lByteCount%4)*8;lWordArray[lWordCount]=(lWordArray[lWordCount]|(string.charCodeAt(lByteCount)<<lBytePosition));lByteCount++;}
lWordCount=(lByteCount-(lByteCount%4))/4;lBytePosition=(lByteCount%4)*8;lWordArray[lWordCount]=lWordArray[lWordCount]|(0x80<<lBytePosition);lWordArray[lNumberOfWords-2]=lMessageLength<<3;lWordArray[lNumberOfWords-1]=lMessageLength>>>29;return lWordArray;};function WordToHex(lValue){var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;for(lCount=0;lCount<=3;lCount++){lByte=(lValue>>>(lCount*8))&255;WordToHexValue_temp="0"+lByte.toString(16);WordToHexValue=WordToHexValue+WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);}
return WordToHexValue;};function Utf8Encode(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}
else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}
else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;};var x=Array();var k,AA,BB,CC,DD,a,b,c,d;var S11=7,S12=12,S13=17,S14=22;var S21=5,S22=9,S23=14,S24=20;var S31=4,S32=11,S33=16,S34=23;var S41=6,S42=10,S43=15,S44=21;string=Utf8Encode(string);x=ConvertToWordArray(string);a=0x67452301;b=0xEFCDAB89;c=0x98BADCFE;d=0x10325476;for(k=0;k<x.length;k+=16){AA=a;BB=b;CC=c;DD=d;a=FF(a,b,c,d,x[k+0],S11,0xD76AA478);d=FF(d,a,b,c,x[k+1],S12,0xE8C7B756);c=FF(c,d,a,b,x[k+2],S13,0x242070DB);b=FF(b,c,d,a,x[k+3],S14,0xC1BDCEEE);a=FF(a,b,c,d,x[k+4],S11,0xF57C0FAF);d=FF(d,a,b,c,x[k+5],S12,0x4787C62A);c=FF(c,d,a,b,x[k+6],S13,0xA8304613);b=FF(b,c,d,a,x[k+7],S14,0xFD469501);a=FF(a,b,c,d,x[k+8],S11,0x698098D8);d=FF(d,a,b,c,x[k+9],S12,0x8B44F7AF);c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);a=FF(a,b,c,d,x[k+12],S11,0x6B901122);d=FF(d,a,b,c,x[k+13],S12,0xFD987193);c=FF(c,d,a,b,x[k+14],S13,0xA679438E);b=FF(b,c,d,a,x[k+15],S14,0x49B40821);a=GG(a,b,c,d,x[k+1],S21,0xF61E2562);d=GG(d,a,b,c,x[k+6],S22,0xC040B340);c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);b=GG(b,c,d,a,x[k+0],S24,0xE9B6C7AA);a=GG(a,b,c,d,x[k+5],S21,0xD62F105D);d=GG(d,a,b,c,x[k+10],S22,0x2441453);c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);b=GG(b,c,d,a,x[k+4],S24,0xE7D3FBC8);a=GG(a,b,c,d,x[k+9],S21,0x21E1CDE6);d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);c=GG(c,d,a,b,x[k+3],S23,0xF4D50D87);b=GG(b,c,d,a,x[k+8],S24,0x455A14ED);a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);d=GG(d,a,b,c,x[k+2],S22,0xFCEFA3F8);c=GG(c,d,a,b,x[k+7],S23,0x676F02D9);b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);a=HH(a,b,c,d,x[k+5],S31,0xFFFA3942);d=HH(d,a,b,c,x[k+8],S32,0x8771F681);c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);a=HH(a,b,c,d,x[k+1],S31,0xA4BEEA44);d=HH(d,a,b,c,x[k+4],S32,0x4BDECFA9);c=HH(c,d,a,b,x[k+7],S33,0xF6BB4B60);b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);d=HH(d,a,b,c,x[k+0],S32,0xEAA127FA);c=HH(c,d,a,b,x[k+3],S33,0xD4EF3085);b=HH(b,c,d,a,x[k+6],S34,0x4881D05);a=HH(a,b,c,d,x[k+9],S31,0xD9D4D039);d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);b=HH(b,c,d,a,x[k+2],S34,0xC4AC5665);a=II(a,b,c,d,x[k+0],S41,0xF4292244);d=II(d,a,b,c,x[k+7],S42,0x432AFF97);c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);b=II(b,c,d,a,x[k+5],S44,0xFC93A039);a=II(a,b,c,d,x[k+12],S41,0x655B59C3);d=II(d,a,b,c,x[k+3],S42,0x8F0CCC92);c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);b=II(b,c,d,a,x[k+1],S44,0x85845DD1);a=II(a,b,c,d,x[k+8],S41,0x6FA87E4F);d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);c=II(c,d,a,b,x[k+6],S43,0xA3014314);b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);a=II(a,b,c,d,x[k+4],S41,0xF7537E82);d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);c=II(c,d,a,b,x[k+2],S43,0x2AD7D2BB);b=II(b,c,d,a,x[k+9],S44,0xEB86D391);a=AddUnsigned(a,AA);b=AddUnsigned(b,BB);c=AddUnsigned(c,CC);d=AddUnsigned(d,DD);}
var temp=WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);return temp.toLowerCase();}
AWESM.manageSession=function(){var localSession=this.getSession();var remoteSessionId=this.getAPISession()['sessionId'];if(localSession){this.setSession(remoteSessionId,localSession['parent'])}else{this.setSession(remoteSessionId,'false');}}
AWESM.getSession=function(){var awesmSession=this.readCookie('_awesmsession');return this.getAnySession(awesmSession);}
AWESM.getAPISession=function(){return this.getAnySession(this.APICookie);}
AWESM.getAnySession=function(sessionString){if(sessionString){var cookieData=sessionString.split(':');var sessionData={'sessionId':cookieData[0],'parent':cookieData[1]}
return sessionData;}else{return false;}}
AWESM.setSession=function(sessionId,parentAwesm){this.createCookie('_awesmsession',sessionId+':'+parentAwesm+':',30);this.sessionId=sessionId;}
AWESM.createCookie=function(name,value,days){if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));var expires="; expires="+date.toGMTString();}
else var expires="";document.cookie=name+"="+value+expires+"; path=/";}
AWESM.readCookie=function(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length);}
return null;}
AWESM.registerPageview=function(){if(typeof AWESMEXTRA!='undefined'){if(typeof AWESMEXTRA['capture_data']!='undefined'){if(AWESMEXTRA['capture_data']==false){return;}}}
if(this.clickRef){this.postClickRegistration.push({'method':'registerPageview'});return;}
var params={'key':'3986e628d89eb4c582fd4f119efb0787840e8cea6072a60d98fe83a5736135b8','session_id':this.sessionId,'awesm_url':this.parentAwesm,'conversion_type':'pageview','conversion_href':this.d.location.href,'read_headers':'true','callback':'AWESM.pageviewRegistered','referrer':this.d.referrer};this.callback('//api.awe.sm/conversions/new',params);}
AWESM.pageviewRegistered=function(o){}
AWESM.convert=function(goal,value,conversion_id,conversion_user_id){if(typeof(value)=='undefined')value=0;if(typeof(conversion_id)=='undefined')conversion_id=null;if(typeof(conversion_user_id)=='undefined')conversion_user_id=null;if(this.initComplete){if(this.clickRef){this.postClickRegistration.push({'method':'convert','param1':goal,'param2':value});return;}
if(this.parentAwesm&&this.parentAwesm!="false"){var params={'key':'3986e628d89eb4c582fd4f119efb0787840e8cea6072a60d98fe83a5736135b8','session_id':this.sessionId,'awesm_url':this.parentAwesm,'conversion_type':goal,'conversion_value':value,'conversion_href':this.d.location.href,'account_conversionid':conversion_id,'account_userid':conversion_user_id,'read_headers':'true','callback':'AWESM.conversionRegistered','referrer':this.d.referrer};this.callback('//api.awe.sm/conversions/new',params);}else{}}else{AWESM.postInitCalls.push({'method':'convert','param1':goal,'param2':value})}}
AWESM.conversionRegistered=function(o){}
AWESM.setConvertAndGo=function(){AWESM.addEvent(document.body,'click',AWESM.convertAndGo);}
AWESM.convertAndGo=function(e){var target;if(!e){e=window.event;}
if(e.target){target=e.target;}else if(e.srcElement){target=e.srcElement;}
if(target.nodeType==3){target=target.parentNode;}
var widgetsDomain='widgets.awe.sm';var key='3986e628d89eb4c582fd4f119efb0787840e8cea6072a60d98fe83a5736135b8';if(target.tagName.toLowerCase()=='a'){var cType=target.getAttribute('data-conversion-type');if(cType&&cType.match(/^goal_([1-9]|10)$/)){var href=target.getAttribute('href');if(target.getAttribute('href').indexOf(widgetsDomain)<0){if(e.preventDefault)e.preventDefault();e.returnValue=false;var qs=new Array('key='+key,'url='+href);for(var i=0;i<target.attributes.length;i++){var attr_name=target.attributes[i].name;var attr_value=target.attributes[i].value;if(typeof(attr_name)!='undefined'&&attr_name.substring(0,5)=='data-'){if(attr_name=='data-conversion-id'){attr_name='data-account-conversionid';}else if(attr_name=='data-user-id'){attr_name='data-account-userid';}
qs.push(attr_name.substring(5).replace(/-/g,'_')+'='+encodeURIComponent(attr_value));}}
var protocol='http://';if(href.substring(0,5)=='https'){protocol='https://';}
var link=protocol+widgetsDomain+'/conversions?'+qs.join('&');window.location=link;return false;}}}}
AWESM.escapeForShare=function(text){return text;};AWESM.shareTo=function(params){if(typeof params=='undefined')params={};var withGlobalParams=AWESM.mergeParams(AWESM.shares,params);var url=window.location.href;if(params['url']){url=params['url']
delete params['url']}
var defaults={key:AWESM.api_key,tool:'tWR7KQ',windowSpecs:'width=500,height=500',windowName:'awesm_share_window',windowTimeout:false,windowPopup:true};for(var k in defaults){if(withGlobalParams.hasOwnProperty(k)){defaults[k]=withGlobalParams[k];delete withGlobalParams[k];}}
var apiCall="//api.awe.sm/url/share?v=3&errors=false&key="+defaults.key+"&channel="+encodeURIComponent(params['channel'])+"&url="+encodeURIComponent(url)+"&tool="+encodeURIComponent(defaults.tool)+"&destination="+encodeURIComponent(params['destination']);delete params['channel'];delete params['destination'];var apiParams=[];for(var p in withGlobalParams){if(withGlobalParams.hasOwnProperty(p)){if(this.typeOf(withGlobalParams[p])=='array'){for(var i=0;i<withGlobalParams[p].length;i++){apiParams.push(p+'[]='+encodeURIComponent(withGlobalParams[p][i]));}}else{apiParams.push(p+'='+encodeURIComponent(withGlobalParams[p]));}}}
if(apiParams.length>0){apiCall+='&'+apiParams.join('&');}
if(defaults.windowPopup===false){window.location.href=apiCall;}else{var shareWindow=window.open(apiCall,defaults.windowName,defaults.windowSpecs);if(defaults.windowTimeout!==false){window.setTimeout(function(){shareWindow.close();},defaults.windowTimeout);}}
return shareWindow;};AWESM.share={};AWESM.share.twitter=function(params){if(typeof params=='undefined')params={};var defaults={channel:'twitter',windowSpecs:'width=550,height=258,resizable=0,scrollbars=0'};params=AWESM.fillParams(params,defaults);var destination="https://twitter.com/intent/tweet?url=AWESM_URL&text=";destination+=encodeURIComponent(AWESM.escapeForShare(params['text']));delete params['text'];var destinationParams=['via','hashtags','related'];for(var i=0;i<destinationParams.length;i++){var p=destinationParams[i];if(params[p]){destination+='&'+p+'='+encodeURIComponent(params[p]);delete params[p];}}
params['destination']=destination;return AWESM.shareTo(params);};AWESM.share.facebook_share=function(params){if(typeof params=='undefined')params={};var defaults={channel:'facebook-share',windowSpecs:'width=600,height=350,resizable=0,scrollbars=0'};params=AWESM.fillParams(params,defaults);var destination="https://www.facebook.com/sharer.php?u=AWESM_URL&t="+encodeURIComponent(params['title']);params['destination']=destination;delete params['title']
return AWESM.shareTo(params);};AWESM.share.facebook_post=function(params){if(typeof params=='undefined')params={};var defaults={channel:'facebook-post',windowSpecs:'width=640,height=370,resizable=0,scrollbars=0',app_id:AWESM.fbAppIdDefault};params=AWESM.fillParams(params,defaults);if(!params['app_id']){console.log('ERROR: Facebook requires an app_id to post to the feed dialog')}
if(!params['redirect_uri']){console.log('ERROR: Facebook requires a redirect_uri; it must be a domain controlled by the app_id')}
var destination="https://www.facebook.com/dialog/feed?link=AWESM_URL&app_id="+params['app_id']+'&redirect_uri='+encodeURIComponent(params['redirect_uri'])+"&display=popup";delete params['app_id']
delete params['redirect_uri']
var destinationParams=['picture','name','caption','description'];for(var i=0;i<destinationParams.length;i++){var p=destinationParams[i];if(params[p]){destination+='&'+p+'='+encodeURIComponent(params[p]);delete params[p];}}
params['destination']=destination;return AWESM.shareTo(params);};AWESM.share.pinterest=function(params){if(typeof params=='undefined')params={};var defaults={channel:'pinterest',windowSpecs:'width=665,height=350,resizable=0,scrollbars=0'};params=AWESM.fillParams(params,defaults);if(!params['image']){console.log("ERROR: pinterest requires a pin specify an image URL (must start with http://)")}
var destination="http://pinterest.com/pin/create/button/?url=AWESM_URL&media="+
encodeURIComponent(params['image']);delete params['image'];if(params['description']){destination+='&description='+encodeURIComponent(params['description']);delete params['description'];}
params['destination']=destination;return AWESM.shareTo(params);};AWESM.share.email=function(params){if(typeof params=='undefined')params={};var defaults={channel:'email',windowPopup:false};params=AWESM.fillParams(params,defaults);if(!params['subject']){console.log("WARNING: You should set a subject for your email")}
if(!params['body']){console.log("WARNING: Your should set a body for your email")}
var destination="mailto:?subject="+
encodeURIComponent(params['subject'])+"&body="+encodeURIComponent(params['body'])+"%20AWESM_URL";delete params['subject']
delete params['body'];params['destination']=destination;return AWESM.shareTo(params);};AWESM.share.tumblr=function(params){if(typeof params=='undefined')params={};var type=params['type'];delete params['type'];var destinationParams;var destination;switch(type){case'link':destination="http://www.tumblr.com/share/link?url=AWESM_URL"
destinationParams=['name','description'];break;case'photo':destination="http://www.tumblr.com/share/photo?clickthru=AWESM_URL"
destinationParams=['source','caption']
break;case'quote':destination="http://www.tumblr.com/share/quote?source=%20(%3Ca%20href%3D%22AWESM_URL%22%3Evia%3C%2Fa%3E)";destinationParams=['quote'];break;case'video':destination="http://www.tumblr.com/share/video?embed=embed_code&caption=caption";console.log("ERROR: video type not yet supported");return;default:console.log("ERROR: you must specify the type of tumblr post: link or photo")
return;}
var defaults={channel:'tumblr-'+type,windowSpecs:'width=450,height=480,resizable=0,scrollbars=0'};params=AWESM.fillParams(params,defaults);for(var i=0;i<destinationParams.length;i++){var p=destinationParams[i];if(params[p]){destination+='&'+p+'='+encodeURIComponent(params[p]);delete params[p];}}
params['destination']=destination;return AWESM.shareTo(params);};AWESM.share.tumblr_link=function(params){if(!params)params={};params['type']='link';return AWESM.share.tumblr(params);};AWESM.share.tumblr_photo=function(params){if(!params)params={};params['type']='photo';return AWESM.share.tumblr(params);};AWESM.share.tumblr_quote=function(params){if(!params)params={};params['type']='quote';return AWESM.share.tumblr(params);};AWESM.share.googleplus=function(params){if(typeof params=='undefined')params={};var defaults={channel:'googleplus',windowSpecs:'height=600,width=600,menubar=no,toolbar=no,resizable=yes,scrollbars=yes'};params=AWESM.fillParams(params,defaults);var destination="https://plus.google.com/share?url=AWESM_URL";params['destination']=destination;return AWESM.shareTo(params);};AWESM.share.linkedin=function(params){if(typeof params=='undefined')params={};var defaults={channel:'linkedin-share',windowSpecs:'width=600,height=390,resizable=0,scrollbars=0'};params=AWESM.fillParams(params,defaults);var destination="https://www.linkedin.com/cws/share?url=AWESM_URL";params['destination']=destination;return AWESM.shareTo(params);};if(AWESM.async){AWESM.init();}else{AWESM.addEvent(window,'load',function(){AWESM.init()});}