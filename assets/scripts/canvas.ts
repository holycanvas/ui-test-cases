import { _decorator, Component, Node, UIDocument, UICanvas, UISystem, HorizontalAlignment, VerticalAlignment, Grid, UniformGrid, Texture2D, Image, UIBrush, Anchors, Vec2, Color, Thickness, VerticalBox } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('canvas')
export class canvas extends Component {

    @property(Texture2D)
    stretch: Texture2D | null = null;

    @property(Texture2D)
    background: Texture2D | null = null;

    @property(Texture2D)
    positioning: Texture2D | null = null;


    start() {
        const document = new UIDocument();
        UISystem.instance.addDocument(document);

        const canvas = new UICanvas();
        document.window.addChild(canvas);

        const backgroundImage = new Image(new UIBrush(this.background));
        const backgroundImageLayout = canvas.addChild(backgroundImage);
        backgroundImageLayout.anchors = Anchors.BOTH_STRETCH;
        backgroundImageLayout.pivot = new Vec2(0.5, 0.5);

        const horizontalImage = new Image(new UIBrush(this.stretch));
        const horizontalImageLayout = canvas.addChild(horizontalImage);
        horizontalImageLayout.anchors = Anchors.TOP_STRETCH;
        horizontalImageLayout.useAutoSize = true;
        horizontalImageLayout.pivot = new Vec2(0.5, 0);

        const labelImage = new Image();
        labelImage.source = new UIBrush(this.stretch);
        const labelImageLayout = canvas.addChild(labelImage);
        labelImageLayout.anchors = Anchors.BOTTOM_STRETCH;
        labelImageLayout.pivot = new Vec2(0.5, 1);
        labelImageLayout.useAutoSize = true;

        const positioningImage = new Image();
        positioningImage.source = new UIBrush(this.positioning);
        const positionImageLayout = canvas.addChild(positioningImage);
        positionImageLayout.anchors = Anchors.TOP_LEFT;
        positionImageLayout.useAutoSize = true;
        positionImageLayout.offsets = new Thickness(20, 40, 0, 0);

        const positioningImage1 = new Image();
        positioningImage1.source = new UIBrush(this.positioning);
        const positioningImage1Layout = canvas.addChild(positioningImage1);
        positioningImage1Layout.anchors = Anchors.TOP_LEFT;
        positioningImage1Layout.useAutoSize = true;
        positioningImage1Layout.offsets = new Thickness(80, 40, 0, 0);

        const positioningImage2 = new Image();
        positioningImage2.source = new UIBrush(this.positioning);
        const positioningImage2Layout = canvas.addChild(positioningImage2);
        positioningImage2Layout.anchors = Anchors.TOP_LEFT;
        positioningImage2Layout.useAutoSize = true;
        positioningImage2Layout.offsets = new Thickness(140, 40, 0, 0);
    }

    update(deltaTime: number) {
        
    }
}


