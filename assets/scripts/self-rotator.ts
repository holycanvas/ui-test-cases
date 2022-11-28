import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('self_rotator')
export class self_rotator extends Component {
    private _speed = Math.random() * 1 + 0.5;
    start() {

    }

    update(deltaTime: number) {
        this.node.eulerAngles = new Vec3(this.node.eulerAngles.x, this.node.eulerAngles.y + this._speed, this.node.eulerAngles.z);
    }
}

