import { _decorator, Component, Texture2D, Node, Image, UIDocument, UISystem, UniformGrid, HorizontalAlignment, VerticalAlignment, UIBrush, Color, Thickness, Border, UICanvas, Anchors, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('alignment')
export class alignment extends Component {
    @property(Texture2D)
    background: Texture2D | null = null;

    @property(Texture2D)
    rectTexture: Texture2D | null = null;

    @property(Texture2D)
    contentTexture: Texture2D | null = null;

    @property(Texture2D)
    bannerTexture: Texture2D | null = null;

    start() {
        const document = new UIDocument();
        UISystem.instance.addDocument(document);
        const canvas = new UICanvas();
        document.window.addChild(canvas);
        
        const background = new Image(new UIBrush(this.background));
        const backgroundLayout = canvas.addChild(background);
        backgroundLayout.anchors = Anchors.BOTH_STRETCH;
        backgroundLayout.useAutoSize = true;
        backgroundLayout.pivot = new Vec2(0.5, 0.5);

        const banner = new Border()
        banner.background = new UIBrush(null, new Color(0, 0, 0, 0));
        const bannerLayout = canvas.addChild(banner);
        bannerLayout.anchors = Anchors.BOTTOM_STRETCH;
        bannerLayout.offsets = new Thickness(0, 0, 0, 100);
        bannerLayout.pivot = new Vec2(0.5, 1);

        const image = new Image(new UIBrush(this.bannerTexture));
        const imageLayout = banner.addChild(image);
        imageLayout.horizontalAlignment = HorizontalAlignment.STRETCH;
        imageLayout.verticalAlignment = VerticalAlignment.STRETCH;

        
        const uniformGrid = new UniformGrid(); 
        const uniformGridLayout = canvas.addChild(uniformGrid);
        uniformGridLayout.anchors = Anchors.BOTH_STRETCH;
        uniformGridLayout.useAutoSize = true;
        uniformGridLayout.pivot = new Vec2(0.5, 0.5);

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const border = new Border();
                border.background = new UIBrush(this.rectTexture);
                const borderLayout = uniformGrid.addChild(border);
                borderLayout.margin = new Thickness(5);
                borderLayout.horizontalAlignment = HorizontalAlignment.STRETCH;
                borderLayout.verticalAlignment = VerticalAlignment.STRETCH;
                borderLayout.row = i;
                borderLayout.column = j;

                const image = new Image(new UIBrush(this.contentTexture));
                const imageLayout = border.addChild(image);
                imageLayout.horizontalAlignment = j;
                imageLayout.verticalAlignment = i;
            }
        }
    }

    update(deltaTime: number) {
        
    }
}


