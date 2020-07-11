import { create, tsx } from '@dojo/framework/core/vdom';
import icache from '@dojo/framework/core/middleware/icache';
import dimensions from '@dojo/framework/core/middleware/dimensions';
import * as css from './styles/SizeAware.m.css';

export interface Size {
    top: number;
    left: number;
    width: number;
    height: number;
}

export interface SizeWareProperties {
    onMeasure: (size: Size) => void;
}

const factory = create({ dimensions, icache }).properties<SizeWareProperties>();

export default factory(function SizeWare({ properties, middleware: { dimensions, icache } }){
    const { onMeasure } = properties();
    const value = icache.getOrSet("value", ()=>"Hello");

    const dimensionResults = dimensions.get("textarea");
    onMeasure(dimensionResults.offset);

    return (
        <div key="root">
            <span classes={[css.span]}>
                <pre key="pre" classes={[css.pre]}>
                    <span>{`${value}`}</span>
                    <br/>
                </pre>
                <textarea key="textarea" classes={[css.textarea]} oninput={(event: KeyboardEvent<HTMLTextAreaElement>)=>{
                    icache.set("value", event.target.value)}}>Hello</textarea>
            </span>
        </div>
    );
});
