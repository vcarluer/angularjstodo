cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
        "id": "org.apache.cordova.inappbrowser.inappbrowser",
        "clobbers": [
            "window.open"
        ]
    },
    {
        "file": "plugins/com.msopentech.azure-mobile-services/www/MobileServices.Web.Ext.js",
        "id": "com.msopentech.azure-mobile-services.AzureMobileServices.Ext",
        "runs": true
    },
    {
        "file": "plugins/com.msopentech.azure-mobile-services/www/MobileServices.Web-1.1.3.js",
        "id": "com.msopentech.azure-mobile-services.AzureMobileServices",
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.inappbrowser": "0.5.2",
    "com.msopentech.azure-mobile-services": "0.1.4",
    "org.apache.cordova.geolocation": "0.3.10",
    "org.apache.cordova.device": "0.2.12"
}
// BOTTOM OF METADATA
});