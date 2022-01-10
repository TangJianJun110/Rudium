<<<<<<< HEAD

/*
 * @date: 2021-12-19 11:35:17
 * @LastAuthor: 唐建军
 * @lastTime: 2021-12-29 17:37:40
 * @FilePath: \Rudium\Source\Scene\Scene.ts
=======
/*
 * @date: 2021-12-19 11:35:17
 * @LastAuthor: 唐建军
 * @lastTime: 2021-12-20 22:01:37
 * @FilePath: \LearnWebGL-TypeScript\Source\scene\Scene.ts
>>>>>>> c0c492e1e3af9de1f9ca6c52f1a292bfc8db54df
 */
declare interface IOptions {
    [key: string]: any
}

export class Scene {
    options: IOptions;
    canvas: HTMLCanvasElement;
    context: WebGLRenderingContext;
    constructor(id: string, options: IOptions) {
        const container: HTMLElement = document.getElementById(id);
        if (!container) {
            return null;
        }
        const canvas: HTMLCanvasElement = document.createElement('canvas');
        this.options = options || {};
        container.appendChild(canvas);
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;

        const webgl: WebGLRenderingContext = canvas.getContext('webgl');
        this.canvas = canvas;
        this.context = webgl;
        this.render();
    }
    resize(scene: Scene) {
        const devicePixelRatio: number = this.options.devicePixelRatio || window.devicePixelRatio;
        const canvas = scene.canvas;

        var width = canvas.clientWidth;
        var height = canvas.clientHeight;
        canvas.width = width * devicePixelRatio;
        canvas.height = height * devicePixelRatio;
        this.context.viewport(0, 0, canvas.width, canvas.height);
    }
    render() {
        this.resize(this);
        this.context.clearColor(0.0, 0.0, 0.0, 1.0);
        this.context.enable(this.context.DEPTH_TEST);
        this.context.clear(this.context.COLOR_BUFFER_BIT | this.context.DEPTH_BUFFER_BIT);
<<<<<<< HEAD

        
=======
>>>>>>> c0c492e1e3af9de1f9ca6c52f1a292bfc8db54df
    }
}