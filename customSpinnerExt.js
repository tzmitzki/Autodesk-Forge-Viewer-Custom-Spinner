class CustomSpinnerExtension extends Autodesk.Viewing.Extension {
    load(){
        const replaceSpinnerCallback = () => {
            this._replaceSpinner()
        };
        this.viewer.addEventListener(Autodesk.Viewing.LOADER_LOAD_FILE_EVENT, replaceSpinnerCallback);
        return true;
    }

    unload(){
        return true;
    }
    _replaceSpinner(){
        var spinners = document.getElementsByClassName("forge-spinner");
        if (spinners.length == 0) return;
        var spinner = spinners[0];
        spinner.classList.remove("forge-spinner");
        spinner.classList.add('loaderContainer');
        spinner.innerHTML = '<div class="loader"></div>LOADING...';
    }
}

Autodesk.Viewing.theExtensionManager.registerExtension('CustomSpinnerExtension', CustomSpinnerExtension);
