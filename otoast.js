var otoast = {
    init: function () {
        var s = document.createElement("style");
        s.innerHTML = ".otoast { margin-bottom:5px; margin-right:5px; right:0px; padding:15px; bottom:0px; max-width: 350px; box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12) } #otoast-wrapper{position: fixed; right: 0px; bottom: 0px; height: auto; min-width: 350px; } .success{ background-color:#28a745; color:#fff; } .error { background-color:#dc3545; color:#fff; } .warning{ background-color:#ffc107; color:#fff; } .info{background-color: #17a2b8; color:#fff;}";
        document.getElementsByTagName("head")[0].appendChild(s);

        var toastWrapper = document.createElement("div");
        toastWrapper.id = "otoast-wrapper";
        document.getElementsByTagName("body")[0].appendChild(toastWrapper);
    },
    toast: function (message, time, className) {
        if (time === undefined) {
            time = 3000;
        }
        if (className === undefined) {
            className = "";
        }
        var node = document.createElement("div");
        node.className = "otoast " + className;
        var str = message;
        node.innerHTML = str;
        document.getElementById("otoast-wrapper").appendChild(node);

        setTimeout(function () {
            document.getElementById("otoast-wrapper").removeChild(node);
        }, time);

    },
    success: function (message, time) {
        this.toast(message, time, "success");
    },
    warning: function (message, time) {
        this.toast(message, time, "warning");
    },
    info: function (message, time) {
        this.toast(message, time, "info");
    },
    error: function (message, time) {
        this.toast(message, time, "error");
    }


};
otoast.init();
