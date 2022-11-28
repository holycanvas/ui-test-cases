import { _decorator, Component, Texture2D, Border, Thickness, UniformGrid, Image, Vec2, UIBrush, Anchors, UISystem, UICanvas, Node, UIDocument, HorizontalAlignment, VerticalAlignment } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('auto_size')
export class auto_size extends Component {
    @property(Texture2D)
    background: Texture2D | null = null;

    @property(Texture2D)
    rectTexture: Texture2D | null = null;

    @property(Texture2D)
    item: Texture2D | null = null;

    private itemNum = 0;
    private uniformGrid: UniformGrid = null;

    start() {
        const document = new UIDocument();
        UISystem.instance.addDocument(document);
        const canvas = new UICanvas();
        document.window.addChild(canvas);
        const border1 = new Border();
        const border1Layout = canvas.addChild(border1);
        border1Layout.anchors = Anchors.CENTER_CENTER;
        border1Layout.offsets = new Thickness(0, 0, this.background.width, this.background.height);
        border1Layout.pivot = new Vec2(0.5, 0.5);
        border1.background = new UIBrush(this.background);

        const border = new Border();
        const borderLayout = border1.addChild(border);
        borderLayout.margin = new Thickness(0, 100, 0, 100);
        borderLayout.horizontalAlignment = HorizontalAlignment.CENTER;
        borderLayout.verticalAlignment = VerticalAlignment.CENTER;
  
        border.background = new UIBrush(this.rectTexture);

        const uniformGrid = this.uniformGrid = new UniformGrid();
        uniformGrid.cellPadding = new Thickness(5);
        const uniformGridLayout = border.addChild(uniformGrid);
        uniformGridLayout.margin = new Thickness(5);
        this.schedule(this.addImage, 1, 31, 0);

    }

    addImage () {
        const image = new Image(new UIBrush(this.item));
        const imageLayout = this.uniformGrid.addChild(image);
        imageLayout.row = Math.floor(this.itemNum / 4);
        imageLayout.column = this.itemNum % 4;
        this.itemNum++;
    }
}

