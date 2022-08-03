var url_string = window.location.href;
var url = new URL(url_string);
var ref = url.searchParams.get("ref") || 'freecitygame';
var toiframe = url.searchParams.get("url") || 'go.html';

var username = document.write(sessionStorage.getItem('username')) || 'Login';
var referralurl = document.write(sessionStorage.getItem('referralurl')) || 'https://play.remixworlds.com/?ref=YOUR-WALLET';
//var wallet = url.searchParams.get("wallet") || 'waxdashwaxio';
//var wallet = ${wax.userAccount};

//console.log(sessionStorage.getItem('username'));
//console.log(sessionStorage.getItem('ref'));
const affiliate_wallet = url.searchParams.get("ref") || 'freecitygame';

//sessionStorage.setItem(wallet_) = ${wax.userAccount};
//sessionStorage.getItem(wallet_);
//console.log(ref);
//console.log(sessionStorage.getItem('affiliate_wallet'));