import { _decorator, UISystem, Image, Texture2D, Component, RenderMode, Node, UIDocument, UIRuntimeDocumentSettings, UIBrush, Vec3, Thickness, HorizontalAlignment } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('render_mode')
export class render_mode extends Component {
    @property(Texture2D)
    worldSpaceTexture: Texture2D | null = null;

    @property(Texture2D)
    screenSpaceTexture: Texture2D | null = null;

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
        const image2 = new Image();
        image2.source = new UIBrush(this.screenSpaceTexture);
        const image2Layout = spaceSpaceDocument.window.addChild(image2);
        image2Layout.horizontalAlignment = HorizontalAlignment.LEFT;
        image2Layout.margin = new Thickness(0, 0, 0, 0);

        
    }

    update(deltaTime: number) {
        this.node.eulerAngles = new Vec3(this.node.eulerAngles.x, this.node.eulerAngles.y + 1, this.node.eulerAngles.z)
    }
}

