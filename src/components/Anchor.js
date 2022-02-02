const Anchor = ({ className, style, id, children, href }) => {
    return (
        <a href={href} id={id} className={className} style={style}>
            {children}
        </a>
    );
};
export default Anchor;