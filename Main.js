// ==================== CLASSES/ENTITIES ================== //

/*
TODO:
resize event
activate/deactivate bridge (done)
fragile tile (done)
down animation (done)
game/level stats -> current level, moves
lights and shadows
camera and light position for each level
block movement/animation (done)
retry level button
about/tutorial modal
*/


class Main {

    constructor() {
        this.moves = 0;
        //this.stars = ????
        this.game = this.startGame();
    }

    startGame() {
        return new Game();
    }

}

class Game {

    constructor() {

        /*
        const LEVEL1 = {
            board: [["start", "simple", "simple", "void", "void", "void", "void", "void", "void", "void"],
            ["simple", "simple", "simple", "simple", "simple", "simple", "void", "void", "void", "void"],
            ["simple", "simple", "simple", "simple", "simple", "simple", "simple", "simple", "simple", "void"],
            ["void", "simple", "simple", "simple", "simple", "simple", "simple", "simple", "simple", "simple"],
            ["void", "void", "void", "void", "void", "simple", "simple", "hole", "simple", "simple"],
            ["void", "void", "void", "void", "void", "void", "simple", "simple", "simple", "void"]],
            camera: [-250,300,-500],
            light: [-50,300,-500]
        };

        
        const LEVEL2 = {
            board: [["void", "void", "void", "void", "void", "void", "void", "void", "simple", "simple","simple", "simple", "void", "void", "void"],
            ["void", "void", "void", "void", "void", "void", "void", "void", "simple", "simple","simple", "simple", "void", "void", "void"],
            ["simple", "simple", "simple", "void", "void", "void", "void", "void", "simple", "void","void", "simple", "simple", "simple", "simple"],
            ["simple", "start", "simple", "simple", "simple", "simple", "simple", "simple", "simple", "void","void", "void", "simple", "hole", "simple"],
            ["simple", "simple", "simple", "void", "void", "void", "void", "simple", "simple", {activator: "vertical" , tiles: [[3,6]]},"void", "void", "simple", "simple", "simple"],
            ["simple", "simple", "simple", "void", "void", "void", "void", "simple", "simple", "simple","void", "void", "simple", "simple", "simple"],
            ["void", "simple", "simple", "bridge", "void", "void", "void", "simple", "void", "void","void", "void", "void", "void", "void"],
            ["void", "void", "simple", "simple", "simple", "simple", "simple", "simple", "void", "void","void", "void", "void", "void", "void"]],
            camera: [-300,350,-530], 
            light: [-1000,700,0] 
        };

        

        const LEVEL3 = {
            board: [["simple", "simple", "simple", "fragile", "simple", "simple", "simple", "simple", "fragile", "simple","simple", "simple", "simple", "void"],
            ["simple", "simple", "void", "void", "void", "void", "void", "void", "void", "void","simple", "simple", "simple", "void"],
            ["simple", "simple", "void", "void", "void", "void", "void", "void", "void", "void","void", "simple", "simple", "simple"],
            ["simple", "simple", "simple", "void", "void", "void", "simple", "simple", "simple", "void","void", "simple", "start", "simple"],
            ["simple", "simple", "simple", "fragile", "fragile", "fragile", "simple", "hole", "simple", "void", "void", "simple", "simple", "simple"],
            ["simple", "simple", "simple", "void", "void", "fragile", "simple", "simple", "simple", "void","void", "simple", "void", "void"],
            ["void", "void", "simple", "void", "void", "fragile", "fragile", "fragile", "fragile", "fragile","simple", "simple", "void", "void"],
            ["void", "void", "simple", "simple", "simple", "fragile", "fragile", "simple", "fragile", "fragile","fragile", "void", "void", "void"],
            ["void", "void", "void", "simple", "simple", "fragile", "fragile", "fragile", "fragile", "fragile","fragile", "void", "void", "void"],
            ["void", "void", "void", "simple", "simple", "simple", "void", "void", "simple", "simple", "void", "void", "void", "void"]],
            camera: [-250,320,-600],
            light: [50,450,-470]
        };

        */
    
        const LEVEL4 = {
            board: [["void", "void", "void", "void", "void", "void", "void", "void", "void", "void","void", "void", {activator: "vertical" , tiles: [[6,4]] }],
            ["void", "void", "void", "void", "void", "simple", "simple", "simple", "void", "void","simple", "simple", "simple"],
            ["void", "void", "void", "void", "void", "simple", {activator: "vertical" , tiles: [[12,2]]}, "simple", "simple", "simple","simple", "simple", "bridge"],
            ["void", "void", "void", "simple", "simple", "simple", "simple", "simple", "void", "void","simple", "simple", "bridge"],
            ["void", "void", "void", "simple", "hole", "simple", "bridge", "void", "void", "void", "simple", "simple", "void"],
            ["void", "simple", "simple", "simple", "simple", "simple", "void", "void", "void", "simple","simple", "simple", "simple"],
            ["simple", "simple", "start", "simple", "void", "void", "void", "void", "void", "simple","simple", "simple", "simple"],
            ["simple", "simple", "simple", "simple", "void", "void", "simple", "simple", "simple", "simple","simple", "void", "void"],
            ["void", "void", "void", "void", "void", "simple", "simple", "simple", "void", "void","void", "void", "void"],
            ["void", "void", "void", "void", "void", "simple", "simple", "simple", "void", "void","void", "void", "void"]],
            camera: [-250,300,-570],
            light: [-100,450,-520]
        };

        /*
        const LEVEL5 = 
            [["void", "void", "simple", "simple", "void", "void", "void", "void", "void", "void","void", "void","void","void"],
            ["void", "void", "simple", "simple", "simple", "void", "void", "void", "void", "void","void", "void","void","void"],
            ["void", "void", "simple", "simple", {activator: "horizontal" , tiles: [[13,2],[13,3]]}, "void", "void","void", "void", "void","simple", "simple", "simple","bridge"],
            ["void", "void", "void", "simple", "simple", "simple", "simple", "void", "void", "void","simple", "hole", "simple","bridge"],
            ["void", "void", "void", "void", "void", "void", "simple", "simple", "bridge", "bridge","simple", "simple", "simple","void"],
            ["void", "simple", "simple", "void", "void", "void", "simple", "simple", "void", "void","void", "void", "void","void"],
            ["simple", "simple",  {activator: "vertical" , tiles: [[8,4],[9,4]]}, "simple", "simple", "simple", "simple", "simple", "void", "void","void", "void", "void","void"],
            ["simple", "start", "simple", "void", "void", "void", "simple", "simple", "void", "void","void", "simple", "simple","simple"],
            ["simple", "simple", "simple", "void", "void", "void", "simple", "simple", "simple", "simple","simple", "simple", "simple","simple"],
            ["void", "void", "void", "void", "void", "void", "void", "void", "void", "void", "void", "simple", "simple","simple"]];
        */

        this.LEVELS = [
            //LEVEL1,
            //LEVEL2,
            //LEVEL3,
            LEVEL4,
            //LEVEL5
        ];
        
        this.scene = new THREE.Scene();

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setClearColor(new THREE.Color(0x87CEEB ));
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMapType = THREE.PCFSoftShadowMap; 
        document.body.appendChild(this.renderer.domElement);

        

        // Start level
        this.currentLevel = 0;
        this.level = new Level(this.LEVELS[0],this);
    }

