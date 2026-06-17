

document.addEventListener("DOMContentLoaded", () =>
{
    const imgs = document.getElementsByTagName("img");
    for (const img of imgs)
    {
        if (isAdUrl(img.src))
        {
            img.classList.add("ad");
        }
    }

    const iframes = document.getElementsByTagName("iframe");
    for (const iframe of iframes)
    {
        if (isAdUrl(iframe.src))
        {
            iframe.classList.add("ad");
        }
    }
});

function isAdUrl(check)
{
    for (let i = 0; i <= adUrls.length; i++)
    {
        if (check.includes(adUrls[i]) || check.includes("ad." + adUrls[i]))
        {
            return true;
        }
    }
    return false;
}

const adUrls = [
    "doubleclick.net",
    "googlesyndication.com",
    "googleadservices.com",
    "adservice.google.com",
    "ads.youtube.com",
    "adform.net",
    "adnxs.com",
    "adnxs.io",
    "criteo.com",
    "criteo.net",
    "taboola.com",
    "outbrain.com",
    "revcontent.com",
    "brightcove.net",
    "revsci.net",
    "appnexus.com",
    "openx.net",
    "rubiconproject.com",
    "indexexchange.com",
    "pubmatic.com",
    "sovrn.com",
    "adsafeprotected.com",
    "adsrvr.org",
    "bidr.io",
    "adtech.com",
    "ads.yahoo.com",
    "adroll.com",
    "adrollstorefront.com",
    "districtm.io",
    "convertr.io",
    "pulsepoint.com",
    "triplelift.com",
    "prebid.org",
    "adscale.de",
    "indexexchange.net",
    "spotxchange.com",
    "thetradedesk.com",
    "quantcast.com",
    "measurementapi.com",
    "moengage.com",
    "appsflyer.com",
    "adjust.com",
    "branch.io",
    "ironsource.com",
    "unityads.unity3d.com",
    "facebook.com",
    "facebook.net",
    "connect.facebook.net",
    "pixel.facebook.com",
    "t.co"
];

const css = `
.ad {
    display: none !important;
    width: 0pt !important;
    height: 0pt !important;
    max-width: 0pt !important;
    max-height: 0pt !important;
}`;
function theCss()
{
    const s = document.createElement("style");
    s.textContent = css;
    document.head.appendChild(s);
}
