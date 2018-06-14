var disableClick = function(e) {e.preventDefault()};

var addButtonInfo = function(url, prefix, cb) {
    var buttonElement = document.querySelector("#" + prefix + "-button");
    buttonElement.addEventListener("click", disableClick);
    var versionElement = document.querySelector("#" + prefix + "-version");
    versionElement.innerHTML = "Ładowanie…";
    var dateElement = document.querySelector("#" + prefix + "-date");

    var res = new XMLHttpRequest();
    res.open("GET", url, true);
    res.onloadend = function () {
        if(res.status === 200) {
            cb(res, buttonElement, versionElement, dateElement);
        } else {
            versionElement.innerHTML = "wersja nieznana";
        }
        buttonElement.removeEventListener("click", disableClick);
    };
    res.send(null);
};

addButtonInfo("https://api.github.com/repos/wulkanowy/wulkanowy/releases/latest", "beta",
    function(res, button, version, date) {
        var json = JSON.parse(res.responseText);
        button.href = json.assets[0].browser_download_url;
        version.innerHTML = "v" + json.name;
        date.innerHTML = new Date(json.published_at).toLocaleString("pl-PL");
    }
);

addButtonInfo("https://bitrise-redirector.herokuapp.com/v0.1/apps/daeff1893f3c8128/builds/master/artifacts/app-debug-bitrise-signed.apk/info", "dev",
    function(res, button, version, date) {
        var json = JSON.parse(res.responseText);
        button.href = json.expiring_download_url;
        version.innerHTML = "Build " + json.build_number;
        date.innerHTML = new Date(json.finished_at).toLocaleString("pl-PL");

        setTimeout(function() {
            button.href = json.public_install_page_url;
        }, 60 * 1000);
    }
);