    nextLevel() {
        this.clearScene();
        if (this.currentLevel + 1 >= this.level.length) {
            this.endGame();
        } else {
            this.currentLevel += 1;
            this.level = new Level(this.LEVELS[this.currentLevel],this); 
        }
    }

    retryLevel() {
        this.clearScene();
        this.level = new Level(this.LEVELS[this.currentLevel],this);
    }

    endGame() {
        console.log("END GAME")
        alert("END GAME")
    }

    clearScene() {
        this.scene.remove.apply(this.scene, this.scene.children);
    }

}

class Level {

    constructor(info,game) {

        this.game = game;
        this.board = this.createBoard(this.game.scene,info.board);

        let [camX,camY,camZ] = info.camera;
        let [lightX,lightY,lightZ] = info.light;
        
        this.setCamera(camX,camY,camZ);
        this.setLight(lightX,lightY,lightZ);

    }

    setCamera(x,y,z) {

        // Find center point of the board (where the camera is looking)
        let firstTile = this.board[0][0];
        let lastTile = this.board[this.board.length-1][this.board[0].length-1];
        let centerPoint = [ - ( firstTile.coords[0] * TILE_SIZE + lastTile.coords[0] * TILE_SIZE ) / 2, 0, - ( firstTile.coords[1] * TILE_SIZE + lastTile.coords[1] * TILE_SIZE ) / 2 ]

        // Set camera perspective
        this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 3000);
        this.camera.position.set(x,y,z);
        this.camera.lookAt(centerPoint[0],centerPoint[1],centerPoint[2]);
        this.game.scene.add(this.camera);

    }

    setLight(x,y,z) {
        this.light = new THREE.SpotLight(0xffffff);
        this.light.position.set(x,y,z);
        this.light.castShadow = true;
        this.light.receiveShadow = true;        
        this.light.shadowMapWidth = 2048; 
        this.light.shadowMapHeight = 2048; 
        this.game.scene.add(this.light);
        this.game.renderer.render(this.game.scene, this.camera);
    }

    moveBlock(event) {

        var keyCode = event.which;  // JS key id
        this.block.setBlockPosition(this, keyCode);
        this.verifyMove();

    }

    verifyMove() {

        // Verify if void or if fragile and vertical or deactivated bridge
        if (this.verifyFail()) {

            this.blockFall();

            setTimeout(() => {
                this.game.retryLevel();
            }, 1000);
        
        } else {

            this.verifyActivator();

            if (this.inHole()) {
                setTimeout(() => {
                    this.game.nextLevel();
                }, 1000);
            }

        }

    }retryLevel

    verifyFail() {

        for (let coord of this.block.coords) {

            if (this.board[coord[1]]?.[coord[0]]?.type === undefined) return true;

            let tile = this.board[coord[1]][coord[0]];
            if (tile.type === "void") return true;
            if (tile.type === "bridge" && tile.hidden === true) return true;
            if (tile.type === "fragile" && this.block.inVertical()) {
                tile.dropTile();
                return true;
            }
        }
        
        return false;

    }

    verifyActivator() {

        for (let coord of this.block.coords) {
            
            let tile = this.board[coord[1]][coord[0]];
            
            if (tile.type === "vertical" && this.block.inVertical() || tile.type === "horizontal") {

                console.log("activated")

                console.log(tile.bridges)

                for (let i = 0; i < tile.bridges.length; i++) {

                    let bridgeCoords = tile.bridges[i];
                    let activateTile = this.board[bridgeCoords[1]][bridgeCoords[0]];

                    if (activateTile.hidden === true) {

                        activateTile.activateBridge();

                    } else {

                        console.log(activateTile)

                        activateTile.closeBridge();

                    }

                }

            }
          
        }

        this.game.renderer.render(this.game.scene,this.camera); 

    }

    createBoard(scene,board) {

        let renderedBoard = [];
        for (let row = 0; row < board.length; row++) {
            let renderedTileRow = [];
            for (let tile = 0; tile < board[row].length; tile++) {
                let coords = [tile,row];
                let tileType = board[row][tile];
                let bridges = null;
                if (tileType instanceof Object) {
                    bridges = tileType.tiles;
                    tileType = tileType.activator;
                }
                let renderedTile = new Tile(this.game,tileType,coords,bridges);
                renderedTileRow.push(renderedTile);
                if (tileType === "start") {
                    this.block = new Block(scene,this.game.renderer,coords);
                } else if (tileType === "hole") {
                    this.hole = renderedTile;
                } 
            }
            renderedBoard.push(renderedTileRow);
        }
        return renderedBoard;

    }

    inHole() {
        if (JSON.stringify(this.block.coords[0]) === JSON.stringify(this.hole.coords) && this.block.inVertical()) {
            this.blockFall();
            return true;
        }
        return false;
    }
    

    // When the block is in void or when fits hole
    blockFall() {

        let step = 1;

        let level = this;
        let scene = this.game.scene;
        let renderer = this.game.renderer;
        let blockMesh = this.block.block;

        downAnimation();
        
        function downAnimation() {

            blockMesh.position.y -= step;

            if (step < 5) step += 0.25;
    
            if  (blockMesh.position.y <= - TILE_SIZE * 2) {
                return true;
            }
    
            requestAnimationFrame(downAnimation); 
            renderer.render(scene, level.camera); 
    
        }; 
        

    }

}

