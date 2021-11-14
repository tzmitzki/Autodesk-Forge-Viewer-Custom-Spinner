# Autodesk Forge Viewer - Custom Spinner Extension
Custom spinner for loading models in Autodesk Forge Viewer version 7.*

Replaces the original Autodesk spinner

## How to use:

### Add to the code
- include the customSpinnerExt.js file into your project and reference it in the head section of your main html file.

- load the extension into the forge viewer as early as possible (set an event listener during the initialisation of the viewer)

  `viewer.addEventListener(
    Autodesk.Viewing.MODEL_ROOT_LOADED_EVENT, () => {
      viewer.loadExtension('CustomSpinnerExtension');
    })`
  
 ### Customize the spinner
 
- Add anything inside the innerHTML of the spinner and style it with css. Use the initial spinner.css file in the repo as a reference 
 
  `spinner.innerHTML = '<div class="loader"></div>LOADING...';`

