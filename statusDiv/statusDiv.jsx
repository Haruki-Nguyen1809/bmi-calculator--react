export default function StatusDiv({children, status, className}) {
    let cssStyleDiv = `div ${status}-div`;
    if (className) {
        cssStyleDiv += ' ' + className;
    }
    return (
        <div className={cssStyleDiv}>
            <p>{children}</p>
        </div>
    );
} 