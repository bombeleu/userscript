// ==UserScript==


const NORMAL_KLASS = "";
const HOVER_KLASS = "yhover";
const HOVER_CSS = ".yhover {border: medium solid rgb(139,0,0);color:#000000; margin-top: 1em;margin-bottom: 1em;font-weight:bold;padding:2px;-moz-border-radius: 10px;-moz-opacity:0.9;}";

const KEY_UP = 38;
const KEY_ENTER = 13;
const KEY_G = 71;
		
		XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
		XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

	var searchField;
	if (document.layers)
		document.captureEvents(Event.FOCUS | Event.BLUR);

	var txtboxes = document.evaluate("//input[@type='text']", document, null,
		XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
	for (var i = 0; i < txtboxes.snapshotLength; i++) {
		var txtbox = txtboxes.snapshotItem (i);
		if (i == 0)
			searchField = txtbox;

		txtbox.addEventListener ('focus', function () { document.removeEventListener ('keydown', keypress_handler, true); }, true);
		txtbox.addEventListener ('blur', function () { document.addEventListener ('keydown', keypress_handler, true); }, true);
		}
		for (var lx=0,ly=0;el!=null;
			lx+=el.offsetLeft,ly+=el.offsetTop,el=el.offsetParent);
		return {x:lx,y:ly}
	}

	function highlight (pos) {
			if (pos == i) {
			else
				items [i].className = NORMAL_KLASS;
		case KEY_UP:
			if (index <= 0)
				index = items.length - 1;
			else
				index--;
			highlight (index);
			break;
		case KEY_DOWN:
			if (index >= items.length - 1)
				index = 0;
			else
				index++;
			highlight (index);
			break;
		case KEY_ENTER:
			if (index == -1)
				return false;
			else
				document.location = items[index].firstChild.getAttribute ("href");
			if (didYouMeanPath != null) {
			break;
		case KEY_G:
			if (groupSearchPath != null) {
		case KEY_H:
			alert(helpString);
			if (index == -1)
				return false;
			else
				window.open(items[index].firstChild.getAttribute ("href"));
			searchField.focus ();
		}


	document.addEventListener ('keydown', keypress_handler, true);

	var style = document.createElement ("style");
}) ();
