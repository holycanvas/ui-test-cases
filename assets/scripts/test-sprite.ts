import { _decorator, Node, SpriteFrame, Vec3, Component, UIImage, UIBrush, CCInteger, Sprite, Layers, CCBoolean, UIWidget, Widget } from "cc";
const { ccclass, property } = _decorator;

class BunnyMarkData {
    speedX = 0;
    speedY = 0;
    owner: Node = null;
    innerText = '';
}


@ccclass("TestSprite")
export class TestSprite extends Component {
    @property(CCInteger)
    number = 10000;
    @property([SpriteFrame])
    frames: SpriteFrame[] = [];

    public bunnies: BunnyMarkData[] = [];

    maxX = 0;
    minX = 0;
    maxY = 0;
    minY = 0;
    _euler = new Vec3();
    currentFrame = 0;
    gravity = 0.5;

    @property(CCBoolean)
    shouldMove = true;

    changeMoveState () {
        this.shouldMove = !this.shouldMove;
    }

    onLoad() {
        this.maxX = cc.winSize.width / 2;
        this.maxY = cc.winSize.height / 2;
        this.minX = -this.maxX;
        this.minY = -this.maxY;

        this.currentFrame = 0;
        this.addOnce();
    }

    addOnce() {
        let amountPerLevel = Math.floor(this.number);
        let parent = this.node;

        let bunny: Node;
        let bunnySprite: Sprite;
        for (let j = 0; j < amountPerLevel; j++) {
            bunny = new Node();
            bunny.layer = Layers.Enum.UI_2D;
            bunnySprite = bunny.addComponent(Sprite);
            bunny.addComponent(Widget);
            bunnySprite.spriteFrame = this.frames[this.currentFrame];
            const data = new BunnyMarkData();
            data.speedX = Math.random() * 10;
            data.speedY = (Math.random() * 10) - 5;
            data.owner = bunny;
            bunny.position = new Vec3(this.minX + 10, this.maxY * 0.7, 0);
            this.bunnies.push(data);
            bunny.parent = parent;
        }
    }

    update() {
        if (!this.shouldMove) return;
        for (let j = 0; j < this.bunnies.length; j++) {
            const bunny = this.bunnies[j];

            let speedX = bunny.speedX;
            let speedY = bunny.speedY;
            const position = bunny.owner.position;
            let x = position.x + speedX;
            let y = position.y - speedY;
            speedY += this.gravity;

            if (x > this.maxX) {
                speedX = -1 * speedX;
                x = this.maxX;
            } else if (x < this.minX) {
                speedX = -1 * speedX;
                x = this.minX;
            }

            if (y < this.minY) {
                speedY = -0.85 * speedY;
                y = this.minY;
                if (Math.random() > 0.5) {
                    speedY = speedY - Math.random() * 6.0;
                }
            } else if (y > this.maxY) {
                speedY = 0.0;
                y = this.maxY;
            }
            bunny.speedX = speedX;
            bunny.speedY = speedY;
            bunny.owner.position = new Vec3(x, y, 0);
        }
    }
}