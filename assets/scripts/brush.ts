import { _decorator, Component, Node, Texture2D, Material, Vec4, UIDocument, UISystem, UniformGrid, Image, UIBrush, HorizontalAlignment, VerticalAlignment, Thickness, Color } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('brush')
export class brush extends Component {

    @property({type: Texture2D})
    texture: Texture2D | null = null;

    @property
    public batch = false;

    @property({
        type: Material
    })
    public material : Material = null!;

    start() {
        const document = new UIDocument();
        UISystem.instance.addDocument(document);
        const uniformGrid = new UniformGrid();
        const uniformGridLayout = document.window.addChild(uniformGrid);
        uniformGridLayout.verticalAlignment = VerticalAlignment.STRETCH;
        uniformGridLayout.horizontalAlignment = HorizontalAlignment.STRETCH;
        uniformGridLayout.margin = new Thickness( 250, 90, 250, 90);

        uniformGrid.cellPadding = new Thickness(5, 5, 5, 5);;

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                const image = new Image();
                const imageIndex = (i * 4 + j) % 3;
                let brush;
                if (this.batch) {
                    brush = new UIBrush(this.texture)
                } else {
                    brush = imageIndex === 0 ? new UIBrush() : imageIndex === 1 ? new UIBrush(this.texture) : new UIBrush(this.material); 
                }
                image.source = brush;
                // image.tintColor = new Color(176, 94, 172, 255);
                const imageLayout = uniformGrid.addChild(image);
                imageLayout.horizontalAlignment = HorizontalAlignment.STRETCH;
                imageLayout.verticalAlignment = VerticalAlignment.STRETCH;
                imageLayout.column = i;
                imageLayout.row = j;
            }
        }
    }

    update(deltaTime: number) {
        
    }
}

