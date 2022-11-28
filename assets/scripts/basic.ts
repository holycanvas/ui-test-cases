import { _decorator, Component, Node, Color, UIDocument, UICanvas, HorizontalAlignment, VerticalAlignment, Image, UIBrush, Texture2D, Anchors, Thickness, Vec2, UISystem, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('basic')
export class basic extends Component {

    @property(Texture2D)
    leftBottomTexture: Texture2D | null = null;

    @property(Texture2D)
    leftTexture: Texture2D | null = null;

    @property(Texture2D)
    leftTopTexture: Texture2D | null = null;

    @property(Texture2D)
    topTexture: Texture2D | null = null;

    @property(Texture2D)
    rightTopTexture: Texture2D | null = null;

    @property(Texture2D)
    rightTexture: Texture2D | null = null;

    @property(Texture2D)
    rightBottomTexture: Texture2D | null = null;

    @property(Texture2D)
    bottomTexture: Texture2D | null = null;

    @property(Texture2D)
    centerTexture: Texture2D | null = null;

    @property(Texture2D)
    backgroundTexture: Texture2D | null = null;

    @property(Texture2D)
    buttonTexture: Texture2D | null = null;


    start() {
        const document = new UIDocument();
        UISystem.instance.addDocument(document);
        const canvas = new UICanvas();
        const canvasLayout = document.window.addChild(canvas);
        canvasLayout.horizontalAlignment = HorizontalAlignment.CENTER;
        canvasLayout.verticalAlignment = VerticalAlignment.CENTER;

        const background = new Image();
        background.source = new UIBrush(this.backgroundTexture);
        const backgroundLayout = canvas.addChild(background);
        backgroundLayout.anchors = Anchors.BOTH_STRETCH;
        backgroundLayout.pivot = new Vec2(0.5, 0.5);

        const leftTopImage = new Image();
        leftTopImage.source = new UIBrush(this.leftTopTexture);
        const leftTopImageLayout = canvas.addChild(leftTopImage);
        leftTopImageLayout.anchors = Anchors.TOP_LEFT;
        leftTopImageLayout.useAutoSize = true;

        const topImage = new Image();
        topImage.source = new UIBrush(this.topTexture);
        const topImageLayout = canvas.addChild(topImage);
        topImageLayout.anchors = Anchors.TOP_CENTER;
        topImageLayout.useAutoSize = true;
        topImageLayout.pivot = new Vec2(0.5, 0);

        const rightTopImage = new Image();
        rightTopImage.source = new UIBrush(this.rightTopTexture);
        const rightTopImageLayout = canvas.addChild(rightTopImage);
        rightTopImageLayout.anchors = Anchors.TOP_RIGHT;
        rightTopImageLayout.useAutoSize = true;
        rightTopImageLayout.pivot = new Vec2(1, 0);

        const rightImage = new Image();
        rightImage.source = new UIBrush(this.rightTexture);
        const rightImageLayout = canvas.addChild(rightImage);
        rightImageLayout.anchors = Anchors.CENTER_RIGHT;
        rightImageLayout.useAutoSize = true;
        rightImageLayout.pivot = new Vec2(1, 0.5);

        const rightBottomImage = new Image();
        rightBottomImage.source = new UIBrush(this.rightBottomTexture);
        const rightBottomImageLayout = canvas.addChild(rightBottomImage);
        rightBottomImageLayout.anchors = Anchors.BOTTOM_RIGHT;
        rightBottomImageLayout.useAutoSize = true;
        rightBottomImageLayout.pivot = new Vec2(1, 1);


        const centerBottomImage = new Image();
        centerBottomImage.source = new UIBrush(this.bottomTexture);
        const centerBottomImageLayout = canvas.addChild(centerBottomImage);
        centerBottomImageLayout.anchors = Anchors.BOTTOM_CENTER;
        centerBottomImageLayout.useAutoSize = true;
        centerBottomImageLayout.pivot = new Vec2(0.5, 1);

        const leftBottomImage = new Image();
        leftBottomImage.source = new UIBrush(this.leftBottomTexture);
        const leftBottomImageLayout = canvas.addChild(leftBottomImage);
        leftBottomImageLayout.anchors = Anchors.BOTTOM_LEFT;
        leftBottomImageLayout.useAutoSize = true;
        leftBottomImageLayout.pivot = new Vec2(0, 1);

        const leftImage = new Image();
        leftImage.source = new UIBrush(this.leftTexture);
        const leftImageLayout = canvas.addChild(leftImage);
        leftImageLayout.anchors = Anchors.CENTER_LEFT;
        leftImageLayout.useAutoSize = true;
        leftImageLayout.pivot = new Vec2(0, 0.5);

        const centerImage = new Image();
        centerImage.source = new UIBrush(this.centerTexture);
        const centerImageLayout = canvas.addChild(centerImage);
        centerImageLayout.anchors = Anchors.CENTER_CENTER;
        centerImageLayout.useAutoSize = true;
        centerImageLayout.pivot = new Vec2(0.5, 0.5);
    }

    update(deltaTime: number) {
        
    }
}

