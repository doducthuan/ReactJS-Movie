import useHover from "../../hook/useHover";
import useNewTab from "../../hook/useNewTab";

const SetTarget = () => {
    const {contentRef} = useNewTab();
    const {hover, hoverRef} = useHover();
    return (
        <div ref={contentRef}>
            <div>
                Google: <a href="https://google.com" ref={hoverRef} className={`${hover ? 'text-red-400' : ''}`}>google.com</a>
            </div>
            <div>
                Facebook: <a href="https://facebook.com">facebook.com</a>
            </div>
        </div>
    )
}
export default SetTarget;