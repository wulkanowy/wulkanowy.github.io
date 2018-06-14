var disableClick = function(e) {e.preventDefault()};

var addButtonInfo = function(url, button, version, cb) {
    var buttonElement = document.querySelector(button);
    buttonElement.addEventListener("click", disableClick);
    var versionElement = document.querySelector(version);
    versionElement.innerHTML = "Ładowanie…";

    var res = new XMLHttpRequest();
    res.open("GET", url, true);
    res.onloadend = function () {
        if(res.status === 200) {
            cb(buttonElement, versionElement, res);
        } else {
            versionElement.innerHTML = "wersja nieznana";
        }
        buttonElement.removeEventListener("click", disableClick);
    };
    res.send(null);
};

addButtonInfo("https://api.github.com/repos/wulkanowy/wulkanowy/releases/latest", "#beta-button", "#beta-version",
    function(button, version, res) {
        var json = JSON.parse(res.responseText);
        button.href = json.assets[0].browser_download_url;
        version.innerHTML = "v" + json.name;
    }
);

addButtonInfo("https://bitrise-redirector.herokuapp.com/v0.1/apps/daeff1893f3c8128/builds/master/artifacts/app-debug-bitrise-signed.apk/info", "#dev-button", "#dev-version",
    function(button, version, res) {
        var json = JSON.parse(res.responseText);
        button.href = json.expiring_download_url;
        version.innerHTML = "v" + json.build_number;

        setTimeout(function() {
            button.href = json.public_install_page_url;
        }, 60 * 1000);
    }
);
