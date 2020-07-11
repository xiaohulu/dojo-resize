import { create, tsx } from '@dojo/framework/core/vdom';
import { Size } from './SizeWare';

export interface BorderProperties {
    size: Size
}

const factory = create().properties<BorderProperties>();

export default factory(function Border({ properties }){
    const { size } = properties();
    return (
        <div styles={{
            border: "solid blue 1px", 
            position: "absolute", 
            top: `${size.top}px`,
            left: `${size.left}px`,
            height: `${size.height}px`,
            width: `${size.width}px`,
            pointerEvents: "none"
        }}></div>
    );
});
