var disableClick = function(e) {e.preventDefault()};

var addButtonInfo = function(url, prefix, cb) {
    var buttonElement = document.querySelector("." + prefix + "-button");
    if (null === buttonElement) {
        return;
    }

    buttonElement.addEventListener("click", disableClick);
    var versionElement = document.querySelector("." + prefix + "-version");
    versionElement.innerHTML = "Ładowanie…";
    var dateElement = document.querySelector("." + prefix + "-date");

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

if (null === document.querySelector(".button-container--list")) {
    addButtonInfo("https://api.github.com/repos/wulkanowy/wulkanowy/releases/latest", "beta",
        function(res, button, version, date) {
            var json = JSON.parse(res.responseText);
            button.href = json.assets[0].browser_download_url;
            version.innerHTML = "v" + json.name;
            date.innerHTML = new Date(json.published_at).toLocaleString("pl-PL");
        }
    );

    addButtonInfo("https://bitrise-redirector.herokuapp.com/v0.1/apps/daeff1893f3c8128/builds/master/artifacts/0/info", "dev",
        function(res, button, version, date) {
            if (null !== document.querySelector(".button-container--list")) return;
            var json = JSON.parse(res.responseText);
            version.innerHTML = "Build " + json.build_number;
            date.innerHTML = new Date(json.finished_at).toLocaleString("pl-PL");
        }
    );
}

(function (d) {
    var list = d.querySelector(".button-container--list");
    var base = d.querySelector(".button-container--list .button");
    if (null === base) return;

    var baseCopy = base.cloneNode(true);
    base.style.display = "none";

    var res = new XMLHttpRequest();
    res.open("GET", "https://api.github.com/repos/wulkanowy/wulkanowy/branches", true);
    res.onloadend = function () {
        if(res.status === 200) {
            JSON.parse(res.responseText).forEach(function (item) {
                if ("master" === item.name) return;

                var url = "https://bitrise-redirector.herokuapp.com/v0.1/apps/daeff1893f3c8128/builds/" + item.name + "/artifacts/0";


                var branch = baseCopy.cloneNode(true);
                branch.href = url;
                branch.innerText = item.name;

                var button_info = d.createElement("p");
                button_info.setAttribute("class", "button__info");

                var button_version = d.createElement("span");
                button_version.setAttribute("class", "dev-version");

                var button_date = d.createElement("span");
                button_date.setAttribute("class", "dev-date");

                button_info.appendChild(button_version);
                button_info.appendChild(button_date);

                addButtonInfo(url + "/info", "dev", function(res) {
                    var json = JSON.parse(res.responseText);
                    button_version.innerHTML = "Build " + json.build_number;
                    button_date.innerHTML = new Date(json.finished_at).toLocaleString("pl-PL");
                });
                branch.appendChild(button_info);
                list.appendChild(branch);
            })
        }
    };
    res.send(null);

})(document);
