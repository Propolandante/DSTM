function Button(x, y, width, height, scriptObj) {

	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.elem = scriptObj;

	if (this.elem != null) {
		this.id = this.elem.Identifier;
		this.str = this.elem.String;
		this.isEndOfTopic;
		this.type = null;
		if (this.elem.End === "TRUE") {
			this.isEndOfTopic = true;
		} else {
			this.isEndOfTopic = false;
		}
		this.hover = false;

		var regex = /([)A-Z]+_+[0-9]+_+([A-Z]+))+_+([A-Z])/g;
		var match = regex.exec(this.id);
		this.tag = match[1];
		console.log("match: " + match[1]);
		var group2 = match[2];
		if (group2 == "TALK" || group2 == "RES") {
			this.type = "choice";
		}
	}
}