class Tile {

    constructor(game, type, coords, bridges) {
        
        this.type = type;
        this.coords = coords;
        this.hidden = true;
        this.game = game;

        if (bridges != null) {
            console.log(this.type);
            console.log(bridges);
            this.bridges = bridges;
        }

        if (type !== "void" && type !== "hole" && type !== "bridge") {

            this.hidden = false;

            this.addTile(type,coords);

            if (type === "vertical") {

                let boxGeometry = new THREE.BoxBufferGeometry(TILE_SIZE-1,10 ,TILE_WIDTH+1);
                let boxMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff11 });

                // Make an 'X'

                let boxA = new THREE.Mesh(boxGeometry, boxMaterial);
                boxA.rotation.y = -0.5 * Math.PI / 2; 
                boxA.position.x = - coords[0] * TILE_SIZE;
                boxA.position.y = - TILE_WIDTH / 2;
                boxA.position.z = - coords[1] * TILE_SIZE;

                let boxB = new THREE.Mesh(boxGeometry, boxMaterial);
                boxB.rotation.y = 0.5 * Math.PI / 2;
                boxB.position.x = - coords[0] * TILE_SIZE;
                boxB.position.y = - TILE_WIDTH / 2;
                boxB.position.z = - coords[1] * TILE_SIZE;

                boxA.receiveShadow = true;
                boxA.castShadow = true;
                boxB.receiveShadow = true;
                boxB.castShadow = true;

                this.game.scene.add(boxA);
                this.game.scene.add(boxB);

            }

