import { _decorator, Component, Node, UIDocument, UICanvas, UISystem, HorizontalAlignment, VerticalAlignment, Grid, UniformGrid, Texture2D, Image, UIBrush, Anchors, Vec2, Color, Thickness } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('canvas')
export class canvas extends Component {

    @property(Texture2D)
    stretch: Texture2D | null = null;

    @property(Texture2D)
    positioning: Texture2D | null = null;


    start() {
        const document = new UIDocument();
        UISystem.instance.addDocument(document);
        const uniformGrid = new UniformGrid(); 
        const uniformGridLayout = document.window.addChild(uniformGrid);
        uniformGridLayout.horizontalAlignment = HorizontalAlignment.STRETCH;
        uniformGridLayout.verticalAlignment = VerticalAlignment.STRETCH;

        const canvas = new UICanvas();
        const canvasLayout = uniformGrid.addChild(canvas);

        canvasLayout.margin = new Thickness(100, 150, 100, 150);
        canvasLayout.column = 0;
        canvasLayout.horizontalAlignment = HorizontalAlignment.STRETCH;
        canvasLayout.verticalAlignment = VerticalAlignment.STRETCH;

        const image = new Image();
        image.source = new UIBrush(null, new Color(255, 0, 0, 255));
        const imageLayout = canvas.addChild(image);
        imageLayout.anchors = Anchors.BOTH_STRETCH;

        const horizontalImage = new Image();
        horizontalImage.source = new UIBrush(null, new Color(255, 255, 255, 255));
        const horizontalImageLayout = canvas.addChild(horizontalImage);
        horizontalImageLayout.anchors = Anchors.CENTER_STRETCH;
        horizontalImageLayout.offsets = new Thickness(0, -35, 0, 70);
        horizontalImageLayout.pivot = new Vec2(0.5, 0);

        const verticalImage = new Image();
        verticalImage.source = new UIBrush(null, new Color(255, 255, 255, 255));
        const verticalImageLayout = canvas.addChild(verticalImage);
        verticalImageLayout.anchors = Anchors.STRETCH_CENTER;
        verticalImageLayout.offsets = new Thickness(-35, 0, 70, 0);
        verticalImageLayout.pivot = new Vec2(0, 0.5);

        const labelImage = new Image();
        labelImage.source = new UIBrush(this.stretch);
        const labelImageLayout = canvas.addChild(labelImage);
        labelImageLayout.anchors = Anchors.CENTER_STRETCH;
        labelImageLayout.pivot = new Vec2(0.5, 0);
        labelImageLayout.offsets = new Thickness(0, -this.stretch.height / 2, 0, this.stretch.height);

        const canvas1 = new UICanvas();
        const canvasLayout1 = uniformGrid.addChild(canvas1);

        canvasLayout1.column = 1;
        canvasLayout1.margin = new Thickness(100, 150, 100, 150);
        canvasLayout1.horizontalAlignment = HorizontalAlignment.STRETCH;
        canvasLayout1.verticalAlignment = VerticalAlignment.STRETCH;

        const backgroundImage = new Image();
        backgroundImage.source = new UIBrush(null, new Color(0, 0, 255, 255));
        const backgroundImageLayout = canvas1.addChild(backgroundImage);
        backgroundImageLayout.anchors = Anchors.BOTH_STRETCH;

        const positioningImage = new Image();
        positioningImage.source = new UIBrush(this.positioning);
        const positionImageLayout = canvas1.addChild(positioningImage);
        positionImageLayout.anchors = Anchors.CENTER_CENTER;
        positionImageLayout.pivot = new Vec2(0.5, 0.5);
        positionImageLayout.offsets = new Thickness(0, 0, this.positioning.width / 2, this.positioning.height / 2);

        const positioningImage1 = new Image();
        positioningImage1.source = new UIBrush(this.positioning);
        const positioningImage1Layout = canvas1.addChild(positioningImage1);
        positioningImage1Layout.anchors = Anchors.TOP_LEFT;
        positioningImage1Layout.offsets = new Thickness(0, 0, this.positioning.width / 2, this.positioning.height / 2);

        const positioningImage2 = new Image();
        positioningImage2.source = new UIBrush(this.positioning);
        const positioningImage2Layout = canvas1.addChild(positioningImage2);
        positioningImage2Layout.anchors = Anchors.BOTTOM_RIGHT;
        positioningImage2Layout.offsets = new Thickness(0, 0, this.positioning.width / 2, this.positioning.height / 2);
        positioningImage2Layout.pivot = new Vec2(1, 1);
    }

    update(deltaTime: number) {
        
    }
}


