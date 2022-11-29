import { _decorator, Component, Node, Color, UIDocument, UICanvas, HorizontalAlignment, VerticalAlignment, Image, UIBrush, Texture2D, Anchors, Thickness, Vec2, UISystem, Vec3, Border } from 'cc';
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

        const leftTop = new Border();
        leftTop.background = new UIBrush(this.buttonTexture);
        const leftTopLayout = canvas.addChild(leftTop);
        leftTopLayout.anchors = Anchors.TOP_LEFT;
        leftTopLayout.useAutoSize = true;

        const leftTopImage = new Image();
        leftTopImage.source = new UIBrush(this.leftTopTexture);
        const leftTopImageLayout = leftTop.addChild(leftTopImage);
        leftTopImageLayout.margin = new Thickness(20);


        const top = new Border();
        top.background = new UIBrush(this.buttonTexture);
        const topLayout = canvas.addChild(top);
        topLayout.anchors = Anchors.TOP_CENTER;
        topLayout.pivot = new Vec2(0.5, 0);
        topLayout.useAutoSize = true;
        
        const topImage = new Image();
        topImage.source = new UIBrush(this.topTexture);
        const topImageLayout = top.addChild(topImage);
        topImageLayout.margin = new Thickness(20);

        const rightTop = new Border();
        rightTop.background = new UIBrush(this.buttonTexture);
        const rightTopLayout = canvas.addChild(rightTop);
        rightTopLayout.anchors = Anchors.TOP_RIGHT;
        rightTopLayout.useAutoSize = true;
        rightTopLayout.pivot = new Vec2(1, 0);

        const rightTopImage = new Image();
        rightTopImage.source = new UIBrush(this.rightTopTexture);
        const rightTopImageLayout = rightTop.addChild(rightTopImage);
        rightTopImageLayout.margin = new Thickness(20);

        const right = new Border();
        right.background = new UIBrush(this.buttonTexture);
        const rightLayout = canvas.addChild(right);
        rightLayout.anchors = Anchors.CENTER_RIGHT;
        rightLayout.useAutoSize = true;
        rightLayout.pivot = new Vec2(1, 0.5);

        const rightImage = new Image();
        rightImage.source = new UIBrush(this.rightTexture);
        const rightImageLayout = right.addChild(rightImage);
        rightImageLayout.margin = new Thickness(20);
        

        const rightBottom = new Border();
        rightBottom.background = new UIBrush(this.buttonTexture);
        const rightBottomLayout = canvas.addChild(rightBottom);
        rightBottomLayout.anchors = Anchors.BOTTOM_RIGHT;
        rightBottomLayout.useAutoSize = true;
        rightBottomLayout.pivot = new Vec2(1, 1);
        const rightBottomImage = new Image();
        rightBottomImage.source = new UIBrush(this.rightBottomTexture);
        const rightBottomImageLayout = rightBottom.addChild(rightBottomImage);
        rightBottomImageLayout.margin = new Thickness(20);
        

        const bottom = new Border();
        bottom.background = new UIBrush(this.buttonTexture);
        const bottomLayout = canvas.addChild(bottom);
        bottomLayout.anchors = Anchors.BOTTOM_CENTER;
        bottomLayout.useAutoSize = true;
        bottomLayout.pivot = new Vec2(0.5, 1);

        const centerBottomImage = new Image();
        centerBottomImage.source = new UIBrush(this.bottomTexture);
        const centerBottomImageLayout = bottom.addChild(centerBottomImage);
        centerBottomImageLayout.margin = new Thickness(20);


        const leftBottom = new Border();
        leftBottom.background = new UIBrush(this.buttonTexture);
        const leftBottomLayout = canvas.addChild(leftBottom);
        leftBottomLayout.anchors = Anchors.BOTTOM_LEFT;
        leftBottomLayout.useAutoSize = true;
        leftBottomLayout.pivot = new Vec2(0, 1);
        const leftBottomImage = new Image();
        leftBottomImage.source = new UIBrush(this.leftBottomTexture);
        const leftBottomImageLayout = leftBottom.addChild(leftBottomImage);
        leftBottomImageLayout.margin = new Thickness(20);


        const left = new Border();
        left.background = new UIBrush(this.buttonTexture);
        const leftLayout = canvas.addChild(left);
        leftLayout.anchors = Anchors.CENTER_LEFT;
        leftLayout.useAutoSize = true;
        leftLayout.pivot = new Vec2(0, 0.5);
        const leftImage = new Image();
        leftImage.source = new UIBrush(this.leftTexture);
        const leftImageLayout = left.addChild(leftImage);
        leftImageLayout.margin = new Thickness(20);


        const center = new Border();
        center.background = new UIBrush(this.buttonTexture);
        const centerLayout = canvas.addChild(center);
        centerLayout.anchors = Anchors.CENTER_CENTER;
        centerLayout.useAutoSize = true;
        centerLayout.pivot = new Vec2(0.5, 0.5);
        const centerImage = new Image();
        centerImage.source = new UIBrush(this.centerTexture);
        const centerImageLayout = center.addChild(centerImage);
        centerImageLayout.margin = new Thickness(20);

    }

    update(deltaTime: number) {
        
    }
}