            if (type === "horizontal") {

                let geometry = new THREE.CylinderGeometry( TILE_SIZE/2-5, TILE_SIZE/2-5, TILE_WIDTH+1, 62 );
                let material = new THREE.MeshPhongMaterial( {color: 0x7a2f9a} );
                let cylinder = new THREE.Mesh( geometry, material );

                cylinder.position.x = - coords[0] * TILE_SIZE;
                cylinder.position.y = - TILE_WIDTH / 2;
                cylinder.position.z = - coords[1] * TILE_SIZE;

                cylinder.receiveShadow = true;

                this.game.scene.add( cylinder );

            }

        }
    }
    
    addTile(type,coords) {

        let color;
        if (type === "simple" || this.bridges != null) color = 0xf5f5cd;
        if (type === "start") color = 0x000000;
        if (type === "fragile") color = 0xfa8072;

        // TILE BOX

        this.boxGeometry = new THREE.BoxBufferGeometry(TILE_SIZE,TILE_SIZE,TILE_WIDTH);
        this.boxMaterial = new THREE.MeshPhongMaterial({ color:color });
        this.box = new THREE.Mesh(this.boxGeometry, this.boxMaterial);
        this.box.rotation.x = -0.5 * Math.PI; 

        this.box.position.x = - coords[0] * TILE_SIZE;
        this.box.position.y = - TILE_WIDTH / 2;
        this.box.position.z = - coords[1] * TILE_SIZE;

        // TILE BOX OUTLINE

        this.edgesGeometry = new THREE.EdgesGeometry( this.boxGeometry );
        this.edgesMaterial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 1.5 } );
        this.wireframeBox = new THREE.LineSegments( this.edgesGeometry, this.edgesMaterial );
        this.wireframeBox.renderOrder = 1;
        this.box.add(this.wireframeBox);

        this.box.receiveShadow = true;
        this.box.castShadow = true;

        this.game.scene.add(this.box);
    }

    // Show bridge tile
    activateBridge() {

        console.log("activating bridge", this)

        let color = 0x26705c; // 0x36981b

        this.boxGeometry = new THREE.BoxBufferGeometry(TILE_SIZE,TILE_SIZE,TILE_WIDTH);
        this.boxMaterial = new THREE.MeshPhongMaterial({ color:color });
        this.box = new THREE.Mesh(this.boxGeometry, this.boxMaterial);
        this.box.rotation.x = -0.5 * Math.PI; 

        this.box.position.x = - this.coords[0] * TILE_SIZE;
        this.box.position.y = - TILE_WIDTH / 2;
        this.box.position.z = - this.coords[1] * TILE_SIZE;

        // TILE BOX OUTLINE

        this.edgesGeometry = new THREE.EdgesGeometry( this.boxGeometry );
        this.edgesMaterial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 1.5 } );
        this.wireframeBox = new THREE.LineSegments( this.edgesGeometry, this.edgesMaterial );
        this.wireframeBox.renderOrder = 1;
        this.box.add(this.wireframeBox);

        this.box.receiveShadow = true;
        this.box.castShadow = true;

        this.game.scene.add(this.box);

        this.hidden = false;
        this.visible = true;

    }

    // Hide bridge tile
    closeBridge() {

        this.box.visible = false;
        this.hidden = true;

    }

    dropTile() {

        let step = 1;
        let game = this.game;
        let tileMesh = this.box;

        console.log(game);

        downAnimation();
        
        function downAnimation() {

            tileMesh.position.y -= step;

            if (step < 5) step += 0.25;
    
            if  (tileMesh.position.y <= - TILE_SIZE * 2) {
                return true;
            }
    
            requestAnimationFrame(downAnimation); 
            game.renderer.render(game.scene, game.level.camera); 
    
        }; 

    }

}

