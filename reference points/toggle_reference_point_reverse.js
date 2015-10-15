if (app.activeWindow.transformReferencePoint == AnchorPoint.BOTTOM_RIGHT_ANCHOR) {
	app.activeWindow.transformReferencePoint = AnchorPoint.BOTTOM_CENTER_ANCHOR;
} else if (app.activeWindow.transformReferencePoint == AnchorPoint.BOTTOM_CENTER_ANCHOR) {
	app.activeWindow.transformReferencePoint = AnchorPoint.BOTTOM_LEFT_ANCHOR;
} else if (app.activeWindow.transformReferencePoint == AnchorPoint.BOTTOM_LEFT_ANCHOR) {
	app.activeWindow.transformReferencePoint = AnchorPoint.RIGHT_CENTER_ANCHOR;
} else if (app.activeWindow.transformReferencePoint == AnchorPoint.RIGHT_CENTER_ANCHOR) {
	app.activeWindow.transformReferencePoint = AnchorPoint.CENTER_ANCHOR;
} else if (app.activeWindow.transformReferencePoint == AnchorPoint.CENTER_ANCHOR) {
	app.activeWindow.transformReferencePoint = AnchorPoint.LEFT_CENTER_ANCHOR;
} else if (app.activeWindow.transformReferencePoint == AnchorPoint.LEFT_CENTER_ANCHOR) {
	app.activeWindow.transformReferencePoint = AnchorPoint.TOP_RIGHT_ANCHOR;
} else if (app.activeWindow.transformReferencePoint == AnchorPoint.TOP_RIGHT_ANCHOR) {
	app.activeWindow.transformReferencePoint = AnchorPoint.TOP_CENTER_ANCHOR;
} else if (app.activeWindow.transformReferencePoint == AnchorPoint.TOP_CENTER_ANCHOR) {
	app.activeWindow.transformReferencePoint = AnchorPoint.TOP_LEFT_ANCHOR;
} else if (app.activeWindow.transformReferencePoint == AnchorPoint.TOP_LEFT_ANCHOR) {
	app.activeWindow.transformReferencePoint = AnchorPoint.BOTTOM_RIGHT_ANCHOR;
}