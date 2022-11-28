import { _decorator, Component, Node, Image, UIDocument, UISystem, UniformGrid, HorizontalAlignment, VerticalAlignment, UIBrush, Color, Thickness, Border } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('alignment')
export class alignment extends Component {
    start() {
        const document = new UIDocument();
        UISystem.instance.addDocument(document);
        const uniformGrid = new UniformGrid(); 
        const uniformGridLayout = document.window.addChild(uniformGrid);
        uniformGridLayout.margin = new Thickness(100, 100, 100, 100);
        uniformGridLayout.horizontalAlignment = HorizontalAlignment.STRETCH;
        uniformGridLayout.verticalAlignment = VerticalAlignment.STRETCH;

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                const border = new Border();
                border.background = UIBrush.WHITE;
                const borderLayout = uniformGrid.addChild(border);
                borderLayout.margin = new Thickness(5);
                borderLayout.horizontalAlignment = HorizontalAlignment.STRETCH;
                borderLayout.verticalAlignment = VerticalAlignment.STRETCH;
                borderLayout.row = i;
                borderLayout.column = j;

                const image = new Image();
                image.source = new UIBrush(null, Color.BLACK);
                const imageLayout = border.addChild(image);
                imageLayout.horizontalAlignment = j;
                imageLayout.verticalAlignment = i;
            }
        }
    }

    update(deltaTime: number) {
        
    }
}


