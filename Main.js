import * as THREE from "./node_modules/three/build/three.module.js";
// import { OrbitControls } from "./node_modules/three/examples/js/controls/OrbitControls.js";



// ==================== CLASSES/ENTITIES ================== //

class Main {

    constructor() {
        this.game = this.startGame();
    }

    startGame() {
        return new Game(this);
    }

}

class Game {

    constructor(main) {

        const LEVEL1 = {
            board: [["start", "simple", "star", "void", "void", "void", "void", "void", "void", "void"],
            ["simple", "simple", "simple", "simple", "simple", "simple", "void", "void", "void", "void"],
            ["simple", "simple", "simple", "simple", "simple", "simple", "simple", "simple", "simple", "void"],
            ["void", "simple", "simple", "star", "simple", "simple", "star", "simple", "simple", "simple"],
            ["void", "void", "void", "void", "void", "simple", "simple", "hole", "simple", "simple"],
            ["void", "void", "void", "void", "void", "void", "simple", "simple", "simple", "void"]],
            camera: [-250,300,-500],
            light: [-50,300,-500]
        }; 

        const LEVEL2 = {
            board: [["void", "void", "void", "void", "void", "void", "simple", "simple", "simple", "simple","void", "void", "simple", "simple", "simple"],
            ["simple", "simple", "simple", "simple", "void", "void", "simple", "simple", {activator: "vertical" , tiles: [[10,4],[11,4]]}, "simple","void", "void", "simple", "hole", "simple"],
            ["simple", "simple", {activator: "horizontal" , tiles: [[4,4],[5,4]]}, "simple", "void", "void", "simple", "simple", "simple", "simple","void", "void", "simple", "simple", "simple"],
            ["simple", "simple", "simple", "simple", "void", "void", "simple", "simple", "simple", "simple","void", "void", "simple", "simple", "simple"],
            ["simple", "start", "simple", "simple", "bridge", "bridge", "simple", "simple", "simple", "simple","bridge", "bridge", "simple", "simple", "simple"],
            ["simple", "simple", "simple", "simple", "void", "void", "simple", "simple", "simple", "simple","void", "void", "void", "void", "void"]],
            camera: [-300,350,-530], 
            light: [-1000,700,0] 
        };  

        const LEVEL3 = {
            board: [["void", "void", "void", "void", "void", "void", "simple", "simple", "simple", "simple","simple", "simple", "simple", "void", "void"],
            ["simple", "simple", "simple", "simple", "void", "void", "simple", "simple", "simple", "void","void", "simple", "simple", "void", "void"],
            ["simple", "simple", "simple", "simple", "simple", "simple", "simple", "simple", "simple", "void","void", "simple", "simple", "simple", "simple"],
            ["simple", "start", "simple", "simple", "void", "void", "void", "void", "void", "void","void", "simple", "simple", "hole", "simple"],
            ["simple", "simple", "simple", "simple", "void", "void", "void", "void", "void", "void","void", "simple", "simple", "simple", "simple"],
            ["void", "void", "void", "void", "void", "void", "void", "void", "void", "void","void", "void", "simple", "simple", "simple"]],
            camera: [-300,350,-530], 
            light: [180,250,-400] 
        };  
        
        
        const LEVEL4 = {
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

        const LEVEL5 = {
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

        const LEVEL6 = {
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

        const LEVEL7 = {
            board: [["void", "void", "simple", "simple", "void", "void", "void", "void", "void", "void","void", "void","void","void"],
            ["void", "void", "simple", "simple", "simple", "void", "void", "void", "void", "void","void", "void","void","void"],
            ["void", "void", "simple", "simple", {activator: "horizontal" , tiles: [[13,2],[13,3]]}, "void", "void","void", "void", "void","simple", "simple", "simple","bridge"],
            ["void", "void", "void", "simple", "simple", "simple", "simple", "void", "void", "void","simple", "hole", "simple","bridge"],
            ["void", "void", "void", "void", "void", "void", "simple", "simple", "bridge", "bridge","simple", "simple", "simple","void"],
            ["void", "simple", "simple", "void", "void", "void", "simple", "simple", "void", "void","void", "void", "void","void"],
            ["simple", "simple",  {activator: "vertical" , tiles: [[8,4],[9,4]]}, "simple", "simple", "simple", "simple", "simple", "void", "void","void", "void", "void","void"],
            ["simple", "start", "simple", "void", "void", "void", "simple", "simple", "void", "void","void", "simple", "simple","simple"],
            ["simple", "simple", "simple", "void", "void", "void", "simple", "simple", "simple", "simple","simple", "simple", "simple","simple"],
            ["void", "void", "void", "void", "void", "void", "void", "void", "void", "void", "void", "simple", "simple","simple"]],
            camera: [-250,280,-580],
            light: [50,450,50]
        };
        
        this.LEVELS = [
            LEVEL1,
            LEVEL2,
            LEVEL3,
            LEVEL4,
            LEVEL5,
            LEVEL6,
            LEVEL7
        ];
        
        this.main = main;
        this.scene = new THREE.Scene();

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setClearColor(new THREE.Color(0x87CEEB ));
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap; 
        document.body.appendChild(this.renderer.domElement);

        // Start level
        this.currentLevel = 0;
        this.moves = 0;
        this.level = new Level(this.LEVELS[0],this);


        // Reference - https://stackoverflow.com/questions/20290402/three-js-resizing-canvas
        window.addEventListener( 'resize', onWindowResize, false );

        function onWindowResize() {
            main.game.level.camera.aspect = window.innerWidth / window.innerHeight;
            main.game.level.camera.updateProjectionMatrix();
            main.game.renderer.setSize( window.innerWidth, window.innerHeight );
        }

        this.addSun();
        this.addMoon();
        
        let step = 0;
        let sunMesh = this.sunMesh;
        let moonMesh = this.moonMesh;
        let renderer = this.renderer;
        let scene = this.scene;
        let camera = this.level.camera;

        animateSpace();

        function animateSpace() { 

            step += 0.005; 
            sunMesh.position.y = 1500 * Math.sin(step); 
            sunMesh.position.z = 1500 *  Math.cos(step); 
            moonMesh.position.y = -1500 * Math.sin(step); 
            moonMesh.position.z = -1500 *  Math.cos(step); 
    
            // Render using requestAnimationFrame 
            requestAnimationFrame(animateSpace); 
            renderer.render(scene, camera); 
    
        }
    

    }
    

    addSun() {
        let sunGeometry = new THREE.SphereGeometry(50);
        let sunTexture = new THREE.TextureLoader().load("sun.jpg");
        let sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
        this.sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
        this.sunMesh.position.x = -200;
        this.sunMesh.position.z = 1500;
        this.scene.add(this.sunMesh);
        // this.renderer.render(this.scene, this.camera);
    }

    addMoon() {
        let moonGeometry = new THREE.SphereGeometry(45);
        let moonTexture = new THREE.TextureLoader().load("moon.jpg");
        let moonMaterial = new THREE.MeshBasicMaterial({ map: moonTexture });
        this.moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
        this.moonMesh.position.x = -200;
        this.moonMesh.position.z = -1500;
        this.scene.add(this.moonMesh);
    }

    nextLevel() {
        this.clearScene();
        if (this.currentLevel + 1 === this.LEVELS.length) {
            this.endGame();
        } else {
            this.currentLevel += 1;
            this.level = new Level(this.LEVELS[this.currentLevel],this); 
            document.getElementById("level").innerHTML = this.currentLevel + 1;
        }
    }

    retryLevel() {
        this.clearScene();
        this.level = new Level(this.LEVELS[this.currentLevel],this);
    }

    endGame() {
        let modal = new bootstrap.Modal(document.getElementById("endGame"), {});
        modal.show();
        let main = this.main;

        document.getElementById('playAgain').addEventListener("click", function() {
            main.game.resetGame();
        });
        
    }

    resetGame() {
        this.clearScene();
        this.currentLevel = 0;
        this.moves = 0;
        document.getElementById("level").innerHTML = this.currentLevel + 1;
        document.getElementById("moves").innerHTML = this.moves;
        this.level = new Level(this.LEVELS[0],this);
    }

    clearScene() {
        this.scene.remove.apply(this.scene, this.scene.children);
    }

}

class Level {

    constructor(info,game) {

        this.levelMoves = 0;
        this.stars = 0;
        this.game = game;

        this.board = this.createBoard(this.game.scene,info.board);

        let [camX,camY,camZ] = info.camera;
        let [lightX,lightY,lightZ] = info.light;
        
        this.setCamera(camX,camY,camZ);
        this.setLight(lightX,lightY,lightZ);

        for (let x = 0; x < this.board.length; x++) {
            for (let z = 0; z < this.board[0].length; z++) {
                if (this.board[x][z].type === "star") {
                    let tile = this.board[x][z];
                    tile.animateStar(this.camera);
                }
            }
        }

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
        
        // Set camera controlls
        // this.controls = new OrbitControls(this.camera, this.game.renderer.domElement);
        // this.controls.rotateSpeed = 2;

    }

    setLight(x,y,z) {
        this.light = new THREE.SpotLight(0xffffff);
        this.light.position.set(x,y,z);
        this.light.castShadow = true;
        this.light.receiveShadow = true;        
        this.light.shadow.mapSize.width = 2048; 
        this.light.shadow.mapSize.height = 2048; 
        this.game.scene.add(this.light);
        this.game.renderer.render(this.game.scene, this.camera);
    }

    moveBlock(event) {

        var keyCode = event.which;  // JS key id
        if (this.block.setBlockPosition(this, keyCode)) {
            this.game.moves += 1;
            this.levelMoves += 1;
        };
        this.verifyMove();
        document.getElementById("moves").innerHTML = this.game.moves;
        document.getElementById("stars").innerHTML = this.stars;

    }

    verifyMove() {

        // Verify if void or if fragile and vertical or deactivated bridge
        if (this.verifyFail()) {

            this.blockFall();

            setTimeout(() => {
                this.game.retryLevel();
            }, 1000);

            this.game.moves -= this.levelMoves  ;
            this.levelMoves = 0;
            this.stars = 0;

        } else {

            this.verifyActivator();

            this.verifyStar();

            if (this.inHole()) {
                setTimeout(() => {
                    this.game.nextLevel();
                }, 1000);
            }

        }

    }

    verifyStar() {

        console.log("verify star")

        for (let coord of this.block.coords) {

            if (this.board[coord[1]]?.[coord[0]]?.type === "star" && this.board[coord[1]]?.[coord[0]]?.star != undefined) {
                console.log("valor",this.board[coord[1]]?.[coord[0]]?.star)
                this.game.scene.remove(this.board[coord[1]]?.[coord[0]]?.star);
                this.stars += 1;
                document.getElementById("stars").innerHTML = this.stars;
                this.board[coord[1]][coord[0]].star = undefined;

            }

        }

    }

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

                for (let i = 0; i < tile.bridges.length; i++) {

                    let bridgeCoords = tile.bridges[i];
                    let activateTile = this.board[bridgeCoords[1]][bridgeCoords[0]];

                    if (activateTile.hidden === true) {

                        activateTile.activateBridge();

                    } else {

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

        let step = 2;
        let level = this;
        let scene = this.game.scene;
        let renderer = this.game.renderer;
        let blockMesh = this.block.block;

        downAnimation();
        
        function downAnimation() {

            blockMesh.position.y -= step;

            if (step < 10) step += 0.25;
    
            if  (blockMesh.position.y <= - TILE_SIZE * 8) {
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
        this.star = undefined;

        if (bridges != null) this.bridges = bridges;

        if (type !== "void" && type !== "hole" && type !== "bridge") {

            this.hidden = false;

            this.addTile(type,coords);

            if (type === "vertical") {

                let x = - coords[0] * TILE_SIZE;
                let y = - TILE_WIDTH / 2;
                let z = - coords[1] * TILE_SIZE;      

                this.boxA = createBox(TILE_SIZE-1,10,TILE_WIDTH+1,0x00ff11,x,y,z,"./water.jpg");
                this.boxA.rotation.y = -0.5 * Math.PI / 2;

                this.boxB = createBox(TILE_SIZE-1,10,TILE_WIDTH+1,0x00ff11,x,y,z,"./water.jpg");
                this.boxB.rotation.y = 0.5 * Math.PI / 2;

                this.game.scene.add(this.boxA);
                this.game.scene.add(this.boxB);

            }

            if (type === "horizontal") {

                let geometry = new THREE.CylinderGeometry( TILE_SIZE/2-5, TILE_SIZE/2-5, TILE_WIDTH+5, 62 );
                let material = new THREE.MeshPhongMaterial( {color: 0x1111ee} );
                let cylinder = new THREE.Mesh( geometry, material );

                cylinder.position.x = - coords[0] * TILE_SIZE;
                cylinder.position.y = - TILE_WIDTH / 2;
                cylinder.position.z = - coords[1] * TILE_SIZE;

                cylinder.receiveShadow = true;

                this.game.scene.add( cylinder );

            }

        }
    }
    
    addTile(type) {

        let color;
        if (type === "simple" || type === "start" || type === "star" || this.bridges != null) color = 0xf5f5cd;
        if (type === "fragile") color = 0xff2022;

        let x = - this.coords[0] * TILE_SIZE;
        let y = - TILE_WIDTH / 2;
        let z = - this.coords[1] * TILE_SIZE;

        this.box = createBox(TILE_SIZE,TILE_SIZE,TILE_WIDTH,color,x,y,z,"./water.jpg");
        this.box.rotation.x = -0.5 * Math.PI; 

        if (type === "star") this.addStar();

        this.game.scene.add(this.box);
    }

    addStar() {

        let [x,z] = this.coords;

        let geometry = new THREE.OctahedronGeometry(10, 1);
        let material = new THREE.MeshPhongMaterial( {color: 0x0000ee} );

        console.log("antes", this.star)

        this.star = new THREE.Mesh( geometry, material );

        console.log("dep", this.star)

        this.star.position.x = - x * TILE_SIZE;
        this.star.position.y = 20;
        this.star.position.z = - z * TILE_SIZE;  

        this.star.receiveShadow = true;
        this.star.castShadow = true;

        this.game.scene.add( this.star );

    }

    animateStar(camera) {

        let step = 0;
        let star = this.star;
        let game = this.game;

        animation();

        function animation() { 

            step += 0.05; 
            star.rotation.x += 0.05; 
            star.rotation.y += 0.05; 
            star.rotation.z += 0.05; 
            star.position.y = 10 + 10 * Math.cos(Math.sin(step)); 
    
            // Render using requestAnimationFrame 
            requestAnimationFrame(animation); 
            game.renderer.render(game.scene, camera);     
        }

    }

    // Show bridge tile
    activateBridge() {

        let x = - this.coords[0] * TILE_SIZE;
        let y = - TILE_WIDTH / 2;
        let z = - this.coords[1] * TILE_SIZE;

        this.box = createBox(TILE_SIZE,TILE_SIZE,TILE_WIDTH,0x26705c,x,y,z,"./wood.jpg");
        this.box.rotation.x = -0.5 * Math.PI; 
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

        let step = 2;
        let game = this.game;
        let tileMesh = this.box;

        downAnimation();
        
        function downAnimation() {

            tileMesh.position.y -= step;

            if (step < 10) step += 0.45;
    
            if  (tileMesh.position.y <= - TILE_SIZE * 8) {
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

        let x = - this.coords[0][0] * TILE_SIZE;
        let y = TILE_SIZE;
        let z = - this.coords[0][1] * TILE_SIZE;

        this.block = createBox(TILE_SIZE,TILE_SIZE*2,TILE_SIZE,0x991199,x,y,z,"./wood.jpg");
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
                return false;
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

        this.renderer.render(this.scene,level.camera); 
        return true;

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
listenForMoves();

function listenForMoves() {
    document.addEventListener("keydown", move, false); 
}

function move(event) {
    game.level.moveBlock(event);
}

function createBox(width,height,depth,color,x,y,z,texture) {

    const loader = new THREE.CubeTextureLoader();
    const textureCube = loader.load( Array(6).fill(texture) );
    let cubeGeometry = new THREE.BoxBufferGeometry(width,height,depth);
    let cubeMaterial = new THREE.MeshPhongMaterial({ color: color, wireframe: false, envMap: textureCube});	// Wireframe allows to represent the edges onl

    // BLOCK
    let block = new THREE.Mesh(cubeGeometry,cubeMaterial);
    block.position.set(x,y,z);

    // BLOCK OUTLINE
    let edgesGeometry = new THREE.EdgesGeometry(cubeGeometry );
    let edgesMaterial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 1 } );
    let wireframeBox = new THREE.LineSegments(edgesGeometry,edgesMaterial );
    wireframeBox.renderOrder = 1;
    block.add(wireframeBox);

    block.castShadow = true;
    block.receiveShadow = true;

    return block;
}