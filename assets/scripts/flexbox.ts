import { _decorator, Component, Texture2D, Image, Vec2, UIBrush, UICanvas, UISystem, UIDocument, Node, Anchors, UniformGrid, VerticalBox, Thickness, HorizontalBox, VerticalAlignment } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('flexbox')
export class flexbox extends Component {
    @property(Texture2D)
    background: Texture2D | null = null;

    @property([Texture2D])
    items: Texture2D[] = [];

    start() {
        const document = new UIDocument();
        UISystem.instance.addDocument(document);

        const canvas = new UICanvas();
        document.window.addChild(canvas);

        const backgroundImage = new Image(new UIBrush(this.background));
        const backgroundImageLayout = canvas.addChild(backgroundImage);
        backgroundImageLayout.anchors = Anchors.BOTH_STRETCH;
        backgroundImageLayout.pivot = new Vec2(0.5, 0.5);

        const uniformGrid = new UniformGrid();
        const uniformGridLayout = canvas.addChild(uniformGrid);
        uniformGridLayout.anchors = Anchors.BOTH_STRETCH;
        uniformGridLayout.offsets = new Thickness(20);
        uniformGridLayout.pivot = new Vec2(0.5, 0.5);

        const verticalBox1 = new VerticalBox();
        const verticalBoxLayout = uniformGrid.addChild(verticalBox1);
        verticalBoxLayout.verticalAlignment = VerticalAlignment.STRETCH;

        for (let i = 0; i < this.items.length; i++) {
            const image = new Image(new UIBrush(this.items[i]));
            const imageLayout = verticalBox1.addChild(image);
        }
        

        const verticalBox2 = new VerticalBox();
        const verticalBox2Layout = uniformGrid.addChild(verticalBox2);
        verticalBox2Layout.column = 1;
        verticalBox2Layout.verticalAlignment = VerticalAlignment.STRETCH;
        for (let i = 0; i < this.items.length; i++) {
            const image = new Image(new UIBrush(this.items[i]));
            const imageLayout = verticalBox2.addChild(image);
            imageLayout.verticalAlignment = VerticalAlignment.STRETCH;
            imageLayout.grow = 1;
        }

        const verticalBox3 = new VerticalBox();
        const verticalBox3Layout = uniformGrid.addChild(verticalBox3);
        verticalBox3Layout.column = 2;
        verticalBox3Layout.verticalAlignment = VerticalAlignment.STRETCH;
        for (let i = 0; i < this.items.length; i++) {
            const image = new Image(new UIBrush(this.items[i]));
            const imageLayout = verticalBox3.addChild(image);
            imageLayout.verticalAlignment = VerticalAlignment.STRETCH;
            imageLayout.shrink = 0;
            if (i === this.items.length - 1) {
                imageLayout.grow = 1;
                imageLayout.shrink = 1;
            }
        }
        
    }

    update(deltaTime: number) {
        
    }
}