class Block {

    constructor(scene,renderer,coords) {
        this.coords = [coords];
        this.renderer = renderer;
        this.scene = scene;
        this.placeBlock(scene);
    }

    placeBlock(scene) {

        this.cubeGeometry = new THREE.BoxBufferGeometry(TILE_SIZE,TILE_SIZE*2,TILE_SIZE);
        this.cubeMaterial = new THREE.MeshPhongMaterial({ color: 0x991199, wireframe: false });	// Wireframe allows to represent the edges onl

        // BLOCK
        this.block = new THREE.Mesh(this.cubeGeometry, this.cubeMaterial);
        this.block.position.x = - this.coords[0][0] * TILE_SIZE;
        this.block.position.y = TILE_SIZE;
        this.block.position.z = - this.coords[0][1] * TILE_SIZE;

        // BLOCK OUTLINE

        this.edgesGeometry = new THREE.EdgesGeometry( this.cubeGeometry );
        this.edgesMaterial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 1 } );
        this.wireframeBox = new THREE.LineSegments( this.edgesGeometry, this.edgesMaterial );
        this.wireframeBox.renderOrder = 1;
        this.block.add(this.wireframeBox);

        this.block.castShadow = true;
        this.block.receiveShadow = true;

        scene.add(this.block);

    }  

    // Animation to the new position (and update coordinates)
    setBlockPosition(level,keyCode) {

        let movement = [];

        switch(keyCode) {
            case ACTIONS["KEY_LEFT"]:
                movement = [1,0];
                break;
            case ACTIONS["KEY_RIGHT"]:
                movement = [-1,0];
                break;
            case ACTIONS["KEY_UP"]:
                movement = [0,1];
                break;
            case ACTIONS["KEY_DOWN"]:
                movement = [0,-1];
                break;
            default:
                return;
        };

        let x = movement[0];
        let z = movement[1];

        if (this.inVertical()) { 

            // rotation
            this.block.rotation.z = x * -HORIZONTAL_DISPLAY;
            this.block.rotation.x = z * -HORIZONTAL_DISPLAY;

            // position
            this.block.position.y = TILE_SIZE/2;
            this.block.position.x += x * (3*TILE_SIZE)/2;
            this.block.position.z += z * (3*TILE_SIZE/2);
            
            // new coords
            this.coords = [ [this.coords[0][0]-x,this.coords[0][1]-z], [this.coords[0][0]-x*2,this.coords[0][1]-z*2] ];
            this.coords.sort(this.comparator);


        } else {

            if (this.northAligned()) {

                if (z == -1 || z == 1) {

                    this.block.rotation.x = 0;
                    this.block.position.y = TILE_SIZE;
                    this.block.position.z += z * (TILE_SIZE*3 / 2);
                    
                    if (z == -1) {
                        this.coords = [ [this.coords[1][0],this.coords[1][1]-z] ];
                    } else {
                        this.coords = [ [this.coords[1][0],this.coords[0][1]-z] ];
                    }

                } else {

                    this.block.position.x += x * TILE_SIZE;
                    this.coords = [ [this.coords[0][0]-x,this.coords[0][1]], [this.coords[0][0]-x,this.coords[1][1]] ];

                }

            } else {

                if (x == -1 || x == 1) {

                    this.block.rotation.z = 0;
                    this.block.position.x += x * (TILE_SIZE*3 / 2);
                    this.block.position.y = TILE_SIZE;

                    if (x == -1) {
                        this.coords = [ [this.coords[1][0]-x,this.coords[0][1]] ];
                    } else {
                        this.coords = [ [this.coords[0][0]-x,this.coords[0][1]] ];
                    }

                } else {

                    this.block.position.z += z * TILE_SIZE;            
                    this.coords = [ [this.coords[0][0],this.coords[0][1]-z], [this.coords[1][0],this.coords[0][1]-z] ];

                }

            }

        }

        console.log("coords", this.coords)

        this.renderer.render(this.scene,level.camera); 

    }

    comparator(a,b) {
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;
        if (a[0] == b[0]) {
            if (a[1] < b[1]) return -1;
            if (a[1] > b[1]) return 1;
            return 0;
        }
    }

    // returns true if aligned vertically
    inVertical() {
        if (this.block.position.y == TILE_SIZE) return true;
        return false;
    }

    // returns True if block, when horizontally displayed, points to the north/south direction (KEY_DOWN or KEY_UP actions will then display the block vertically)
    northAligned() {
        if (this.block.rotation.x === - HORIZONTAL_DISPLAY || this.block.rotation.x === HORIZONTAL_DISPLAY ) return true;
        return false;
    }
    

}



// ============================================== //
//                 CONSTANTS                      //
// start -> has a tile where the block starts
// simple -> has a tile
// void -> doesn't have a tile
// vertical -> a tile that can be activated or deactivated if the block is disposed vertically above it
// horizontal -> a tile that can be activated or deactivated if the block is disposed horizontally above it
// hole -> a tile that's a hole (unique)


// JS Keycodes - Action - http://gcctech.org/csc/javascript/javascript_keycodes.htm
const ACTIONS = {
    "KEY_LEFT" : 37,
    "KEY_UP" : 38,
    "KEY_RIGHT" : 39,
    "KEY_DOWN" : 40
};

const TILE_SIZE = 50;
const TILE_WIDTH = 8;
const HORIZONTAL_DISPLAY = 0.5 * Math.PI;

// ============================================== //


// function onWindowResize() {

//     renderer.setSize( window.innerWidth, window.innerHeight );

//     camera.aspect = window.innerWidth / window.innerHeight;

//     camera.updateProjectionMatrix();

// }

let main = new Main();
let game = main.game;

function move(event) {
    game.level.moveBlock(event);
}

document.addEventListener("keydown", move, false); 

//window.addEventListener('resize', onWindowResize, false);