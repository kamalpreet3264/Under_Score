var physics;
(function (physics) {
    var Physics = /** @class */ (function () {
        function Physics() {
        }
        Physics.Collision = function (obj1, obj2) {
            return math.Vector2.Distance(obj1.position, obj2.position) < obj1.PivotY + obj2.PivotY;
        };
        Physics.CollisionAABB = function (obj1, obj2) {
            // Check if both object has collider
            if (utils.Util.NotNullOrUndefined(obj1.Collider) && utils.Util.NotNullOrUndefined(obj2.Collider)) {
                if (obj1.Collider.Left < obj2.Collider.Right &&
                    obj1.Collider.Right > obj2.Collider.Left &&
                    obj1.Collider.Top < obj2.Collider.Bottom &&
                    obj1.Collider.Bottom > obj2.Collider.Top) {
                    return true;
                }
                /*
                if(obj1.x < obj2.Collider.x + obj2.Collider.Width &&
                    obj1.x + obj1.Collider.Width > obj2.Collider.x &&
                    obj1.y < obj2.Collider.y + obj2.Collider.Height &&
                    obj1.Collider.y + obj1.Collider.Height > obj2.Collider.y){
                    return true;
                }
                */
            }
            return false;
        };
        return Physics;
    }());
    physics.Physics = Physics;
})(physics || (physics = {}));
//# sourceMappingURL=physics.js.map