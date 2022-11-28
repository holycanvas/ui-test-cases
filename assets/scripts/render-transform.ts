import { _decorator, Component, Node, UIDocument, Texture2D, UISystem, UICanvas, HorizontalAlignment, VerticalAlignment, Image, UIBrush, Anchors, Thickness, Vec2, Vec3, sp } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('render_transform')
export class render_transform extends Component {
    @property(Texture2D)
    rotation: Texture2D | null = null;

    @property(Texture2D)
    translate: Texture2D | null = null;

    @property(Texture2D)
    scale: Texture2D | null = null;

    @property(Texture2D)
    shear: Texture2D | null = null;

    @property(Texture2D)
    noTransform: Texture2D | null = null;

    @property(Texture2D)
    pivot: Texture2D | null = null;

    @property(Texture2D)
    background: Texture2D | null = null;

    private _translateImage: Image | null = null;
    private _rotateImage: Image | null = null;
    private _rotateImage2: Image | null = null;
    private _scaleImage: Image | null = null;
    private _shearImage: Image | null = null;
    private _pivotImage: Image | null = null;
    private _xSpeed = 2;
    private _ySpeed = 3;
    private _shear = 0.01;
    private _scale = 0.01;
    private _eulerSpeed = 1;


    start() {
        const document = new UIDocument();
        UISystem.instance.addDocument(document);
        const canvas = new UICanvas();
        const canvasLayout = document.window.addChild(canvas);
        canvasLayout.horizontalAlignment = HorizontalAlignment.STRETCH;
        canvasLayout.verticalAlignment = VerticalAlignment.STRETCH;

        const background = new Image();
        background.source = new UIBrush(this.background);
        const backgroundLayout = canvas.addChild(background);
        backgroundLayout.anchors = Anchors.BOTH_STRETCH;
        backgroundLayout.offsets = new Thickness();
        backgroundLayout.pivot = new Vec2(0.5, 0.5);

        const noTransform = new Image();
        noTransform.source = new UIBrush(this.noTransform);
        const noTransformLayout = canvas.addChild(noTransform);
        noTransformLayout.anchors = new Anchors(0.5, 0.33, 0.5, 0.33);
        noTransformLayout.useAutoSize = true;
        noTransformLayout.pivot = new Vec2(0.5, 0.5);

        const pivot = this._pivotImage = new Image();
        pivot.source = new UIBrush(this.pivot);
        const pivotLayout = canvas.addChild(pivot);
        pivotLayout.anchors = new Anchors(0.5, 0.66, 0.5, 0.66);
        pivotLayout.useAutoSize = true;
        pivotLayout.pivot = new Vec2(0.5, 0.5);
        pivot.renderTransform.origin = new Vec2();

        const translateImage = this._translateImage = new Image();
        translateImage.source = new UIBrush(this.translate);
        const translateImageLayout = canvas.addChild(translateImage);
        translateImageLayout.anchors = new Anchors(0.25, 0.75, 0.25, 0.75);
        translateImageLayout.useAutoSize = true;
        translateImageLayout.pivot = new Vec2(0.5, 0.5);

        const rotateImage = this._rotateImage = new Image();
        rotateImage.source = new UIBrush(this.rotation);
        const rotateLayout = canvas.addChild(rotateImage);
        rotateLayout.anchors = new Anchors(0.25, 0.25, 0.25, 0.25);
        rotateLayout.useAutoSize = true;
        rotateLayout.pivot = new Vec2(0.5, 0.5);

        const rotateImage2 = this._rotateImage2 = new Image();
        rotateImage2.source = new UIBrush(this.rotation);
        const rotateLayout2 = canvas.addChild(rotateImage2);
        rotateLayout2.anchors = new Anchors(0.25, 0.50, 0.25, 0.50);
        rotateLayout2.useAutoSize = true;
        rotateLayout2.pivot = new Vec2(0.5, 0.5);

        const scaleImage = this._scaleImage = new Image();
        scaleImage.source = new UIBrush(this.scale);
        const scaleImageLayout = canvas.addChild(scaleImage);
        scaleImageLayout.anchors = new Anchors(0.75, 0.33, 0.75, 0.33);
        scaleImageLayout.useAutoSize = true;
        scaleImageLayout.pivot = new Vec2(0.5, 0.5);

        const shearImage = this._shearImage = new Image();
        shearImage.source = new UIBrush(this.shear);
        const shearImageLayout = canvas.addChild(shearImage);
        shearImageLayout.anchors = new Anchors(0.75, 0.66, 0.75, 0.66);
        shearImageLayout.useAutoSize = true;
        shearImageLayout.pivot = new Vec2(0.5, 0.5);
    }

    update(deltaTime: number) {
        const translation = this._translateImage.renderTransform.translation;
        const xSpeed = this._xSpeed = ((translation.x > 100 || translation.x < -100) ? -1 : 1) * this._xSpeed;
        const ySpeed = this._ySpeed = ((translation.y > 100 || translation.y < -100) ? -1 : 1) * this._ySpeed;
        this._translateImage.renderTransform.translation = new Vec3((translation.x + xSpeed), translation.y + ySpeed, translation.z);
        const eulerAngles = this._rotateImage.renderTransform.eulerAngles;
        this._rotateImage.renderTransform.eulerAngles = new Vec3(eulerAngles.x, eulerAngles.y + 1, eulerAngles.z);
        const eulerAngles2 = this._rotateImage2.renderTransform.eulerAngles;
        this._rotateImage2.renderTransform.eulerAngles = new Vec3(eulerAngles2.x, eulerAngles2.y, eulerAngles2.z + 1);
        const scale = this._scaleImage.renderTransform.scale;
        const scaleSpeed = this._scale = ((scale.x > 2 || scale.x < 0) ? -1 : 1) * this._scale;
        this._scaleImage.renderTransform.scale = new Vec3(scale.x + scaleSpeed, scale.y + scaleSpeed, scale.x);
        
        const shear = this._shearImage.renderTransform.shear;
        const xShear = this._shear = ((shear.x > 0.5 || shear.x < -0.5) ? -1 : 1) * this._shear;
        this._shearImage.renderTransform.shear = new Vec2(shear.x + xShear, shear.y);

        const eulerAngles3 = this._pivotImage.renderTransform.eulerAngles;
        const eulerSpeed = this._eulerSpeed = ((eulerAngles3.z > 30 || eulerAngles3.z < 0) ? -1 : 1) * this._eulerSpeed;
        this._pivotImage.renderTransform.eulerAngles = new Vec3(eulerAngles3.x, eulerAngles3.y, eulerAngles3.z + eulerSpeed);
    }
}

