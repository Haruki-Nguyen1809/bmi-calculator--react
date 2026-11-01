export default function AC({children, className, mode, ...props}) {
    let cssStyle = `button ${mode}-btn`;
    if (className) {
        cssStyle += ' ' + className;
    }
    return (
        <>
            <button className={cssStyle} {...props}>{children}</button>
        </>
    );
}