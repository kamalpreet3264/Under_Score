module managers {
    export class CameraManager {

        private _x: number;
        private _y: number;

        private _targetToFollow: objects.GameObject;

        constructor() {
        }

        get X(): number {
            return this._x;
        }

        get Y(): number {
            return this._y;
        }

        public Follow(target: objects.GameObject) {
            this._targetToFollow = target;
        }

        public Update() {
            // Check if has target to follow and there is a level
            if (utils.Util.NotNullOrUndefined(this._targetToFollow)) {
                let level = managers.GameManager.CurrentLevel;
                if (utils.Util.NotNullOrUndefined(level)) {
                    // Check Horizontal Movement

                    // Check if player is inside ViewPort, the order matters, and it check from right to left
                    if (this._targetToFollow.x + this._targetToFollow.PivotX > level.LevelWidth - managers.GameManager.SceneManager.ScreenWidth / 2) {// Check Right Side
                        managers.GameManager.SceneManager.CurrentScene.x = -(level.LevelWidth - managers.GameManager.SceneManager.ScreenWidth);
                    }
                    else if (this._targetToFollow.x + this._targetToFollow.PivotX > managers.GameManager.SceneManager.ScreenWidth / 2) {// Check Inside
                        managers.GameManager.SceneManager.CurrentScene.x = -(this._targetToFollow.x + this._targetToFollow.PivotX - managers.GameManager.SceneManager.ScreenWidth / 2);
                    }
                    else {// Check Left Side
                        managers.GameManager.SceneManager.CurrentScene.x = 0;
                    }

                    // Check Vertical Movement
                    if (this._targetToFollow.y + this._targetToFollow.PivotY > level.LevelHeight - managers.GameManager.SceneManager.ScreenHeight / 2) {// Check Up
                        managers.GameManager.SceneManager.CurrentScene.y = -(level.LevelHeight - managers.GameManager.SceneManager.ScreenHeight);
                    }
                    else if (this._targetToFollow.y + this._targetToFollow.PivotY > managers.GameManager.SceneManager.ScreenHeight / 2) {// Check Center
                        managers.GameManager.SceneManager.CurrentScene.y = -(this._targetToFollow.y + this._targetToFollow.PivotY - managers.GameManager.SceneManager.ScreenHeight / 2);
                    }
                    else {// Check Bottom
                        managers.GameManager.SceneManager.CurrentScene.y = 0;
                    }
                }
            }
        }
    }
}