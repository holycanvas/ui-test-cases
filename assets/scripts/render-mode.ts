import { _decorator, UISystem, Image, Texture2D, Component, UICanvas, RenderMode, Node, UIDocument, UIRuntimeDocumentSettings, UIBrush, Vec3, Thickness, HorizontalAlignment, Anchors, Vec2, UniformGrid, Border } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('render_mode')
export class render_mode extends Component {
    @property(Texture2D)
    worldSpaceTexture: Texture2D | null = null;

    @property(Texture2D)
    screenSpaceTexture: Texture2D | null = null;

    @property(Texture2D)
    rectTexture: Texture2D | null = null;

    @property([Texture2D])
    items: Texture2D[] = [];

    start() {
        const worldDocument = new UIDocument();
        const settings = new UIRuntimeDocumentSettings();
        settings.width = 960;
        settings.height = 640;
        settings.renderMode = RenderMode.WORLD_SPACE;
        settings.worldSpaceTarget = this.node;
        worldDocument.settings = settings;
        UISystem.instance.addDocument(worldDocument);

        const image = new Image();
        image.source = new UIBrush(this.worldSpaceTexture);
        worldDocument.window.addChild(image);

        const spaceSpaceDocument = new UIDocument();
        UISystem.instance.addDocument(spaceSpaceDocument);

        const canvas = new UICanvas();
        const canvasLayout = spaceSpaceDocument.window.addChild(canvas);
        canvasLayout.horizontalAlignment = HorizontalAlignment.LEFT;

        const image2Layout = canvas.addChild(new Image(new UIBrush(this.screenSpaceTexture)))
        image2Layout.anchors = Anchors.BOTH_STRETCH;
        image2Layout.pivot = new Vec2(0.5, 0.5);

        const border = new Border();
        const borderLayout = canvas.addChild(border);
        borderLayout.anchors = Anchors.CENTER_STRETCH;
        borderLayout.pivot = new Vec2(0.5, 0.5);
        borderLayout.offsets = new Thickness(10, 0, 10, 50);
        borderLayout.useAutoSize = true;
        border.background = new UIBrush(this.rectTexture);

        const uniformGrid = new UniformGrid();
        uniformGrid.cellPadding = new Thickness(5);
        const uniformGridLayout = border.addChild(uniformGrid);
        uniformGridLayout.margin = new Thickness(5);
        

        for (let i = 0; i < this.items.length; i++) {
            const image = new Image(new UIBrush(this.items[i]));
            const imageLayout = uniformGrid.addChild(image);
            imageLayout.row = Math.floor(i / 3);
            imageLayout.column = i % 3;
        }
    }

    update(deltaTime: number) {
        // this.node.eulerAngles = new Vec3(this.node.eulerAngles.x, this.node.eulerAngles.y + 1, this.node.eulerAngles.z)
    }
}

