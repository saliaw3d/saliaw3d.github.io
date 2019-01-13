//Capture middle mouse on images
function MagicButton(event) {
    var miceClicks = event.button;
    var url = event.target.currentSrc;

    if (miceClicks == 1) {
        window.open(url, '_blank');
    };
}