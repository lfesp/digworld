import * as Dat from 'dat.gui';
import { Scene, Color } from 'three';
import { BasicLights } from 'lights';
import { Terrain2 } from 'objects';


class NoiseScene extends Scene {
    constructor() {
        // Call parent Scene() constructor
        super();

        // Init state
        this.state = {
            gui: new Dat.GUI(), // Create GUI for scene
            rotationSpeed: 1,
            updateList: [],
        };

        // Set background to a nice color
        this.background = new Color(0x00BFFF);

        // Add lights to scene
        const lights = new BasicLights();
        this.add(lights);

        this.terrain = new Terrain2(this);
        // this.add(new Terrain(this));
        this.add(this.terrain);

        // Populate GUI
        this.state.gui.add(this.state, 'rotationSpeed', -5, 5);
    }

    addToUpdateList(object) {
        this.state.updateList.push(object);
    }

    update(timeStamp) {
        const { rotationSpeed, updateList } = this.state;
        // this.rotation.y = (rotationSpeed * timeStamp) / 10000;

        // Call update for each object in the updateList
        for (const obj of updateList) {
            obj.update(timeStamp);
        }
    }
}

export default NoiseScene;