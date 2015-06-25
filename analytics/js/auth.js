var pHeader = {"alg":"RS256","typ":"JWT"}
var sHeader = JSON.stringify(pHeader);

var pClaim = {};
pClaim.aud = "https://www.googleapis.com/oauth2/v3/token";
pClaim.scope = "https://www.googleapis.com/auth/analytics.readonly";
pClaim.iss = "118800867949-n0be83m9v5oi36a62604obukjh5fl0kv@developer.gserviceaccount.com";
pClaim.exp = KJUR.jws.IntDate.get("now + 1hour");
pClaim.iat = KJUR.jws.IntDate.get("now");

var sClaim = JSON.stringify(pClaim);